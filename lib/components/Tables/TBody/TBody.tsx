import { Block } from "../../Containers/Block/Block"
import { TableProps } from "../Table/Table.interface"

export const TBody = (props: TableProps) => {
    return (
        <Block {...props} element="tbody"></Block>
    )
}