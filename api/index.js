module.exports = async (req, res) => {
    res.setHeader("Content-Type", "text/html");
    return res.send(`from <h1>${req.headers.referer}</h1>`);
};