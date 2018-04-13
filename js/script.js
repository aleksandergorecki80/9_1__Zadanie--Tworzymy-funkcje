var 
	triangle1Area,
	triangle2Area,
	triangle3Area; 
 

function getTriangleArea (a, h){	
	var resoult = a > 0 && h>0 ? a*h/2 : 'Nieprawidłowe dane.';
	return resoult;
}


console.log(getTriangleArea (10, 20));

triangle1Area = getTriangleArea(10, 20);
triangle2Area = getTriangleArea(5, -10);
triangle3Area = getTriangleArea(6, 16.5);


 document.write(
				'Pole 1: ' + triangle1Area + '<br>'
			+	'Pole 2: ' + triangle2Area + '<br>'
			+	'Pole 3: ' + triangle3Area + '<br>'
			); 
 
 
 
 
 