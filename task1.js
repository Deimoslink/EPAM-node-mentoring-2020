const process = require('process');

process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
    const input = process.stdin.read();
    if (input) {
        const reversedInput = Array.from(input)
            .filter(char => char !== '\r' && char !== '\n')
            .reverse()
            .join('');

        process.stdout.write(reversedInput + '\r\n');
    }
});
