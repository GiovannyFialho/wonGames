import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Email, Lock } from "@styled-icons/material-outlined";
import { signIn } from "next-auth/client";

import { FormWrapper, FormLink, FormLoading } from "components/Form";
import TextField from "components/TextField";
import Button from "components/Button";

import { ForgotPassword } from "./styles";

const FormSignIn = () => {
    const [values, setValues] = useState({});
    const [loading, setLoading] = useState(false);
    const { push } = useRouter();

    const handleInput = (field: string, value: string) => {
        setValues((s) => ({ ...s, [field]: value }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        setLoading(true);

        const result = await signIn("credentials", {
            ...values,
            redirect: false,
            callbackUrl: "/"
        });

        if (result?.url) {
            return push(result.url);
        }

        setLoading(false);
    };

    return (
        <FormWrapper>
            <form onSubmit={handleSubmit}>
                <TextField
                    name="email"
                    placeholder="e-mail"
                    type="email"
                    onInputChange={(v) => handleInput("email", v)}
                    icon={<Email />}
                />

                <TextField
                    name="password"
                    placeholder="password"
                    type="password"
                    onInputChange={(v) => handleInput("password", v)}
                    icon={<Lock />}
                />

                <ForgotPassword href="#">Forgot your password?</ForgotPassword>

                <Button type="submit" size="large" fullWidth disabled={loading}>
                    {loading ? <FormLoading /> : <span>Sign in now</span>}
                </Button>

                <FormLink>
                    Don't have an account?{" "}
                    <Link href="sign-up">
                        <a>Sign Up</a>
                    </Link>
                </FormLink>
            </form>
        </FormWrapper>
    );
};

export default FormSignIn;
