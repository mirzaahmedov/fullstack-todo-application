import React from "react"
import styled from "styled-components"

import { useAccount } from "@context/account.context"

const Container = styled.header``
const User = styled.h2`
    font-size: 1rem;
`
const Email = styled.p`
    font-size: 0.8rem;
`

export default function Header() {
    const account = useAccount()
    return (
        <Container>
            {account && (
                <>
                    <User>
                        {account.first_name} {account.last_name}
                    </User>
                    <Email>{account.email}</Email>
                </>
            )}
        </Container>
    )
}
