import User from "../../models/Users";
import { logger } from "../../../log";

const createUser = (user, callback) => {
  const userData = new User();
  userData.name = user.name;
  userData.email = user.email;

  userData.save((err, response) => {
    if(err) {
      logger.error(err);
      return callback(err, null);
    }
    return callback(null, response);
  });
};

export default {
  createUser
};
