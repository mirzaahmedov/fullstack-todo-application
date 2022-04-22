import React from "react"
import styled from "styled-components"

import { Show, Hide } from "@assets/icons"

const Wrap = styled.div`
    --active: rgb(var(--indigo-dark));
    --line: rgb(var(--gray-4-light));
    --label: rgb(var(--gray-2-dark));
    &.invalid {
        --active: rgb(var(--red-dark));
    }
    position: relative;
`
const Label = styled.label`
    display: block;
    margin-bottom: 5px;
    color: var(--label);
    text-transform: capitalize;
    .invalid & {
        color: var(--active);
    }
`
const Input = styled.input`
    appearance: none;
    background: none;
    outline: none;
    display: block;
    width: 100%;
    height: 2.6rem;
    padding: 0 5px;
    border: 1px solid var(--line);
    border-radius: 5px;
    font-size: 1rem;
    color: inherit;
    &:focus {
        outline: 2px solid var(--active);
    }
`
const Button = styled.button`
    background: none;
    border: none;
    outline: none;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 2.6rem;
    height: 2.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
`
const Message = styled.span`
    font-style: italic;
`

export default function (props) {
    const [isHidden, setIsHidden] = React.useState(true)

    function handleToggle(event) {
        event.preventDefault()
        setIsHidden((state) => !state)
    }

    return (
        <Wrap className={props.error ? "invalid" : ""}>
            <Label>
                {props.label}
                <Message>{props.error && " !" + props.error}</Message>
            </Label>
            <Input {...props} type={isHidden && props.type === "password" ? "password" : "text"} />
            {props.type === "password" && (
                <Button onClick={handleToggle}>{isHidden ? <Show /> : <Hide />}</Button>
            )}
        </Wrap>
    )
}
