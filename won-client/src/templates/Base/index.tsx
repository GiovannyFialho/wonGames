import { Container } from "components/Container";
import Menu from "components/Menu";
import Footer from "components/Footer";

import { Wrapper, Content, SectionFooter } from "./styles";

export type BaseTemplateProps = {
    children: React.ReactNode;
};

const Base = ({ children }: BaseTemplateProps) => (
    <Wrapper>
        <Container>
            <Menu />
        </Container>

        <Content>{children}</Content>

        <SectionFooter>
            <Container>
                <Footer />
            </Container>
        </SectionFooter>
    </Wrapper>
);

export default Base;
