/**
 * Calculate x and y in circle's circumference
 * @param {Object} input - The input parameters
 * @param {number} input.radius - The circle's radius
 * @param {number} input.angle - The angle in degrees
 * @param {number} input.cx - The circle's origin x
 * @param {number} input.cy - The circle's origin y
 * @returns {Array[number,number]} The calculated x and y
 */
function pointsOnCircle(radius, angle, cx, cy) {
    angle = angle * (Math.PI / 180); // Convert from Degrees to Radians
    const x = cx + radius * Math.cos(angle);
    const y = cy + radius * Math.sin(angle);
    return [x, y];
}


const radToDeg = (a) => (a * 180) / Math.PI
const degToRad = (a) => (a * Math.PI) / 180
const toPercent = (value, max) => (value / max) * 100


function getLength(dx, dy) {
    return Math.sqrt(dx * dx + dy * dy);
}

function getProportionPoint(point, segment, length, dx, dy) {
    const factor = segment / length;

    return {
        x: point.x - dx * factor,
        y: point.y - dy * factor
    }
}

function getRadiusPoints(angularPoint, p1, p2, radius, width, height, step) {
    // Algorithm from here https://stackoverflow.com/questions/24771828/algorithm-for-creating-rounded-corners-in-a-polygon#answer-24780108
    // Vector 1
    const dx1 = angularPoint.x - p1.x;
    const dy1 = angularPoint.y - p1.y;

    // Vector 2
    const dx2 = angularPoint.x - p2.x;
    const dy2 = angularPoint.y - p2.y;

    // Angle between vector 1 and vector 2 divided by 2
    const angle = (Math.atan2(dy1, dx1) - Math.atan2(dy2, dx2)) / 2;

    // The length of segment between angular point and the
    // points of intersection with the circle of a given radius
    const tan = Math.abs(Math.tan(angle));
    let segment = radius / tan;

    const length1 = getLength(dx1, dy1);
    const length2 = getLength(dx2, dy2);

    const length = Math.min(length1, length2);

    if (segment > length) {
        segment = length;
        radius = length * tan
    }

    // Points of intersection are calculated by the proportion between 
    // the coordinates of the vector, length of vector and the length of the segment.
    const p1Cross = getProportionPoint(angularPoint, segment, length1, dx1, dy1);
    const p2Cross = getProportionPoint(angularPoint, segment, length2, dx2, dy2);

    // Calculation of the coordinates of the circle 
    // center by the addition of angular vectors.
    const dx = angularPoint.x * 2 - p1Cross.x - p2Cross.x;
    const dy = angularPoint.y * 2 - p1Cross.y - p2Cross.y;

    const L = getLength(dx, dy);
    const d = getLength(segment, radius);

    const circlePoint = getProportionPoint(angularPoint, d, L, dx, dy);

    let startAngle = Math.atan2(p1Cross.y - circlePoint.y, p1Cross.x - circlePoint.x);
    let endAngle = Math.atan2(p2Cross.y - circlePoint.y, p2Cross.x - circlePoint.x);

    let sweepAngle = endAngle - startAngle;

    if (sweepAngle < 0) {
        let tmp = startAngle
        startAngle = endAngle
        endAngle = tmp
        sweepAngle = -sweepAngle
    }

    if (sweepAngle > Math.PI) {
        sweepAngle = Math.PI - sweepAngle
    }

    let startAngleDeg = radToDeg(startAngle)
    let endAngleDeg = radToDeg(endAngle)

    if (sweepAngle < 0) {
        if (startAngleDeg < 0) {
            startAngleDeg = 360 + startAngleDeg
        }
        if (endAngleDeg < 0) {
            endAngleDeg = 360 + endAngleDeg
        } 
        let tmp = startAngleDeg
        startAngleDeg = endAngleDeg
        endAngleDeg = tmp
    }

    const circlePoints = []
    for (let angle = startAngleDeg; angle < endAngleDeg; angle = angle + step) {
        const [x, y] = pointsOnCircle(radius, angle, circlePoint.x, circlePoint.y);
        circlePoints.push({ x: toPercent(x, width), y: toPercent(y, height), unit: '%' })
    }
    
    return [
        ...circlePoints
    ]
}

const pointToString = ({ x, y, unit }) =>
    `${x.toFixed(1)}${unit} ${y.toFixed(1)}${unit}`;

export { getRadiusPoints, pointToString }
