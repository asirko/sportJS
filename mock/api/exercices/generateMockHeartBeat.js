const fs = require('fs');

const mainPoint = getMajorPoint();
const obj = generateObj(mainPoint);
saveObj(obj);

function generateObj(majorPoint) {
    const obj = [];
    for (let i = 0; i < majorPoint.length - 1; i++) {
        const x1 = majorPoint[i].x * 60;
        const y1 = majorPoint[i].y;
        const x2 = majorPoint[i+1].x * 60;
        const y2 = majorPoint[i+1].y;
        const a = (y2 - y1 ) / (x2 - x1);
        const b = y1 - (x1 * a);

        for (let xi = x1; xi < x2; xi++) {
            const variation = (Math.random() - 0.5) * 5 + (Math.random() - 0.5) * 3 + (Math.random() - 0.5);
            obj.push({ x: xi, y: a * xi + b + variation});
        }
    }
    return obj;
}

function saveObj(obj) {
    fs.writeFile('./temp.json', JSON.stringify(obj, null, 2), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log('The file was saved!');
    });
}

/**
 * Get the main point for the heart beat profile
 * @returns {[*,*,*,*]}
 */
function getMajorPoint() {
    return [
        { x: 0, y: 70 },
        { x: 5, y: 155 },
        { x: 15, y: 170 },
        { x: 20, y: 145 }
    ];
}