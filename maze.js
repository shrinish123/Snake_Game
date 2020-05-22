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





document.getElementById("mazeM").addEventListener("click", mazeMode);

function mazeMode() {

    document.getElementById("dropdown").style.display = "none";
    document.getElementById("disScore").style.display = "block";


    var cvs = document.getElementById("canvas");
    var ctx = cvs.getContext("2d");

    var cvsW = cvs.width;
    var cvsH = cvs.height;

    var snakeW = 5;
    var snakeH = 5;


    var cols, rows;
    var w = snakeW;
    cols = Math.floor(cvsW / w);
    rows = Math.floor(cvsH / w);

    var grid = [];

    function Cell(x, y) {
        this.x = x;
        this.y = y;
    }




    function drawMaze(x, y) {

        ctx.fillStyle = "brown";
        ctx.fillRect(x * snakeW, y * snakeH, snakeW, snakeH);
        var cell = new Cell(x, y);
        grid.push(cell);
    }

    function horiline(a, b, c) {

        for (var i = 0; i < (c - a); i++) {
            drawMaze(a, b);
            a++;

        }
    }

    function veriline(a, b, c) {

        for (var i = 0; i < (c - b); i++) {
            drawMaze(a, b);
            b++;

        }
    }





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

    function checkCollisionWithMaze(x, y, array) {
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

    function foodOnMaze(array) {
        for (var i = 0; i < grid.length; i++) {
            if (food.x === grid[i].x && food.y === grid[i].y)
                return true;
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
        drawMaze(50, 1);
        drawMaze(50, 2);
        drawMaze(50, 3);
        drawMaze(50, 4);
        drawMaze(50, 5);
        drawMaze(50, 6);
        drawMaze(50, 6);
        drawMaze(49, 2);
        drawMaze(48, 2);
        drawMaze(47, 2);
        drawMaze(46, 2);
        drawMaze(45, 2);
        drawMaze(45, 3);
        drawMaze(45, 4);
        drawMaze(45, 5);
        drawMaze(44, 5);
        drawMaze(43, 5);
        drawMaze(43, 6);
        drawMaze(43, 7);
        drawMaze(43, 8);
        drawMaze(51, 4);
        drawMaze(52, 4);
        drawMaze(53, 4);
        drawMaze(54, 4);
        drawMaze(54, 3);
        drawMaze(54, 2);
        drawMaze(55, 2);
        drawMaze(43, 9);
        drawMaze(43, 10);
        drawMaze(43, 11);
        drawMaze(43, 12);
        drawMaze(43, 13);
        drawMaze(43, 14);
        drawMaze(43, 15);
        drawMaze(43, 16);
        drawMaze(43, 17);
        drawMaze(43, 18);
        drawMaze(44, 15);
        drawMaze(45, 15);
        drawMaze(46, 15);
        drawMaze(47, 15);
        drawMaze(48, 15);
        drawMaze(49, 15);
        drawMaze(49, 16);
        drawMaze(49, 17);
        drawMaze(49, 18);
        drawMaze(50, 18);
        drawMaze(51, 18);
        drawMaze(52, 18);
        drawMaze(53, 18);
        drawMaze(54, 18);
        drawMaze(42, 12);
        drawMaze(41, 12);
        drawMaze(40, 12);
        drawMaze(39, 12);
        drawMaze(38, 12);
        drawMaze(37, 12);
        drawMaze(37, 11);
        drawMaze(37, 10);
        drawMaze(37, 9);
        drawMaze(37, 8);
        drawMaze(30, 12);
        drawMaze(29, 12);
        drawMaze(28, 12);
        drawMaze(27, 12);
        drawMaze(26, 12);
        drawMaze(26, 11);
        drawMaze(26, 10);
        drawMaze(26, 9);
        drawMaze(26, 8);
        drawMaze(26, 7);
        drawMaze(26, 6);
        drawMaze(25, 8);
        drawMaze(24, 8);
        drawMaze(23, 8);
        drawMaze(22, 8);
        drawMaze(21, 8);
        drawMaze(20, 8);
        drawMaze(19, 8);
        drawMaze(18, 8);
        drawMaze(18, 7);
        drawMaze(18, 6);
        drawMaze(18, 5);
        drawMaze(18, 4);
        drawMaze(18, 3);
        drawMaze(17, 5);
        drawMaze(16, 5);
        drawMaze(15, 5);
        drawMaze(14, 5);
        drawMaze(13, 5);
        drawMaze(12, 5);
        drawMaze(11, 5);
        drawMaze(10, 5);
        drawMaze(9, 5);
        drawMaze(8, 6);
        drawMaze(7, 7);
        drawMaze(6, 8);
        drawMaze(5, 9);
        drawMaze(4, 10);
        drawMaze(19, 3);
        drawMaze(20, 3);
        drawMaze(21, 3);
        drawMaze(22, 3);
        drawMaze(4, 11);
        drawMaze(4, 12);
        drawMaze(4, 13);
        drawMaze(4, 14);
        drawMaze(4, 15);
        drawMaze(4, 16);
        drawMaze(4, 17);
        drawMaze(5, 17);
        drawMaze(6, 17);
        drawMaze(7, 17);
        drawMaze(8, 17);
        drawMaze(9, 17);
        drawMaze(10, 17);
        drawMaze(11, 17);
        drawMaze(12, 17);
        drawMaze(5, 13);
        drawMaze(6, 13);
        drawMaze(7, 13);
        drawMaze(8, 13);
        drawMaze(9, 13);
        drawMaze(10, 13);
        drawMaze(11, 13);
        drawMaze(12, 13);
        drawMaze(13, 13);
        drawMaze(13, 13);
        drawMaze(14, 13);
        drawMaze(15, 13);
        drawMaze(16, 13);
        drawMaze(17, 13);
        drawMaze(18, 13);
        drawMaze(19, 13);
        drawMaze(20, 13);
        drawMaze(20, 14);
        drawMaze(20, 15);
        drawMaze(20, 16);
        drawMaze(21, 13);
        drawMaze(22, 13);
        drawMaze(13, 12);
        drawMaze(13, 11);
        drawMaze(13, 10);
        drawMaze(10, 18);
        drawMaze(10, 19);
        drawMaze(10, 20);
        horiline(17, 23, 34);
        veriline(34, 16, 23);
        horiline(39, 26, 55);
        veriline(39, 20, 32);
        horiline(29, 27, 38);

        if (foodOnSnake(snake)) {
            food = {
                x: Math.floor(Math.random() * (cvsW / snakeW)),
                y: Math.floor(Math.random() * (cvsH / snakeH))
            }
            drawFood(food.x, food.y);
        } else {
            drawFood(food.x, food.y);
        }
        if (foodOnMaze(grid)) {
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

        if (snakeX < 0 || snakeY < 0 || snakeX >= cvsW / snakeW || snakeY >= cvsH / snakeH || checkCollision(snakeX, snakeY, snake) || checkCollisionWithMaze(snakeX, snakeY, grid)) {
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

    setInterval(draw, speed);








}
