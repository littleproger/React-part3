const { Router } = require("express");
const UserService = require("../services/userService");
const { responseMiddleware } = require("../middlewares/response.middleware");

const router = Router();

// console.log(UserService.update("2136-123bf-vg123",{name:"Vasya"}));
// console.log(UserService.getAll());

router.get(
  "/",
  async (req, res, next) => {
    try {
      const data = await UserService.getAll();
      res.data = data;
    } catch (err) {
      res.status(404).err = err;
    } finally {
      next();
    }
  },
  responseMiddleware
);

router.post(
  "/",
  async (req, res, next) => {
    try {
      const data = await UserService.add(req.body);
      res.data = { ...data };
    } catch (err) {
      res.status(400).err = err;
    } finally {
      next();
    }
  },
  responseMiddleware
);

router.get(
  "/:id",
  async (req, res, next) => {
    try {
      const id = req.params.id;
      const data = await UserService.getOne(id);
      res.data = { ...data };
    } catch (err) {
      res.status(404).err = err;
    } finally {
      next();
    }
  },
  responseMiddleware
);

router.put(
  "/:id",
  async (req, res, next) => {
    console.log(req.body);
    try {
      const id = req.params.id;
      const data = await UserService.update(id, req.body);
      res.data = { ...data };
    } catch (err) {
      res.status(404).err = err;
    } finally {
      next();
    }
  },
  responseMiddleware
);

router.delete(
  "/:id",
  async (req, res, next) => {
    try {
      const id = req.params.id;
      const data = await UserService.delete(id);
      res.data = { ...data };
    } catch (err) {
      res.status(404).err = err;
    } finally {
      next();
    }
  },
  responseMiddleware
);

module.exports = router;
