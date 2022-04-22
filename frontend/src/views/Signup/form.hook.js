import React from "react"
import validator from "validator"

const initialForm = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
}
const schema = {
    email: [{ func: validator.isEmail, msg: "Invalid email" }],
    password: [{ func: validator.isStrongPassword, msg: "Weak Password" }],
}

export default function useForm() {
    const [form, setForm] = React.useState(initialForm)
    const [errors, setErrors] = React.useState({})

    React.useEffect(
        function () {
            const tempErrors = {}
            for (const key of Object.keys(schema)) {
                if (!form[key]) continue
                for (const constraint of schema[key]) {
                    if (constraint.func(form[key])) continue
                    tempErrors[key] = constraint.msg
                }
            }
            setErrors(tempErrors)
        },
        [form]
    )

    return [form, setForm, errors]
}
