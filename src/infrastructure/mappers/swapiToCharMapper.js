import { Character } from "../../domain/models/character";



    /**
     * 
     * @param {Like<Character>} swapiChar 
     * @returns 
     */

    export const swapiToCharMapper = ( swapiChar ) => {

        const { name, height, mass , gender, hair_color, skin_color } = swapiChar;

        return new Character({
            name,
            height,
            mass,
            gender,
            hairColor: hair_color,
            skinColor: skin_color,
        });
    }