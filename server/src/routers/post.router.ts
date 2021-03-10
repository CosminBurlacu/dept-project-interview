import express, { Request, Response } from "express";
import Post from "../models/Post.model";
const router = express.Router();

router.get("/api/posts", async (req: Request, res: Response) => {
    console.log(req.query)

    try {
        if(req.query.category === "all" || req.query.industry === "all") {
            const posts = await Post.find({});
            res.send(posts);
        } else {
            const posts = await Post.find(req.query);
            res.send(posts);
        }
    } catch (error) {
        res.status(400).send(error);
    }
});

router.post("/api/posts", async (req: Request, res: Response) => {
    try {
        const post = new Post(req.body);
        await post.save();
        res.send(post);
    } catch (error) {
        res.status(400).send(error);
    }
});

export default router;