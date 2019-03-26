<template>
    <div>
        <article class="test">
            <h1>{{ title }}</h1>
            <div class="contents">
                <h2>経歴</h2>
                <ul>
                    <li>岡山県立玉野高校</li>
                    <li>↓</li>
                    <li>岡山大学</li>
                    <li>↓</li>
                    <li>岡山大学大学院</li>
                    <li>↓</li>
                    <li>日本電気株式会社</li>
                    <li>↓</li>
                    <li>株式会社ジェニオ</li>
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
        title: 'About',
        }
    }
}
</script>
