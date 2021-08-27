import Base from "templates/Base";
import ExploreSidebar, { ItemProps } from "components/ExploreSidebar";
import Gamecard, { GamecardProps } from "components/Gamecard";
import { Grid } from "components/Grid";

import { Main, ShowMore } from "./styles";
import { ArrowDown } from "styled-icons/bootstrap";

export type GamesTemplateProps = {
    games?: GamecardProps[];
    filterItems: ItemProps[];
};

const GamesTemplate = ({ games = [], filterItems }: GamesTemplateProps) => {
    const handleFilter = () => {
        return;
    };

    const handleShowMore = () => {
        return;
    };

    return (
        <Base>
            <Main>
                <ExploreSidebar items={filterItems} onFilter={handleFilter} />

                <section>
                    <Grid>
                        {games?.map((game) => (
                            <Gamecard key={game.title} {...game} />
                        ))}
                    </Grid>

                    <ShowMore role="button" onClick={handleShowMore}>
                        <p>Show more</p>
                        <ArrowDown size={35} />
                    </ShowMore>
                </section>
            </Main>
        </Base>
    );
};

export default GamesTemplate;
