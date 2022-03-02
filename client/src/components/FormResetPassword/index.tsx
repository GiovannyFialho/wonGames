import { useState } from "react";
import { signIn } from "next-auth/client";
import { useRouter } from "next/router";

import { Lock, ErrorOutline } from "@styled-icons/material-outlined";

import { FormWrapper, FormLoading, FormError } from "components/Form";
import TextField from "components/TextField";
import Button from "components/Button";

import { FieldErrors, resetValidate } from "utils/validations";

const FormResetPassword = () => {
    const routes = useRouter();
    const { push, query } = routes;

    const [values, setValues] = useState({
        password: "",
        confirm_password: ""
    });
    const [loading, setLoading] = useState(false);
    const [fieldError, setFieldError] = useState<FieldErrors>({});
    const [formError, setFormError] = useState("");

    const handleInput = (field: string, value: string) => {
        setValues((s) => ({ ...s, [field]: value }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const errors = resetValidate(values);

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
                    name="password"
                    placeholder="password"
                    type="password"
                    error={fieldError?.password}
                    onInputChange={(v) => handleInput("password", v)}
                    icon={<Lock />}
                />

                <TextField
                    name="confirm_password"
                    placeholder="confirm password"
                    type="password"
                    error={fieldError?.confirm_password}
                    onInputChange={(v) => handleInput("confirm_password", v)}
                    icon={<Lock />}
                />

                <Button type="submit" size="large" fullWidth disabled={loading}>
                    {loading ? <FormLoading /> : <span>Reset password</span>}
                </Button>
            </form>
        </FormWrapper>
    );
};

export default FormResetPassword;
