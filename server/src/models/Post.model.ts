import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    category: { 
        type: String, 
        required: true 
    },
    industry: { 
        type: String, 
        required: true 
    },
    source: { 
        type: String, 
        required: true 
    },
    image: { 
        type: String 
    }
});

const Post = mongoose.model("Post", PostSchema);

export default Post;