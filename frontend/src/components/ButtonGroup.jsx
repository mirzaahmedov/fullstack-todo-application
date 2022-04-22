import React from "react"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export default function ButtonGroup(props) {
    return <Container>{props.children}</Container>
}
