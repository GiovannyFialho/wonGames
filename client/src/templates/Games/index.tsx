import { useQueryGames } from "graphql/queries/games";

import Base from "templates/Base";
import ExploreSidebar, { ItemProps } from "components/ExploreSidebar";
import Gamecard, { GamecardProps } from "components/Gamecard";
import { Grid } from "components/Grid";

import { Main, ShowMore, ShowMoreLoading } from "./styles";
import { KeyboardArrowDown as ArrowDown } from "@styled-icons/material-outlined/KeyboardArrowDown";

export type GamesTemplateProps = {
    games?: GamecardProps[];
    filterItems: ItemProps[];
};

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
    const { data, loading, fetchMore } = useQueryGames({
        variables: { limit: 15 }
    });

    const handleFilter = () => {
        return;
    };

    const handleShowMore = () => {
        fetchMore({ variables: { limit: 15, start: data?.games.length } });
    };

    return (
        <Base>
            <Main>
                <ExploreSidebar items={filterItems} onFilter={handleFilter} />

                {loading ? (
                    <ShowMoreLoading
                        src="/img/dots.svg"
                        alt="Loading more games..."
                    />
                ) : (
                    <section>
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

                        <ShowMore role="button" onClick={handleShowMore}>
                            <p>Show more</p>
                            <ArrowDown size={35} />
                        </ShowMore>
                    </section>
                )}
            </Main>
        </Base>
    );
};

export default GamesTemplate;
