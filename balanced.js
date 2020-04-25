const Stack = require('./stack');

function isBalanced(s) {
    let stack = new Stack();
    let map = {
        '(': ')'
    }
    let index;
    for (let i = 0; i < s.length; i++) {
        if (curr === "(") {
            stack.push(curr);
            index = i;
        } else if (curr === ")") {
            if (!stack.top) {
                return `false at index ${i}`;
            }
            let last = stack.pop();
            if (curr !== map[last]) {
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
        if (curr === "(" || curr === '[' || curr === '{') {
            stack.push(curr);
            index = i;
        } else if (curr === ")" || curr === ']' || curr === '}') {
            if (!stack.top) {
                return `false at index ${i}`;
            }
            let last = stack.pop();
            if (curr !== map[last]) {
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
    console.log('s', s.length);
    for (let i = 0; i < s.length; i++) {
        const curr = s[i];
        if (curr === "'" || curr === '"') {
            for (let j = i + 1; j < s.length; j++) {
                if (s[j] !== curr) {
                    continue;
                }
                i = j;
                break;
            }
            // console.log('i', i);
        }

        if (curr === "(" || curr === '[' || curr === '{') {
                stack.push(curr);
                index = i;
        } else if (curr === ")" || curr === ']' || curr === '}') {
            if (!stack.top) {
                return `false at index ${i} no top`;
            }
            let last = stack.pop();
            if (curr !== map[last]) {
                return `false at index ${i} pop parens`;
            }
        }
    }
    // console.log('stack', stack);
    if (stack.top) {
        return `false at index ${index} left over`;
    }
    return true;
}
// true, false, true, false, false, true, false
console.log(isBalancedTotalWithQuotes("([{}])'[][[['()")); // length = 15   true
console.log(isBalancedTotalWithQuotes("([{}])'[][[[()")); // length = 14    false at 
console.log(isBalancedTotalWithQuotes(`([{}])'[]"[[['()`)); // length = 16
console.log(isBalancedTotalWithQuotes(`([{}])"[][[['()`)); // length = 15
console.log(isBalancedTotalWithQuotes("([{}])'[][[['({)")); // length = 16
console.log(isBalancedTotalWithQuotes("'([{}])[][[[()'")); // length = 15
console.log(isBalancedTotalWithQuotes(`([{}]")'[][[['()`)); // length = 16