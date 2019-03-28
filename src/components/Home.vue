<template>
    <div>
        <article class="test">
            <h1>{{ title }}</h1>
            <div class="contents">
                This is Zackey's introduction page
            </div>
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
