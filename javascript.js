//1
function asy() {
  const successPromise = new Promise((resolve, reject) => {
    resolve("success!");
  });
  return successPromise;
}
asy().then((res) => console.log(res));
//2
  function names(fName, lName) {
  const successPromise =  new Promise((resolve, reject) => {
    resolve(fName + " " + lName);
  });
  return successPromise;
}

const fName = "ori";
const lName = "shulman";
names(fName, lName).then((res) => console.log(res));

//3

function multiplyByTwo(num) {
    const apromise = new Promise((resolve, reject) => {
    setTimeout(() => {resolve(num * 2) }, 500); 
    }
    )
    return apromise;
}
function addFive(num) {
    const addPromise = new Promise((resolve, reject) => {
    setTimeout(() => {resolve(num + 5) }, 500); 
    }
    )
    return addPromise;
}
function subtractTen(num) {
    const subPromise = new Promise((resolve, reject) => {
    setTimeout(() => {resolve(num - 10) }, 500); 
    }
    )
    return subPromise;
}

multiplyByTwo(66).then( (num) => addFive(num)).then((num) => subtractTen(num)).then((num)=> console.log(num));

//4.
function divide (num1 , num2) {
    const dividePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (num2 === 0) {
            reject ('cant divide');
        }
        else{
        resolve(num1 % num2)
    }
    } , 500); 
           })
           return dividePromise
}

divide(10,5).then((p)=> console.log(p)).catch((p)=> console.log(p));

//5
//a
async function names(fName, lName) {
    const successPromise = await new Promise((resolve, reject) => {
      resolve(fName + " " + lName);
    });
     return successPromise;
  }
//b
async function asyfunc() {
    const first = await multiplyByTwo(66);
    const secont = await multiplyByTwo(first);
    const three = await multiplyByTwo(secont);
    return three;
}

//
async function asyDivide() {
    try {
        const divide = await divide(10 ,3); 
        console.log(p); 
    } catch (error) {
        console.log(error);
        
    }
    
}

asyDivide();

