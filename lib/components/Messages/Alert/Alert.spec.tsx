import { render, screen } from "@testing-library/react"
import { Alert } from "./Alert"

describe('Alert', () => {
    it('should be rendered', () => {
        render(<Alert title="My Alert">Message</Alert>)

        const alert = screen.getByRole('banner')

        expect(alert).toBeDefined()
    })
    
    it('should info by default and icon position should be at the top', () => {
        render(<Alert title="My Alert">Message</Alert>)

        const alert = screen.getByRole('banner')

        expect(alert.className).toContain('alert-info')
        expect(alert.className).toContain('alert-top')
    })

    it('should take type and icon positon passed in props', () => {
        render(<Alert title="My Alert" type="success" iconPosition="left">Message</Alert>)

        const alert = screen.getByRole('banner')

        expect(alert.className).toContain('alert-success')
        expect(alert.className).toContain('alert-center')
    })

    it('should take maxWidth and passed in props', () => {
        render(<Alert title="My Alert" radius="md" maxWidth={'520px'}>Message</Alert>)

        const alert = screen.getByRole('banner')

        expect(alert.style.maxWidth).toContain('520px')
        expect(alert.style.borderRadius).toContain('50px')
    })

    it('should take maxWidth and passed in props, by default maxWidth will be in pixel and radius in percent if typeof number', () => {
        render(<Alert title="My Alert" radius="md" maxWidth={520}>Message</Alert>)

        const alert = screen.getByRole('banner')

        expect(alert.style.maxWidth).toContain('520px')
        expect(alert.style.borderRadius).toContain('50%')
    })
})