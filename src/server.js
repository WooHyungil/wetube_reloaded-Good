import "./db";
import "./models/Video";

import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();
const logger = morgan("dev"); // 다른 옵션도 있다. 서버의 요청시간, 속도 등등....

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true })); //<-- from의 value들을 이해할 수 있도록 하고,자바스크립트 형식으로 변형시켜준다
app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/videos", videoRouter);

export default app;
