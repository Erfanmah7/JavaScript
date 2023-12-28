import product from "./products.js";
import { userDB } from "./users.js";

let userBasket = [
  { id: 1, productID: 1, userID: 2, count: 2 },
  { id: 2, productID: 2, userID: 2, count: 3 },
  { id: 3, productID: 4, userID: 2, count: 1 },
  { id: 4, productID: 3, userID: 2, count: 5 },
];

async function getUserBasket() {
    
  const products = await product();
  for (const product of products) {
      await userBasket.map(async (item) => {

      if ((item.productID = product.id)) {
        
        item.produc = await product;
        item.totalprice = (await product.price) * item.count;

        const users = await userDB();
        item.users = await users.find((user) => user.id == item.userID);
      }

    //   console.log(item);
      return await item;

    });
    
  }

return userBasket;

}

export default await getUserBasket;
