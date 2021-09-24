import { useRouter } from "next/router";
import { useQueryGames } from "graphql/queries/games";
import { ParsedUrlQueryInput } from "querystring";
import { KeyboardArrowDown as ArrowDown } from "@styled-icons/material-outlined/KeyboardArrowDown";

import {
    parseQueryStringToFilter,
    parseToQueryStringToWhere
} from "utils/filter";

import Base from "templates/Base";

import ExploreSidebar, { ItemProps } from "components/ExploreSidebar";
import Gamecard from "components/Gamecard";
import { Grid } from "components/Grid";

import { Main, ShowMore, ShowMoreLoading } from "./styles";
import Empty from "components/Empty";

export type GamesTemplateProps = {
    filterItems: ItemProps[];
};

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
    const { push, query } = useRouter();

    const { data, loading, fetchMore } = useQueryGames({
        variables: {
            limit: 15,
            where: parseToQueryStringToWhere({
                queryString: query,
                filterItems
            }),
            sort: query.sort as string | null
        }
    });

    const handleFilter = (items: ParsedUrlQueryInput) => {
        push({
            pathname: `/games`,
            query: items
        });

        return;
    };

    const handleShowMore = () => {
        fetchMore({ variables: { limit: 15, start: data?.games.length } });
    };

    return (
        <Base>
            <Main>
                <ExploreSidebar
                    initialValues={parseQueryStringToFilter({
                        queryString: query,
                        filterItems
                    })}
                    items={filterItems}
                    onFilter={handleFilter}
                />

                {loading ? (
                    <ShowMoreLoading
                        src="/img/dots.svg"
                        alt="Loading more games..."
                    />
                ) : (
                    <section>
                        {data?.games.length ? (
                            <>
                                <Grid>
                                    {data?.games.map((game) => (
                                        <Gamecard
                                            key={game.slug}
                                            slug={game.slug}
                                            title={game.name}
                                            developer={game.developers[0].name}
                                            img={
                                                game.cover?.url
                                                    ? `http://localhost:1337${game.cover?.url}`
                                                    : `/img/icon-512.png`
                                            }
                                            price={game.price}
                                        />
                                    ))}
                                </Grid>

                                <ShowMore
                                    role="button"
                                    onClick={handleShowMore}
                                >
                                    <p>Show more</p>
                                    <ArrowDown size={35} />
                                </ShowMore>
                            </>
                        ) : (
                            <Empty
                                title=":("
                                description="We didn't find any games with this filter"
                                hasLink
                            />
                        )}
                    </section>
                )}
            </Main>
        </Base>
    );
};

export default GamesTemplate;
