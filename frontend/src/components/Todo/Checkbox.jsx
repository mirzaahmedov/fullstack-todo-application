import React from "react"
import styled from "styled-components"

const Label = styled.label`
    cursor: pointer;
`
const Input = styled.input`
    display: none;
`
const Checkmark = styled.span`
    width: 1.5rem;
    height: 1.5rem;
    border: 2px solid rgb(var(--indigo-dark));
    display: inline-block;
    border-radius: 3px;
    background: rgb(var(--indigo-dark))
        url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/White_check.svg/1200px-White_check.svg.png)
        center/1250% no-repeat;
    transition: background-size 0.2s ease;
    ${Input}:checked + & {
        background-size: 60%;
        transition: background-size 0.25s cubic-bezier(0.7, 0, 0.18, 1.24);
    }
`

export default function (props) {
    return (
        <Label>
            <Input
                checked={props.value}
                onChange={props.onChange}
                type="checkbox"
                id={props.id}
            />
            <Checkmark />
        </Label>
    )
}
