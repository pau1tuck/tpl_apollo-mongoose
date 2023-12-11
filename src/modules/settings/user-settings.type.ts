import { BaseUser } from "./user.type";

export interface UserSettings {
	user: BaseUser;
	language?: string;
	locale?: string;
	timeZone?: string;
}
