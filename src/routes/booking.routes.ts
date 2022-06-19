import express, { Request, Response } from "express";
import fs from "fs/promises";
import { Booking } from "../models/bookingModel";
import { Event } from "../models/eventModel";
const bookingRouter = express.Router();

// Make a new booking
bookingRouter.post(
    "/bookings",
    async (req: Request, res: Response) => {
        const booking = new Booking(req.body);
        await booking.save();
        res.status(201).json(booking);
    }
)
// Get all booking for an event
bookingRouter.get(
    "/bookings/:eventID",
    async (req: Request, res: Response) => {
        const { eventID } = req.params;
        const bookings = await Booking.find({ eventID });
        res.status(200).json(bookings);
    }
)

// Remove a booking
bookingRouter.delete(
    "/bookings/:id",
    async (req: Request, res: Response) => {
        const { id } = req.params;
        await Booking.findByIdAndDelete(id);
        res.status(200).json({ message: "Booking deleted" });
    }
)
export { bookingRouter };