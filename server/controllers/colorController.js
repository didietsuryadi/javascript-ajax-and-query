module.exports = {
  changeColor: function(req, res, next) {
    let randomPosition = Math.floor(Math.random() * 9)
    let randomRgb1 = Math.floor(Math.random() * 255)
    let randomRgb2 = Math.floor(Math.random() * 255)
    let randomRgb3 = Math.floor(Math.random() * 255)
    res.json({index: randomPosition, rgb1: randomRgb1, rgb2: randomRgb2, rgb3: randomRgb3})
  }
}
