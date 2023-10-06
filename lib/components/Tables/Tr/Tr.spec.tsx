import { render, screen } from "@testing-library/react"
import { Table } from "../Table/Table"
import { TBody } from "../TBody/TBody"
import { Tr } from "./Tr"


describe('Tr', () => {
    it('should be rendered', () => {
        render(
            <Table>
                <TBody>
                    <Tr data-testid="row"></Tr>
                </TBody>
            </Table>
        )

        const tr = screen.getByTestId('row')

        expect(tr).toBeDefined()
    })

    it('should take classes pass in props', () => {
        render(
            <Table>
                <TBody>
                    <Tr className="my-class" data-testid="row"></Tr>
                </TBody>
            </Table>
        )

        const tr = screen.getByTestId('row')

        expect(tr.className).toContain('my-class')
    })

    it('should take style passes in props', () => {
        render(
            <Table>
                <TBody>
                    <Tr style={{width: '700px'}} data-testid="row"></Tr>
                </TBody>
            </Table>
        )

        const tr = screen.getByTestId('row')

        expect(tr.style.width).toEqual('700px')
    })
})