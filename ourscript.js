// JavaScript Document
function checkout(productid,productname,prodimage,productprice)
{
	if(localStorage.getItem('productcart')!=null)
	{
		
		var productcart=JSON.parse(localStorage.productcart);
		//alert(productcart[productid]);
		if(productcart[productid]+''!='undefined')
		{
			//alert('');
			productcart[productid].qty+=1;
			localStorage.productcart=JSON.stringify(productcart);
			
		}
		else
		{
			productcart[productid]=new Object();
			productcart[productid]['id']=productid;
			productcart[productid]['name']=productname;
			productcart[productid]['image']=prodimage;
			productcart[productid]['price']=productprice;
			productcart[productid]['qty']=1;
			localStorage.productcart=JSON.stringify(productcart);
		}
	}
	else
	{
		
		var productcart = new Object();
		productcart[productid]=new Object();
		productcart[productid]['id']=productid;
		productcart[productid]['name']=productname;
		productcart[productid]['image']=prodimage;
		productcart[productid]['price']=productprice;
		productcart[productid]['qty']=1;
		localStorage.productcart=JSON.stringify(productcart);	
	}
}
