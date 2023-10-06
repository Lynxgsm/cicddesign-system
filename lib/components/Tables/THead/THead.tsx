import { Block } from "../../Containers/Block/Block"
import { THeadProps } from "./THead.interface"

export const THead = (props: THeadProps) => {
    return (
        <Block {...props} element="thead"></Block>
    )
}