
var i = 0;
var txt = 'Hey I\'m Jordan';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("intro").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function typeWriterOnLoad() {
  // Call the typewriter function when the page loads
  typeWriter();
}