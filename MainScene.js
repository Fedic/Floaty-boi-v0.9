
//Unused
/*
class MainScene extends Phaser.Scene {
    constructor() {
      super('MainScene');
      
    }
  
    preload() {
      this.load.image('background', 'assets/space.png');
      this.load.image('player', 'assets/MC.png');
      this.load.image('platform', 'assets/platform.png');
      this.load.image('basePlatform', 'assets/basePlatform.png');
      this.load.image('spikes', 'assets/spikes.png');
      //music files
      this.load.audio('backgroundMusic', 'assets/CelesteMIDI.mp3');
      this.load.audio('gameOverMusic', 'assets/DustMIDI.mp3');
    }
  
    create() {
      // Add background image
    background = this.add.image(400, 300, 'background');
    background.setDepth(-1);
    background.setScale(config.width / background.width, config.height / background.height);
  
  
    // Create platforms group with physics
    platforms = this.physics.add.group({
      allowGravity: false,
      immovable: true,
    });
  
    // Create base platform
    const basePlatform = this.physics.add.staticGroup();
    const base = basePlatform.create(config.width / 2, config.height - 10, 'basePlatform').setScale(1.5, .8);
    base.refreshBody();
  
    // Change base platform to spikes after 5 seconds
    this.time.delayedCall(10000, () => {
      basePlatform.remove(base, true, true);
      const spikes = this.physics.add.staticGroup();
      const spike = spikes.create(config.width / 2, config.height - 10, 'spikes').setScale(1.5, .8);
      spike.refreshBody();
      this.physics.add.collider(player, spikes, gameOver, null, this);
    });
    // Create platforms after a short delay
    this.time.addEvent({
      delay: 1300,
      callback: createPlatforms,
      callbackScope: this,
      loop: true
  });
  
    // Create player
    player = this.physics.add.sprite(100, 450, 'player').setBounce(0.0).setCollideWorldBounds(true).setScale(2);
    player.setCollideWorldBounds(true);
    player.setDepth(1);
    this.jumps = 0; //track jumps for the double jump feature
    // Add collider between player and base platform
    this.physics.add.collider(player, basePlatform);
    // Create cursor keys for player movement
    cursors = this.input.keyboard.createCursorKeys();
  
    // Create score text
    scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '36px', fill: '#ffffff' });
    // Reset score
    score = 0;
    // Collision
    this.physics.add.collider(player, platforms);
    this.lastPlatformY = config.height;
    this.lastPlatformX = 0;
  
    // Add background music
    backgroundMusic = this.sound.add('backgroundMusic', { loop: true, volume: 0.3 });
    backgroundMusic.play();
    }
  
    update() {
       
    // Player movement
    if (cursors.left.isDown) {
      player.setVelocityX(-260);
      player.setScale(-2, 2);
    } else if (cursors.right.isDown) {
      player.setVelocityX(260);
      player.setScale(2, 2);
    } else {
      player.setVelocityX(0);
    }
    
    // Double jump
    if (cursors.up.isDown && this.jumps < 2 && player.body.touching.down) {
      player.setVelocityY(-695);
      this.jumps = 1;
    } else if (cursors.up.isDown && this.jumps === 1 && !player.body.touching.down) {
      player.setVelocityY(-695);
      this.jumps = 2;
    }
  
    // Reset when touching ground
    if (player.body.touching.down) {
      this.jumps = 0;
    }
    
    // Generate new platforms
    /*if (newPlatformTimer >= newPlatformInterval) {
      const side = Phaser.Math.Between(0, 1); // Randomly choose left (0) or right (1) side
      const x = side === 0 ? 0 : config.width - platformWidth;
      const platform = platforms.create(x, -platformHeight, 'platform').setScale(1.05);
      platform.setVelocityY(10); // Slower platform speed
      newPlatformTimer = 0;
    }
    newPlatformTimer += this.sys.game.loop.delta;
  
    // Move platforms down
    platforms.children.iterate((platform) => {
      platform.y += 1;
  
      // Reset platform when it goes off the screen
      if (platform.y > 600 && !isGameOver) {
        platform.y = 0;
        platform.x = Phaser.Math.Between(40, 800);
        score++;
        scoreText.setText('score: ' + score);
      }
    });
    }
  }
  export default MainScene;
  */