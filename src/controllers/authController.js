const AuthService = require("../services/authServices");
const catchAsync = require("../utils/catchAsync");
//auth controller ready for another udpates.
//user name fixed

class AuthController {
  static register = catchAsync(async (req, res, next) => {
    const data = await AuthService.register(req, res, next);
    res.status(200).json({
      success: true,
      message: "User registered successfully",
      data: data,
    });
  });
}

module.exports = AuthController;
