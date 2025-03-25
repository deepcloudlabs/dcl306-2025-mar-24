export function createDigit(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function createSecret(level) {
    let digits = [createDigit(1,9)];
    while (digits.length < level){
        let candidate = createDigit(0,9);
        if (digits.includes(candidate)) continue;
        digits.push(candidate);
    }
    return digits.join('');
}

