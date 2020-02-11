
const lines = '|/-\\|/-\\|';
let counter = 0;
for (let line of lines) {
  setTimeout(() => {
    process.stdout.write(`\r${line}  `);
  }, counter * 300)
  counter++
}
setTimeout(() => {
  process.stdout.write('\n');
}, (counter + 1) * 300)

