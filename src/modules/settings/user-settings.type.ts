import { BaseUser } from "../users/types/user.type";

export interface UserSettings {
	user: BaseUser;
	language?: string;
	locale?: string;
	timeZone?: string;
}
