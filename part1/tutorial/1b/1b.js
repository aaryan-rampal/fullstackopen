const x = 1
let y = 5


console.log(x, y)   // 1, 5 are printed
y += 10
console.log(x, y)   // 1, 15 are printed
y = 'sometext'
console.log(x, y)   // 1, sometext are printed

const t = [1, -1, 3]

t.push(5)

console.log(t.length) // 4 is printed
console.log(t[1])     // -1 is printed
console.log()

t.forEach(value => {
  t.push(value+1)  // numbers 1, -1, 3, 5 are printed, each on its own line
})          

t.forEach(value => {
	console.log(value);
}
)

// immutable data structures
const t1 = [1, -1, 3]
const t2 = t1.concat(5)  // creates new array

console.log(t1)  // [1, -1, 3] is printed
console.log(t2) // [1, -1, 3, 5] is printed

const m2 = t2.map(value => "<li>" + value + "</li>")
console.log(m2)



console.log("testing out ...rest")
const t3 = [1, 2, 3, 4, 5]
const [first, second, third, fourth, fifth, sixth, ...rest] = t3

console.log(first, second, third, fourth, fifth, sixth)  // 1, 2 is printed
console.log(rest)          // [3, 4, 5] is printed
