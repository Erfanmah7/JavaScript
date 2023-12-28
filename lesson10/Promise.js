//Promise
//sync - async

let state = "success";
let users = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (state == "success") {
      resolve([{
        id: 1,
        name: "erfan",
        family: "mohiti",
        age: 23,
      }]);
    } else {
      reject(new Error("not found any user"));
    }
  }, 1000);
});



users
  .then((data) => {
    return data.map((item) => {
      return {
        ...item,
        userName: item.name + "sysChange",
      };
    });
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// users
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("hello test finally"));
