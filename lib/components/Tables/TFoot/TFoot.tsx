import { Block } from "../../Containers/Block/Block"
import { TableProps } from "../Table/Table.interface"

export const TFoot = (props: TableProps) => {
    return (
        <Block {...props} element="tfoot"></Block>
    )
}