import mongoose from "mongoose";
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const uri: any = process.env.ATLAS;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(response => {
    console.log("The database is running correctly on the backend")
})
.catch(error => console.log(error));

export default mongoose;