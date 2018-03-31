
var a = 2;
var b = 1;


//1 passed
function add(a, b) {
  return a+b
}

//2 passed
function subtract(a, b) {
  return a-b
}

//3 passed
function multiply(a, b) {
  return a*b
}

//4 passed
function divide(a, b) {
  return a/b 
}

//5 passed
function inc(n) {
  return n+=1;
}

inc(a);

//6 passed
function dec(n) {
  return n-=1;
}

dec(a);

//7 8 9 passed


function makeInt(n) {
 return parseInt(n,10);
}
makeInt(a.toString())
makeInt('0x2328')
makeInt('sldkjflksjf')


function preserveDecimal(n)
/*

---parseInt---


//10

describe('preserveDecimal(n)', function() {
  it('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number', function() {
    expect(preserveDecimal('2.222')).toBe(2.222)
  })

//11
  
  it('returns NaN as appropriate', function() {
    expect(isNaN(preserveDecimal('sldkjflksjf'))).toEqual(true)
  })
})



*/