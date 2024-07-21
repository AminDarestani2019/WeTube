import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./Router/userRouter";
import videoRouter from "./Router/videoRouter";
import globalRouter from "./Router/globalRouter";
import routes from "./routes";

const app = express();
app.set("view engine","pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(morgan("dev"));
app.use(helmet());

app.use(express.static("node_modules/@fortawesome"));

app.use(routes.home,globalRouter);
app.use(routes.users,userRouter);
app.use(routes.videos,videoRouter);

export default app;