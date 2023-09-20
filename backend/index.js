import  express  from "express";
import router from "./router/routes.js";
import cors from 'cors';
import DBconnection from "./database/db.js";

const app = express();

app.use(cors());
app.use('/',router);

const PORT = 8000;
DBconnection();

app.listen(PORT, ()=> console.log(`server is runnig is successfully on ${PORT}`));