import axios from "axios"

export function getAllTodos() {
    return axios.get("/api/todos", {
        withCredentials: "same-origin",
    })
}
export function deleteTodo(id) {
    return axios.delete("/api/todos?id=" + id, {
        withCredentials: "same-origin",
    })
}
export function updateTodo(id, payload) {
    return axios.patch("/api/todos?id=" + id, payload, {
        withCredentials: "same-origin",
    })
}
export function addTodo(payload) {
    return axios.post("/api/todos", payload, {
        withCredentials: "same-origin",
    })
}
export function toggleTodo(id) {
    return axios.get("/api/todos/toggle?id=" + id, {
        withCredentials: "same-origin",
    })
}
