class PiEstimator {
  radius;
  pointsInsideCircle;
  pointsOutsideCircle;
  center;

  constructor(radius) {
    this.radius = radius;
    this.reset();
  }

  reset() {
    this.pointsInsideCircle = [];
    this.pointsOutsideCircle = [];
    this.center = {
      x: this.radius,
      y: this.radius
    };
  }

  getPointsInsideCircle() {
    return this.pointsInsideCircle.length;
  }

  getTotalPoints() {
    return this.getPointsInsideCircle() + this.pointsOutsideCircle.length;
  }

  getEstimatedPiValue() {
    return (4.0 * this.getPointsInsideCircle()) / this.getTotalPoints();
  }

  addRandomPoint() {
    this.add(this.generateRandomPoint());
  }

  add(point) {
    if (this.isPointInsideTheCircle(point)) {
      this.pointsInsideCircle.push(point);
    } else {
      this.pointsOutsideCircle.push(point);
    }
  }

  isPointInsideTheCircle(point) {
    let d = this.getDistance(point, this.center);
    return d < this.radius * this.radius;
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
