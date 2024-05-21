import express from 'express';
import {port} from "./app/config/index";


const app = express();

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
} );