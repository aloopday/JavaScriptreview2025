let i = 0;

function timedCount() {
  i++;
  postMessage(i);
  setTimeout(timedCount, 500); // Update every 500ms
}

timedCount();