import styled, { css } from "styled-components"

function variants(props) {
    switch (props.variant) {
        case "headline1":
            return css`
                font-size: 3rem;
                font-weight: bold;
            `
        case "headline2":
            return css`
                font-size: 2.1rem;
                font-weight: bold;
            `
        case "headline3":
            return css`
                font-size: 1.2rem;
                font-weight: bold;
            `
        case "small":
            return css`
                font-size: 0.8rem;
            `
        default:
            return css`
                font-size: 1rem;
                font-weight: normal;
            `
    }
}
function colors(props) {
    switch (props.color) {
        case "gray":
            return css`
                color: rgb(var(--gray-light));
            `
    }
}

export default styled.p`
    ${variants}
    ${colors}
    font-family: "Inter", Roboto, sans-serif;
`
