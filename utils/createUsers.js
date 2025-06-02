import { User, Document, WorkData } from "../models/User.js";
import keyGeneration from "../utils/keyGeneration.js";

export default function createUsers(userBody) {
  const password = keyGeneration();

  const document = new Document(
    userBody.document?.series,
    userBody.document?.number,
    userBody.document?.issueDate
  );
  const workData = new WorkData(
    userBody.workData?.companyName,
    userBody.workData?.phone,
    userBody.workData?.address
  );
  const user = new User(
    userBody.fullName,
    password,
    userBody.phone,
    userBody.birthDate
  );
  user.document = document;
  user.workData = workData;

  return { user, password };
}
