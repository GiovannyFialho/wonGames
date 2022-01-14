import { useState } from "react";
import Link from "next/link";
import { useMutation } from "@apollo/client";
import { AccountCircle, Email, Lock } from "@styled-icons/material-outlined";

import { UsersPermissionsRegisterInput } from "graphql/generated/globalTypes";
import { MUTATION_REGISTER } from "graphql/mutations/register";

import { FormWrapper, FormLink } from "components/Form";
import TextField from "components/TextField";
import Button from "components/Button";

const FormSignUp = () => {
    const [values, setValues] = useState<UsersPermissionsRegisterInput>({
        username: "",
        email: "",
        password: ""
    });

    const [createUser] = useMutation(MUTATION_REGISTER);

    const handleInput = (field: string, value: string) => {
        setValues((s) => ({ ...s, [field]: value }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        createUser({
            variables: {
                input: {
                    username: values.username,
                    email: values.email,
                    password: values.password
                }
            }
        });
    };

    return (
        <FormWrapper>
            <form onSubmit={handleSubmit}>
                <TextField
                    name="username"
                    placeholder="Username"
                    type="text"
                    onInputChange={(v) => handleInput("username", v)}
                    icon={<AccountCircle />}
                />

                <TextField
                    name="email"
                    placeholder="e-mail"
                    type="email"
                    onInputChange={(v) => handleInput("identifier", v)}
                    icon={<Email />}
                />

                <TextField
                    name="password"
                    placeholder="password"
                    type="password"
                    onInputChange={(v) => handleInput("password", v)}
                    icon={<Lock />}
                />

                <TextField
                    name="confirmPassword"
                    placeholder="confirm password"
                    type="password"
                    onInputChange={(v) => handleInput("confirmPassword", v)}
                    icon={<Lock />}
                />

                <Button type="submit" size="large" fullWidth>
                    Sign up now
                </Button>

                <FormLink>
                    Already have an account?{" "}
                    <Link href="sign-in">
                        <a>Sign In</a>
                    </Link>
                </FormLink>
            </form>
        </FormWrapper>
    );
};

export default FormSignUp;
