import { render, screen } from "@testing-library/react"
import { Table } from "../Table/Table"
import { THead } from "./THead"

describe('THead', () => {
    it('should be rendered', () => {
        render(<Table><THead data-testid="head"></THead></Table>)

        const head = screen.getByTestId('head')

        expect(head).toBeDefined()
    })

    it('should take classes pass in props', () => {
        render(<Table><THead className="my-class" data-testid="head"></THead></Table>)

        const head = screen.getByTestId('head')

        expect(head.className).toContain('my-class')
    })

    it('should take style passes in props', () => {
        render(<Table><THead style={{width: '700px'}} data-testid="head"></THead></Table>)

        const head = screen.getByTestId('head')

        expect(head.style.width).toEqual('700px')
    })
})