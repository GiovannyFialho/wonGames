import { GetServerSidePropsContext } from "next";

import protectedRoutes from "utils/protected-routes";
import { initializeApollo } from "utils/apollo";

import {
    QueryProfileMe,
    QueryProfileMeVariables
} from "graphql/generated/QueryProfileMe";
import { QUERY_PROFILE } from "graphql/queries/profile";

import FormProfile, { FormProfileProps } from "components/FormProfile";
import Profile from "templates/Profile";

export default function Me(props: FormProfileProps) {
    return (
        <Profile>
            <FormProfile {...props} />
        </Profile>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await protectedRoutes(context);
    const apolloClient = initializeApollo(null, session);

    const { data } = await apolloClient.query<
        QueryProfileMe,
        QueryProfileMeVariables
    >({
        query: QUERY_PROFILE,
        variables: {
            identifier: session?.id as string
        }
    });

    return {
        props: {
            session,
            username: data.user?.username,
            email: data.user?.email
        }
    };
}
