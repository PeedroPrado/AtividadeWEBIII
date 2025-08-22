// A URL base 
const API_URL = 'http://localhost:3000/api';

// Elementos da UI
const listaPessoas = document.getElementById('lista-pessoas');
const listaCarros = document.getElementById('lista-carros');
const listaAssociacoes = document.getElementById('lista-associacoes');
const formPessoa = document.getElementById('form-pessoa');
const formCarro = document.getElementById('form-carro');
const formAssociacao = document.getElementById('form-associacao');
const selectPessoa = document.getElementById('select-pessoa');
const selectCarro = document.getElementById('select-carro');

// Funções para carregar dados
async function fetchAndRenderPessoas() {
    try {
        const response = await fetch(`${API_URL}/pessoas`);
        const pessoas = await response.json();
        listaPessoas.innerHTML = '';
        selectPessoa.innerHTML = '';

        pessoas.forEach(pessoa => {
            const li = document.createElement('li');
            li.textContent = `${pessoa.nome} (${pessoa.email})`;
            
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Deletar';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.onclick = () => deletePessoa(pessoa.id);
            
            li.appendChild(deleteBtn);
            listaPessoas.appendChild(li);

            const option = document.createElement('option');
            option.value = pessoa.id;
            option.textContent = pessoa.nome;
            selectPessoa.appendChild(option);
        });
    } catch (error) {
        console.error("Erro ao buscar pessoas:", error);
    }
}

async function fetchAndRenderCarros() {
    try {
        const response = await fetch(`${API_URL}/carros`);
        const carros = await response.json();
        listaCarros.innerHTML = '';
        selectCarro.innerHTML = '';

        carros.forEach(carro => {
            const li = document.createElement('li');
            li.textContent = `${carro.modelo} - ${carro.marca} (${carro.ano})`;
            
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Deletar';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.onclick = () => deleteCarro(carro.id);

            li.appendChild(deleteBtn);
            listaCarros.appendChild(li);
            
            const option = document.createElement('option');
            option.value = carro.id;
            option.textContent = `${carro.marca} ${carro.modelo}`;
            selectCarro.appendChild(option);
        });
    } catch (error) {
        console.error("Erro ao buscar carros:", error);
    }
}

async function fetchAndRenderAssociacoes() {
    try {
        const response = await fetch(`${API_URL}/associacoes`);
        const associacoes = await response.json();
        listaAssociacoes.innerHTML = '';

        associacoes.forEach(assoc => {
            const li = document.createElement('li');
            li.textContent = `Pessoa: ${assoc.pessoa.nome} | Carro: ${assoc.carro.marca} ${assoc.carro.modelo}`;
            
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Deletar';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.onclick = () => deleteAssociacao(assoc.id);

            li.appendChild(deleteBtn);
            listaAssociacoes.appendChild(li);
        });
    } catch (error) {
        console.error("Erro ao buscar associações:", error);
    }
}

// Funções para deletar dados
async function deletePessoa(id) {
    await fetch(`${API_URL}/pessoas/${id}`, { method: 'DELETE' });
    fetchAndRenderPessoas();
    fetchAndRenderAssociacoes();
}

async function deleteCarro(id) {
    await fetch(`${API_URL}/carros/${id}`, { method: 'DELETE' });
    fetchAndRenderCarros();
    fetchAndRenderAssociacoes();
}

async function deleteAssociacao(id) {
    await fetch(`${API_URL}/associacoes/${id}`, { method: 'DELETE' });
    fetchAndRenderAssociacoes();
}

// Event Listeners para os formulários
formPessoa.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome-pessoa').value;
    const email = document.getElementById('email-pessoa').value;

    await fetch(`${API_URL}/pessoas`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email })
    });
    formPessoa.reset();
    fetchAndRenderPessoas();
});

formCarro.addEventListener('submit', async (e) => {
    e.preventDefault();
    const modelo = document.getElementById('modelo-carro').value;
    const marca = document.getElementById('marca-carro').value;
    const ano = document.getElementById('ano-carro').value;

    await fetch(`${API_URL}/carros`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ modelo, marca, ano: Number(ano) }) // Converte para número aqui
    });
    formCarro.reset();
    fetchAndRenderCarros();
});

formAssociacao.addEventListener('submit', async (e) => {
    e.preventDefault();
    const pessoaId = selectPessoa.value;
    const carroId = selectCarro.value;

    await fetch(`${API_URL}/associacoes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pessoaId: Number(pessoaId), carroId: Number(carroId) })
    });
    fetchAndRenderAssociacoes();
});

// Carrega todos os dados ao iniciar a página
document.addEventListener('DOMContentLoaded', () => {
    fetchAndRenderPessoas();
    fetchAndRenderCarros();
    fetchAndRenderAssociacoes();
});