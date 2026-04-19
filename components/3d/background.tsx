// 'use client' is required because this component uses React hooks (useRef,
// useLoader, useFrame) and the @react-three/fiber <Canvas>, which depend on
// browser APIs and client-side React rendering.
'use client'
import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
// useGLTF is used over raw GLTFLoader because drei handles the MeshoptDecoder
// automatically when useMeshopt=true (third arg), which the output.gltf
// requires (EXT_meshopt_compression extension).
import { useGLTF, Center } from '@react-three/drei'
import type { Object3D } from 'three'

/**
 * Model -- inner scene component.
 * Must live inside <Canvas> so R3F hooks have access to the fiber context.
 * useGLTF suspends during fetch; wrap the caller in <Suspense>.
 */
function Model() {
  // Pass true for useMeshopt (3rd arg) so drei registers the MeshoptDecoder
  // before parsing the meshopt-compressed buffer views in output.gltf.
  const { scene } = useGLTF('/assets/output.gltf', false, true)
  // spinRef drives only the Y rotation so useFrame never touches the
  // orientation group -- the two concerns are fully separated.
  const spinRef = useRef<Object3D>(null)

  // Turntable spin around world Y axis, frame-rate-independent.
  useFrame((_, delta) => {
    if (!spinRef.current) return
    spinRef.current.rotation.y += delta * 0.25
  })

  // Two-layer transform:
  //   1. Outer <group> corrects the Z-up Blender export to Three.js Y-up
  //      and tilts the model forward slightly so the face is visible from
  //      the slightly-elevated camera (record-player perspective).
  //   2. Inner spinRef group is mutated by useFrame; it only ever has
  //      rotation.y set so the axis stays clean world-Y throughout.
  return (
    <Center>
      {/* orientation fix: -PI/2 stands the model up, +0.35 rad tilts face toward viewer */}
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group ref={spinRef}>
          <primitive object={scene} />
        </group>
      </group>
    </Center>
  )
}

// Preload so the model starts fetching as soon as the module is imported,
// not only when the component first mounts.
useGLTF.preload('/assets/output.gltf')

export default function Background() {
  return (
    <Canvas
      // Fill the parent container absolutely -- sizing/positioning is handled
      // by the hero section wrapper in page.tsx, not here.
      style={{ width: '100%', height: '100%' }}
      // Camera elevated and angled down to give a record-player perspective --
      // the viewer sees the face of the disc at an angle, not edge-on.
      camera={{ position: [0, 2.5, 4], fov: 40 }}
      // Decorative canvas -- screen readers should skip it. WCAG 1.1.1.
      aria-hidden="true"
    >
      {/* Three-point lighting for natural depth without harsh contrast. */}
      <hemisphereLight intensity={0.6} groundColor="#0a0a0a" />
      <directionalLight position={[6, 8, 4]} intensity={1.4} color="#fff3dd" />
      <directionalLight position={[-5, 3, -4]} intensity={0.5} color="#a9c0ff" />
      {/* Suspense boundary -- required because useGLTF suspends while fetching.
          fallback={null} renders the lit empty scene until the model arrives. */}
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  )
}