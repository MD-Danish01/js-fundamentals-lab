function Max(...numbers) {
    let result = -Infinity;
    for (const number of numbers) {
        if (number > result) {
            result = number;
        }
    }
    return result;
}

const numbers = [23, 45, 4, 34, 54, 67, 13, 84, 12, 82]

// console.log(Max(32, 45, ...numbers, 12, 53, 34, 32, 3, 90))

let cordinates = {
    x: 0,
    y: 0
}

// console.log({ ...cordinates, y: 32, Z: 12, x: 55, y: 100 });

function randomPointToCircle(radius) {
    let angle = Math.random() * 2 * Math.PI;
    return {
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle)
    }
}

// console.log(randomPointToCircle(4));

// console.log(Math.floor(Math.random() * 100));

// console.log(Math.ceil(Math.random() * 10));
// console.log(Math.round(Math.random() * 10));

const nums = [1, 2, 3, 4, 5, 6, 7, 8];
function phi(numbers) {
    return (numbers[1] + numbers[0] + numbers[6]) / (numbers[3] * numbers[4]);
}

// console.log(phi(nums));

// destructuring in arrays
function phi1([n1, n2, n3, n4]) {
    // console.log(n1, n2, n3, n4);

    return ((n1 + n2 + n3) / (n1 * n2));
}

// console.log(phi1(nums));

const [n1, n2, n3, n4] = nums;
// console.log(n1 ,n4);

// destructuring in objects
const user = {
    id: 100,
    name: "john doe",
    age: 34,
    isActive: true,
    admin: null,
    null: null
}

const { id, name, admin, } = user;
// console.log(name, admin);

// optional property access
function city(user) {
    return user.address?.city;
}

// console.log(city({ name: "john doe", address: { city: "delhi", state: "india" } }));
// console.log(city({name: "john doe"}));

// JSON (JavaScript Object Notation) a data serialization format

const data = {
    "id" : 37253,
    "name" : "john doe",
    "food" : ["honey", "berad", "coffee", "tea", "sugger"],
    "isActive": false,
    "address" : {
        "city": "beging",
        "country": "china",
        "pin-code": 224334
    },
    //this is email
    "email": "johndoe@gmail.com",
    "phone": 343413135
}

const stringData = JSON.stringify(data, 2, 2);
console.log(stringData);

const parsedData = JSON.parse(stringData)
console.log(parsedData);


