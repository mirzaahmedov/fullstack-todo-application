import moment from "moment"
import React from "react"
import styled from "styled-components"

const Wrap = styled.div`
    --active: rgb(var(--indigo-dark));
    --line: rgb(var(--gray-4-light));
    --label: rgb(var(--gray-2-dark));
    display: block;
    width: 100%;
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
    border: none;
    background: none;
    width: 100%;
    height: 2.6rem;
    padding: 0 1rem;
    border: 1px solid var(--line);
    border-radius: 5px;
    font-size: 1rem;
    font-family: inherit;
    &:focus {
        outline: 2px solid var(--active);
    }
`

export default function DatePicker(props) {
    function handleChange(event) {
        event.preventDefault()
        props.onChange({ target: { value: moment(event.target.value).toISOString() } })
    }
    return (
        <Wrap>
            <Label>{props.label}</Label>
            <Input
                {...props}
                value={moment(props.value).format("YYYY-MM-DD")}
                onChange={handleChange}
            />
        </Wrap>
    )
}
