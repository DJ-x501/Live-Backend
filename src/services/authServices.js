const AppError = require("../utils/AppError");
const { prisma } = require("../config/database");
class AuthService {
  //register logic
  static register = async function (req, res, next) {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      throw new AppError("All fields are required", 400);
    const exitingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (exitingUser) throw new AppError("User already exists", 400);
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
    return newUser;
  };
}

module.exports = AuthService;
