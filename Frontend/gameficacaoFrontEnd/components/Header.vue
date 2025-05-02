<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
      name: 'FaSolidAlignJustify'
})

</script>

<template>
    <div class="container">
        <div class="row">
            <img src="../image/logoIzaias.png" alt="">
            <svg xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" viewBox="0 0 448 512"><!-- Icon from Font Awesome 5 Solid by Dave Gandy - https://creativecommons.org/licenses/by/4.0/ --><path fill="currentColor" d="M432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m0-128H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16"></path></svg>

        </div>
    </div>
</template>

<style>
body{
    margin: 0;
}
.container {
 background-color: aquamarine;
}
.row{
    background-color: blueviolet;
    height: 7vh;
    width: 100%;
    display: flex;
    align-items: center;
}
svg {
    height: 40px;
    width: 40px;
    color:aliceblue;
    padding-left: 10px;
}
</style>