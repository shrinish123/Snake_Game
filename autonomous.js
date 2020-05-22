document.getElementById("autoplay").addEventListener("click", auto);

function auto() {

    document.getElementById("dropdown").style.display = "none";
    document.getElementById("disScore").style.display = "block";

    var cvs = document.getElementById("canvas");
    var ctx = cvs.getContext("2d");

    var cvsW = cvs.width;
    var cvsH = cvs.height;

    var snakeW = 10;
    var snakeH = 10;

    var score = 0;
    //direction

    var direction = "right";

    function drawSnake(x, y) {

        ctx.fillStyle = "#FFF";
        ctx.fillRect(x * snakeW, y * snakeH, snakeW, snakeH);

        ctx.fillStyle = "#000";
        ctx.strokeRect(x * snakeW, y * snakeH, snakeW, snakeH);

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

        ctx.fillStyle = "#000";
        ctx.strokeRect(x * snakeW, y * snakeH, snakeW, snakeH);

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

        // autonomous algorithm starts from here


        if (food.x == snakeX && food.y > snakeY) {
            direction = "down";
        }


        if (food.x == snakeX && food.y < snakeY) {
            direction = "up";
        }


        if (food.x < snakeX && food.y > snakeY && direction == "right") {
            direction = "down";
        }
        if (direction === "down" && food.x < snakeX && food.y == snakeY) {
            direction = "left";
        }

        // COLLISION WITH WALLS

        // collision with left wall

        if (direction === "left" && snakeX == 0 && snakeY == cvsH / snakeH - 1) {
            direction = "up";
        }
        if (direction === "left" && snakeX == 0) {
            direction = "up";
        }
        if (direction === "left" && snakeX == 0 && snakeY == 0) {
            direction = "down";
        }


        //collision with right wall

        if (direction === "right" && snakeX == cvsW / snakeW - 1 && snakeY == 0) {
            direction = "down";
        }
        if (direction === "right" && snakeX == cvsW / snakeW - 1) {
            direction = "down";
        }
        if (direction === "right" && snakeX == cvsW / snakeW - 1 && snakeY == cvsH / snakeH - 1) {
            direction = "up";
        }

        //collision with down wall

        if (direction === "down" && snakeX == 0 && snakeY == cvsH / snakeH - 1) {
            direction = "right";
        }
        if (direction === "down" && snakeY == cvsH / snakeH - 1) {
            direction = "left";
        }
        if (direction === "down" && snakeX == cvsW / snakeW - 1 && snakeY == cvsH / snakeH - 1) {
            direction = "left";
        }

        //collision with up wall

        if (direction === "up" && snakeX == 0 && snakeY == 0) {
            direction = "right";
        }
        if (direction === "up" && snakeY == 0) {
            direction = "right";
        }
        if (direction === "up" && snakeX == cvsW / snakeW - 1 && snakeY == 0) {
            direction = "left";
        }








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
            location.reload();
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

    setInterval(draw, 200);


}