function findType(param) {
    return typeof param
}

function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

function map(array, callback) {
    let resultMap = [];
    forEach(array, (el) => {
        resultMap.push(callback(el));
    });
    return resultMap;
}

function filter(array, callback) {
    let resultFilter = [];
    forEach(array, (el) => {
        if (callback(el)) {
            resultFilter.push(el);
        }
    });
    return resultFilter;
}

function getAdultAppleLovers(data) {
    return map(filter(data, el => el.age > 18 && el.favoriteFruit === 'apple'), el => el.name);
}

function getKeys(object) {
    let resultKeys = [];
    for (let prop in object) {
        if (object.hasOwnProperty(prop)) {
        resultKeys.push(prop);
    }
}
    return resultKeys;
}

function getValue(obj) {
    let resultValue = [];
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
        resultValue.push(obj[prop]);
    }
}
    return resultValue;
}

function showFormattedDate(date) {
    let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `It is ${date.getDate()} of ${month[date.getMonth()]}, ${date.getFullYear()} `;
}
