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
    </div>
</template>

<style>
body{
    margin: 0;
    padding: 0;
        flex-shrink: 0;
    box-sizing: border-box;
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

@media (max-width: 1000px) {
    input {
        width: 80%;
    }
}
</style>