import Bullet from "./bullet.js";
var DEFAULT_X_ANGLE = 0;
var DEFAULT_Y_ANGLE = 0;

export default class BulletController {
    bullets = [];
    timeTillNextBulletAllowed = 0;

    constructor(canvas, maxBulletsAtATime, bulletColor, soundEnabled, player) {
        this.canvas = canvas;
        this.maxBulletsAtATime = maxBulletsAtATime;
        this.bulletColor = bulletColor;
        this.soundEnabled = soundEnabled;

        this.shootSound = new Audio("resources/sounds/shoot.wav");
        this.shootSound.volume = 0.1;

        this.player = player;
        DEFAULT_Y_ANGLE = this.canvas.height / 20;
    }

    draw(ctx) {

        this.bullets = this.bullets.filter(
            (bullet) => bullet.y > DEFAULT_Y_ANGLE && bullet.y <= this.canvas.height
                && bullet.x > 0 && bullet.x <= this.canvas.width
        );

        this.bullets.forEach((bullet) => bullet.draw(ctx));
        if (this.timeTillNextBulletAllowed > 0) {
            this.timeTillNextBulletAllowed--;
        }
    }

    collideWith(sprite) {
        const bulletThatHitSpriteIndex = this.bullets.findIndex((bullet) =>
            bullet.collideWith(sprite)
        );

        if (bulletThatHitSpriteIndex >= 0) {
            this.bullets.splice(bulletThatHitSpriteIndex, 1);
            return true;
        }

        return false;
    }

    shoot(x, y, velocity, timeTillNextBulletAllowed = 0, isDiag = false, diagDirection = "") {
        if (!this.player && this.bullets.length > 0) {
            this.bullets.forEach((bullet) => {
                if (bullet.y <= 0.6 * this.canvas.height) {
                    this.maxBulletsAtATime = 0;
                } else {
                    this.maxBulletsAtATime += 1;
                }
            });
        }
        if (
            this.timeTillNextBulletAllowed <= 0 &&
            this.bullets.length < this.maxBulletsAtATime
        ) {
            const bullet = new Bullet(this.canvas, x, y, velocity, this.bulletColor, isDiag, diagDirection);
            this.bullets.push(bullet);
            if (this.soundEnabled) {
                this.shootSound.currentTime = 0;
                this.shootSound.play();
            }
            this.timeTillNextBulletAllowed = timeTillNextBulletAllowed;
        }
    }
}