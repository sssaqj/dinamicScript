window.onload = function() {
  var foo = document.getElementById('foo');
  foo.onmouseover = function() {
    this.className = 'foo-after';
  }
  foo.onmouseout = function() {
    this.className = 'foo-before';
  }

  var bar = document.getElementById('bar');
  bar.onmouseover = function() {
    var style = this.style;
    style.backgroundColor = 'pink';
    style.color = 'blue';
  }
  bar.onmouseout = function() {
    var style = this.style;
    style.backgroundColor = 'white';
    style.color = 'black';
  }

  var baz = document.getElementById('baz');
  baz.onmouseover = function() {
    document.getElementById('style-a').disabled = true;
    document.getElementById('styel-b').disabled = false;
  }
  baz.onmouseout = function() {
    document.getElementById('style-a').disabled = false;
    document.getElementById('style-b').disabled = true;
  }
}
