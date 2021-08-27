import Link from "next/link";
import { AccountCircle, Email, Lock } from "@styled-icons/material-outlined";

import { FormWrapper, FormLink } from "components/Form";
import TextField from "components/TextField";
import Button from "components/Button";

const FormSignUp = () => (
    <FormWrapper>
        <form>
            <TextField
                name="name"
                placeholder="name"
                type="text"
                icon={<AccountCircle />}
            />

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

            <TextField
                name="confirmPassword"
                placeholder="confirm password"
                type="password"
                icon={<Lock />}
            />

            <Button size="large" fullWidth>
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

export default FormSignUp;
