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

//What do the keyword "export" ? we can use this class elsewhere by importing it
//Which is difference between INT32, INT64 and NUMBER ? In javascript from what I remember all the numbers are 64-bit. In other languages the difference is in the number of bits, then to the memory occupancy that you
//Write below line of code to round the result of "calcArea()" to 2 decimal digits
//return ((this.height * this.weight) / 2).toFixed(2);
//if you need to convert str to float use parseFloat

//Can you explain line 6 and 7 ? Just setting height and weight to the passed value or 0
//Can you write below a line of code to call the method "calcArea()"
//var you = new MyClass3(3, 7);
//you.calcArea();
//Can you write same class above (add lines of code here below) but without make it instantiable ? dont really know
