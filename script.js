function f1() {
  document.getElementById('countdown').innerText = 10;
  setTimeout(function() {
    f2();
  }, 1000);
}

function f2() {
  document.getElementById('countdown').innerText = 9;
  setTimeout(function() {
    f3();
  }, 1000);
}

function f3() {
  document.getElementById('countdown').innerText = 8;
  setTimeout(function() {
    f4();
  }, 1000);
}

function f4() {
  document.getElementById('countdown').innerText = 7;
  setTimeout(function() {
    f5();
  }, 1000);
}

function f5() {
  document.getElementById('countdown').innerText = 6;
  setTimeout(function() {
    f6();
  }, 1000);
}

function f6() {
  document.getElementById('countdown').innerText = 5;
  setTimeout(function() {
    f7();
  }, 1000);
}

function f7() {
  document.getElementById('countdown').innerText = 4;
  setTimeout(function() {
    f8();
  }, 1000);
}

function f8() {
  document.getElementById('countdown').innerText = 3;
  setTimeout(function() {
    f9();
  }, 1000);
}

function f9() {
  document.getElementById('countdown').innerText = 2;
  setTimeout(function() {
    f10();
  }, 1000);
}

function f10() {
  document.getElementById('countdown').innerText = 1;
  setTimeout(function() {
    f11();
  }, 1000);
}

function f11() {
  document.getElementById('countdown').innerText = "Happy Independence Day!";
}

f1();
