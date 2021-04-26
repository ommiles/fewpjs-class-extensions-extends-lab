class Polygon {
    constructor(array){
        this.sides = array
    }
    get countSides(){
        return this.sides.length
    }
    get perimeter(){
        return this.sides.reduce((accumulator, currentSidesValue) => accumulator + currentSidesValue)
    }
}
class Triangle extends Polygon {
    get isValid(){
        const side1 = this.sides[0]
        const side2 = this.sides[1]
        const side3 = this.sides[2]
        return ((side1 + side2) > side3 && (side1 + side3) > side2 && (side2 + side3) > side1 ? true : false)
    }
}
class Square extends Polygon {
    get isValid(){
        const side1 = this.sides[0]
        const side2 = this.sides[1]
        const side3 = this.sides[2]
        const side4 = this.sides[3]
        return (side1 === side2 && side2 === side3 && side3 === side4 ? true : false)
    }

    get area(){
        return (Math.pow(this.sides[0], 2))
    }
}