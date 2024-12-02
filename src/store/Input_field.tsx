import { atom } from "jotai";

interface Text {
    first_name : string;
    last_name : string;
    email : string;
    password : string;
    confirm_password : string;
}

export const value = atom<Text>({
    first_name : "",
    last_name : "",
    email : "",
    password : "",
    confirm_password : ""
})
