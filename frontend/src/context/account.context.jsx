import React from "react"
import axios from "axios"

const AccountContext = React.createContext()
const SetAccountContext = React.createContext()

export default function (props) {
    const [account, setAccount] = React.useState({})

    React.useEffect(function () {
        async function getAccount() {
            try {
                const response = await axios.get("/api/users/account", {
                    withCredentials: "same-origin",
                })
                setAccount(response.data)
            } catch (error) {
                console.log(error)
                setAccount(null)
            }
        }

        getAccount()
    }, [])

    return (
        <SetAccountContext.Provider value={setAccount}>
            <AccountContext.Provider value={account}>{props.children}</AccountContext.Provider>
        </SetAccountContext.Provider>
    )
}

export const useAccount = () => React.useContext(AccountContext)
export const useSetAccount = () => React.useContext(SetAccountContext)
