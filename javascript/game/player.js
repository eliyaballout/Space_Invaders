export default class Player {
    rightPressed = false;
    leftPressed = false;
    upPressed = false;
    downPressed = false;
    shootPressed = false;
    leftShootPressed = false;
    rightShootPressed = false;
    leftAvail = document.querySelector("#Rcrosswise").checked;
    rightAvail = document.querySelector("#Lcrosswise").checked;

    constructor(canvas, velocity, bulletController, lives = 3) {
        this.canvas = canvas;
        this.velocity = velocity;
        this.width = canvas.width / 15;
        this.height = canvas.height / 15;
        this.x = Math.floor(Math.random() * (this.canvas.width - this.width));
        this.y = Math.floor(Math.random() * (this.canvas.height - this.height * 2) * 0.4) + (this.canvas.height - this.height) * 0.6;

        this.lives = lives;

        //TODO - change to myShip
        this.image = new Image();
        this.image.src = window.playerShip == null? "resources/images/myShip1.png": window.playerShip;
        // this.image = myShip;

        this.bulletController = bulletController;

        document.addEventListener("keydown", this.keydown);
        document.addEventListener("keyup", this.keyup);
    }
    draw(ctx) {
        if (this.shootPressed) {
            this.bulletController.shoot(this.x + this.width / 2, this.y - this.height / 4, -this.velocity, 8);
        }
        if (this.leftShootPressed) {
            this.bulletController.shoot(this.x + this.width / 2, this.y - this.height / 4, -this.velocity, 8, true, "l");
        }
        if (this.rightShootPressed) {
            this.bulletController.shoot(this.x + this.width / 2, this.y - this.height / 4, -this.velocity, 8, true, "r");
        }
        this.move();
        this.collideWithWalls();
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    move() {
        if (this.rightPressed) {
            this.x += this.velocity;
        } else if (this.leftPressed) {
            this.x += -this.velocity;
        }
        else if (this.upPressed) {
            this.y += -this.velocity;
        } else if (this.downPressed) {
            this.y += this.velocity;
        }
    }

    collideWithWalls() {
        //left
        if (this.x < 0) {
            this.x = 0;
        }

        //right
        if (this.x > this.canvas.width - this.width) {
            this.x = this.canvas.width - this.width;
        }

        //up
        if (this.y < this.canvas.height * 0.6 - this.height) {
            this.y = this.canvas.height * 0.6 - this.height;
        }

        //down 
        if (this.y > (this.canvas.height - this.height)) {
            this.y = this.canvas.height - this.height;
        }

    }

    // TODO - check conf. keys

    keydown = (event) => {
        if (event.code == "ArrowUp" || event.key == document.querySelector("#up").value) {
            this.upPressed = true;
        }
        if (event.code == "ArrowDown" || event.key == document.querySelector("#down").value) {
            this.downPressed = true;
        }
        if (event.code == "ArrowRight" || event.key == document.querySelector("#right").value) {
            this.rightPressed = true;
        }
        if (event.code == "ArrowLeft" || event.key == document.querySelector("#left").value) {
            this.leftPressed = true;
        }
        if (event.code == "Space" || event.key == document.querySelector("#shoot").value) {
            this.shootPressed = true;
        }
        if (event.key == 'x' && this.leftAvail) {
            this.rightShootPressed = true;
        }
        if (event.key == 'z' && this.rightAvail) {
            this.leftShootPressed = true;
        }
    };

    keyup = (event) => {
        if (event.code == "ArrowUp" || event.key == document.querySelector("#up").value) {
            this.upPressed = false;
        }
        if (event.code == "ArrowDown" || event.key == document.querySelector("#down").value) {
            this.downPressed = false;
        }
        if (event.code == "ArrowRight" || event.key == document.querySelector("#right").value) {
            this.rightPressed = false;
        }
        if (event.code == "ArrowLeft" || event.key == document.querySelector("#left").value) {
            this.leftPressed = false;
        }
        if (event.code == "Space" || event.key == document.querySelector("#shoot").value) {
            this.shootPressed = false;
        }
        if (event.key == 'x' && this.leftAvail) {
            this.rightShootPressed = false;
        }
        if (event.key == 'z' && this.rightAvail) {
            this.leftShootPressed = false;
        }

    };
}