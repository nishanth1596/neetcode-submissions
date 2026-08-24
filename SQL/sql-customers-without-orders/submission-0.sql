-- Write your query below
select name from customers
where not id in (select customer_id from orders);