export class MyClass3 {
	height: number;
	weight: number;

	constructor(height: number, weight: number) {
		this.height = height || 0;
		this.weight = weight || 0;
	}

	calcArea() {
		return (this.height * this.weight) / 2;
	}
}

//What do the keyword "export" ?
//Which is difference between INT32, INT64 and NUMBER ?
//Write below line of code to round the result of "calcArea()" to 2 decimal digits
//Can you explain line 6 and 7 ?
//Can you write below a line of code to call the method "calcArea()"
//Can you write same class above (add lines of code here below) but without make it instantiable ?
