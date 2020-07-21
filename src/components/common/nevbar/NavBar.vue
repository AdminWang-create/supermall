<template>
    <div class="box">
        <div class="item1"><slot name="left"></slot></div>
        <div class="item2"><slot name="center"></slot></div>
        <div class="item3"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>

</style>