
import { Column } from "../../Containers/Column/Column"
import { TdProps } from "../Td/Td.interface"

export const Th = (props: TdProps) => {
    return (
        <Column {...props} element="th"></Column>
    )
}