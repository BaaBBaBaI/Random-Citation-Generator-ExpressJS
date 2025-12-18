const requestLogger = (req, res, next) => {
    const date = new Date().toISOString();
    console.log(`[${date}] ${req.method} request to ${req.url}`);
    next();
};

module.exports = requestLogger;
