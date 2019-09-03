var canvas = document.querySelector('canvas') 
    ;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

// c.fillStyle = "#e67e22";
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = "#1abc9c";
// c.fillRect(200, 300, 100, 100);
// c.fillStyle = "#3498db";
// c.fillRect(300, 200, 100, 100);
// console.log(canvas);

// // Line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "#2ecc71";
// c.stroke();

// // Arc / Circle






function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = () => {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = '#f1c40f';
        c.stroke();
        c.fill();
    }

    this.update = () => {
        if (this.x + radius > innerWidth || 
            this.x - radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + radius > innerHeight || 
            this.y - radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        
        this.draw();
    }

}



// var circle = new Circle(200, 200, 3, 3, 30);

var circleArray = [];

for (var i = 0; i < 20; i++) {
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 8;
    var dy = (Math.random() - 0.5) * 8;
    var radius = 30;
    circleArray.push(new Circle(x ,y , dx, dy, radius));
    // var x = Math.random() * window.innerWidth;
    // var y = Math.random() * window.innerHeight;
    // c.beginPath()
    // c.arc(x, y, 30, 0, Math.PI * 2, false);
    // c.stroke();
    };
    // c.strokeStyle = '#f1c40f';

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }

}

animate()