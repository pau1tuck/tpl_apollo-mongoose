import mongoose, { Schema } from "mongoose";

const socialAuthSchema = new Schema(
	{
		platform: String,
		platformId: String,
	},
	{ _id: false },
);

const UserSchema = new Schema({
	// UserAuthentication
	socialAuth: [socialAuthSchema],
	username: { type: String, default: null, lowercase: true },
	email: { type: String, default: null },
	phoneNumber: { type: String, default: null },
	password: { type: String, default: null },

	// UserProfile
	givenName: { type: String, default: null },
	familyName: { type: String, default: null },
	preferredName: { type: String, default: null },
	birthDate: { type: Date, default: null },
	gender: { type: String, default: null },

	// UserAvatar
	avatar: {
		picture: { type: String, default: null },
	},

	// UserAddress as a nested object
	address: {
		streetName: { type: String, default: null },
		streetNumber: { type: String, default: null },
		city: { type: String, default: null },
		state: { type: String, default: null },
		country: { type: String, default: null },
		postalCode: { type: String, default: null },
	},

	// UserAccountStatus
	isVerified: { type: Boolean, default: false },
	twoFactorEnabled: { type: Boolean, default: false },
	// Roles: staff, admin, subscriber
	roles: [{ type: String, default: [] }],
	isActive: { type: Boolean, default: true },
	isSuspended: { type: Boolean, default: false },

	// UserAuditInfo
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
	lastLogin: { type: Date, default: null },
});

export default mongoose.model("User", UserSchema);
