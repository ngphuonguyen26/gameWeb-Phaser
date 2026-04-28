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
    }
    update() {

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