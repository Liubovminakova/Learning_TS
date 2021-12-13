function add(a:number, b: number): number {
  return a + b
}

function toUppercase(str: string): string {
  return str.trim().toUppercase()
}

interface MyPosition {
  x: number | underfined
  y: number | underfined
}

interface MyPositionWithDefault extends MyPosition {
  default: string
}

function position(): MyPosition
function position (a: number): MyPositionWithDefault
function position (a: number, b: number): MyPosition

function position(a?: number, b?: number){
  if(!a && !b) {
    return {x: underfined, y: underfined}
  }

  if (a && !b) {
    return {x: a, y: underfined, default: a.toString()}
  }

  return {x: a, y: b}
}

console.log('Empty: ', position())
console.log('One param: ', position(a:42))
console.log('Two param: ', position(a:10, b:15))
