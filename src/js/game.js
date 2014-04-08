(function() {
  'use strict';

  function Game() {
    this.player = null;
    this.tarX = null;
    this.tarY = null;
    this.target = null;
  }

  Game.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;
      this.tarX = x;
      this.tarY = y;
      //target
      this.target = this.add.sprite(x, y, 'player');
      this.target.anchor.setTo(0.5, 0.5);      
      this.target.width = 64;
      this.target.height = 64;
      this.target.alpha = 0.5;
      //player
      this.player = this.add.sprite(x, y, 'player');
      this.player.anchor.setTo(0.5, 0.5);  
      this.player.width = 16;
      this.player.height = 16;      
      
      
      this.input.onDown.add(this.onInputDown, this);
    },

    update: function () {
      this.player.x += (this.tarX- this.player.x)*0.1; 
      this.player.y += (this.tarY- this.player.y)*0.1; 
      this.target.angle++;
    },

    onInputDown: function () {
      var x = this.input.position.x;
      var y = this.input.position.y;
      this.tarX = x;
      this.tarY = y;
      this.target.x = x;
      this.target.y = y;
    }

  };

  window['follow'] = window['follow'] || {};
  window['follow'].Game = Game;

}());
