// 'use client' is required because this component uses useEffect, useRef,
// useCallback, and event handlers -- all of which need a browser environment.
'use client'

import { X } from 'lucide-react'
import { useEffect, useRef, useCallback, ReactNode } from 'react'

// Props for the Modal component.
// - isOpen: controls visibility of the modal.
// - onClose: callback fired when the user dismisses the modal.
// - title: displayed in the header and used as the accessible label.
// - content: arbitrary React content rendered in the scrollable body.
interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  content: ReactNode
}

export default function Modal({ isOpen, onClose, title, content }: ModalProps) {
  // Ref to the dialog container -- used to query all focusable elements
  // inside the modal for the focus-trap logic.
  const dialogRef = useRef<HTMLDivElement>(null)

  // Ref to the close button in the header -- receives initial focus when
  // the modal opens so keyboard users have an immediate action target.
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  // Stores whichever element had focus before the modal opened so we can
  // restore focus back to it when the modal closes.
  const previouslyFocusedRef = useRef<Element | null>(null)

  // ---------- Open / close side-effects ----------
  // When the modal opens:
  //   1. Save the currently focused element for later restoration.
  //   2. Lock body scroll (overflow: hidden) to prevent background scrolling.
  //   3. Move focus to the close button.
  // When the modal closes:
  //   1. Unlock body scroll.
  //   2. Restore focus to the element that was focused before the modal opened.
  // Cleanup function always unlocks scroll in case the component unmounts
  // while the modal is still open.
  useEffect(() => {
    if (isOpen) {
      previouslyFocusedRef.current = document.activeElement
      document.body.style.overflow = 'hidden'
      closeButtonRef.current?.focus()
    } else {
      document.body.style.overflow = 'unset'
      if (previouslyFocusedRef.current instanceof HTMLElement) {
        previouslyFocusedRef.current.focus()
      }
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // ---------- Keyboard handler (WCAG 2.4.3 -- focus trap) ----------
  // Escape: closes the modal immediately.
  // Tab / Shift+Tab: traps focus within the dialog by wrapping around.
  //   - If focus is on the first focusable element and the user presses
  //     Shift+Tab, focus wraps to the last focusable element.
  //   - If focus is on the last focusable element and the user presses
  //     Tab, focus wraps to the first focusable element.
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
      return
    }

    if (e.key === 'Tab' && dialogRef.current) {
      const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      )
      const first = focusableElements[0]
      const last = focusableElements[focusableElements.length - 1]

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
  }, [onClose])

  // Attach the keydown listener while the modal is open; remove it on
  // close or unmount to avoid stale handlers.
  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, handleKeyDown])

  if (!isOpen) return null

  return (
    // Backdrop -- covers the full viewport. Clicking it closes the modal.
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      {/*
        Dialog container.
        - role="dialog" + aria-modal="true" tell assistive tech this is a
          modal dialog (WCAG 4.1.2).
        - aria-labelledby points to the title element so screen readers
          announce the modal's purpose.
        - stopPropagation prevents clicks inside the dialog from bubbling
          up to the backdrop's onClick and closing the modal.
      */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative w-full max-w-2xl bg-gray-900 border border-gray-800 rounded-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/*
          Header -- outer div creates a gradient border effect (yellow to red)
          with 1px padding; inner div fills the rest with a near-opaque
          background so the gradient shows through as a border.
        */}
        <div className="bg-gradient-to-r from-yellow-500 to-red-500 p-1">
          <div className="bg-gray-900/95 p-6 flex justify-between items-center">
            {/* Title with id so aria-labelledby can reference it */}
            <h2 id="modal-title" className="text-2xl font-bold text-white">{title}</h2>
            {/*
              Close button -- p-2 padding ensures the clickable area meets
              the minimum 24x24px target size (WCAG 2.5.8).
              The X icon is marked aria-hidden since the button already has
              an aria-label.
            */}
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:outline-none"
              aria-label="Close modal"
            >
              <X size={24} aria-hidden="true" focusable="false" />
            </button>
          </div>
        </div>

        {/* Content area -- scrollable with a max height so long content
            doesn't push the modal beyond the viewport */}
        <div className="p-6 max-h-[70vh] overflow-y-auto text-gray-300 leading-relaxed">
          {content}
        </div>

        {/* Footer -- secondary close button for convenience */}
        <div className="border-t border-gray-800 p-4 flex justify-end">
          <button
            onClick={onClose}
            className="bg-gradient-to-r from-yellow-500 to-red-500 text-white rounded-full px-6 py-2 font-medium hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:outline-none"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
