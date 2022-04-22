import styled, { css } from "styled-components"

const primary = css`
    color: white;
    background: rgb(var(--indigo-dark));
    box-shadow: 0px 0px 30px rgba(var(--indigo-dark), 0.5);
`
const secondary = css`
    color: rgb(var(--text-dark));
    background: white;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);
`
const disabled = css``
const progress = css``

export default styled.button`
    ${(props) => (props.primary ? primary : secondary)}
    appearance: none;
    border: none;
    width: 100%;
    height: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: transform 0.5s;
    &:active {
        transform: scale(1.2);
    }
`
