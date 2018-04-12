var 
	triangle1Area,
	triangle2Area,
	triangle3Area; 
 

function getTriangleArea (a, h){
	
var resoult = a > 0 && h>0 ? a*h/2 : 'Nieprawidłowe dane.';
	
/*	
	if (a>0 && h>0){
		return a*h/2;
	}
	else{
		console.log('Nieprawidłowe dane');
	}
*/
	
	return resoult;
}


console.log(getTriangleArea (10, 20));
