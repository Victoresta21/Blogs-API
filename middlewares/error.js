const error = (err, _req, res, _next) => {
    console.error(err);
    return res.status(500).end();
};

module.exports = error;
