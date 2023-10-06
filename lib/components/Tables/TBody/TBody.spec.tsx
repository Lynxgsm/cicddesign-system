import { render, screen } from "@testing-library/react"
import { TBody } from "./TBody"
import { Table } from "../Table/Table"


describe('TBody', () => {
    it('should be rendered', () => {
        render(<Table><TBody data-testid="body"></TBody></Table>)

        const body = screen.getByTestId('body')

        expect(body).toBeDefined()
    })

    it('should take classes pass in props', () => {
        render(<Table><TBody className="my-class" data-testid="body"></TBody></Table>)

        const body = screen.getByTestId('body')

        expect(body.className).toContain('my-class')
    })

    it('should take style passes in props', () => {
        render(<Table><TBody style={{width: '700px'}} data-testid="body"></TBody></Table>)

        const body = screen.getByTestId('body')

        expect(body.style.width).toEqual('700px')
    })
})