import React from "react"
import styled from "styled-components"
import moment from "moment"
import { motion } from "framer-motion"

import { Trash, Edit } from "@assets/icons"

import Typography from "@components/Typography"
import Checkbox from "./Checkbox"

const Container = styled(motion.div)`
    display: flex;
    align-items: center;
    padding: 20px;
    gap: 20px;
    border-bottom: 1px solid rgba(var(--indigo-dark), 0.2);
`
const Details = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 5px;
`
const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`
const Button = styled.button`
    visibility: hidden;
    appearance: none;
    background: none;
    border: none;
    padding: 1rem;
    border-radius: 50%;
    font-size: 1.5rem;
    color: rgb(var(--gray-dark));
    ${Container}:hover & {
        visibility: visible;
    }
    &:hover {
        outline: 1px solid rgb(var(--gray-4-light));
    }
    &:active {
        color: white;
        background: rgb(var(--indigo-dark));
    }
`

const animation = {
    initial: {
        x: "-100%",
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
    },
    exit: {
        y: 100,
    },
}

export default function Todo(props) {
    return (
        <Container
            initial={animation.initial}
            animate={animation.animate}
            exit={animation.exit}
            layoutId={props.id}
        >
            <Checkbox id={props.id} value={props.data.done} onChange={props.onToggle} />
            <Details>
                <Typography as="h3" variant="headline3">
                    {props.data.content}
                </Typography>
                <Typography color="gray">{moment(props.data.date).fromNow()}</Typography>
            </Details>
            <Actions>
                <Button id={props.id} onClick={props.onEdit}>
                    <Edit />
                </Button>
                <Button id={props.id} onClick={props.onDelete}>
                    <Trash />
                </Button>
            </Actions>
        </Container>
    )
}
