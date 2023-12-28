let names1 = ["erfan", "ali", "mohammad", "reza", "milad", "reza"];
let names2 = ["mahdi", "mohsen", "amir"];
let names3 = ["react", "js", "node.js", "html", "js"];
let names4 = [5, 6, 1, 6, 9, 5, 1, 7, 4, 3];
let names5 = "alireza, erfan, milad, kazem, amir";

console.log(names2.length); //tedad
console.log(names2.push("hossein")); //end add
console.log(names2.pop()); //end del
console.log(names2.unshift("hassan")); //home add
console.log(names2.shift()); //home del
console.log(names2.at(-2)); //end read
console.log(names1.splice(1, 5)); //az 1 shoro kon ta 5 ta khone boro jelo del kob
console.log(names2.splice(1, 0, "javid", "abolfazl")); //0 del & add javid & abolfazl
console.log(names2.splice(names1.length / 2, 0, "kaveh", "arash")); //vasat add kave & arash
console.log(names2.slice(2, 5)); //show item from index 2 ta 0<5
console.log(names2.slice(-2)); //show item from index end -2
console.log(names1.indexOf("reza")); //read index 3
console.log(names1.lastIndexOf("reza")); //end read index 5
console.log(names1.concat(names2)); //concat names1 with names2
console.log(names1.findIndex((name) => name == "erfan"));
console.log(names1.find((name) => name == "reza")); //if reza return reza else return undefined
console.log(names1.filter((name) => name == "reza")); //new array [reza,reza]
console.log(names3.filter((name) => name.indexOf("js") > -1)); // indexof 0-count new array [js,node.js,js] indexof for string & array
console.log(names1.includes("erfan")); //boolean
console.log(names1.some((item) => item === "milad")); //boolean & hadeaghal
console.log(names1.every((item) => item.indexOf() > 2)); //boolean & all
console.log(names4.map((item) => item * 2)); //edit array & ...
console.log(names4.sort((a, b) => a - b)); //sort a-b & b-b
let newarray = names5.split(", ");// joda mikoneh ba , for string , splite != join
console.log(newarray); //[, , , ]
console.log(newarray.join(", "));// , , , , splite != join , for array
console.log(names4.reduce((prev,curr)=> prev + curr , 0)); // meghdar avaliye perv == 0 & meghdar curr == names4
console.log(Array.isArray([])); //type of

console.log(
  names2.forEach((item, key) => {
    console.log(item, " : ", key);
  })
);

for (const item of names1) {
  console.log(item);
}
