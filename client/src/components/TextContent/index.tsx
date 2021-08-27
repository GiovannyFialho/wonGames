import Heading from "components/Heading";

import { Wrapper } from "./styles";

export type TextContentProps = {
    title?: string;
    content: string;
};

const TextContent = ({ title, content }: TextContentProps) => (
    <Wrapper>
        {!!title && (
            <Heading lineLeft lineColor="secondary">
                {title}
            </Heading>
        )}

        <div dangerouslySetInnerHTML={{ __html: content }} />
    </Wrapper>
);

export default TextContent;
