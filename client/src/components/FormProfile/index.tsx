import Button from "components/Button";
import Heading from "components/Heading";
import TextField from "components/TextField";

import { Form } from "./styles";

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
                placeholder="Email"
                label="Email"
                initialValue={email}
                disabled
            />
            <TextField
                name="password"
                type="password"
                placeholder="Type your password"
                label="Password"
            />
            <TextField
                name="new_password"
                type="password"
                placeholder="Type your new password"
                label="New Password"
            />

            <Button size="large">Save</Button>
        </Form>
    </>
);

export default FormProfile;
