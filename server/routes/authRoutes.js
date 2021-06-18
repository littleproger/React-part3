const { Router } = require("express");
const AuthService = require("../services/authService");
const { responseMiddleware } = require("../middlewares/response.middleware");

const router = Router();

// console.log(connectWithDatabase.update("2136-123bf-vg123",{name:"Vasya"}));
// console.log(connectWithDatabase.getAll());

router.post(
  "/",
  async (req, res, next) => {
    try {
      const data = await AuthService.login(req.body);
      res.data = data;
    } catch (err) {
      res.status(404).err = err;
    } finally {
      next();
    }
  },
  responseMiddleware
);

module.exports = router;
