var canvas = document.getElementById('canvas');
var lines = document.getElementById('lines');
var ctx = canvas.getContext('2d');

canvas.width = 500
canvas.height = 400

ctx.fillStyle = 'blue'

const ballPos = {
    X: 50,
    Y: 50,
    S: 30,
    Xspeed: 5,
    Yspeed: 5,
    colorArr: ['purple', 'red', 'green', 'yellow',
     'orange', 'white', 'brown', 'grey']
}



function update() {
    drawBall()


    requestAnimationFrame(update)
}

update()

function drawBall() {
    if(ballPos.X + ballPos.S > canvas.width
        || ballPos.X - ballPos.S < 0){
            ballPos.Xspeed *= -1
            var item = (ballPos.colorArr[Math.floor(Math.random()*ballPos.colorArr.length)]);
            ctx.fillStyle = item
        }if(ballPos.Y + ballPos.S > canvas.height
        || ballPos.Y - ballPos.S < 0){
            ballPos.Yspeed *= -1
            var item = (ballPos.colorArr[Math.floor(Math.random()*ballPos.colorArr.length)]);
            ctx.fillStyle = item
        }
    ballPos.X += ballPos.Xspeed
    ballPos.Y += ballPos.Yspeed
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath();
    ctx.arc(ballPos.X, ballPos.Y, ballPos.S, 0, 2 * Math.PI)
    ctx.fill();
}