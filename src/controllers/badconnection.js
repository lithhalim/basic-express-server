module.exports=(req, res) => {
    let num = 20;
    let result = num.forEach((y) => {
        console.log(y);
    });
    res.status(500).send(result);
}