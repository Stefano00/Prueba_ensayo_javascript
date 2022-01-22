--c)	Se requiere un reporte con la cantidad de productos de cada categoría, 
--ordenado de mayor a menor cantidad

select c.category_id, c.category_name, count(p.product_id)
from categories c
join products p on c.category_id = p.category_id
group by c.category_id
order by count desc;