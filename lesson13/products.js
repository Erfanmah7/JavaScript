const products = [

    {id:1,title:"macbook pro m2",price:200},
    {id:2,title:"ipad pro",price:150},
    {id:3,title:"iphon pro 14",price:50},
    {id:4,title:"laptop asus",price:20}
    
    ];
    
function product() {
    
  return new Promise((resolve, reject) => {
    if (products.length > 0)  resolve(products)
    else reject(new Error("not find products")); 
    
  })

}

export default product;