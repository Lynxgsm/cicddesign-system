import { render, screen } from "@testing-library/react"
import { Navbar } from "./Navbar"

describe('Navbar', () => {

    it('should be rendered', () => {
        render(<Navbar><h1>Logo</h1></Navbar>)

        const nav = screen.getByRole('navigation')

        expect(nav).toBeDefined()
    })

    it('should be a relative non decorated primary navbar by default', () => {
        render(<Navbar><h1>Logo</h1></Navbar>)

        const nav = screen.getByRole('navigation')

        expect(nav.className).toContain('relative decoration-none navbar-primary')
    })

})