import mongoose from "mongoose";

export interface BookingModel extends mongoose.Document {
    eventID: string;
    name: string;
    email: string;
    phone: string;
    guests: number;
}

const bookingSchema = new mongoose.Schema({
    eventID: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    guests: { type: Number, required: true }
});

export const Booking = mongoose.model<BookingModel>("Booking", bookingSchema);