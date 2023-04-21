import { useTexture } from "@react-three/drei";

export default function Floor() {

    const PATH = "/static/textures/floor/"

    const props = useTexture({

        map: PATH + "material1.jpg",
        aoMap: PATH + 'AO.jpg',
        map: PATH + 'color.jpg',
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
        displacementMap: PATH + 'height.png',
       
    })


    return (
        <mesh receiveShadow position={[-0.05, -3, 0]}  rotation-x={ - Math.PI * 0.5 }>
            <planeGeometry args={[30.2, 18.5]} />
            <meshStandardMaterial {...props} color= '#FFFFFF' />
        </mesh>
    )
}
