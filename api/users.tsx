import axios from "axios"

export async function register(data: any) {
    try {
        console.log(data)
        const res = await axios.post("users/register", data)
        console.log(res)
        return res
    } catch (error) {
        console.log(error)
        throw error
    }
}

export async function login(data: any) {
    try {
        console.log(data)
        const res = await axios.post("users/login", data)
        console.log(res.data)
        return res
    }
    catch (error) {
        console.log(error)
        throw error
    }
}
