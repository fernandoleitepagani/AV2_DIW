# Prova Prática de DIW: Agenda Cultural BH (Questões 8, 9 e 10)

## 1. Preparação (cerca de 3 minutos)

1. Descompacte o arquivo `.zip` e abra a pasta **inteira** no VS Code (*File > Open Folder*).
2. Abra o terminal do VS Code (*Terminal > New Terminal*) e execute:

   ```
   npm run api
   ```

   A API do JSON Server ficará disponível em `http://localhost:3000`. **Mantenha esse terminal aberto** durante toda a prova.
   Teste no navegador: `http://localhost:3000/eventos` e `http://localhost:3000/atracoes?eventoId=1`.
3. Abra o `index.html` com o **Live Server** (botão *Go Live* ou clique direito > *Open with Live Server*).
4. No rodapé do `index.html`, troque `ESCREVA SEU NOME AQUI` pelo seu nome completo.

> As bibliotecas (JSON Server e Bootstrap) já estão dentro do kit. Não é preciso instalar nada nem usar a internet.

## 2. O que fazer

Todo o código deve ser escrito em **`assets/js/app.js`**, nos locais marcados com `TODO`.
Cada função tem, logo acima dela, a descrição completa do que deve ser feito.

| Questão | Função(ões) | Página | Valor |
|---|---|---|---|
| Q8 | `carregarEventos()` | index.html | 3,0 |
| Q9 | `carregarDetalhes()` | detalhes.html | 3,0 |
| Q10 | `configurarFormulario()` e `cadastrarEvento()` | index.html | 3,5 |

As questões são **independentes**: você pode fazer a Q9 ou a Q10 mesmo sem ter terminado a Q8.
Para testar a Q9 sem a Q8, digite a URL direto no navegador, por exemplo: `detalhes.html?id=2`.

**Comentário obrigatório:** em cada uma das três questões, escreva um comentário curto (2 a 3 linhas) no código explicando **uma decisão** que você tomou e por quê.

## 3. Regras

- Não altere os arquivos `.html`, o `styles.css` nem o `api/db.json` (o arquivo `db.json` é alterado automaticamente pelo JSON Server quando você faz um POST).
- Consulta permitida: material da disciplina no Canvas.
- É proibido o uso de ferramentas de IA e a comunicação com colegas, inclusive pelo Canvas.

## 4. Entrega (até o fim da prova)

1. **Apague a pasta `node_modules`** (assim o arquivo fica pequeno).
2. Compacte a pasta do kit com o nome `PRIMEIRONOME_ULTIMONOME_CODIGOPESSOA.zip` (sem acentos e sem espaços).
3. Envie o `.zip` na questão de upload do quiz da prova no Canvas.

## Dicas rápidas

- `http://localhost:3000/eventos/3` devolve um único evento; um id inexistente devolve **status 404**.
- `http://localhost:3000/atracoes?eventoId=3` devolve um **array** com as atrações do evento 3.
- Se aparecer `Failed to fetch`, confira se o terminal com `npm run api` continua rodando.
- Use o console do navegador (F12) para ver erros.
