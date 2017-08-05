// function([string1, string2],target id,[color1,color2])    
 consoleText([ 'UML', 'Software Engineering', 'Game Design', 'C#', 'Java', 'Ruby'], 'text',['white']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  var first = true;
  var cursor_char = '&#95';
  window.setInterval(function() {
	  if (first){
		if (letterCount === 0 && waiting === false) {
		  waiting = true;
		  target.innerHTML = '<h1>' + 'Sean Levorse'.substring(0, letterCount) + cursor_char + '</h1>'
		  window.setTimeout(function() {
			x = 1;
			letterCount += x;
			waiting = false;
		  }, 1000)
		} else if (letterCount === 'Sean Levorse'.length + 1 && waiting === false) {
		  waiting = true;
		  
		  first = false;
		  letterCount = 0;
		  window.setTimeout(function() {
			target.innerHTML = '<h1>Sean Levorse' + cursor_char + '</h1>';
		  }, 1000)
		  waiting = false;
		} else if (waiting === false) {
		  target.innerHTML = '<h1>' + 'Sean Levorse'.substring(0, letterCount) + cursor_char + '</h1>'
		  letterCount += x;
		}
	}
	else {
		if (letterCount === 0 && waiting === false) {
		  waiting = true;
		  target.innerHTML = '<h1>Sean Levorse</h1>' + words[0].substring(0, letterCount)
		  
		  window.setTimeout(function() {
			var usedColor = colors.shift();
			colors.push(usedColor);
			var usedWord = words.shift();
			words.push(usedWord);
			x = 1;
			target.setAttribute('style', 'color:' + colors[0])
			letterCount += x;
			waiting = false;
		  }, 1000)
		} else if (letterCount === words[0].length + 1 && waiting === false) {
		  waiting = true;
		  window.setTimeout(function() {
			x = -1;
			letterCount += x;
			waiting = false;
		  }, 1000)
		} else if (waiting === false) {
		  target.innerHTML = '<h1>Sean Levorse</h1>' +  words[0].substring(0, letterCount)
		  letterCount += x;
		}
	}
  }, 120)
  window.setInterval(function() {
	if(first){
		if(visible === true){
			cursor_char = '&#95';
		}
		else{
			cursor_char = ' ';
		}
		con.className = 'console-underscore hidden';
	}
	else{
		if (visible === true) {
		  con.className = 'console-underscore hidden'
		  visible = false;

		} else {
		  con.className = 'console-underscore'

		  visible = true;
		}
	}
  }, 400)
}