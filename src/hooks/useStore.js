import create from "zustand";
import { nanoid } from "nanoid";

const getLocalStorage = (key) => {
    return JSON.parse(window.localStorage.getItem(key));
};

const setLocalStorage = (key, data) => {
    window.localStorage.setItem(key, JSON.stringify(data));
};

export const useStore = create((set) => ({
    texture: "dirt",
    cubes: getLocalStorage('cubes') || [],
    addCube: (x, y, z) => {
        set((prev) => ({
            cubes: [
                ...prev.cubes,
                { key: nanoid(), pos: [x, y, z], texture: prev.texture }
            ]
        }))
    },
    removeCube: (x, y, z) => {
        set((prev) => ({
            cubes: prev.cubes.filter(cube => {
                const [x, y, z] = cube.pos;
                return x != x || y != y || z != z
            })
        }))
    },
    setTexture: (texture) => {
        set(() => ({
            texture
        }))
    },
    saveWorld: () => {
        set((prev) => {
            setLocalStorage('cubes', prev.cubes)
        })
     },
    resetWorld: () => {
        set(() => ({
            cubes: []   
        }))
    },
}))