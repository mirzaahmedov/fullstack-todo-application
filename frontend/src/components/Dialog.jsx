import React from "react"
import styled from "styled-components"

import Modal from "@components/Modal"
import Typography from "@components/Typography"

const Header = styled.div`
    padding: 20px;
`
const Main = styled.div`
    padding: 20px;
`
const Button = styled.button`
    appearance: none;
    border: none;
    width: 50%;
    height: 3.5rem;
    color: rgb(var(--indigo-dark));
    background: white;
    font-weight: 500;
    border-top: 1px solid rgb(var(--gray-5-light));
    transition: 0.25s;
    &:hover {
        color: rgb(var(--gray-4-dark));
        background: rgb(var(--gray-6-light));
    }
    &:active {
        background: rgb(var(--gray-5-light));
    }
    & + & {
        border-left: 1px solid rgb(var(--gray-5-light));
    }
`

export default function Dialog(props) {
    return (
        <Modal>
            <Header>
                <Typography as="h1" variant="headline3">
                    {props.title}
                </Typography>
            </Header>
            <Main>{props.children}</Main>
            <Button onClick={props.onClose}>Cancel</Button>
            <Button onClick={props.onSubmit}>Save</Button>
        </Modal>
    )
}
