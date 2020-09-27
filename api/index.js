module.exports = async (req, res) => {
    res.setHeader("Content-Type", "text/html");
    return res.send(`<h1>Hello world</h1>`);
};