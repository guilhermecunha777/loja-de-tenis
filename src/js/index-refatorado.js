// Passo 1 - Pega o botão de aplicar filtros
const botaoFiltrar = document.querySelector(".btn-filtrar");

botaoFiltrar.addEventListener("click", aplicarFiltros);

// Função que filtra as tenis com base nos filtros de categoria e preço
function aplicarFiltros() {
  const categoriaSelecionada = pegarCategoriaSelecionada();
  const precoMaximoSelecionado = pegarPrecoMaximoSelecionado();
  const tenis = pegarTenis();

  tenis.forEach(function (teni) {
    const categoriaValida = verificarCategoria(teni, categoriaSelecionada);
    const precoValido = verificarPreco(teni, precoMaximoSelecionado);

    const deveMostrarTenis = categoriaValida && precoValido;

    mostrarOuEsconderTenis(teni, deveMostrarTenis);
  });
}

// Função para pegar o valor do campo de categoria
function pegarCategoriaSelecionada() {
  return document.querySelector("#categoria").value;
}

// Função para pegar o valor do campo de preço
function pegarPrecoMaximoSelecionado() {
  return document.querySelector("#preco").value;
}

// Função para pegar todas as tenis
function pegarTenis() {
  return document.querySelectorAll(".teni");
}

// Função para verificar se a tenis corresponde ao filtro de categoria
function verificarCategoria(teni, categoriaSelecionada) {
  const categoriaTenis = teni.dataset.categoria;
  return categoriaSelecionada === "" || categoriaSelecionada.toLowerCase() === categoriaTenis.toLowerCase();
}

// Função para verificar se a tenis corresponde ao filtro de preço
function verificarPreco(teni, precoMaximoSelecionado) {
  const precoTenis = teni.dataset.preco;
  return precoMaximoSelecionado === "" || parseFloat(precoTenis) <= parseFloat(precoMaximoSelecionado);
}

// Função para mostrar ou esconder a tenis
function mostrarOuEsconderTenis(teni, deveMostrar) {
  if (deveMostrar) {
    teni.classList.add("mostrar");
    teni.classList.remove("esconder");
  } else {
    teni.classList.remove("mostrar");
    teni.classList.add("esconder");
  }
}