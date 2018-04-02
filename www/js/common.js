// Common ajax function
function submitAjaxRequest(url,type,data,onsuccess) {
$.ajax({
            
            url:url,
            method:type,
            contentType:"application/json",
            data:data,
            
            success:onsuccess,
         
            error:function(res) {
              
              console.log(res.responseText);
            }
          });
}


function filteringProduct(json){
    json = json.map(function(item){
      return {
        product_ID: item.id,
        title: item.title,
        variant_id: item.variants[0].id,
        taxable:item.variants[0].taxable,
        price: item.variants[0].price,
        src: item.images[0].src,
      }
    })
    return json;
}
