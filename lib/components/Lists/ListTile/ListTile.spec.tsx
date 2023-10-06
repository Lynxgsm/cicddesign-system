import { fireEvent, render, screen } from "@testing-library/react"
import { Tile } from "../Tile/Tile"

describe('Tile', () => {

    it('should be rendered', () => {
        render(<Tile>My Tile</Tile>)

        const button = screen.getByRole('button')

        expect(button).toBeDefined()
    })

    it('should have width 100% by default', () => {
        render(<Tile>My Tile</Tile>)

        const button = screen.getByRole('button')

        expect(button.style.width).toEqual('100%')
    })

    it('should take the width passed in props', () => {
        render(<Tile width={'50px'}>My Tile</Tile>)

        const button = screen.getByRole('button')

        expect(button.style.width).toEqual('50px')
    })

    it('should parse width into px if width is passed as number', () => {
        render(<Tile width={50}>My Tile</Tile>)

        const button = screen.getByRole('button')

        expect(button.style.width).toEqual('50px')
    })

    it('should be desabled', () => {
        render(<Tile width={50} disabled>My Tile</Tile>)

        const button = screen.getByRole('button') as HTMLButtonElement

        expect(button.disabled).toBeTruthy()
        expect(button.className.includes('enabled')).toBeFalsy()
    })

    it('should call onClick Function', () => {
        const onClick = jest.fn()

        render(<Tile onClick={onClick}>My Tile</Tile>)

        const button = screen.getByRole('button') as HTMLButtonElement
        fireEvent.click(button)

        expect(onClick).toBeCalledTimes(1)
    })

    it('should not call onClick Function if disabled', () => {
        const onClick = jest.fn()

        render(<Tile disabled onClick={onClick}>My Tile</Tile>)

        const button = screen.getByRole('button') as HTMLButtonElement
        fireEvent.click(button)

        expect(onClick).toBeCalledTimes(0)
    })
})