import { Icon } from "../../../components/Icon/Icon"
import { IconParams } from "../../../types/icons/icon"

export const parseIcon = (icon: IconParams) => {
    return (
        icon && (typeof icon === 'string') ? 
        <Icon name={icon} variant="regular" /> : 
        <Icon name={icon.name} variant={icon.variant} size={icon.size} />
    )
}