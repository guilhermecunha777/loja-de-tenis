/*
  O que precisamos fazer? - Quando o usuário clicar no botão "Aplicar filtros", vamos filtrar as cartas baseado na categoria e no preço máximo selecionados
    OBJETIVO 1 - Criar a funcionalidade de filtrar as cartas
        passo 1 - pegar o botao de aplicar filtros do HTML e mandar pro JS
        passo 2 - escutar o clique no botão de aplicar filtros
        passo 3 - pegar os valores dos campos de categoria e preço
        passo 4 - para cada carta, verificar se ela deve ser mostrada ou escondida baseado nos filtros que a pessoa digitou
*/

// passo 1 - pegar o botao de aplicar filtros do HTML e mandar pro JS
const botaoFiltrar = document.querySelector(".btn-filtrar");

// passo 2 - escutar o clique no botão de aplicar filtros
botaoFiltrar.addEventListener("click", function () {
  // passo 3 - pegar os valores dos campos de categoria e preço
  const categoriaSelecionada = document.querySelector("#categoria").value;
  const precoMaximoSelecionado = document.querySelector("#preco").value;

  // passo 4 - para cada carta, verificar se ela deve ser mostrada ou escondida baseado nos filtros que a pessoa digitou
  const tenis = document.querySelectorAll(".teni");

  tenis.forEach(function (teni) {
    const categoriaTenis = teni.dataset.categoria;
    const precoTenis = teni.dataset.preco;

    let mostrarTenis = true;

    const temFiltroDeCategoria = categoriaSelecionada !== "";

    const tenisNaoBateComFiltroDeCategoria =
      categoriaSelecionada.toLowerCase() !== categoriaTenis.toLowerCase();

    if (temFiltroDeCategoria && tenisNaoBateComFiltroDeCategoria) {
      mostrarTenis = false;
    }

    const temFiltroDePreco = precoMaximoSelecionado !== "";
    
    const tenisNaoBateComFiltroDePrecoMaximo =
      parseFloat(precoTenis) > parseFloat(precoMaximoSelecionado);

    if (temFiltroDePreco && tenisNaoBateComFiltroDePrecoMaximo) {
      mostrarTenis = false;
    }

    if (mostrarTenis) {
      teni.classList.add("mostrar");
      teni.classList.remove("esconder");
    } else {
      teni.classList.remove("mostrar");
      teni.classList.add("esconder");
    }
  });
});
