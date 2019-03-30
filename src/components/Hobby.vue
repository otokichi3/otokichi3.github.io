<template>
  <div>
    <article class="test">
      <intro-topic topic="Hobby"></intro-topic>
      <div class="contents">
        <div>
          <p
            v-for="(topic, i) in topics"
            :key="topic"
            v-on:click="show_content(i)"
            class="btn-brackets"
          >{{ topic }}</p>
        </div>
        <div
          v-for="(content, i) in contents"
          :key="content"
          v-show="isShow[i]"
          class="box18"
        >{{ content }}</div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: [
        "バドミントン",
        "ランニング",
        "登山",
        "サイクリング",
        "読書",
        "勉強",
        "ボードゲーム"
      ],
      isShow: [false, false, false, false, false, false, false],
      isBadminton: false,
      isRunning: false,
      isClimbing: false,
      isCycling: false,
      isNovel: false,
      isStudy: false,
      isBoardGame: false,
      contents: [
        `
          週に一度ほど、大阪市内の体育館で社会人サークルとして活動しています。
          最近は代表代理として運営にも携わっています。大変です。
          レベルは、市内大会の4部の上位です。
          `,
        `
          最近あまりしていませんが、年に２，３回フルマラソンを走ります。
          タイムは、せいぜい５時間程度。ベストは４時間２２分。
          ダイエットが高じていつの間にかフルまで・・・。
          `,
        `
          これも最近はあまり。神奈川に住んでいたときは、南アルプス、関東圏の山々を
          登っていました。冬山挑戦が夢でしたが、今はひっそり。妻と行きたいと思っています。
          `,
        `
          これも前職の高給で買っただけで、あまり。一度武蔵小杉から箱根まで１００ｋｍの移動を
          しましたが、それ以外はせいぜい５，６０ｋｍ程度の距離。小豆島一週もしましたね。
          `,
        `
          直木賞作品を新しい方から読みつつ、たまに寄り道します。
          技術書も読みますが、最近はあまり手をつけられていません。
          `,
        `
          政治・経済に興味があります。歴史を学ぶのも好きです。
          簿記やFPなど、お金にまつわる知識は早めに獲得しておきたいものです。
          `,
        `
          ドラスレが最もお気に入りです。ゴキポも好き。
          ワーバスが最強かもしれませんが。
          `
      ]
    };
  },
  methods: {
    show_content(idx) {
      this.isShow = this.isShow.map(show => false);
      this.isShow.splice(idx, 1, true);
    }
  }
};
</script>
