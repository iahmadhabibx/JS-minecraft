import { useBox } from "@react-three/cannon";

const Cube = ({ key, position, texture }) => {
    const [ref] = useBox(() => ({
        type: "Static",
        position
    }))
    return (
        <mesh ref={ref}>
            <boxBufferGeometry attach="geometry" />
            <meshStandardMaterial attach="material" color={"hotpink"} />
        </mesh>
    )
};
export default Cube;