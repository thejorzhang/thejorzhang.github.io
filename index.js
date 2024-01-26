
var i = 0;
var speed = 100;
var txt = 'Hey I\'m Jordan';
var txt2 = 'I\'m a dedicated sophomore at the University of Maryland at College Park, pursuing finance and computer science. I enjoy web design and development and also have a deep interest in data science and analytics. Feel free to reach me at jorzhang@terpmail.umd.edu or (301)-273-5495.';

function typer(text) {
  if (i < text.length) {
    document.getElementById("intro").innerHTML += text.charAt(i);
    i++;
    setTimeout(function() {
      typer(text);
    }, speed);
  }
}

function typeWriter() {
  typer(txt);

  // After typing txt, wait for 2 seconds and then type txt2
  setTimeout(function() {
    i = 0; // Reset i for typing txt2
    document.getElementById("intro").innerHTML = '';
    typer(txt2);
  }, 1500);
}

function typeWriterOnLoad() {
  // Call the typewriter function when the page loads
  typeWriter();
}

// Call the typewriter function when the page loads
typeWriterOnLoad();
