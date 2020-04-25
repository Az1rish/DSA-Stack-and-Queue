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
    let index;
    let skip = false;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "'" || s[i] === '"') {
            skip = true;
        }
        if (skip === true && (s[i] === "'" || s[i] === '"')) {
            skip = false;
        }
        if (skip = false) {
            if (s[i] === "(" || s[i] === '[' || s[i] === '{') {
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
    }
    if (stack.top) {
        return `false at index ${index} left over`;
    }
    return true;
}
// true, false, true, false, false, true, false
console.log(isBalancedTotalWithQuotes("([{}])'[][[['()"));
console.log(isBalancedTotalWithQuotes("([{}])'[][[[()"));
console.log(isBalancedTotalWithQuotes(`([{}])'[]"[[['()`));
console.log(isBalancedTotalWithQuotes(`([{}])"[][[['()`));
console.log(isBalancedTotalWithQuotes("([{}])'[][[['({)"));
console.log(isBalancedTotalWithQuotes("'([{}])[][[[()'"));
console.log(isBalancedTotalWithQuotes(`([{}]")'[][[['()`));