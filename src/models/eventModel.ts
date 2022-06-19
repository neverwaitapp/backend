import mongoose from "mongoose";

export interface EventModel extends mongoose.Document {
    name: string;
    description: string;
    date: Date;
    location: string;
    eventProperties: number[];
}

const eventSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    eventProperties: { type: [String], required: true}
});

export const Event = mongoose.model<EventModel>("Event", eventSchema);