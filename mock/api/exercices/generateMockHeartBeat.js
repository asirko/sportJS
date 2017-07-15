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
        { x: 0.5, y: 165 },
        { x: 1, y: 130 },
        { x: 1.5, y: 165 },
        { x: 2, y: 135 },
        { x: 2.5, y: 170 },
        { x: 3, y: 140 },
        { x: 3.5, y: 180 },
        { x: 4, y: 150 },
        { x: 4.5, y: 180 },
        { x: 5, y: 155 },
        { x: 5.5, y: 185 },
        { x: 6, y: 160 },
        { x: 6.5, y: 185 },
        { x: 7, y: 160 },
        { x: 7.5, y: 185 },
        { x: 8, y: 165 },
        { x: 8.5, y: 190 },
        { x: 9, y: 165 },
        { x: 9.5, y: 195 },
        { x: 10, y: 165 }
    ];

    // [
    //     { x: 0, y: 70 },
    //     { x: 2, y: 130 },
    //     { x: 2.5, y: 110 },
    //     { x: 4.5, y: 140 },
    //     { x: 5, y: 115 },
    //     { x: 7, y: 150 },
    //     { x: 7.5, y: 120 },
    //     { x: 9.5, y: 155 },
    //     { x: 10, y: 130 }
    // ];

    // [
    //     { x: 0, y: 70 },
    //     { x: 1, y: 165 },
    //     { x: 4, y: 180 },
    //     { x: 6, y: 145 },
    //     { x: 7, y: 175 },
    //     { x: 10, y: 185 },
    //     { x: 12, y: 150 },
    //     { x: 13, y: 180 },
    //     { x: 16, y: 190 },
    //     { x: 18, y: 155 },
    //     { x: 19, y: 185 },
    //     { x: 22, y: 195 },
    //     { x: 24, y: 160 }
    // ];
    // [
    //     { x: 0, y: 70 },
    //     { x: 5, y: 155 },
    //     { x: 15, y: 170 },
    //     { x: 20, y: 145 }
    // ];
}
