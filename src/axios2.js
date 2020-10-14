import axios from "axios"

const instance2 = axios.create({
  baseURL: "http://localhost:3005",
})

//default imports can be renamed upon import
//eg. instance export can be imported as "axios" in another file
export default instance2
