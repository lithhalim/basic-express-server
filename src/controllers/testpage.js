module.exports= (req, res) => {
    res.json({
        id: 3,
        name: 'teststudent',
        email: 'test@gmail.com',
        time: req.addtime
    });
}