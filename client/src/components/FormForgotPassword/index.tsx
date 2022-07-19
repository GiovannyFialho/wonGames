import { useState } from "react";
import { useRouter } from "next/router";

import {
    Email,
    ErrorOutline,
    CheckCircleOutline
} from "@styled-icons/material-outlined";

import {
    FormWrapper,
    FormLoading,
    FormError,
    FormSuccess
} from "components/Form";
import TextField from "components/TextField";
import Button from "components/Button";

import { FieldErrors, forgotValidate } from "utils/validations";

const FormForgotPassword = () => {
    const { query } = useRouter();

    const [values, setValues] = useState({
        email: (query.email as string) || ""
    });
    const [loading, setLoading] = useState(false);
    const [fieldError, setFieldError] = useState<FieldErrors>({});
    const [formError, setFormError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleInput = (field: string, value: string) => {
        setValues((s) => ({ ...s, [field]: value }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);

        const errors = forgotValidate(values);

        if (Object.keys(errors).length) {
            setFieldError(errors);
            setLoading(false);

            return;
        }

        setFieldError({});

        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values)
            }
        );

        const data = await response.json();
        setLoading(false);

        if (data.error) {
            setFormError(data.message[0].messages[0].message);
        } else {
            setFormError("");
            setSuccess(true);
        }
    };

    return (
        <FormWrapper>
            {success ? (
                <FormSuccess>
                    <CheckCircleOutline />
                    You just received an email!
                </FormSuccess>
            ) : (
                <>
                    {!!formError && (
                        <FormError>
                            <ErrorOutline />
                            {formError}
                        </FormError>
                    )}
                    <form onSubmit={handleSubmit}>
                        <TextField
                            name="email"
                            placeholder="email"
                            type="text"
                            error={fieldError?.email}
                            initialValue={query.email as string}
                            onInputChange={(v) => handleInput("email", v)}
                            icon={<Email />}
                        />

                        <Button
                            type="submit"
                            size="large"
                            fullWidth
                            disabled={loading}
                        >
                            {loading ? (
                                <FormLoading />
                            ) : (
                                <span>Send email</span>
                            )}
                        </Button>
                    </form>
                </>
            )}
        </FormWrapper>
    );
};

export default FormForgotPassword;