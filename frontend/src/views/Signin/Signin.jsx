import React from "react"
import styled from "styled-components"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

import { Google } from "@assets/icons"

import Alert from "@components/Alert"
import Form from "@components/Form"
import Typography from "@components/Typography"
import Textfield from "@components/Textfield"
import ButtonGroup from "@components/ButtonGroup"
import Button from "@components/Button"

import { useSetAccount } from "@context/account.context"

const Container = styled.div`
    width: 100%;
    max-width: 400px;
    margin: 40px auto;
    padding: 20px;
`

export default function Signin() {
    const controller = React.useRef(new AbortController())

    const [error, setError] = React.useState(null)
    const [form, setForm] = React.useState({
        email: "",
        password: "",
    })

    const navigate = useNavigate()
    const setAccount = useSetAccount()

    async function handleLogin(event) {
        event.preventDefault()
        try {
            const response = await axios.post("/api/users/login", form, {
                withCredentials: "same-origin",
                signal: controller.current.signal,
            })
            setAccount(response.data)
            navigate("/")
        } catch (error) {
            setError(error)
        }
    }
    function setFormField(name) {
        return function (event) {
            setForm((state) => ({ ...state, [name]: event.target.value }))
        }
    }

    return (
        <Container>
            {error && <Alert error={error} onClose={() => setError(null)} />}
            <Form onSubmit={handleLogin}>
                <Typography variant="headline1" as="h1">
                    Sign in
                </Typography>
                <Textfield
                    autoFocus
                    type="text"
                    label="Email"
                    value={form.email}
                    onChange={setFormField("email")}
                />
                <Textfield
                    type="password"
                    label="Password"
                    value={form.password}
                    onChange={setFormField("password")}
                />
                <Typography color="gray">
                    Don't have an account <Link to="/signup">Sign up</Link>
                </Typography>
                <ButtonGroup>
                    <Button primary onClick={handleLogin}>
                        Continue
                    </Button>
                    <Button type="submit">
                        <Google /> Continue with Google
                    </Button>
                </ButtonGroup>
            </Form>
        </Container>
    )
}
