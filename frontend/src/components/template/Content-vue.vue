<template>
    <div class="content">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Content-vue'
}
</script>

<style>
    .content {
        height: 100%;
        min-height: 100%;
        grid-area: content;
        background-color: #efefef;
        padding: 20px;
    }
</style>
