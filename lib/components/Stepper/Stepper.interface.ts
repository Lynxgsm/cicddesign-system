import { ColorScheme } from '../../types/color-scheme';

export interface StepperProps {
    steps: string[],
    colorScheme?: ColorScheme,
    currentIndex?: number,
}