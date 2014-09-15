// JavaScript Document
function countItems()
{
	if(localStorage.getItem('nooiItems')!=null)
	{
		localStorage.nooiItems=(parseInt(localStorage.nooiItems)+1);
	}
	else
	{
		localStorage.nooiItems=1;
	}
}
function checkout(productid,productname,prodimage,productprice)
{
	
	
		var productcart1 = new Object();
		productcart1[productid]=new Object();
		productcart1[productid]['id']=productid;
		productcart1[productid]['name']=productname;
		productcart1[productid]['image']=prodimage;
		productcart1[productid]['price']=productprice;
		productcart1[productid]['qty']=1;		
		localStorage.productcart1=JSON.stringify(productcart1);	
	if(localStorage.getItem('productcart')!=null)
	{
		
		var productcart=JSON.parse(localStorage.productcart);
		//alert(productcart[productid]);
		if(productcart[productid]+''!='undefined')
		{
			//alert('');
			productcart[productid].qty+=1;
			countItems();
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
			countItems();
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
		countItems();
		localStorage.productcart=JSON.stringify(productcart);	
	}
	window.location="screen-4.html";
}
$(document).ready(function() {
			if(localStorage.getItem('signinid')!=null)
			{
				$('#nav-signin-text').html(localStorage.signinid);
			}
			if(localStorage.getItem('nooiItems')!=null)
			{
				
				$('#nav-cart-count').html(localStorage.nooiItems);
			}
            $('#nav-your-account').click(function(e) {
                e.preventDefault();
				if(localStorage.getItem('signinid')!=null)
				{
					
				}
				else
				{
					window.location=$(this).attr('href');
				}
				
            });
        });