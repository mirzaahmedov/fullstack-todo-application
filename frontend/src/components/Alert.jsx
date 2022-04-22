import React from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
import { motion } from "framer-motion"

import { Caution } from "@assets/icons"

import Modal from "@components/Modal"
import Typography from "@components/Typography"

const Header = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px;
`
const Icon = styled.h1`
    font-size: 3rem;
    color: rgb(var(--red-dark));
`
const Button = styled.button`
    appearance: none;
    border: none;
    width: 100%;
    height: 3.5rem;
    color: rgb(var(--indigo-dark));
    background: white;
    font-weight: 500;
    border-top: 1px solid rgb(var(--gray-5-light));
    transition: background 0.25s;
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

export default function Alert(props) {
    React.useEffect(function () {
        document.body.classList.add("blur")
        return function () {
            document.body.classList.remove("blur")
        }
    }, [])

    return (
        <Modal>
            <Header>
                <Icon>
                    <Caution />
                </Icon>
                <Typography variant="headline2" as="h1">
                    {props.error.message}
                </Typography>
            </Header>
            <Button onClick={props.onClose}>Ok</Button>
        </Modal>
    )
}
