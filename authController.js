import createUsers from "./utils/createUsers.js";
import fs from "fs";

class authController {
  async register(req, res) {
    try {
      let rawdata = fs.readFileSync("./bd/dataJson.json");
      let parseddata = JSON.parse(rawdata);

      const userBody = req.body;
      const candidate = parseddata.find(
        (user) => user.fullName === userBody.fullName
      );

      if (candidate) {
        return res
          .status(400)
          .json({ message: "Пользователь с таким именем уже существует" });
      }

      const user = createUsers(userBody);

      ///////////////////////////////

      parseddata.push(user.user);

      let dataJson = JSON.stringify(parseddata);

      fs.writeFileSync("./bd/dataJson.json", dataJson);

      //////////////////////////////

      return res.json({
        message: `Пользователь зарегистрирован`,
        messagePassword: `Ваш пароль для доступа к аккаунту: ${user.password}`,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Register error" });
    }
  }
  async login(req, res) {
    try {
      let rawdata = fs.readFileSync("./bd/dataJson.json");
      let parseddata = JSON.parse(rawdata);

      const { fullName, password } = req.body;
      const candidate = parseddata.find((user) => user.fullName === fullName);

      if (!candidate) {
        return res
          .status(403)
          .json({ message: "Пользователь с таким именем не найден" });
      }

      if (candidate.fullName === fullName && candidate.password === password) {
        return res.status(200).json({ keyAutorization: password });
      } else {
        return res
          .status(403)
          .json({ message: "Не правильный логин или пароль" });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Login error" });
    }
  }
}

export const controller = new authController();
