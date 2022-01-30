import { signOut } from "next-auth/client";
import Link from "next/link";
import { ChevronDown } from "@styled-icons/boxicons-solid";
import {
    AccountCircle,
    ExitToApp,
    FavoriteBorder
} from "@styled-icons/material-outlined";

import Dropdown from "components/Dropdown";

import { Nav, Username, LinkItem } from "./styles";

export type UserDropdownProps = {
    username: string;
};

const UserDropdown = ({ username }: UserDropdownProps) => (
    <Dropdown
        title={
            <>
                <AccountCircle size={24} />
                <Username>{username}</Username>
                <ChevronDown size={24} />
            </>
        }
    >
        <Nav>
            <Link href="/profile/me" passHref>
                <LinkItem title="My profile">
                    <AccountCircle />
                    <span>My profile</span>
                </LinkItem>
            </Link>

            <Link href="/wishlist" passHref>
                <LinkItem title="Wishlist">
                    <FavoriteBorder />
                    <span>Wishlist</span>
                </LinkItem>
            </Link>

            <LinkItem role="button" onClick={() => signOut()} title="Sign out">
                <ExitToApp />
                <span>Sign out</span>
            </LinkItem>
        </Nav>
    </Dropdown>
);

export default UserDropdown;
