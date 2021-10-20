import { render, screen } from "utils/test-utils";

import MediaMatch from ".";

describe("<MediaMatch />", () => {
    let desktopHeading: Element;
    let mobileHeaing: Element;

    beforeEach(() => {
        render(
            <>
                <MediaMatch greaterThan="medium">
                    <h1 data-testid="desktop">Desktop</h1>
                </MediaMatch>

                <MediaMatch lessThan="medium">
                    <h1 data-testid="mobile">Mobile</h1>
                </MediaMatch>
            </>
        );

        desktopHeading = screen.getByTestId("desktop");
        mobileHeaing = screen.getByTestId("mobile");
    });

    it("should be hidden if no media query is passed", () => {
        expect(desktopHeading.parentElement).toHaveStyleRule("display", "none");
        expect(mobileHeaing.parentElement).toHaveStyleRule("display", "none");
    });

    it("shoud show or hide based on the media passed", () => {
        expect(desktopHeading.parentElement).toHaveStyleRule(
            "display",
            "block",
            {
                media: "(min-width: 768px)"
            }
        );
    });

    it("shoud show or hide based on the media passed", () => {
        expect(mobileHeaing.parentElement).toHaveStyleRule("display", "block", {
            media: "(max-width: 768px)"
        });
    });
});
