// @/modules/user/schemas/user-settings.schema.ts
import mongoose, { Schema } from "mongoose";

const UserSettingsSchema = new Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	language: { type: String, default: null },
	locale: { type: String, default: null },
	timeZone: { type: String, default: null },
});

export default mongoose.model("UserSettings", UserSettingsSchema);
