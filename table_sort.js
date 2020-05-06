let a = [1, 2, 3, 56]
let g = [...a] // a copy of a
let h = a // a reference to a
let b = [2, 3, 4, 56, 'tom']
let c = [null, undefined, 'toots']
let d = [true, false, 'toots', 'poots']
let e = [[], a, 'plot', () => 'party']
let f = [{}, g, 'plot', () => 'party']



function giveDifference(a, b) {
    if(!Array.isArray(a) || !Array.isArray(b)) return new Error('Both params must be a of type : Array')
    let cache = [] 
	for (let i = 0; i < a.length || i < b.length; i++) {
        // if a includes b[value] and b value exits push to cache
        if(!a.includes(b[i]) && b[i]) cache.push(b[i])
        if(!b.includes(a[i] ) && a[i]) cache.push(a[i])
    }
    return cache
}


giveDifference(a, b) //?
giveDifference(a, 'party') //?
giveDifference(c, d) //?
giveDifference(e, f) //?
