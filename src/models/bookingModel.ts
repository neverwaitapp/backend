import mongoose from "mongoose";
import { isPropertyAssignment } from "typescript";

export interface BookingModel extends mongoose.Document {
    eventID: string;
    name: string;
    email: string;
    phone: string;
    guests: number;
    isPassed: Boolean;
}

const bookingSchema = new mongoose.Schema({
    eventID: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    guests: { type: Number, required: true, default: 1, min: 1, max: 2 },
    isPassed: { type: Boolean, required: false, default: false }
});

export const Booking = mongoose.model<BookingModel>("Booking", bookingSchema);