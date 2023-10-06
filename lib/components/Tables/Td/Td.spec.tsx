import { render, screen } from "@testing-library/react"
import { Table } from "../Table/Table"
import { Tr } from "../Tr/Tr"
import { TBody } from "../TBody/TBody"
import { Td } from "./Td"

describe('Td', () => {
    it('should be rendered', () => {
        render(
            <Table>
                <TBody>
                    <Tr>
                        <Td data-testid="data"></Td>
                    </Tr>
                </TBody>
            </Table>
        )

        const td = screen.getByTestId('data')

        expect(td).toBeDefined()
    })

    it('should take classes pass in props', () => {
        render(
            <Table>
                <TBody>
                    <Tr>
                        <Td className="my-class" data-testid="data"></Td>
                    </Tr>
                </TBody>
            </Table>
        )

        const td = screen.getByTestId('data')

        expect(td.className).toContain('my-class')
    })

    it('should take style passes in props', () => {
        render(
            <Table>
                <TBody>
                    <Tr>
                        <Td style={{width: '700px'}} data-testid="data"></Td>
                    </Tr>
                </TBody>
            </Table>
        )

        const td = screen.getByTestId('data')

        expect(td.style.width).toEqual('700px')
    })
})