import { Row } from '../../Containers/Row/Row'
import { TrProps } from "./Tr.interface"

export const Tr = (props: TrProps) => {
    return (
        <Row {...props} element="tr" />
    )
}