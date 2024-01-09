const sum = (p1, p2) => {
	return p1+p2
}

const square = x => {
	return x * x
}

const cube = x => x * x * x

const result = sum(1,3)
console.log(result)
console.log(square(result))
console.log(cube(result))

const t = [1, 2, 3]
const tSquared = t.map(square)
const tCubed = t.map(x => x * x * x)
console.log(t, tSquared, tCubed)