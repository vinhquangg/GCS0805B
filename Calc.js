const calc=(a,b,c)=>{
 if(a && b && c ) {
 return "Please provide all parameters";
 }
switch(c){
	case '+':{
		return a+b;
		break;
	}
	case '-':{
		return a-b;
		break;
	}
	case '*':{
		return a*b;
		break;
	}
	case '/':{
		return a/b;
		break;
	}
	default:{return;}
          }
}
exports.calc=calc;
