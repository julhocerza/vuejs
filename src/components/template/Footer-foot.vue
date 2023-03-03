<template>
    <footer class="footer">
        <span>Copyright <strong>C3der</strong> 2023</span>
    </footer>
</template>

<script>
export default {
    name: 'Footer-foot'
}
</script>

<style>
    .footer {
        grid-area: footer;
        background-color: #DDD;
        color: #333;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 10px;
    }
</style>
