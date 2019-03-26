<template>
    <div>
        <article class="test">
            <h1>{{ title }}</h1>
            <div class="contents">
                <div class="sports">
                    <p>バドミントン</p>
                    <p>ランニング</p>
                    <p>登山</p>
                    <p>サイクリング</p>
                </div>
                <div class="culture">
                    <p>
                        読書
                        <div class="tool-tip" v-bind:style="tipStyle">
                            tooltip!
                        </div>
                    </p>
                    <p>勉強</p>
                    <p>ボードゲーム</p>
                </div>
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
