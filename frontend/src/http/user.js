import axios from "axios"

export function registerUser(payload) {
    return axios.post("/api/users/register", payload, {
        withCredentials: "same-origin",
    })
}
export function loginUser(payload) {
    return axios.post("/api/users/login", payload, {
        withCredentials: "same-origin",
    })
}
export function logoutUser() {
    return axios.get("/api/users/logout", {
        withCredentials: "same-origin",
    })
}
