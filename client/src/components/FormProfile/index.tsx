import Link from "next/link";

import Button from "components/Button";
import Heading from "components/Heading";
import TextField from "components/TextField";

import { Form, ButtonContainer } from "./styles";

export type FormProfileProps = {
    username?: string;
    email?: string;
};

const FormProfile = ({ username, email }: FormProfileProps) => (
    <>
        <Heading size="small" lineColor="primary" color="black" lineBottom>
            My profile
        </Heading>

        <Form>
            <TextField
                name="username"
                placeholder="Username"
                label="Username"
                initialValue={username}
            />
            <TextField
                name="email"
                type="email"
                placeholder="E-mail"
                label="E-mail"
                initialValue={email}
                disabled
            />

            <ButtonContainer>
                <Link href={`/forgot-password?email=${email}`} passHref>
                    <Button minimal size="medium" as="a">
                        Reset Password
                    </Button>
                </Link>
                <Button size="medium">Save</Button>
            </ButtonContainer>
        </Form>
    </>
);

export default FormProfile;
