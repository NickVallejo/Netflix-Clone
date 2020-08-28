import axios from "axios"

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

//default imports can be renamed upon import
//eg. instance export can be imported as "axios" in another file
export default instance;