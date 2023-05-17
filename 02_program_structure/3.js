let size = 8;
let ans = '';

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        ans += ((j+i)%2 === 1) ? '#' : ' '
    }
    ans += '\n'
}

console.log(ans);