let fft
let mic

let Particle = function(position){
  this.position = position
  this.speed = createVector(0,random(1,5))
  this.color = [random(100,255),random(0,175),random(0,200)]

  this.draw = function(){
    circle(this.position.x,this.position.y,this.diameter)
    fill(this.color)
    }
  this.update = function (energy) {
    this.position.y += this.speed.y * energy * 10
    if (this.position.y > height) {
      this.position.y = 0
    }
    this.diameter = random(5, 7) + energy * 100

  }
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  noStroke()
  
  mic=new p5.AudioIn()
  mic.start()

  fft = new p5.FFT()
  fft.setInput(mic)

  positionParticles()
  
}
function draw() {
  background(255, 246, 230)
  let spectrum = fft.analyze()
  updateParticles(spectrum)
}