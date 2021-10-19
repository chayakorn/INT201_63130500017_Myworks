function sumStaked(str = 'hello') {
    return (str1) => { str += ` ${str1}`; return str }
}
export { sumStaked }

let add = (() => {
    return () => { return 0; }
});
console.log(add);