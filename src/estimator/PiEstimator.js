class PiEstimator {
  radius;
  stimatedPoints;
  pointsInsideCircle;
  pointsOutsieCircle;
  center;

  constructor(radius = 50) {
    this.radius = radius;
    this.reset();
  }

  reset() {
    this.pointsInsideCircle = [];
    this.pointsOutsieCircle = [];
    this.center = {
      x: this.radius,
      y: this.radius
    };
  }

  getEstimatedPiValue() {
    return (
      (4.0 * this.pointsInsideCircle.length) /
      (this.pointsInsideCircle.length + this.pointsOutsieCircle.length)
    );
  }

  addRandomPoint() {
    this.add(this.generateRandomPoint());
  }

  add(point) {
    let d = this.getDistance(point, this.center);
    if (d < this.radius * this.radius) {
      this.pointsInsideCircle.push(point);
    } else {
      this.pointsOutsieCircle.push(point);
    }
  }

  generateRandomPoint() {
    return {
      x: this.generateRandomComponent(),
      y: this.generateRandomComponent()
    };
  }

  generateRandomComponent() {
    return Math.floor(Math.random() * (2 * this.radius));
  }

  getDistance(point1, point2) {
    return Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2);
  }
}

export default PiEstimator;
