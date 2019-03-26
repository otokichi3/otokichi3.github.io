<template>
    <div>
        <article class="test">
            <h1>{{ title }}</h1>
            <div class="contents">contents</div>
        </article>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data () {
        return {
            title: 'Home',
        }
    }
}
</script>
