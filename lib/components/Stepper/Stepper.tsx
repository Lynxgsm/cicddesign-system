import { useFormat } from '../../core/format'
import { Block } from '../Containers/Block/Block'
import { Flex } from '../Containers/Flex/Flex'
import { Typography } from '../Typography/Typography'
import { StepperProps } from './Stepper.interface'
import styles from './Stepper.module.scss'

export const Stepper = ({currentIndex = -1, steps, colorScheme}: StepperProps) => {

    const { classes } = useFormat()

    return (
        <Flex flexDirection="column" className={classes(
            styles.stepper,
            styles[colorScheme || 'supernova']
        )}>
            {
                steps.map((step, index) => (
                    <Flex key={index} alignItems="flex-end" justifyContent="space-between" gap={12}>
                        <Typography className={styles.text}>
                            {step}
                        </Typography>
                        <Flex alignItems="center"
                            flexDirection="column"
                            className={classes(
                                styles.step,
                                {[styles.active]: index <= currentIndex},
                        )}>
                            <Block className={classes(
                                styles.branch, 
                                {[styles.first]: !index},
                            )}></Block>
                            <Flex justifyContent="center" alignItems="center" className={styles.circle}></Flex>
                        </Flex>
                    </Flex>
                ))
            }
        </Flex>
    )
}