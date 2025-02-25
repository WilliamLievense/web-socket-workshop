var socket = io()

function setup() {
  var canvas = createCanvas(400, 400)
  canvas.parent('sketch-holder')

  background("lightblue")

  clientCircle ={
    x: 100,
    y: 100,
    color: 'blue'
  }
}

function draw(){
 fill(clientCircle.color)
 noStroke()
 ellipse(clientCircle.x, clientCircle.y, 25)
}

/****** DRAWING CODE  ******/

function mouseClicked() {
  clientCircle.x = mouseX
  clientCircle.y = mouseY
  
if (clientCircle.color = 'blue'){
  clientCircle.color ="green"
}
else {clientCircle.color = "blue"}

socket.emit('new circle', clientCircle)
}


function clearCanvas() {

}


socket.on("new circle", function(serverCircle){
clientCircle.x = serverCircle.x
clientCircle.y = serverCircle.y
clientColor = serverCircle.color

})
