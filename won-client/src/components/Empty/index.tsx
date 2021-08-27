import Link from "next/link";

import Button from "components/Button";

import { Wrapper, Image, Title, Description } from "./styles";

export type EmptyProps = {
    title: string;
    description: string;
    hasLink?: boolean;
};

const Empty = ({ title, description, hasLink }: EmptyProps) => (
    <Wrapper>
        <Image
            src="/img/empty.svg"
            role="image"
            alt="A game in a couch playing videogame"
        />

        <Title>{title}</Title>

        <Description>{description}</Description>

        {hasLink && (
            <Link href="/" passHref>
                <Button as="a">Go back to store</Button>
            </Link>
        )}
    </Wrapper>
);

export default Empty;
