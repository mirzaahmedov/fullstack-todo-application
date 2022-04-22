import styled from "styled-components"

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
`
const Element = styled.div`
    width: 48px;
    height: 48px;
    display: block;
    margin: 15px auto;
    position: relative;
    color: #fff;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    &::after,
    &::before {
        content: "";
        box-sizing: border-box;
        position: absolute;
        width: 24px;
        height: 24px;
        top: 0;
        background-color: rgb(var(--indigo-dark));
        border-radius: 50%;
        animation: scale50 1s infinite ease-in-out;
    }
    &::before {
        top: auto;
        bottom: 0;
        background-color: #ff3d00;
        animation-delay: 0.5s;
    }

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes scale50 {
        0%,
        100% {
            transform: scale(0);
        }
        50% {
            transform: scale(1);
        }
    }
`

export default function Loader(props) {
    return <Wrap>{props.visible && <Element />}</Wrap>
}
