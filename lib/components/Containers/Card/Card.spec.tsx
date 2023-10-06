import { render, screen } from "@testing-library/react"
import { Card } from "./Card"
import {Typography} from '../../Typography/Typography'

describe('Card', () => {
    it('should be rendered', () => {
        render(<Card data-testid="my-segment"><Typography variant="h5">My Card</Typography></Card>)

        const segment = screen.getByTestId('my-segment')

        expect(segment).toBeDefined()
    })

    it('should segment-2 by default', () => {
        render(<Card data-testid="my-segment"><Typography variant="h5">My Card</Typography></Card>)

        const segment = screen.getByTestId('my-segment')

        expect(segment.className).toContain('segment-2')
    })

    it('should pass className if it\s passed in props', () => {
        render(<Card data-testid="my-segment" className="my-segment"></Card>)

        const segment = screen.getByTestId('my-segment')

        expect(segment.className).toContain('my-segment')
    })

    /*-------------------------Background-------------------------*/

    test('the background should be undefined by default', () => {
        render(<Card data-testid="my-segment"></Card>)

        const segment = screen.getByTestId('my-segment')

        expect(segment.style.background).toBeFalsy()
    })

    test('the background should be defined in props', () => {
        render(<Card data-testid="my-segment" color="black"></Card>)

        const segment = screen.getByTestId('my-segment')

        expect(segment.style.background).toEqual('black')
    })

    /*-------------------------Background-------------------------*/

    test('the padding should be undefined by default', () => {
        render(<Card data-testid="my-segment"></Card>)

        const segment = screen.getByTestId('my-segment')

        expect(segment.style.padding).toBeFalsy()
    })

    test('the padding should take the string value passed un props', () => {
        render(<Card data-testid="my-segment"></Card>)

        const segment = screen.getByTestId('my-segment')

        expect(segment.style.padding).toEqual('24px')
    })

    test('the padding parse the number passed in props to pixel', () => {
        render(<Card data-testid="my-segment"></Card>)

        const segment = screen.getByTestId('my-segment')

        expect(segment.style.padding).toEqual('24px')
    })

    /*-------------------------Width-------------------------*/

    test('the width should be undefined by default', () => {
        render(<Card data-testid="my-segment"></Card>)

        const segment = screen.getByTestId('my-segment')

        expect(segment.style.width).toBeFalsy()
    })

    test('the width should take the string value passed un props', () => {
        render(<Card data-testid="my-segment"></Card>)

        const segment = screen.getByTestId('my-segment')

        expect(segment.style.width).toEqual('240px')
    })

    test('the padding parse the number passed in props to pixel', () => {
        render(<Card data-testid="my-segment"></Card>)

        const segment = screen.getByTestId('my-segment')

        expect(segment.style.width).toEqual('240px')
    })

    /*-------------------------Background-------------------------*/

    test('the radius should be undefined by default', () => {
        render(<Card data-testid="my-segment"></Card>)

        const segment = screen.getByTestId('my-segment')

        expect(segment.style.borderRadius).toBeFalsy()
    })

    test('the width should take the string value passed un props', () => {
        render(<Card data-testid="my-segment"></Card>)

        const segment = screen.getByTestId('my-segment')

        expect(segment.style.borderRadius).toEqual('8px')
    })

    test('the padding parse the number passed in props to pixel', () => {
        render(<Card data-testid="my-segment"></Card>)

        const segment = screen.getByTestId('my-segment')

        expect(segment.style.borderRadius).toEqual('8%')
    })

})