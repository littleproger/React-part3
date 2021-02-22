const { Router } = require('express');
const ChatService =require('../services/chatService');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

router.get('/', (req, res, next) => {
    try {
        const data = ChatService.getAll();
        res.data = {...data};
    } catch (err) {
        res.status(404).err = err;
    } finally {
        next();
    }
}, responseMiddleware);

router.post('/', (req, res, next) => {
    try {
        const data = ChatService.add(req.body);
        res.data = {...data};
    } catch (err) {
        res.status(400).err = err;
    } finally {
        next();
    }
}, responseMiddleware);

router.put('/:id', (req, res, next) => {
    try {
        const id = req.params.id
        const data = ChatService.update(id,req.body);
        res.data = {...data};
    } catch (err) {
        res.status(404).err = err;
    } finally {
        next();
    }
}, responseMiddleware);

router.delete('/:id', (req, res, next) => {
    try {
        const id = req.params.id
        console.log(id)
        const data = ChatService.delete(id);
        res.data = {...data};
    } catch (err) {
        res.status(404).err = err;
    } finally {
        next();
    }
}, responseMiddleware);

module.exports = router;