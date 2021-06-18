const responseMiddleware = (req, res, next) => {
  if (!res.err) {
    res.status(200).send(res.data);
  } else {
    res.send({ error: true, message: res.err.toString() });
  }
  // TODO: Implement middleware that returns result of the query
  next();
};

exports.responseMiddleware = responseMiddleware;
