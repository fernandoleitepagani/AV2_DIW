# DIW AV2

## Questão 1

**a)**  
A URL detalhes.html?id=3 tem window.location.search igual a "?id=3".  
get("id") devolve "3" como string.  
Number() transforma "3" em 3, para comparar com o id numérico.

**b)**  
find recebe uma função de teste.  
Devolve o primeiro herói que satisfaz a condição. Se não encontrar, devolve undefined.

**c)**  
Aparece “Item não encontrado.”  
Sem Number(), o valor seria "3" string, mas item.id é 3 número. Com ===, os tipos diferentes fazem a comparação resultar em false.

**d)**  
O return encerra a função.  
Sem ele, após mostrar a mensagem, o código tentaria acessar heroi.nome, causando erro porque heroi é undefined.

## Questão 2


## Questão 3

**a)**  
É uma função seta que recebe um seletor CSS.  
Devolve o primeiro elemento encontrado ou null se não encontrar.

**b)**  
O código verifica quais elementos existem na página.  
Se existe #catalogo, executa as funções do catálogo.  
Se existe #detalhe, executa renderDetalhes.  
O if funciona porque um elemento existente é verdadeiro, e null é falso.

**c)**  
Com ?tipo=Mangá, o valor do `"<select>"` muda para Mangá.  
Sem parâmetro tipo, nada é alterado.

**d)**  
No index.html, renderDetalhes() seria executada.  
obra seria undefined, pois não há um id válido.  
Depois, alvo seria null e a linha 8 causaria erro ao tentar usar alvo.innerHTML.
;;

## Questão 4

**a)**  
As linhas 7–15 criam um novo slide quando necessário.  
O operador % verifica o resto da divisão e indica quando começar outro grupo. 

**b)**  
matchMedia verifica se a tela tem no máximo 767 pixels.  
atualizar() é executada no início e quando o tamanho da tela muda.  
A linha 5 limpa os slides antigos antes de criar novos.

**c)**  
O primeiro filme tem id = 2. A condição da linha 7 é falsa, então nenhum slide é criado.  
Na linha 21, ocorre erro porque slideAtual é null.

**d)**
dados.filmes.forEach((f, i) => {
  if (i % qnt == 0) {
    // etc e tals
    if (i == 0) item.classList.add("active");
  }
});

     
## Questão 5

**a)**  
trim() remove espaços no começo e no fim.    
toLowerCase() transforma o texto em minúsculas.  
Isso facilita a busca.  
!lista.length significa que a lista está vazia.

**b)**  
includes() verifica se o título contém o termo.  
&& exige que as duas condições sejam verdadeiras.  
|| permite “Todas” ou o tipo escolhido.  
Os parênteses agrupam corretamente a condição da categoria.  
renderLivros() executa ao digitar e ao mudar a categoria.

**c)**

1. " CASA " + Todas: id 3 
2. "o" + Fantasia: ids 1 e 5  
3. Busca vazia + Ficção: ids 4 e 6

**d)**  
Exemplo: busca "Casa" e categoria Fantasia.

Com os parênteses, nenhum livro aparece.  
Sem os parênteses, os livros de Fantasia aparecem mesmo sem conter “Casa”, porque && é avaliado antes de ||.
