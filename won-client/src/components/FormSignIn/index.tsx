import Link from "next/link";
import { Email, Lock } from "@styled-icons/material-outlined";

import { FormWrapper, FormLink } from "components/Form";
import TextField from "components/TextField";
import Button from "components/Button";

import { ForgotPassword } from "./styles";

const FormSignIn = () => (
    <FormWrapper>
        <form>
            <TextField
                name="email"
                placeholder="e-mail"
                type="email"
                icon={<Email />}
            />

            <TextField
                name="password"
                placeholder="password"
                type="password"
                icon={<Lock />}
            />

            <ForgotPassword href="#">Forgot your password?</ForgotPassword>

            <Button size="large" fullWidth>
                Sign in now
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

export default FormSignIn;
