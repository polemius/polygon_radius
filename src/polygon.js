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

function getRadiusPoints(A, B, C, D, radius, width, height, realHeight) {
    const vectorAB = {
        x: A.x - B.x,
        y: A.y - B.y
    }
    const vectorCD = {
        x: C.x - D.x,
        y: C.y - D.y
    }

    const normalVectorX = { x: 1, y: 0 }
    const normalVectorY = { x: 0, y: 1 }

    const radToDeg = (a) => (a * 180) / Math.PI
    const degToRad = (a) => (a * Math.PI) / 180
    const pow2 = (x) => Math.pow(x, 2)
    const sqrt = (x) => Math.sqrt(x)
    const vectorLength = ({ x, y }) => sqrt(pow2(x) + pow2(y))
    const vectorMult = (a, b) => a.x * b.x + a.y * b.y

    const angleVectors = (a, b) => vectorMult(a, b) / (vectorLength(a) * vectorLength(b))

    const tan = (deg) => Math.tan(degToRad(deg))
    const sin = (deg) => Math.sin(degToRad(deg))
    const cos = (deg) => Math.cos(degToRad(deg))
    const acos = (rad) => Math.acos(rad)

    const cosAlpha = angleVectors(vectorAB, vectorCD)
    const alpha = radToDeg(acos(cosAlpha))

    const cosBetaABX = angleVectors(vectorAB, normalVectorX)
    const angleNormalX = radToDeg(acos(cosBetaABX))
    const beta = Math.abs(180 - angleNormalX)

    const cosBetaCDX = angleVectors(vectorCD, normalVectorY)
    const angleNormalY = radToDeg(acos(cosBetaCDX))

    const gamma = Math.abs(180 - angleNormalY)

    // console.log('cosAlpha: ', cosAlpha)
    // console.log('alpha: ', alpha)
    // console.log('beta: ', beta)
    // console.log('gamma: ', gamma)

    // const p = radius / tan(alpha / 2)
    // const pABx = p * cos(beta)
    // const pABy = p * sin(beta)
    // const pCDx = p * sin(gamma)
    // const pCDy = p * cos(gamma)

    // const sumAngles = (alpha + gamma + beta) / 2
    const q = radius / sin(alpha / 2)
    const qx = q * sin(gamma + alpha / 2)
    const qy = Math.abs(q * cos(gamma + alpha / 2))
    const qxCalc = qx + A.x > width ? A.x - qx : A.x + qx
    const qyCalc = qy + A.y > height ? A.y - qy : A.y + qy
    const turn = qx + A.x > width ? 1 : 0
    const Q = { x: qxCalc, y: qyCalc, unit: 'px' }

    // console.log('p: ', p)
    // console.log('pABx: ', pABx)
    // console.log('pABy: ', pABy)
    // console.log('pCDx: ', pCDx)
    // console.log('pCDy: ', pCDy)

    // console.log('q', q)
    // console.log('qx', qx)
    // console.log('q', qy)
    // console.log('Q', Q)
    // console.log('A.x', A.x)

    // const Pab = { x: pABx, y: A.y - pABy, unit: 'px' }
    // const Pcd = { x: pCDx, y: pCDy + C.y, unit: 'px' }

    const toPercent = (value, max) => (value / max) * 100

    const startAngle = 180 - gamma - 10 + Math.pow(180, turn) 
    const finishAngle = 270 - beta - 10 + Math.pow(180, turn)
    const circlePoints = []
    for (let angle = startAngle; angle < finishAngle; angle = angle + 2) {
        const [x, y] = pointsOnCircle(radius, angle, Q.x, Q.y);
        circlePoints.push({ x: toPercent(x, width), y: toPercent(y, realHeight), unit: '%' })
    }

    return [
        //  Pcd,
        ...circlePoints,
        //  Pab,
    ]
}


const pointToString = ({ x, y, unit }) =>
`${x.toFixed(1)}${unit} ${y.toFixed(1)}${unit}`;

export { getRadiusPoints, pointToString }

//   const img = document.querySelector('#image')

//   let points = [
//       {x: 0, y: 0, unit: 'px'},
//       {x: 400, y: 0, unit: 'px'},
//       {x: 400, y: 200, unit: 'px'},
//       {x: 50, y: 180, unit: 'px'}
//   ]

//   const pointToString = ({x, y, unit}) => `${x.toFixed(2)}${unit} ${y.toFixed(2)}${unit}`

//   // calculate angle between these lines
//   const A = points[3]
//   const B = points[0]
//   const C = points[3]
//   const D = points[2]

//   const circlePoints = getRadiusPoints(A, B, C, D, 20)

//   const newPoints = [
//     points[0],
//     points[1],
//     points[2],
//     ...circlePoints,
//     // points[3],
//   ]

//   console.log(newPoints)

//   const polygon = newPoints.map(pointToString).join(',')
//   console.log(polygon)

//   img.style = `clip-path: polygon(${polygon});`
