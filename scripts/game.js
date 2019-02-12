class Game {
  constructor(canvas){
    this.canvas = document.getElementById(canvas);
    this.screen = this.canvas.getContext('2d')
  }
}