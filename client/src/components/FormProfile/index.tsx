import Button from "components/Button";
import Heading from "components/Heading";
import TextField from "components/TextField";

import { Form } from "./styles";

const FormProfile = () => (
    <>
        <Heading size="small" lineColor="primary" color="black" lineBottom>
            My profile
        </Heading>

        <Form>
            <TextField
                name="Name"
                placeholder="Name"
                label="Name"
                initialValue="Giovanny"
            />
            <TextField
                name="email"
                type="email"
                placeholder="E-mail"
                label="E-mail"
                initialValue="giovannyf@outlook.com"
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
