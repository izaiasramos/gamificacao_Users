<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
    data() {
        return {
            searchText: '' //Armazena oque o usuario digitar
        }
    },
    methods: {
        doSearch() {
            if (this.searchText.trim() === '') {
                alert('Digite algo para buscar')
                return
            }
            console.log('Buscando:', this.searchText)
            //Aqui farei a busca real quando o back estiver pronto
        }
    }
})

</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="left-elements d-flex">
                    <img src="../image/logo2.png" alt="">
                    <i class="bi bi-list"></i>
                </div>
                <div class="right-elements d-flex align-items-center">
                    <div class="search-box d-flex">
                        <input type="text"
                            placeholder="Digite para buscar..."
                            v-model="searchText"
                        >
                        <button @click="doSearch">Buscar</button>
                    </div>
                    <div class="rotas d-flex gap-3">
                        <i class="bi bi-journal-check"></i>
                        <i class="bi bi-mortarboard"></i>
                        <i class="bi bi-bar-chart"></i>
                        <i class="bi bi-book"></i>
                    </div>
                    <i class="bi bi-person-circle"></i>
                </div>
            </div>
        </div>
        <div class="sidebar-esquerdo" style="background-color: rgb(12, 39, 189);">
            <div class="person gap-3">
                <i class="bi bi-person-circle"></i>
                <div class="name">
                    <span class="">IZAIAS RAMOS FRANÇA DE</span>
                </div>
            </div>
            <div class="search-box">
                    <input class="input-sidebar" type="text"
                        placeholder="Digite para buscar..."
                        v-model="searchText"
                    >
                    <button @click="doSearch">Buscar</button>
            </div>
            <!-- Example single danger button -->
<div class="btn-group">
  <button type="button" class="btn btn-outline-white dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Paginas
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Home</a>
    <a class="dropdown-item" href="#">Provas</a>
    <a class="dropdown-item" href="#">Provas Feitas</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Insightes</a>
  </div>

  <button type="button" class="btn btn-outline-white dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Menu
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Home</a>
    <a class="dropdown-item" href="#">Provas</a>
    <a class="dropdown-item" href="#">Provas Feitas</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Insightes</a>
  </div>
</div>
        </div>
    </div>
</template>

<style>
body{
    margin: 0;
    padding: 0;
        flex-shrink: 0;
    box-sizing: border-box;
}
.container-fluid {
    padding: 0;
    margin: 0;
}

.row .col-12{
    background-color: rgb(12, 39, 189);
    height: 9vh;
    display: flex;
    align-items: center; /* alinha verticalmente */
    flex-wrap: nowrap;
        flex-shrink: 0;
}

.row img {
    height: 70px;
    width: auto; /* mantém a proporção */
}

.bi-list {
    font-size: 40px; /* tamanho do ícone */
    color: white; /* cor do ícone */
    padding: 0 20px;
}

.right-elements {
    margin-left:5%;  
    display: flex;
    flex: 1;
    justify-content: space-around;
}
.right-elements i{
    font-size: 30px;
    color: #fff;
}

input {
    padding: 10px;
    width: 400px;
    border: 1px solid #ccc;
    border-radius: 4px 0 0 4px;
}

button {
    padding: 10px 15px;
    background: #2c3e50;
    color: white;
    border: none;
    border-radius: 0 4px 4px 0;
}

button:hover {
    background: #42b983;
}

/* Sidebar Esquerdo */
.sidebar-esquerdo{
    gap: 10px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    position: fixed;
    top: 9vh;
    background-color: rgb(12, 39, 189);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border-radius: 0 10px 10px 10px;
    transition: all 0.3s ease;
    height: 100vh;
}
.person{
    display: flex;
    justify-content: center;
    align-items: center;
}
.person i {
    font-size: 40px;
    color: #fff;
}
.name {
    color: #fff;
}

.input-sidebar {
    width: 200px;
    border: 1px solid #ccc;
    border-radius: 4px 0 0 4px;
    margin-left: 0px;
}
.sidebar-esquerdo button {
    padding: 10px 15px;
    background: #2c3e50;
    color: white;
    border: none;
    border-radius: 0 4px 4px 0;
}
button:hover {
    background: #42b983;
}
/* Estilo para o botão de dropdown */
.btn-group {
    position: relative;
    display: inline-block;
    margin-top: 20px;
    width: 50%;
}
.btn-group button {
    background-color: #2c3e50;
    color: white;
    border: none;
    width: 100px;
    padding: 10px 100%;
    border-radius: 4px;
}
.btn-group .btn:hover {
    background-color: #42b983;
}
@media (max-width: 1000px) {
    input {
        width: 80%;
    }
}
</style>