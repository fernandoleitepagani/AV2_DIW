const API_URL = "http://localhost:3000";

// "2026-12-05" -> "05/12/2026"
function formatarData(dataISO) {
  const [ano, mes, dia] = dataISO.split("-");
  return `${dia}/${mes}/${ano}`;
}

// 0 -> "Gratuito" | 60 -> "R$ 60,00"
function formatarPreco(valor) {
  if (valor === 0) return "Gratuito";
  return "R$ " + valor.toFixed(2).replace(".", ",");
}


/* ==========================================================================
   Q8 — PÁGINA INICIAL (index.html)                                  3,0 pts
   --------------------------------------------------------------------------
   Implemente a função carregarEventos() para:
     a) Buscar TODOS os eventos na API (GET /eventos) usando fetch.
     b) Montar o carrossel #destaques apenas com os eventos cujo campo
        "destaque" seja true. O PRIMEIRO slide deve ter a classe "active".
        Cada slide deve ter imagem, nome, data formatada e local, e a imagem
        deve levar para detalhes.html?id=<id do evento>.
     c) Montar um card para CADA evento dentro de #lista-eventos, com imagem,
        categoria, nome, data formatada, preço formatado e o link
        "Ver detalhes" para detalhes.html?id=<id do evento>.
     d) Se a API não responder, exibir uma mensagem de erro em #lista-eventos.
   Os modelos de HTML esperados estão comentados no index.html.
   ========================================================================== */
async function carregarEventos() {
  const lista = document.getElementById("lista-eventos");
  const destaques = document.getElementById("destaques");

  try {
    const resposta = await fetch(`${API_URL}/eventos`);

    if (!resposta.ok) {
      throw new Error("Erro ao buscar eventos");
    }

    const eventos = await resposta.json();

    destaques.innerHTML = "";
    lista.innerHTML = "";

    const eventosDestaque = eventos.filter(evento => evento.destaque);

    eventosDestaque.forEach((evento, index) => {
      const slide = document.createElement("div");
      slide.className = `carousel-item${index === 0 ? " active" : ""}`;

      slide.innerHTML = `
        <div class="carousel-item">
          <a href="detalhes.html?id=${evento.id}">
          <img src="${evento.imagem}" class="d-block w-100" alt="${evento.nome}">
          </a>
          <div class="carousel-caption">
            <h5>${evento.nome}</h5>
            <p>${formatarData(evento.data)} · ${formatarPreco(Number(evento.preco))}</p>
            </div>
          </div>
        </div>
      `;

      destaques.appendChild(slide);
    });

    eventos.forEach(evento => {
      const card = document.createElement("article");
      card.className = "card-evento";

      card.innerHTML = `
        <div class="col-12 col-sm-6 col-lg-3">
             <div class="card h-100">
               <img src="${evento.imagem}" class="card-img-top"  alt="${evento.nome}">
               <div class="carousel-caption">
                 <span class="badge text-bg-secondary">${evento.categoria}</span>
                 <h5 class="card-title mt-2">${evento.nome}</h5>
                 <p class="card-text">${formatarData(evento.data)} · ${formatarPreco(Number(evento.preco))}</p>
                 <a href="detalhes.html?id=${evento.id}" class="btn btn-primary btn-sm">Ver detalhes</a>
               </div>
             </div>
        </div>
      `;

      lista.appendChild(card);
    });
  } catch (erro) {
    lista.innerHTML = "<p>Não foi possível carregar os eventos.</p>";
  }
}



/* ==========================================================================
   Q9 — PÁGINA DE DETALHES (detalhes.html)                           3,0 pts
   --------------------------------------------------------------------------
   Implemente a função carregarDetalhes() para:
     a) Obter o id do evento a partir da URL (ex.: detalhes.html?id=3).
     b) Buscar o evento na API (GET /eventos/<id>) e exibir em
        #detalhe-evento pelo menos 5 informações dele (incluindo a imagem).
     c) Se o evento não existir (a API responde com status 404) ou se não
        houver id na URL, exibir "Evento não encontrado" em #detalhe-evento.
     d) Buscar as atrações do evento (GET /atracoes?eventoId=<id>) e montar
        um card para cada uma em #lista-atracoes. Se o evento não tiver
        atrações, exibir a mensagem "Nenhuma atração cadastrada".
   ========================================================================== */
