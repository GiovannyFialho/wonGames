import Link from "next/link";
import {
    AccountCircle,
    CreditCard,
    ExitToApp,
    FormatListBulleted
} from "styled-icons/material-outlined";

import { Nav, LinkItem } from "./styles";

export type ProfileMenuProps = {
    activeLink?: "/profile/me" | "/profile/cards" | "/profile/orders" | string;
};

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => (
    <Nav>
        <Link href="/profile/me" passHref>
            <LinkItem
                isActive={activeLink === "/profile/me"}
                title="My profile"
            >
                <AccountCircle size={24} />
                <span>My profile</span>
            </LinkItem>
        </Link>

        <Link href="/profile/cards" passHref>
            <LinkItem
                isActive={activeLink === "/profile/cards"}
                title="My cards"
            >
                <CreditCard size={24} />
                <span>My cards</span>
            </LinkItem>
        </Link>

        <Link href="/profile/orders" passHref>
            <LinkItem
                isActive={activeLink === "/profile/orders"}
                title="My orders"
            >
                <FormatListBulleted size={24} />
                <span>My orders</span>
            </LinkItem>
        </Link>

        <Link href="/logout" passHref>
            <LinkItem>
                <ExitToApp size={24} />
                <span>Logout</span>
            </LinkItem>
        </Link>
    </Nav>
);

export default ProfileMenu;
