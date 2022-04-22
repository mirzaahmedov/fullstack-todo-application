import React from "react"
import axios from "axios"
import styled from "styled-components"
import { Link } from "react-router-dom"

import { useSetAccount } from "@context/account.context"
import useForm from "./form.hook"

import { Google } from "@assets/icons"

import Alert from "@components/Alert"
import Form from "@components/Form"
import Typography from "@components/Typography"
import Textfield from "@components/Textfield"
import ButtonGroup from "@components/ButtonGroup"
import Button from "@components/Button"

const Container = styled.div`
    width: 100%;
    max-width: 400px;
    margin: 40px auto;
    padding: 20px;
`

export default function Signup() {
    const controller = React.useRef(new AbortController())

    const [error, setError] = React.useState(null)

    const [form, setForm, errors] = useForm()
    const setAccount = useSetAccount()

    React.useEffect(function () {
        return function () {
            controller.current.abort()
        }
    }, [])

    async function handleRegister(event) {
        event.preventDefault()
        try {
            const response = await axios.post("/api/users/register", form, {
                withCredentials: "same-origin",
                signal: controller.current.signal,
            })
            setAccount(response.data)
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
            <Form onSubmit={handleRegister}>
                <Typography variant="headline1" as="h1">
                    Sign up
                </Typography>
                <Textfield
                    type="text"
                    label="First name"
                    onChange={setFormField("first_name")}
                    value={form.first_name}
                    error={errors.first_name}
                />
                <Textfield
                    type="text"
                    label="Last name"
                    onChange={setFormField("last_name")}
                    value={form.last_name}
                    error={errors.last_name}
                />
                <Textfield
                    type="text"
                    label="Email"
                    onChange={setFormField("email")}
                    value={form.email}
                    error={errors.email}
                />
                <Textfield
                    type="password"
                    label="Password"
                    onChange={setFormField("password")}
                    value={form.password}
                    error={errors.password}
                />
                <Typography color="gray">
                    Already have an account <Link to="/signin">Sign in</Link>
                </Typography>
                <ButtonGroup>
                    <Button primary onClick={handleRegister}>
                        Continue
                    </Button>
                    <Button>
                        <Google />
                        Continue with Google
                    </Button>
                </ButtonGroup>
            </Form>
        </Container>
    )
}
