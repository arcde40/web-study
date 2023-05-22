const ellipse = {
  width: 10,
  height: 5,
  getArea() {
    return Math.PI * this.width * this.height;
  },
  getPerimeter() {
    return Math.PI * 2 * Math.sqrt((this.width ** 2 + this.height ** 2) / 2);
  },
  getEccentricity() {
    return Math.sqrt(1 - (this.height / this.width) ** 2);
  },
};

console.log(ellipse.getArea()); // 157.07963267948966
console.log(ellipse.getPerimeter()); // 49.6729413289805
console.log(ellipse.getEccentricity()); // 0.8660254037844386
