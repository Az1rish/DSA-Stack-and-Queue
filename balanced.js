const Stack = require('./stack');

function isBalanced(s) {
    let stack = new Stack();
    let map = {
        '(': ')'
    }
    let index;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(s[i]);
            index = i;
        } else if (s[i] === ")") {
            if (!stack.top) {
                return `false at index ${i}`;
            }
            let last = stack.pop();
            if (s[i] !== map[last]) {
                return `false at index ${i}`;
            }
        }
    }
    if (stack.top) {
        return `false at index ${index}`;
    }
    return true;
}
// true, false 2, false 4, false 10, true, false 10
// console.log(isBalanced("hi (there)"));
// console.log(isBalanced("hi) (there)"));
// console.log(isBalanced("hi ((there)"));
// console.log(isBalanced("hi (there))"));
// console.log(isBalanced("(hi) (there)"));
// console.log(isBalanced("hi (there)("));

function isBalancedTotal(s) {
    let stack = new Stack();
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    let index;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === '[' || s[i] === '{') {
            stack.push(s[i]);
            index = i;
        } else if (s[i] === ")" || s[i] === ']' || s[i] === '}') {
            if (!stack.top) {
                return `false at index ${i}`;
            }
            let last = stack.pop();
            if (s[i] !== map[last]) {
                return `false at index ${i}`;
            }
        }
    }
    if (stack.top) {
        return `false at index ${index}`;
    }
    return true;
}
// true, false, true, false, true, true
// console.log(isBalancedTotal('({[]})'));
// console.log(isBalancedTotal('({[)]})'));
// console.log(isBalancedTotal('({}){[]}'));
// console.log(isBalancedTotal('({})[](})'));
// console.log(isBalancedTotal('({})[({})]'))
// console.log(isBalancedTotal('({}[]{})'));

function isBalancedTotalWithQuotes(s) {
    let stack = new Stack();
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    let quotes = {
        "'": "'",
        '"': '"'
    };
    let index;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "'" || s[i] === '"') {
            stack.push(s[i]);
            index = i;
            for (let j = index + 1; j < s.length; j++) {
                console.log('top', stack.top);
                if (s[j] === "'" || s[j] === '"') {
                    // if (!stack.top) {
                        // return `false at index ${i}`;
                    // }
                    let last = stack.pop();
                    if (s[j] !== quotes[last]) {
                        return `false at index ${i} pop quotes`;
                    }
                }
            }
        } else if (s[i] === "(" || s[i] === '[' || s[i] === '{') {
            stack.push(s[i]);
            index = i;
        } else if (s[i] === ")" || s[i] === ']' || s[i] === '}') {
            if (!stack.top) {
                return `false at index ${i} no top`;
            }
            let last = stack.pop();
            if (s[i] !== map[last]) {
                return `false at index ${i} pop parens`;
            }
        }
    }
    if (stack.top) {
        return `false at index ${index} left over`;
    }
    return true;
}
// true
console.log(isBalancedTotalWithQuotes("([{}])'[][[['()"));