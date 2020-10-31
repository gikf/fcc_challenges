function brain(prog) {
    let pointer = 0;
    const memory = [0];

    const code = prog.split('')
    const result = [];

    const brackets = [];
    const stack = [];
    let prevBracket = -1
    for (let i = 0; i < code.length; i++) {
        if (code[i] == '[') {
            stack.push(i);
        } else if(code[i] == ']') {
            if (stack.length == 0) {
                return 'error';
            }
            prevBracket = stack.pop();
            brackets[i] = prevBracket;
            brackets[prevBracket] = i;
        }
    }
    
    let i = 0
    const actions = {
            '>': () => {
                pointer++;
                if (pointer >= memory.length) {
                    memory.push(0);
                }
            },
            '<': () => pointer--,
            '+': () => memory[pointer]++,
            '-': () => memory[pointer]--,
            '.': () => result.push(String.fromCharCode(memory[pointer])),
            ',': () => '',
            '[': () => {
                if (!memory[pointer]) {
                    i = brackets[i];
                }
            },
            ']': () => {
                if (memory[pointer]) {
                    i = brackets[i];
                }
            }
        }

    for (i = 0; i < code.length; i++) {
        const inst = code[i];
        if (actions.hasOwnProperty(inst)) {
            actions[inst]();
        }
    }
    return result.join('')
}
