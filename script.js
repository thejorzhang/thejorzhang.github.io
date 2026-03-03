function toggleIframe(id) {
  var iframe = document.getElementById(id);

  // Toggle the display property
  if (iframe.style.display === "none") {
    iframe.style.display = "block";
  } else {
    iframe.style.display = "none";
  }
}


function toggleElement(id) {
  const el = document.getElementById(id);
  if (el.style.display === 'none' || el.style.display === '') {
    el.style.display = 'block';
  } else {
    el.style.display = 'none';
  }
}

