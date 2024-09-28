// Scope Example
function scopeExample() {
    let outerVar = "I am outside!";

    function innerScope() {
        let innerVar = "I am inside!";
        document.getElementById('scopeResult').innerText = `${outerVar} ${innerVar}`;
    }

    innerScope();
    // Trying to access innerVar here would cause an error
    // console.log(innerVar); // Uncaught ReferenceError: innerVar is not defined
}

// Callback Example
function processUserInput(callback) {
    let name = "Rama Krishna";
    callback(name);
}

function displayName(name) {
    document.getElementById('callbackResult').innerText = `Hello, ${name}!`;
}

function callbackExample() {
    processUserInput(displayName);
}

// Higher-Order Function Example
function higherOrderExample() {
    const numbers = [1, 2, 3, 4, 5];

    // A higher-order function (HOF) takes another function as an argument
    function square(number) {
        return number * number;
    }

    const squaredNumbers = numbers.map(square); // map is a higher-order function
    document.getElementById('higherOrderResult').innerText = `Squared Numbers: ${squaredNumbers.join(', ')}`;
}

// Array Iteration Methods Example
function arrayIterationExample() {
    const numbers = [1, 2, 3, 4, 5];
    
    // forEach example
    let forEachResult = '';
    numbers.forEach((num) => {
        forEachResult += num + " ";
    });

    // map example (already shown in higher-order functions)
    const mappedResult = numbers.map(num => num * 2);

    // filter example
    const filteredResult = numbers.filter(num => num > 2);

    // reduce example
    const reducedResult = numbers.reduce((acc, num) => acc + num, 0);

    document.getElementById('arrayMethodsResult').innerText = `
        forEach: ${forEachResult.trim()}
        map (doubled): ${mappedResult.join(', ')}
        filter (greater than 2): ${filteredResult.join(', ')}
        reduce (sum): ${reducedResult}
       `;
}
 