var toIso = (t) => {
    const s = (i) => t.slice(i,i+2)
    return `20${s(0)}-${s(2)}-${s(4)}T${s(7)}:${s(9)}:${s(11)}Z`
} 

var toDate =  r => {
    return new Date(toIso(r.name.slice(-13)));
}

var north = require('./2018-north-resources.json').resources
var south = require('./2018-south-resources.json').resources

north.forEach( r=> {
    r.name = `North/2018/${r.name}`;
})

south.forEach( r=> {
    r.name = `South/2018/${r.name}`;
})
var resources = north.concat(south)

compareResources = (a, b) => { 
    return toDate(a) - toDate(b)
}

resources.sort(compareResources)





















/*
var addDates =  r => {
    r.date = new Date(toIso(r.name));
    return r;
}
south.forEach(addDates)
north.forEach(addDates)

let myNorth = north[north.length/2]

let minDist = Infinity
let closestSouth

south.forEach( r => {
    let dist = Math.abs(myNorth.date - r.date)
    if(dist < minDist) {
        minDist = dist
        closestSouth = r
    }
})

console.log(closestSouth)
console.log(myNorth)
console.log((closestSouth.date - myNorth.date)/60/60/1000)
*/
