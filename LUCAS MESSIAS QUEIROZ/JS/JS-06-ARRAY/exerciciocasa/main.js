var uni = ["HTML", 1993, "CSS", 1996, "Bootstrap", 2011, "JS", 1995, "React", 2013, "Java", 1995]
console.log(uni);

console.log(uni.length);

console.log(uni[6]);

var mudanca1 = uni.toString()
console.log(typeof mudanca1);

var mudanca2 = uni.join(' / ')
console.log(mudanca2);

var mudanca3 = uni.unshift("licaoCasa")
console.log(mudanca3);

console.log(uni);

var bidi = [
    ["HTML", 1993, "CSS", 1996], // linha 0
    ["Bootstrap", 2011, "JS", 1995], // linha 1
    ["React", 2013, "Java", 1995] // linha 2
]
console.log(bidi);

console.log(bidi.length);

console.log(bidi[2][1]);

console.log(`Antes: ${bidi}`);
bidi[1][2] = "JavaScript"
console.log(`Depois: ${bidi}`);

delete bidi[2][2]
console.log(bidi);

var mudanca4 = bidi.push("Pipoca")
console.log(bidi);
