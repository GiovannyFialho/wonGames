import { useSession } from "next-auth/client";

import { Container } from "components/Container";
import Menu from "components/Menu";
import Footer from "components/Footer";

import { Wrapper, Content, SectionFooter } from "./styles";

export type BaseTemplateProps = {
    children: React.ReactNode;
};

const Base = ({ children }: BaseTemplateProps) => {
    const [session, loading] = useSession();

    return (
        <Wrapper>
            <Container>
                <Menu userName={session?.user?.name} loading={loading} />
            </Container>

            <Content>{children}</Content>

            <SectionFooter>
                <Container>
                    <Footer />
                </Container>
            </SectionFooter>
        </Wrapper>
    );
};

export default Base;
