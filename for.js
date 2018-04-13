for (var i = 0; i < 5; i++) {  
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
    btn.addEventListener('click', function(){ 
        console.log(i); 
    });  
    document.body.appendChild(btn);
}

for (var i = 0; i < 5; i++) {  
	var btn = document.createElement('button');
  	btn.appendChild(document.createTextNode('Button ' + i));
  	btn.addEventListener('click', (function(i) {    
			return function() { 
				console.log(i); 
			};
  		})(i));  
	document.body.appendChild(btn);
}

for (var i = 0; i < 5; i++) {  
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
   (function (i) {
     btn.addEventListener('click', function() { 
         console.log(i); 
        });
   })(i);  
   document.body.appendChild(btn);
}

['a', 'b', 'c', 'd', 'e'].forEach(function (value, i) {  
    var btn = document.createElement('button');
   btn.appendChild(document.createTextNode('Button ' + i));
   btn.addEventListener('click', function() { 
       console.log(i); 
    });  
    document.body.appendChild(btn);
});