// in tempalte string we can done dinamic opperation

// arguments method does not work in array function 

// using rest opperator parremers will put array 

// arraow function does not hoisting 

// ekta array er bitor theke elemet gulo ber kore anar method hocce spread opperator

const sum = (...rest) => {
    console.log(rest);
}

sum(1, 2, 3);

const numbers = [1, 2, 3, 4];
console.log(...numbers);

