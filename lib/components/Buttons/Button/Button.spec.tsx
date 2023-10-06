import { fireEvent, render, screen } from "@testing-library/react"
import { Button } from "./Button"

describe('Button', () => {

    beforeAll(() => jest.clearAllMocks())

    it('should render the Button and show the Children', () => {
        render(<Button>Welcome</Button>)

        const button = screen.getByRole('button')

        expect(button).toBeDefined()
        expect(button.textContent).toEqual('Welcome')
    })

    it('should be a link if href is passed', () => {
        render(<Button href="/">Welcome</Button>)

        const button = screen.getByRole('link')

        expect(button).toBeDefined()
    })

    it('should fire onClick if Button is clicked', () => {
        const onClick = jest.fn();
        render(<Button onClick={onClick}>Welcome</Button>);
        
        fireEvent.click(screen.getByRole('button'))

        expect(onClick).toBeCalledTimes(1)
    })

    /*------------------Variant------------------*/

    it('should be button-default if variant is not passed', () => {
        render(<Button>Welcome</Button>);
        
        expect(screen.getByRole('button').className).toContain('button-default')
    })

    it('should be the variant if no variant is passed variant', () => {
        render(<Button variant="link">Welcome</Button>);
        
        expect(screen.getByRole('button').className).toContain('button-link')
    })

    /*------------------Size------------------*/

    it('should be button-m if size is not passed size', () => {
        render(<Button>Welcome</Button>);
        
        expect(screen.getByRole('button').className).toContain('button-m')
    })

    it('variant should be a the size if size is passed', () => {
        render(<Button size="sm">Welcome</Button>);
        
        expect(screen.getByRole('button').className).toContain('button-s')
    })

    /*------------------Color Scheme------------------*/

    it('should be button-supernova if no colorScheme is not passed', () => {
        render(<Button>Welcome</Button>);
        
        expect(screen.getByRole('button').className).toContain('button-supernova')
    })

    it('should be the colorScheme if colorScheme is passed', () => {
        render(<Button colorScheme="comet">Welcome</Button>);
        
        expect(screen.getByRole('button').className).toContain('button-comet')
    })

    /*-------------------------------------------------*/

    test('if radius is and width are not passed these value must be undefined', () => {
        render(<Button>Welcome</Button>);
        
        expect(screen.getByRole('button').style.borderRadius).toBeFalsy()
        expect(screen.getByRole('button').style.width).toBeFalsy()
    })

    test('if radius is passed borderRadius should be the value passed', () => {
        render(<Button radius="50px">Welcome</Button>);
        
        expect(screen.getByRole('button').style.borderRadius).toBe('50px')
    })

    test('if radius is passed as number borderRadius unit should be in percent', () => {
        render(<Button radius={50}>Welcome</Button>);        
        expect(screen.getByRole('button').style.borderRadius).toBe('50%')
    })

    test('if fullWidth is passed, the button width should be 100%', () => {
        render(<Button fullwidth>Welcome</Button>);
            expect(screen.getByRole('button').style.width).toBe('100%')
    })

})