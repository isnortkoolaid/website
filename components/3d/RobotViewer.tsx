// 'use client' is required because this component uses R3F hooks (useRef,
// useFrame, useGLTF) and the <Canvas> element, which depend on browser APIs.
'use client'

import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Center, Environment, ContactShadows } from '@react-three/drei'
import type { Object3D } from 'three'

/**
 * RobotModel -- inner scene component that loads the GLTF robot.
 * Preserves the original GLTF materials -- the <Environment> in the parent
 * Canvas provides an env map so metallic parts reflect realistically.
 * Must live inside <Canvas> so R3F hooks have access to the fiber context.
 */
function RobotModel() {
  // Pass true for useMeshopt (3rd arg) so drei registers the MeshoptDecoder
  // before parsing the meshopt-compressed buffer views in output.gltf.
  const { scene } = useGLTF('/assets/output.gltf', false, true)
  // spinRef drives the Y-axis turntable rotation independently from the
  // static orientation correction on the outer group.
  const spinRef = useRef<Object3D>(null)

  // Slow turntable spin, frame-rate-independent via delta.
  useFrame((_, delta) => {
    if (!spinRef.current) return
    spinRef.current.rotation.y += delta * 0.25
  })

  // Center auto-centers the model. spinRef handles Y-axis turntable rotation.
  // Exported with +Y up so no orientation correction needed.
  // scale={0.7} shrinks the model to fit the hero section without overwhelming it.
  return (
    <Center>
      <group ref={spinRef} scale={0.7}>
        <primitive object={scene} />
      </group>
    </Center>
  )
}

// Preload so the model starts fetching as soon as the module is imported,
// before the component first mounts.
useGLTF.preload('/assets/output.gltf')

/**
 * RobotViewer -- self-contained R3F canvas that renders the FTC robot model
 * with cinematic lighting and realistic reflections. Designed to be dropped
 * into any layout (e.g. hero section right side).
 *
 * Sizing is controlled by the parent container -- this component fills 100%
 * width and height of whatever wraps it.
 */
export default function RobotViewer() {
  return (
    <Canvas
      // Fill the parent container -- sizing is handled by the caller.
      style={{ width: '100%', height: '100%' }}
      // Camera low and slightly angled up for a dramatic hero perspective.
      camera={{ position: [0, 1.5, 4], fov: 35 }}
      // Decorative canvas -- screen readers should skip it. WCAG 1.1.1.
      aria-hidden="true"
    >
      {/* City environment map -- moody urban reflections give the metal
          surfaces a dramatic, cinematic look with warm/cool contrast.
          background={false} hides the env image itself so only the
          black page background shows through. */}
      <Environment preset="city" background={false} />

      {/* Cinematic three-point lighting:
          - Key light: warm, strong, top-right -- primary illumination
          - Fill light: cool blue, softer, opposite side -- prevents
            crushed shadows and adds color contrast
          - Rim/back light: bright, behind the model -- creates edge
            definition that separates the robot from the dark background */}
      <hemisphereLight intensity={0.3} groundColor="#0a0a0a" />
      <directionalLight position={[5, 8, 4]} intensity={1.5} color="#fff0d4" />
      <directionalLight position={[-4, 3, -3]} intensity={0.6} color="#8ab4f8" />
      <directionalLight position={[0, 4, -6]} intensity={0.8} color="#ffffff" />

      {/* ContactShadows disabled to reduce GPU load -- the model has
          148 draw calls which is already heavy for a hero component. */}

      {/* Suspense boundary -- useGLTF suspends while fetching the model.
          fallback={null} renders the lit empty scene until the model loads. */}
      <Suspense fallback={null}>
        <RobotModel />
      </Suspense>
    </Canvas>
  )
}
