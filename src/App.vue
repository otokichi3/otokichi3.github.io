<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
#header {
    font-family: 'Lato', 'Noto Sans JP', '游ゴシック Medium', '游ゴシック体', 'Yu Gothic Medium', YuGothic, 'ヒラギノ角ゴ ProN', 'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

#app {
    font-family: 'Lato', 'Noto Sans JP', '游ゴシック Medium', '游ゴシック体', 'Yu Gothic Medium', YuGothic, 'ヒラギノ角ゴ ProN', 'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    height: 100%;
}

body {
    margin: 0;
    background-color: #dedede;
    background-image: linear-gradient(#ecebeb 50%, transparent 50%, transparent);
    background-size: 10px 10px;
    width: 100vw;
    height: 100vh;
}

header {
    top: 0;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #ccc;
    background: #fff;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.2);
}

header ul {
    display: table;
    margin: 0 auto;
    padding: 0;
    width: 100%;
    text-align: center;
}

header ul li {
    display: table-cell;
    min-width: 50px;
    border-right: 1px solid #ccc;
}

header ul li:first-child {
    border-left: 1px solid #ccc;
}

header ul li a {
    display: block;
    width: 100%;
    padding: 10px 0;
    text-decoration: none;
    color: black;
}

header ul li a:hover {
    background-color: #fafafa;
}

header ul li.current {
    font-weight: bold;
}

header ul li.current a {
    border-bottom: 1px solid #f2f2f2;
}

.contents {
    width: 100%;
    height: 100%;
}

.contents div {
    width: 100%;
    height: 100%;
    text-align: center;
    vertical-align: middle;
}
</style>

