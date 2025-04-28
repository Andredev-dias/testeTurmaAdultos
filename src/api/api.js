import axios from "axios";

export const apiRick = axios.create({
    baseURL: "https://rickandmortyapi.com/api"
})
