<?php
session_start();
if (!isset($_SESSION['carrinho'])) {
    $_SESSION['carrinho'] = [];
}
?>


<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Over $kin - Loja</title>
    <link rel="stylesheet" href="style2.css">
</head>
<body>
    
    <header class="header">
        <h1 class="company-title">Over $kin</h1>
        <div class="user-options">
            <span>Bem-vindo, <?php echo htmlspecialchars($_SESSION['usuario']); ?>!</span>
            <a href="logout.php" class="logout-button">Sair</a>
        </div>
    </header>

    
    <main class="products-container">
        <h2>Nossas Camisetas (Streetwear & Oversized)</h2>
        <div class="products-grid">
            
            <div class="product-card">
                <img src="01-camiseta.webp" alt="Camisa Estilosa">
                <h3>Camiseta Oversized Urban</h3>
                <p>R$ 109,90</p>
                <form method="POST" action="carrinho.php">
                <input type="hidden" name="produto_nome" value="Camiseta Oversized Urban">
                <input type="hidden" name="produto_preco" value="109.90">
                <input type="hidden" name="produto_img" value="01-camiseta.webp">
                <button type="submit">Adicionar ao Carrinho</button>
                </form>

            </div>

            
            <div class="product-card">
                <img src="02-camiseta.jpg" alt="Calça Confortável">
                <h3>Camiseta Streetwear Italian</h3>
                <p>R$ 119,90</p>
                <form method="POST" action="carrinho.php">
                <input type="hidden" name="produto_nome" value="Camiseta StreetWear Italian">
                <input type="hidden" name="produto_preco" value="119.90">
                <input type="hidden" name="produto_img" value="02-camiseta.jpg">
                <button type="submit">Adicionar ao Carrinho</button>
                </form>
            </div>

            
            <div class="product-card">
                <img src="03-camiseta.webp" alt="Vestido Elegante">
                <h3>Camiseta Streetwear Butterfly</h3>
                <p>R$ 119,90</p>
                <form method="POST" action="carrinho.php">
                <input type="hidden" name="produto_nome" value="Camiseta Dtreetwear Butterfly">
                <input type="hidden" name="produto_preco" value="119.90">
                <input type="hidden" name="produto_img" value="03-camiseta.webp">
                <button type="submit">Adicionar ao Carrinho</button>
                </form>
            </div>

            <div class="product-card">
                <img src="04-camiseta.webp" alt="Camisa Estilosa">
                <h3>Camiseta Streetwear Fire Heart</h3>
                <p>R$ 124,90</p>
                <form method="POST" action="carrinho.php">
                <input type="hidden" name="produto_nome" value="Camiseta Streetwear Fire Heart">
                <input type="hidden" name="produto_preco" value="124.90">
                <input type="hidden" name="produto_img" value="04-camiseta.webp">
                <button type="submit">Adicionar ao Carrinho</button>
                </form>
            </div>

            <div class="product-card">
                <img src="005-camiseta.jpg" alt="Camisa Estilosa">
                <h3>Camiseta Streetwear Bleeding</h3>
                <p>R$ 119,90</p>
                <form method="POST" action="carrinho.php">
                <input type="hidden" name="produto_nome" value="Camiseta Streetwear Bleeding">
                <input type="hidden" name="produto_preco" value="119.90">
                <input type="hidden" name="produto_img" value="05-camiseta.jpg">
                <button type="submit">Adicionar ao Carrinho</button>
                </form>
            </div>

            <div class="product-card">
                <img src="06-camiseta.jpg" alt="Camisa Estilosa">
                <h3>Camiseta Streetwear Gratitude</h3>
                <p>R$ 96,03</p>
                <form method="POST" action="carrinho.php">
                <input type="hidden" name="produto_nome" value="Camiseta Streetwear Gratitude">
                <input type="hidden" name="produto_preco" value="96.03">
                <input type="hidden" name="produto_img" value="06-camiseta.jpg">
                <button type="submit">Adicionar ao Carrinho</button>
                </form>
            </div>

            <div class="product-card">
                <img src="07-camiseta.webp" alt="Camisa Estilosa">
                <h3>Camiseta Oversized Cherry</h3>
                <p>R$ 149,90</p>
                <form method="POST" action="carrinho.php">
                <input type="hidden" name="produto_nome" value="Camiseta Oversized Cherry">
                <input type="hidden" name="produto_preco" value="149.90">
                <input type="hidden" name="produto_img" value="07-camiseta.webp">
                <button type="submit">Adicionar ao Carrinho</button>
                </form>
            </div>

            <div class="product-card">
                <img src="08-camiseta.webp" alt="Camisa Estilosa">
                <h3>Camiseta Oversized Bird</h3>
                <p>R$ 150,00</p>
                <form method="POST" action="carrinho.php">
                <input type="hidden" name="produto_nome" value="Camiseta Oversized Bird">
                <input type="hidden" name="produto_preco" value="150.00">
                <input type="hidden" name="produto_img" value="08-camiseta.webp">
                <button type="submit">Adicionar ao Carrinho</button>
                </form>
            </div>

            <div class="product-card">
                <img src="09-camiseta.webp" alt="Camisa Estilosa">
                <h3>Camiseta Oversized Comp Flame</h3>
                <p>R$ 150,00</p>
                <form method="POST" action="carrinho.php">
                <input type="hidden" name="produto_nome" value="Camiseta Oversized Comp Flame">
                <input type="hidden" name="produto_preco" value="150.00">
                <input type="hidden" name="produto_img" value="09-camiseta.webp">
                <button type="submit">Adicionar ao Carrinho</button>
                </form>
            </div>

            <div class="product-card">
                <img src="10-camiseta.webp" alt="Camisa Estilosa">
                <h3>Camiseta Oversized Rose of Life</h3>
                <p>R$ 150,00</p>
                <form method="POST" action="carrinho.php">
                <input type="hidden" name="produto_nome" value="Camiseta Oversized Rose of Life">
                <input type="hidden" name="produto_preco" value="150.00">
                <input type="hidden" name="produto_img" value="10-camiseta.webp">
                <button type="submit">Adicionar ao Carrinho</button>
                </form>
            </div>
        </div>

        
    </main>

    <main class="products-container">

        <h2>Nossos Moletons</h2>
        <div class="products-grid">

            <div class="product-card">
                <img src="01-moletom.webp" alt="Camisa Estilosa">
                <h3>Moletom Oversized Cherry</h3>
                <p>R$ 241,53</p>
                <form method="POST" action="carrinho.php">
                <input type="hidden" name="produto_nome" value="Moletom Oversized Cherry">
                <input type="hidden" name="produto_preco" value="271.53">
                <input type="hidden" name="produto_img" value="01-moletom.webp">
                <button type="submit">Adicionar ao Carrinho</button>
                </form>
            </div>

            <div class="product-card">
                <img src="02-moletom.webp" alt="Camisa Estilosa">
                <h3>Moletom Oversized Shadow</h3>
                <p>R$ 222,13</p>
                <form method="POST" action="carrinho.php">
                <input type="hidden" name="produto_nome" value="Moletom Oversized Shadow">
                <input type="hidden" name="produto_preco" value="222.13">
                <input type="hidden" name="produto_img" value="02-moletom.webp">
                <button type="submit">Adicionar ao Carrinho</button>
                </form>
            </div>

            <div class="product-card">
                <img src="03-moletom.webp" alt="Camisa Estilosa">
                <h3>Moletom Oversized Bird</h3>
                <p>R$ 241,53</p>
                <form method="POST" action="carrinho.php">
                <input type="hidden" name="produto_nome" value="Moletom Oversized Bird">
                <input type="hidden" name="produto_preco" value="241.53">
                <input type="hidden" name="produto_img" value="03-moletom.webp">
                <button type="submit">Adicionar ao Carrinho</butto>
                </form>
            </div>

            <div class="product-card">
                <img src="04-moletom.webp" alt="Camisa Estilosa">
                <h3>Moletom Oversized Shak Attack</h3>
                <p>R$ 241,53</p>
                <form method="POST" action="carrinho.php">
                <input type="hidden" name="produto_nome" value="Moletom Oversized Shak Attack">
                <input type="hidden" name="produto_preco" value="241.53">
                <input type="hidden" name="produto_img" value="04-moletom.webp">
                <button type="submit">Adicionar ao Carrinho</butto>
                </form>
            </div>

        </div>
    </main>

    
    <main class="products-container">

        <h2>Nossas Calças</h2>
         <div class="products-grid">

         <div class="product-card">
                <img src="01-calça.jpg" alt="Camisa Estilosa">
                <h3>Calça Cargo Preta</h3>
                <p>R$ 173,63</p>
                <form method="POST" action="carrinho.php">
                <input type="hidden" name="produto_nome" value="Calça Cargo Preta">
                <input type="hidden" name="produto_preco" value="173,63">
                <input type="hidden" name="produto_img" value="01-calça.jpg">
                <button type="submit">Adicionar ao Carrinho</butto>
                </form>
            </div>

            <div class="product-card">
                <img src="02-calça.jpg" alt="Camisa Estilosa">
                <h3>Calça de Moletom Reta</h3>
                <p>R$ 259,oo</p>
                <form method="POST" action="carrinho.php">
                <input type="hidden" name="produto_nome" value="Calça de Moletom Reta">
                <input type="hidden" name="produto_preco" value="259,oo">
                <input type="hidden" name="produto_img" value="02-calça.jpg">
                <button type="submit">Adicionar ao Carrinho</butto>
                </form>
            </div>

            <div class="product-card">
                <img src="03-calça.jpg" alt="Camisa Estilosa">
                <h3>Calça Jeans Balão</h3>
                <p>R$ 253,90</p>
                <form method="POST" action="carrinho.php">
                <input type="hidden" name="produto_nome" value="Calça Jeans Balão">
                <input type="hidden" name="produto_preco" value="253,90">
                <input type="hidden" name="produto_img" value="03-calça.jpg">
                <button type="submit">Adicionar ao Carrinho</butto>
                </form>
            </div>

            <div class="product-card">
                <img src="04-calça.webp" alt="Camisa Estilosa">
                <h3>Calça Jeans Reta</h3>
                <p>R$ 280,oo</p>
                <form method="POST" action="carrinho.php">
                <input type="hidden" name="produto_nome" value="Calça Jeans Reta">
                <input type="hidden" name="produto_preco" value="280,oo">
                <input type="hidden" name="produto_img" value="04-calça.webp">
                <button type="submit">Adicionar ao Carrinho</butto>
                </form>
            </div>


         </div>
    </main>


            <main class="products-container">

        <h2>Nossas Bermudas</h2>
        <div class="products-grid">

        <div class="product-card">
                <img src="01-bermuda.jpeg" alt="Camisa Estilosa">
                <h3>Bermuda Oversized</h3>
                <p>R$ 98,00</p>
                <form method="POST" action="carrinho.php">
                <input type="hidden" name="produto_nome" value="Bermuda Oversized">
                <input type="hidden" name="produto_preco" value="98,00">
                <input type="hidden" name="produto_img" value="01-bermuda.jpeg">
                <button type="submit">Adicionar ao Carrinho</butto>
                </form>
            </div>

            <div class="product-card">
                <img src="02-bermuda.jpeg" alt="Camisa Estilosa">
                <h3>Bermuda Cargo</h3>
                <p>R$ 87,90</p>
                <form method="POST" action="carrinho.php">
                <input type="hidden" name="produto_nome" value="Bermuda Cargo">
                <input type="hidden" name="produto_preco" value="87,90">
                <input type="hidden" name="produto_img" value="02-bermuda.jpeg">
                <button type="submit">Adicionar ao Carrinho</butto>
                </form>
            </div>

            <div class="product-card">
                <img src="03-bermuda.png" alt="Camisa Estilosa">
                <h3>Bermuda Jeans</h3>
                <p>R$ 75,00</p>
                <form method="POST" action="carrinho.php">
                <input type="hidden" name="produto_nome" value="Bermuda Jeans">
                <input type="hidden" name="produto_preco" value="75,00">
                <input type="hidden" name="produto_img" value="03-bermuda.png">
                <button type="submit">Adicionar ao Carrinho</butto>
                </form>
            </div>



        </div>
        </main>



    <footer class="footer">
        <p>&copy; 2024 Over $kin. Todos os direitos reservados.</p>
    </footer>
</body>
</html>
