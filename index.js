
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

//7 passed

function makeInt(n){
  parseInt('n',10);
}
makeInt(a.toString());

//8 ?

makeInt('0x2328');


/*

---parseInt---
//7 SOLVED
describe('makeInt(n)', function() {
  it('parses n as an integer and returns the parsed integer', function() {
    expect(makeInt(a.toString())).toEqual(a)
  })
  
//8
  it('assumes base 10', function() {
    expect(makeInt('0x2328')).toEqual(0)
  })

//9

  it('returns NaN as appropriate', function() {
    expect(isNaN(makeInt('sldkjflksjf'))).toEqual(true)
  })
})

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