export interface BaseUser {
	userId: string; // Assigned by Mongoose, not optional
}

export interface UserAuthentication extends BaseUser {
	facebookId?: string;
	googleId?: string;
	twitterId?: string;
	email?: string;
	password?: string;
}

export interface UserProfile extends BaseUser {
	username?: string;
	givenName?: string;
	familyName?: string;
	preferredName?: string;
	birthDate?: Date;
	gender?: string;
	phoneNumber?: string;
}

export interface UserPicture extends BaseUser {
	picture?: string;
}

export interface UserAddress extends BaseUser {
	streetName?: string;
	streetNumber?: string;
	city?: string;
	state?: string;
	country?: string;
	postalCode?: string;
}

export interface UserAccountStatus extends BaseUser {
	isVerified?: boolean;
	twoFactorEnabled?: boolean;
	language?: string;
	locale?: string;
	timeZone?: string;
	roles?: string[];
	isActive?: boolean;
	isSuspended?: boolean;
}

export interface UserAuditInfo extends BaseUser {
	createdAt?: Date;
	updatedAt?: Date;
	lastLogin?: Date;
}

export interface User
	extends UserAuthentication,
		UserProfile,
		UserPicture,
		UserAddress,
		UserAccountStatus,
		UserAuditInfo {}
