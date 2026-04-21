function compareArrays(arr1, arr2) {
    const result = arr1.every((element, index) => arr1.length === arr2.length && arr2[index] === element)
    return result
}

function getUsersNamesInAgeRange(users, gender) {
    let filt = users.filter(user => user.gender === gender);
    let m = filt.map(user => user.age);
    let avg = m.reduce((a, b) => (a + b / m.length), 0);
    return avg;

}