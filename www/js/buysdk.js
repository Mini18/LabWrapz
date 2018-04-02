
//   var client = Client.

	/* Build new ShopifyBuy client
	============================================================ */
	// var client = ShopifyBuy.buildClient({
    //     apiKey: '76c319842babb807c45bc61f207517d5', // Your SDK API/access token
    //     domain: 'labratz.myshopify.com', // Your complete Shopify store domain
    //     appId:"c180d58135ecbb455c72fc93a2ce0dcb"
    // });
    var client = ShopifyBuy.buildClient({
        domain: 'labratz.myshopify.com',
        storefrontAccessToken: '784edd6d37e7dea2fbae93dd1a9242e8'
      });
      client.product.fetchAll().then((collections) => {
        // Do something with the collections
        console.log(collections);
        // console.log(collections[0].products);
      });
    var cart_id = "Z2lkOi8vc2hvcGlmeS9DaGVja291dC8zZGE0NjY0NzE1YzZmMjMyM2FmNjI0MzAwZmUzMjNkNT9rZXk9MzQwMjExMmI1MWRkZWY3MGVkN2JmZDZjZjVmYzA4NjU=";
   
    // var product_id = "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU4MzQxNzc1NzczMg==";
   
    client.checkout.create().then((checkout) => {
        // Do something with the checkout
        console.log(checkout);
        localStorage.setItem('checkoutid',checkout.id);
      // Do something with the updated checkout
      console.log(checkout.lineItems); // Array with one additional line item
    });

    function Add_Product()
{ 
  // alert("it's working");
  client.product.fetch("Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU4MzQxNzc1NzczMg==").then((product) => {
    // Do something with the product
    console.log(product);
  });
  
  // let id=localStorage.getItem("checkoutid");
  // alert(id);
  // var lineItemsToAdd = [
  //       {variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC83MzA5ODMxMTQzNDYw', quantity: 1}
  //     ];
  // client.checkout.addLineItems(id, lineItemsToAdd).then((checkout) => {
  //       console.log(checkout )
  //     })
  // client.checkout.fetch(id).then((checkout) => {
  // // Do something with the checkout
  // alert()
  // console.log(checkout);
// });
}

    

   
