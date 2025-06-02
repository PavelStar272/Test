import express from "express";
import { userRouter } from "./authRouter.js";

const PORT = 4200;
const app = express();

app.use(express.json());

async function main() {
  try {
    app.use("/auth", userRouter);

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
