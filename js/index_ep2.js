var canvas = document.querySelector('canvas') 
    ;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

c.fillStyle = "#e67e22";
c.fillRect(100, 100, 100, 100);
c.fillStyle = "#1abc9c";
c.fillRect(200, 300, 100, 100);
c.fillStyle = "#3498db";
c.fillRect(300, 200, 100, 100);
console.log(canvas);

// Line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = "#2ecc71";
c.stroke();

// c.beginPath()
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = '#f1c40f';
// c.stroke();

// Arc / Circle
for (var i = 0; i < 20; i++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    c.beginPath()
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.stroke();
    };
    c.strokeStyle = '#f1c40f';