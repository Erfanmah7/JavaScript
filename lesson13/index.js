//module
import { userDB } from "./users.js";
import product from "./products.js";
import getUserBasket from "./user-basket.js";

//---------promis time...
// userDB().then((data) => console.log(data));

// product()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error));

//async & await
async function main() {
  try {
    const users = await userDB();
    const products = await product();
    const userbasket1 = await getUserBasket();
    console.log(userbasket1);

    // console.log(users);
    // console.log(products);
  } catch (error) {
    console.error(error);
  }
}

main();
