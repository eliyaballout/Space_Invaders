export default class Enemy {
    constructor(canvas, x, y, imageNumber) {
        this.x = x;
        this.y = y;
        this.image = new Image();
        this.image.src = `resources/images/enemyShip${imageNumber}.png`;
        // TODO consider height and width of the current screen.
        this.canvas = canvas;
        this.point = imageNumber;
        
        this.width = canvas.width/15;
        this.height = canvas.height/20;
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    move(xVelocity) {
        this.x += xVelocity;
    }
}