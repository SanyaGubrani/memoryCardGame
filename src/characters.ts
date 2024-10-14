import uniqueId from "uniqueid";
import img1 from "./assets/characters/img1.jpg";
import img2 from "./assets/characters/img2.jpg";
import img3 from "./assets/characters/img3.jpg";
import img4 from "./assets/characters/img4.jpg";
import img5 from "./assets/characters/img5.jpg";
import img6 from "./assets/characters/img6.jpg";
import img7 from "./assets/characters/img7.jpg";
import img8 from "./assets/characters/img8.jpg";
import img9 from "./assets/characters/img9.jpg";
import img10 from "./assets/characters/img10.jpg";
import { Character } from "./types";

const characters: Character[] = [
    {
        id: uniqueId(),
        src: img1,
        clicked: false,
    },
    {
        id: uniqueId(),
        src: img2,
        clicked: false,
    },
    {
        id: uniqueId(),
        src: img3,
        clicked: false,
    },
    {
        id: uniqueId(),
        src: img4,
        clicked: false,
    },
    {
        id: uniqueId(),
        src: img5,
        clicked: false,
    },
    {
        id: uniqueId(),
        src: img6,
        clicked: false,
    },
    {
        id: uniqueId(),
        src: img7,
        clicked: false,
    },
    {
        id: uniqueId(),
        src: img8,
        clicked: false,
    },
    {
        id: uniqueId(),
        src: img9,
        clicked: false,
    },
    {
        id: uniqueId(),
        src: img10,
        clicked: false,
    },
];

export default characters;
