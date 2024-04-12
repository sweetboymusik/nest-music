import { render, screen } from '@testing-library/react';
import App from '../../App';

describe("Player test", () => {
    test("Player renders", () => {
        render(<App/>);
        const player = screen.getByRole("contentinfo");
        expect(player).toBeInTheDocument();
    });

    test("Player controls", () => {
        render(<App/>);
        const playerControls = screen.getByTestId("21343");
        expect(playerControls).toBeInTheDocument();
    });
});