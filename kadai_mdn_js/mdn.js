const time = new Date;
const year = time.getFullYear();
const month = time.getMonth() + 1;
const date = time.getDate();
const output = year + "年" + month + "月" + date + "日";
console.log(output);