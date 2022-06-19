import express, { Request, Response } from "express";
import fs from "fs/promises";
import { Event } from "../models/eventModel"
const eventRouter = express.Router();

eventRouter.get(
    "/events",
    async (req: Request, res: Response) => {
        const events = await Event.find();
        res.status(200).json(events);
    }
)
eventRouter.get(
    "/events/:id",
    async (req: Request, res: Response) => {
        const { id } = req.params;
        const event = await Event.findById(id);
        res.status(200).json(event);
    }
)
eventRouter.post(
    "/events",
    async (req: Request, res: Response) => {
        const event = new Event(req.body);
        await event.save();
        res.status(201).json(event);
    }
)
eventRouter.put(
    "/events/:id",
    async (req: Request, res: Response) => {
        const { id } = req.params;
        const event = await Event.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(event);
    }
)
eventRouter.delete(
    "/events/:id",
    async (req: Request, res: Response) => {
        const { id } = req.params;
        await Event.findByIdAndDelete(id);
        res.status(200).json({ message: "Event deleted" });
    }
)
export { eventRouter };