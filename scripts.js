var dropdown = document.getElementById("dropdown").style;

document.getElementById("clickSpeed").addEventListener("click", function() {
    document.getElementById("dropdown").style.display = "block";


});

var speed = 200;

document.getElementById("speed1").addEventListener("click", function() {
    speed = 800;

});
document.getElementById("speed2").addEventListener("click", function() {
    speed = 400;

});
document.getElementById("speed3").addEventListener("click", function() {
    speed = (200 * (4 / 3));

});
document.getElementById("speed4").addEventListener("click", function() {
    speed = 200;

});
document.getElementById("speed5").addEventListener("click", function() {
    speed = (200 * (4 / 5));

});
document.getElementById("speed6").addEventListener("click", function() {
    speed = (200 * (2 / 3));

});
document.getElementById("speed7").addEventListener("click", function() {
    speed = (200 * (4 / 7));

});
document.getElementById("speed8").addEventListener("click", function() {
    speed = (200 * (1 / 2));

});

function backtohome() {
    location.reload();
}





document.getElementById("start").addEventListener("click", startTheGame);



function startTheGame() {


    document.getElementById("dropdown").style.display = "none";
    document.getElementById("disScore").style.display = "block";

    var cvs = document.getElementById("canvas");
    var ctx = cvs.getContext("2d");
    var displayScore = document.getElementById("disScore");

    var cvsW = cvs.width;
    var cvsH = cvs.height;

    var snakeW = 10;
    var snakeH = 10;

    var score = 0;

    //direction

    var direction = "right";

    //read users diection

    document.addEventListener("keydown", getDirection);

    function getDirection(e) {
        if (e.keyCode === 37 && direction != "right") {
            direction = "left";
        } else if (e.keyCode === 38 && direction != "down") {
            direction = "up";
        } else if (e.keyCode === 39 && direction != "left") {
            direction = "right";
        } else if (e.keyCode === 40 && direction != "up") {
            direction = "down";
        }
    }

    function swipedetect(el, callback) {


        var el = document.getElementById("canvas");
        var swipedir,
            startX,
            startY,
            distX,
            distY,
            threshold = 90, //required min distance traveled to be considered swipe
            restraint = 150, // maximum distance allowed at the same time in perpendicular direction
            allowedTime = 300, // maximum time allowed to travel that distance
            elapsedTime,
            startTime,
            handleswipe = callback || function(swipedir) {}

        document.getElementById("canvas").addEventListener('touchstart', function(e) {
            var touchobj = e.changedTouches[0]
            swipedir = 'none'
            dist = 0
            startX = touchobj.pageX
            startY = touchobj.pageY
            startTime = new Date().getTime() // record time when finger first makes contact with surface
            e.preventDefault()
        }, false)

        document.getElementById("canvas").addEventListener('touchmove', function(e) {
            e.preventDefault() // prevent scrolling when inside DIV
        }, false)

        document.getElementById("canvas").addEventListener('touchend', function(e) {
            var touchobj = e.changedTouches[0]
            distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
            distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
            elapsedTime = new Date().getTime() - startTime // get time elapsed
            if (elapsedTime <= allowedTime) { // first condition for awipe met
                if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) { // 2nd condition for horizontal swipe met
                    swipedir = (distX < 0) ? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
                } else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) { // 2nd condition for vertical swipe met
                    swipedir = (distY < 0) ? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
                }
            }
            handleswipe(swipedir)
            e.preventDefault()
        }, false)
    }

    swipedetect(cvs, function(swipedir) {
        if (swipedir == 'left' && direction != "right") {
            direction = "left";
        } else if (swipedir == 'up' && direction != "down") {
            direction = "up";
        } else if (swipedir == 'right' && direction != "left") {
            direction = "right";
        } else if (swipedir == 'down' && direction != "up") {
            direction = "down";
        }
    })

    function drawSnake(x, y) {

        ctx.fillStyle = "white";
        ctx.fillRect(x * snakeW, y * snakeH, snakeW, snakeH);



    }
    //create snake array 

    var len = 4;
    var snake = [];

    for (var i = len - 1; i >= 0; i--) {
        snake.push({
            x: i,
            y: 0
        });
    }
    //create  food

    food = {
        x: Math.floor(Math.random() * (cvsW / snakeW)),
        y: Math.floor(Math.random() * (cvsH / snakeH))
    }

    function drawFood(x, y) {

        ctx.fillStyle = "yellow";
        ctx.fillRect(x * snakeW, y * snakeH, snakeW, snakeH);


    }
    //check collision 

    function checkCollision(x, y, array) {
        for (var i = 0; i < array.length; i++) {
            if (x === array[i].x && y === array[i].y) {
                return true;
            }
        }
        return false;
    }

    function foodOnSnake(array) {
        for (var i = 0; i < snake.length; i++) {
            if (food.x === snake[i].x && food.y === snake[i].y) {
                return true;
            }
        }
        return false;
    }

    function drawScore(x) {
        displayScore.textContent = "Score: " + x;
    }

    function displayPopup() {
        document.getElementById("popupId").style.display = "flex";
    }






    function draw() {
        ctx.clearRect(0, 0, cvsW, cvsH);
        for (var i = 0; i < snake.length; i++) {
            var x = snake[i].x;
            var y = snake[i].y;
            drawSnake(x, y);
        }
        if (foodOnSnake(snake)) {
            food = {
                x: Math.floor(Math.random() * (cvsW / snakeW)),
                y: Math.floor(Math.random() * (cvsH / snakeH))
            }
            drawFood(food.x, food.y);
        } else {
            drawFood(food.x, food.y);
        }

        //snake head

        var snakeX = snake[0].x;
        var snakeY = snake[0].y;



        if (direction === "left") {
            snakeX--;
        } else if (direction === "up") {
            snakeY--;
        } else if (direction === "right") {
            snakeX++;
        } else if (direction === "down") {
            snakeY++;
        }


        if (snakeX < 0 || snakeY < 0 || snakeX >= cvsW / snakeW || snakeY >= cvsH / snakeH || checkCollision(snakeX, snakeY, snake)) {
            //location.reload();
            setTimeout(displayPopup, 200);
            var finalScore = score;

        }


        if (snakeX === food.x && snakeY === food.y) {
            food = {
                x: Math.floor(Math.random() * (cvsW / snakeW)),
                y: Math.floor(Math.random() * (cvsH / snakeH))
            }
            var newHead = {
                x: snakeX,
                y: snakeY

            };
            score++;
        } else {
            snake.pop();
            var newHead = {
                x: snakeX,
                y: snakeY

            };

        }


        snake.unshift(newHead);
        drawScore(score);


    }

    setInterval(draw, speed);






}
