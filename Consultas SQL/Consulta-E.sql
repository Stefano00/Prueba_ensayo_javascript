--e).- Se requiere un inventario para la tienda Santa Cruz Bike de los productos que 
--tienen en existencia en la categoría Electric Bikes. 

select p.product_id, p.product_name, stocks.quantity 
from categories c
join products p on p.category_id = c.category_id
join stocks on stocks.product_id = p.product_id 
join stores s on stocks.store_id = s.store_id
where s.store_name = 'Santa Cruz Bikes'
and c.category_name = 'Electric Bikes'
order by p.product_name asc;