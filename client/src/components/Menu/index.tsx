import { useState } from "react";
import Link from "next/link";

import { Menu2 as MenuIcon } from "@styled-icons/remix-line/Menu2";
import { Search as SearchIcon } from "@styled-icons/heroicons-outline/Search";
import { Close as CloseIcon } from "@styled-icons/evaicons-solid/Close";

import Logo from "components/Logo";
import MediaMatch from "components/MediaMatch";

import {
    Wrapper,
    IconWrapper,
    LogoWrapper,
    MenuGroup,
    MenuFull,
    MenuNav,
    MenuLink,
    RegisterBox,
    CreateAccount
} from "./styles";
import Button from "components/Button";
import CartDropdown from "components/CartDropdown";
import CartIcon from "components/CartIcon";
import UserDropdown from "components/UserDropdown";

export type MenuProps = {
    userName?: string | null;
    loading?: boolean;
};

const Menu = ({ userName, loading }: MenuProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Wrapper>
            <MediaMatch lessThan="medium">
                <IconWrapper>
                    <MenuIcon
                        aria-label="Open menu"
                        onClick={() => setIsOpen(true)}
                    />
                </IconWrapper>
            </MediaMatch>

            <LogoWrapper>
                <Link href="/" passHref>
                    <a>
                        <Logo hideOnMobile />
                    </a>
                </Link>
            </LogoWrapper>

            <MediaMatch greaterThan="medium">
                <MenuNav>
                    <Link href="/" passHref>
                        <MenuLink>Home</MenuLink>
                    </Link>
                    <Link href="/games" passHref>
                        <MenuLink>Explorer</MenuLink>
                    </Link>
                </MenuNav>
            </MediaMatch>

            {!loading && (
                <>
                    <MenuGroup>
                        <IconWrapper>
                            <SearchIcon aria-label="Search" />
                        </IconWrapper>
                        <IconWrapper>
                            <MediaMatch greaterThan="medium">
                                <CartDropdown />
                            </MediaMatch>

                            <MediaMatch lessThan="medium">
                                <Link href="/cart">
                                    <a>
                                        <CartIcon />
                                    </a>
                                </Link>
                            </MediaMatch>
                        </IconWrapper>
                        <MediaMatch greaterThan="medium">
                            {!userName ? (
                                <Link href="/sign-in" passHref>
                                    <Button as="a">Sign In</Button>
                                </Link>
                            ) : (
                                <UserDropdown username={userName} />
                            )}
                        </MediaMatch>
                    </MenuGroup>

                    <MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
                        <CloseIcon
                            aria-label="Close Menu"
                            onClick={() => setIsOpen(false)}
                        />
                        <MenuNav>
                            <Link href="/" passHref>
                                <MenuLink>Home</MenuLink>
                            </Link>
                            <Link href="/games" passHref>
                                <MenuLink>Explorer</MenuLink>
                            </Link>
                            {!!userName && (
                                <>
                                    <Link href="/profile/me" passHref>
                                        <MenuLink>My profile</MenuLink>
                                    </Link>
                                    <Link href="/wishlist" passHref>
                                        <MenuLink>Wishlist</MenuLink>
                                    </Link>
                                </>
                            )}
                        </MenuNav>
                        {!userName && (
                            <RegisterBox>
                                <Link href="/sign-in" passHref>
                                    <Button fullWidth size="large" as="a">
                                        Sign In
                                    </Button>
                                </Link>
                                <span>or</span>
                                <Link href="/sign-up" passHref>
                                    <CreateAccount href="#" title="Sign Up">
                                        Sign Up
                                    </CreateAccount>
                                </Link>
                            </RegisterBox>
                        )}
                    </MenuFull>
                </>
            )}
        </Wrapper>
    );
};

export default Menu;
