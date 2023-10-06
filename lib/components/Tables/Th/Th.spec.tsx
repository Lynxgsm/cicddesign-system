import { render, screen } from "@testing-library/react"
import { Table } from "../Table/Table"
import { Tr } from "../Tr/Tr"
import { Th } from "./Th"
import { THead } from "../THead/THead"

describe('Th', () => {
    it('should be rendered', () => {
        render(
            <Table>
                <THead>
                    <Tr>
                        <Th data-testid="data"></Th>
                    </Tr>
                </THead>
            </Table>
        )

        const th = screen.getByTestId('data')

        expect(th).toBeDefined()
    })

    it('should take classes pass in props', () => {
        render(
            <Table>
                <THead>
                    <Tr>
                        <Th className="my-class" data-testid="data"></Th>
                    </Tr>
                </THead>
            </Table>
        )

        const th = screen.getByTestId('data')

        expect(th.className).toContain('my-class')
    })

    it('should take style passes in props', () => {
        render(
            <Table>
                <THead>
                    <Tr>
                        <Th style={{width: '700px'}} data-testid="data"></Th>
                    </Tr>
                </THead>
            </Table>
        )

        const th = screen.getByTestId('data')

        expect(th.style.width).toEqual('700px')
    })
})