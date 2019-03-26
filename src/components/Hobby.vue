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
// export default {
//     name: 'self-introduction',
//     data () {
//         return {
//         title: 'Hobby',
//         }
//     }
// }

let toolTip = new Vue({
    el: '#tool-tip',  // HTML側のidと対応
    data: {
        tipStyle: {  // 後述のスタイル用オブジェクト
            position: 'absolute',
            top: '0px',
            left: '0px',
        },
        title: 'Hobby'
    }
});

// 関数（処理本体）
let toolTipRendering = () => {
    return (e) => {
        toolTip.tipStyle.left = parseInt(e.clientX + 30 /*ここの数値は任意で、変えることによってカーソルからの距離が変わる*/) + 'px';
        toolTip.tipStyle.top = parseInt(e.clientY + 30 /*同上*/) + 'px';
    }
}

// 処理呼び出し（いい言い方が見つからなかった…）
document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('mousemove', toolTipRendering(), false);
}, false);

</script>
