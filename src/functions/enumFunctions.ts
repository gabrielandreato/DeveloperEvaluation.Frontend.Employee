import {RoleEnum} from "../common/constants/RoleEnum";

export function getRoleEnumValue(roleText: string): number {
    for (const [key, value] of Object.entries(RoleEnum)) {
        if (key.toLowerCase() === roleText.toLowerCase()) {
            return value as number;
        }
    }
    throw new Error(`Invalid role: ${roleText}`);
}