async function carregarDetalhes() {
  const detalhe = document.getElementById("detalhe-evento");
  const listaAtracoes = document.getElementById("lista-atracoes");
  const id = new URLSearchParams(window.location.search).get("id");

  if (!id) {
    detalhe.innerHTML = "<p>Evento não encontrado</p>";
    return;
  }

  try {
    const respostaEvento = await fetch(`${API_URL}/eventos/${id}`);

    if (respostaEvento.status === 404 || !respostaEvento.ok) {
      detalhe.innerHTML = "<p>Evento não encontrado</p>";
      return;
    }

    const evento = await respostaEvento.json();

    detalhe.innerHTML = `
      <img src="${evento.imagem}" alt="${evento.nome}">
      <h1>${evento.nome}</h1>
      <p><strong>Categoria:</strong> ${evento.categoria}</p>
      <p><strong>Descrição:</strong> ${evento.descricao}</p>
      <p><strong>Local:</strong> ${evento.local}</p>
      <p><strong>Data:</strong> ${formatarData(evento.data)}</p>
      <p><strong>Horário:</strong> ${evento.horario}</p>
      <p><strong>Preço:</strong> ${formatarPreco(Number(evento.preco))}</p>
    `;

    const respostaAtracoes = await fetch(
      `${API_URL}/atracoes?eventoId=${id}`
    );

    if (!respostaAtracoes.ok) {
      throw new Error("Erro ao buscar atrações");
    }

    const atracoes = await respostaAtracoes.json();

    listaAtracoes.innerHTML = "";

    if (atracoes.length === 0) {
      listaAtracoes.innerHTML = "<p>Nenhuma atração cadastrada</p>";
      return;
    }

    atracoes.forEach(atracao => {
      const card = document.createElement("article");
      card.className = "card-atracao";

      card.innerHTML = `
        <div class="col-12 col-sm-6 col-lg-4">
            <div class="card h-100">
              <img src="${atracao.imagem}" class="card-img-top" alt="${atracao.nome}">
              <div class="card-body">
                <h5 class="card-title">${atracao.nome}</h5>
                <p class="card-text">${atracao.descricao || ""} · ${atracao.horario || ""}</p>
              </div>
            </div>
        </div>
      `;

      listaAtracoes.appendChild(card);
    });
  } catch (erro) {
    detalhe.innerHTML = "<p>Evento não encontrado</p>";
  }
}


/* ==========================================================================
   Q10 — CADASTRO DE EVENTO (formulário do index.html)                3,5 pts
   --------------------------------------------------------------------------
   a) Na função configurarFormulario(), associe a função cadastrarEvento
      ao envio (submit) do formulário #form-evento.
   b) Na função cadastrarEvento(evento):
        1. Impeça o recarregamento da página.
        2. Leia os valores dos campos do formulário.
        3. Valide: nome, categoria e data são obrigatórios e o preço não pode
           ser negativo. Se algo estiver inválido, exiba a mensagem em
           #mensagem-form e NÃO envie nada para a API.
        4. Monte o objeto do novo evento com os campos: nome, categoria,
           descricao, local, bairro (use "Não informado"), data, horario,
           preco (como número), destaque (false) e
           imagem ("assets/img/padrao.jpg").
        5. Envie o objeto para a API com o método POST (POST /eventos).
        6. Em caso de sucesso: exiba uma mensagem de sucesso em #mensagem-form,
           limpe o formulário e atualize a lista de eventos na tela.
           Em caso de falha: exiba uma mensagem de erro em #mensagem-form.
   ========================================================================== */
function configurarFormulario() {
  const formulario = document.getElementById("form-evento");

  if (formulario) {
    formulario.addEventListener("submit", cadastrarEvento);
  }
}

async function cadastrarEvento(evento) {
}





if (document.getElementById("lista-eventos")) {
  carregarEventos();
  configurarFormulario();
}

if (document.getElementById("detalhe-evento")) {
  carregarDetalhes();
}
