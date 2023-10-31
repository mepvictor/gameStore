
INSERT INTO tb_user( user_name, user_pass) VALUES ( 'teste', '1234');
-------------------------------------------------------

-- Inserts para a entidade User
INSERT INTO tb_user (user_name, user_pass) VALUES ('João', 'senha123');
INSERT INTO tb_user (user_name, user_pass) VALUES ('Maria', 'senha456');

-- Inserts atualizados para a entidade tb_product (jogos e consoles de videogames) com o campo de preço
INSERT INTO tb_product (product_name, product_desc, product_price) VALUES ('The Witcher 3: Wild Hunt', 'RPG envolvente em um mundo de fantasia', 39.99);
INSERT INTO tb_product (product_name, product_desc, product_price) VALUES ('PlayStation 5', 'Console de última geração da Sony', 499.99);
INSERT INTO tb_product (product_name, product_desc, product_price) VALUES ('FIFA 23', 'Simulador de futebol popular', 49.99);
INSERT INTO tb_product (product_name, product_desc, product_price) VALUES ('Super Mario Odyssey', 'Jogo de aventura da Nintendo', 49.99);
INSERT INTO tb_product (product_name, product_desc, product_price) VALUES ('Xbox Series X', 'Console de última geração da Microsoft', 499.99);
INSERT INTO tb_product (product_name, product_desc, product_price) VALUES ('Assassins Creed Valhalla', 'RPG de ação da franquia Assassin’s Creed', 59.99);

-- Inserts para a entidade Purchase
INSERT INTO tb_purchase (user_id, purchase_date) VALUES (1, '2023-10-28 10:00:00');
INSERT INTO tb_purchase (user_id, purchase_date) VALUES (1, '2023-10-28 10:00:00');
INSERT INTO tb_purchase (user_id, purchase_date) VALUES (2, '2023-10-29 11:30:00');

-- Inserts para relacionar Purchase e Product (tabela de junção)
INSERT INTO tb_purchase_product (purchase_id, product_id, product_quantity) VALUES (1, 1, 2); 
INSERT INTO tb_purchase_product (purchase_id, product_id, product_quantity) VALUES (1, 3, 1);
INSERT INTO tb_purchase_product (purchase_id, product_id, product_quantity) VALUES (2, 2, 5);
INSERT INTO tb_purchase_product (purchase_id, product_id, product_quantity) VALUES (2, 3, 3);
