import { render, screen } from '@testing-library/react';
import App from '../../App';


describe("Nav Test",() => {
    test("Text in logo renders", () => {
        render(<App/>);
        const logoText = screen.getByText(/Nest/i);
        const logoText2 = screen.getByText(/Music/i);
        expect(logoText).toBeInTheDocument();
        expect(logoText2).toBeInTheDocument();
    });

    test("Catalog links", () => {
        render(<App/>)
        const link1 = screen.getByText(/Home/i);
        const link2 = screen.getByText(/Browse/i);
        expect(link1).toBeInTheDocument();
        expect(link2).toBeInTheDocument();
    });

    test("Library links", () => {
        render(<App/>)
        const link1 = screen.getByText(/Artists/i);
        const link2 = screen.getByText(/Albums/i);
        const link3 = screen.getByText(/Songs/i);
        const link4 = screen.getByText(/Playlist/i);
        expect(link1).toBeInTheDocument();
        expect(link2).toBeInTheDocument();
        expect(link3).toBeInTheDocument();
        expect(link4).toBeInTheDocument();
    });
})
