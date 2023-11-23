export interface Address {
	city: string;
	state: string;
	country: string;
	postalCode: string;
}

export interface User {
	userId: string;
	facebookId?: string;
	googleId?: string;
	twitterId?: string;
	username: string;
	email: string;
	password: string;
	givenName: string;
	familyName: string;
	preferredName: string;
	profilePicture: string; // URL or path to the image
	birthDate: Date;
	gender: string;
	phoneNumber: string;
	address: Address;
	isVerified: boolean;
	twoFactorEnabled: boolean;
	language: string;
	locale: string;
	timeZone: string;
	roles: string[];
	isActive: boolean;
	isSuspended: boolean;
	createdAt: Date;
	updatedAt: Date;
	lastLogin: Date;
}
