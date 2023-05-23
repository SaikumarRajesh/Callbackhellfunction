function countdown(time) {
    if (time > 0) {
      document.getElementById('countdown').innerText = time;
      setTimeout(function() {
        countdown(time - 1);
      }, 1000);
    } else {
        document.getElementById('countdown').innerText = "Happy Independence Day!";
    }
  }
countdown(10);
  