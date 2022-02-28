import { useState } from "react";
import { signIn } from "next-auth/client";
import Link from "next/link";
import { useRouter } from "next/router";

import { Email, Lock, ErrorOutline } from "@styled-icons/material-outlined";

import { FormWrapper, FormLink, FormLoading, FormError } from "components/Form";
import TextField from "components/TextField";
import Button from "components/Button";

import { FieldErrors, signInValidate } from "utils/validations";

import { ForgotPassword } from "./styles";

const FormSignIn = () => {
    const routes = useRouter();
    const { push, query } = routes;

    const [values, setValues] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [fieldError, setFieldError] = useState<FieldErrors>({});
    const [formError, setFormError] = useState("");

    const handleInput = (field: string, value: string) => {
        setValues((s) => ({ ...s, [field]: value }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const errors = signInValidate(values);

        if (Object.keys(errors).length) {
            setFieldError(errors);
            setLoading(false);

            return;
        }

        setFieldError({});
        setLoading(true);

        const result = await signIn("credentials", {
            ...values,
            redirect: false,
            callbackUrl: `${window.location.origin}${query?.callbackUrl || ""}`
        });

        if (result?.url) {
            return push(result.url);
        }

        setLoading(false);
        setFormError("Username or password is invalid");
    };

    return (
        <FormWrapper>
            {!!formError && (
                <FormError>
                    <ErrorOutline />
                    {formError}
                </FormError>
            )}
            <form onSubmit={handleSubmit}>
                <TextField
                    name="email"
                    placeholder="e-mail"
                    type="email"
                    error={fieldError?.email}
                    onInputChange={(v) => handleInput("email", v)}
                    icon={<Email />}
                />

                <TextField
                    name="password"
                    placeholder="password"
                    type="password"
                    error={fieldError?.password}
                    onInputChange={(v) => handleInput("password", v)}
                    icon={<Lock />}
                />

                <ForgotPassword href="#">Forgot your password?</ForgotPassword>

                <Button type="submit" size="large" fullWidth disabled={loading}>
                    {loading ? <FormLoading /> : <span>Sign in now</span>}
                </Button>

                <FormLink>
                    Dont have an account?{" "}
                    <Link href="sign-up">
                        <a>Sign Up</a>
                    </Link>
                </FormLink>
            </form>
        </FormWrapper>
    );
};

export default FormSignIn;
