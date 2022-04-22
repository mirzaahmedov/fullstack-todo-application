import React from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
import { motion } from "framer-motion"

const Container = styled(motion.div)`
    position: fixed;
    left: 50%;
    top: 50%;
    max-width: 400px;
    transform: translate(-50%, -50%);
    background: white;
    border-radius: 5px;
    box-shadow: 0px 0px 30px rgba(var(--gray-6-dark), 0.2);
    overflow: hidden;
`

const animation = {
    initial: {
        x: "-50%",
        y: "-50%",
        opacity: 0,
        scale: 0.5,
    },
    animate: {
        x: "-50%",
        y: "-50%",
        opacity: 1,
        scale: 1,
    },
}

export default function Modal(props) {
    React.useEffect(function () {
        document.body.classList.add("blur")
        return function () {
            document.body.classList.remove("blur")
        }
    }, [])

    return ReactDOM.createPortal(
        <Container initial={animation.initial} animate={animation.animate}>
            {props.children}
        </Container>,
        document.getElementById("modals")
    )
}
