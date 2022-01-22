--d).- Se requiere un reporte con la cantidad de inventario de productos por marca, 
--ordenado descendentemente. 

select b.brand_id, b.brand_name, sum(s.quantity)
from brands b
join products p on b.brand_id = p.brand_id
join stocks s on s.product_id = p.product_id
group by b.brand_id
order by sum desc;