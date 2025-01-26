import axios from "axios"

const api = axios.create({
   baseURL: "https://api.themoviedb.org/3",
   params: {
    api_key: "07adab6d1e56df8db73b4ba98b75c4e2",
    language: "pt-BR",
    page: 1
   } 
})

export default api