const { Router } = require("express");
const ChatService = require("../services/chatService");
const { responseMiddleware } = require("../middlewares/response.middleware");

const router = Router();

router.get(
  "/",
  async (req, res, next) => {
    try {
      const data = await ChatService.getAll();
      res.data = { ...data };
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
    console.log(req.body);
    try {
      const data = await ChatService.add(req.body);
      res.data = { ...data };
    } catch (err) {
      res.status(400).err = err;
    } finally {
      next();
    }
  },
  responseMiddleware
);

router.put(
  "/:id",
  async (req, res, next) => {
    try {
      const id = req.params.id;
      const data = await ChatService.update(id, req.body);
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
      const data = await ChatService.delete(id);
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
