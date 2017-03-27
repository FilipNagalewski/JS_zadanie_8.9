function drawTree(n) {
  var a, b, star;
  for (a = 0; a < n; a++) {
    star = '';
    for (b = 0; b <= a * 2; b++) {
      star += '*';
    }
    console.log(star);
  }
}

drawTree(1);
drawTree(2);
drawTree(5);
