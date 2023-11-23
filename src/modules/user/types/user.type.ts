export interface BaseUser {
	userId: string; // Assigned by Mongoose, not optional
}

interface SocialAuth {
	facebookId?: string;
	googleId?: string;
	twitterId?: string;
}

export interface UserAuthentication extends BaseUser {
	socialAuth?: SocialAuth;
	username?: string;
	email?: string;
	phoneNumber?: string;
	password?: string;
}

export interface UserProfile extends BaseUser {
	givenName?: string;
	familyName?: string;
	preferredName?: string;
	birthDate?: Date;
	gender?: string;
}

export interface UserAvatar extends BaseUser {
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
	roles?: string[];
	isActive?: boolean;
	isSuspended?: boolean;
}

export interface UserAuditInfo extends BaseUser {
	createdAt: Date;
	updatedAt: Date;
	lastLogin?: Date;
}

export interface User
	extends UserAuthentication,
		UserProfile,
		UserAvatar,
		UserAddress,
		UserAccountStatus,
		UserAuditInfo {}
