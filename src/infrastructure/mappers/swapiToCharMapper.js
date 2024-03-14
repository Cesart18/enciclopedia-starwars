import { Character } from "../../domain/models/character";



    export const swapiToCharMapper = ( swapiChar ) => {

        const { name, height, mass , gender} = swapiChar;

        return new Character({
            name,
            height,
            mass,
            gender
        });
    }