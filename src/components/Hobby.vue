<template>
    <div>
        <article class="test">
            <h1>{{ title }}</h1>
            <div class="contents">
                <ul>
                    <li>バドミントン</li>
                    <li>ランニング</li>
                    <li>読書</li>
                </ul>
            </div>
        </article>
    </div>
</template>

<script>
export default {
    name: 'self-introduction',
    data () {
        return {
        title: 'Hobby',
        }
    }
}
</script>
