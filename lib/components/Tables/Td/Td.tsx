import { Column } from "../../Containers/Column/Column"
import { TdProps } from "./Td.interface"

export const Td = (props: TdProps) => {
    return (
        <Column {...props} element="td"></Column>
    )
}