class mainScene {
    preload() {
        this.load.image('player','assets/player.png');
        this.load.image('coin','assets/coin.png');
    }

    create() {
        this.player = this.physics.add.sprite(100,100,'player');
        this.coin = this.physics.add.sprite(300,300,'coin');
        this.player.setScale(0.5);
        this.coin.setScale(0.25);

        this.score = 0;
        let style = {font: '20px Arial', fill:'#fff'};
        this.scoreText = this.add.text(20,20,'score: ' + this.score, style);

        this.arrow = this.input.keyboard.createCursorKeys();

        // Tạo nút restart
        this.restartButton = this.add.text(600,20,'Restart',{font:'20px Arial', fill:'#ff0'})
            .setInteractive()
            .on('pointerdown', () => {
                this.restartScore();
            });
    }

    restartScore() {
        this.score = 0;
        this.scoreText.setText('score: ' + this.score);
        // Đặt lại vị trí player và coin nếu muốn
        this.player.setPosition(100,100);
        this.coin.setPosition(300,300);
    }

    hit() {
        this.coin.x = Phaser.Math.Between(100,600);
        this.coin.y = Phaser.Math.Between(100,300);

        this.score += 10;
        this.scoreText.setText('score: '+this.score);

        // this.tweens.add({
        //     targets: this.player,
        //     duration: 200,
        //     scaleX: 1.2,
        //     scaleY: 1.2,
        //     yoyo: true,
        // });
    }

    update() {
        if(this.arrow.right.isDown) {
            this.player.x += 3;
        } else if(this.arrow.left.isDown) {
            this.player.x -= 3;
        }

        if(this.arrow.up.isDown) {
            this.player.y -= 3;
        } else if(this.arrow.down.isDown) {
            this.player.y += 3;
        }

        if(this.physics.overlap(this.player,this.coin)) {
            this.hit();
        }
    }
}

new Phaser.Game({
    width: 700,
    height: 400,
    backgroundColor: '#3490db',
    scene: mainScene,
    physics: {default: 'arcade'},
    parent: 'game'
});
