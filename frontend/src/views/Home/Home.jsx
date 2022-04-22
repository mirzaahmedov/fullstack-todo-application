import React from "react"
import styled from "styled-components"
import moment from "moment"
import { Navigate } from "react-router-dom"

import { Plus, Human, Logout } from "@assets/icons"

import Dialog from "@components/Dialog"
import Alert from "@components/Alert"
import Loader from "@components/Loader"
import Form from "@components/Form"
import DatePicker from "@components/DatePicker"
import Textfield from "@components/Textfield"
import Typography from "@components/Typography"
import Todo from "@components/Todo"

import { useAccount, useSetAccount } from "@context/account.context"

import { getAllTodos, addTodo, toggleTodo, deleteTodo, updateTodo } from "@http/todos"
import { logoutUser } from "@http/user"

const Container = styled.div`
    position: relative;
    margin: auto;
    padding: 20px 0px;
    min-height: 100vh;
    max-width: 500px;
`
const Header = styled.header`
    display: flex;
    align-items: center;
    gap: 10px;
`
const LogoutButton = styled.button`
    appearance: none;
    border: none;
    background: none;
    margin-left: auto;
    padding: 1rem;
    font-size: 1.5rem;
    border-radius: 50%;
    &:hover {
        outline: 1px solid rgb(var(--gray-3-light));
    }
`
const AddButton = styled.button`
    appearance: none;
    border: none;
    outline: none;
    position: fixed;
    bottom: 2rem;
    right: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(50%);
    width: 3.5rem;
    height: 3.5rem;
    font-size: 1.2rem;
    border-radius: 50%;
    color: white;
    background: rgb(var(--indigo-dark));
    box-shadow: 0px 10px 30px rgba(var(--indigo-dark));
    cursor: pointer;
    transition: 0.5s;
    &:hover {
        transform: translateX(50%) translateY(-20px) scale(1.2);
    }
`

export default function Home() {
    const account = useAccount()
    const setAccount = useSetAccount()
    if (!account) return <Navigate to="/signin" replace />

    const [isAddDialogVisible, setIsAddDialogVisible] = React.useState(false)
    const [selectedTodo, setSelectedTodo] = React.useState(null)
    const [error, setError] = React.useState(null)
    const [isLoading, setIsLoading] = React.useState(false)
    const [todos, setTodos] = React.useState([])
    const [newTodo, setNewTodo] = React.useState({
        content: "",
        done: false,
        date: moment().add(1, "day").toISOString(),
    })

    React.useEffect(function () {
        async function updateTodos() {
            try {
                setIsLoading(true)
                const response = await getAllTodos()
                setTodos(response.data)
            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false)
            }
        }

        updateTodos()
        const timer = setInterval(updateTodos, 3000)
        return function () {
            clearInterval(timer)
        }
    }, [])

    async function handleLogout(event) {
        event.preventDefault()
        try {
            await logoutUser()
            setAccount(null)
        } catch (error) {
            setError(error)
        }
    }
    async function handleAddTodo(event) {
        event.preventDefault()
        try {
            let response = await addTodo(newTodo)
            if (!response.data.ok) return

            setIsAddDialogVisible(false)

            setTodos(function (state) {
                return [...state, response.data.record]
            })
        } catch (error) {
            setError(error)
        }
    }
    async function handleToggleTodo(event) {
        event.preventDefault()
        try {
            let response = await toggleTodo(event.target.id)
            if (response.data.modifiedCount !== 1) return

            setTodos(function (state) {
                const index = state.findIndex((todo) => todo._id === event.target.id)
                if (!~index) return

                const newState = [...state]
                newState[index] = { ...state[index], done: !state[index].done }
                return newState
            })
        } catch (error) {
            setError(error)
        }
    }
    async function handleDeleteTodo(event) {
        event.preventDefault()
        try {
            let response = await deleteTodo(event.target.id)
            if (!response.data.ok) return

            setTodos(function (state) {
                return state.filter((todo) => todo._id !== event.target.id)
            })
        } catch (error) {
            setError(error)
        }
    }
    async function handleUpdateTodo(event) {
        event.preventDefault()
        try {
            const response = await updateTodo(selectedTodo, newTodo)
            if (response.data.modifiedCount !== 1) return

            setTodos(function (state) {
                const index = state.findIndex((todo) => todo._id === selectedTodo)
                if (!~index) return

                const newState = [...state]
                newState[index] = { ...newTodo }
                return newState
            })

            setSelectedTodo(null)
        } catch (error) {
            setError(error)
        }
    }
    function setFormField(name) {
        return function (event) {
            setNewTodo((state) => ({ ...state, [name]: event.target.value }))
        }
    }
    function handleEdit(event) {
        setSelectedTodo(event.target.id)
        setNewTodo(todos.find((todo) => todo._id === event.target.id))
    }

    return (
        <Container>
            <Header>
                <Typography variant="headline2">
                    <Human />
                </Typography>
                <div>
                    <Typography>
                        {account.first_name} {account.last_name}
                    </Typography>
                    <Typography color="gray" variant="small">
                        {account.email}
                    </Typography>
                </div>
                <LogoutButton onClick={handleLogout}>
                    <Logout />
                </LogoutButton>
            </Header>
            <Loader visible={isLoading} />
            {todos.map((todo) => (
                <Todo
                    id={todo._id}
                    key={todo._id}
                    onToggle={handleToggleTodo}
                    onDelete={handleDeleteTodo}
                    onEdit={handleEdit}
                    data={todo}
                />
            ))}
            <AddButton onClick={() => setIsAddDialogVisible(true)}>
                <Plus />
            </AddButton>
            {isAddDialogVisible && (
                <Dialog
                    title="New Task"
                    onClose={() => setIsAddDialogVisible(false)}
                    onSubmit={handleAddTodo}
                >
                    <Form onSubmit={handleAddTodo}>
                        <Textfield
                            autoFocus
                            onChange={setFormField("content")}
                            value={newTodo.content}
                            label="Content"
                        />
                        <DatePicker
                            value={newTodo.date}
                            onChange={setFormField("date")}
                            label="date"
                            type="date"
                        />
                    </Form>
                </Dialog>
            )}
            {selectedTodo && (
                <Dialog
                    title="Update Task"
                    onClose={() => setSelectedTodo(null)}
                    onSubmit={handleUpdateTodo}
                >
                    <Form onSubmit={handleUpdateTodo}>
                        <Textfield
                            autoFocus
                            onChange={setFormField("content")}
                            value={newTodo.content}
                            label="Content"
                        />
                        <DatePicker
                            value={newTodo.date}
                            onChange={setFormField("date")}
                            label="date"
                            type="date"
                        />
                    </Form>
                </Dialog>
            )}
            {error && <Alert error={error} onClose={() => setError(null)} />}
        </Container>
    )
}
