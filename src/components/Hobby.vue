<template>
  <div>
    <article class="test">
      <h1>{{ title }}</h1>
      <div class="contents">
        <div class="sports">
          <p
            v-for="(sport, i) in sports"
            :key="sport"
            v-on:click="show_sports_detail(i)"
            class="btn-brackets"
          >{{ sport }}</p>
        </div>
        <div class="culture">
          <p
            v-for="(culture, i) in cultures"
            :key="culture"
            v-on:click="show_culture_detail(i)"
            class="btn-brackets"
          >{{ culture }}</p>
          <p class="btn-empty"></p>
        </div>
        <div v-show="isBadminton" class="box18">
          週に一度ほど、大阪市内の体育館で社会人サークルとして活動しています。
          <br>最近は代表代理として運営にも携わっています。大変です。
          <br>レベルは、市内大会の4部の上位です。
        </div>
        <div v-show="isRunning" class="box18">
          最近あまりしていませんが、年に２，３回フルマラソンを走ります。
          <br>タイムは、せいぜい５時間程度。ベストは４時間２２分。
          <br>ダイエットが高じていつの間にかフルまで・・・。
        </div>
        <div v-show="isClimbing" class="box18">
          これも最近はあまり。神奈川に住んでいたときは、南アルプス、関東圏の山々を
          <br>登っていました。冬山挑戦が夢でしたが、今はひっそり。妻と行きたいと思っています。
        </div>
        <div v-show="isCycling" class="box18">
          これも前職の高給で買っただけで、あまり。一度武蔵小杉から箱根まで１００ｋｍの移動を
          <br>しましたが、それ以外はせいぜい５，６０ｋｍ程度の距離。小豆島一週もしましたね。
        </div>
        <div v-show="isNovel" class="box18">
          直木賞作品を新しい方から読みつつ、たまに寄り道します。
          <br>技術書も読みますが、最近はあまり手をつけられていません。
        </div>
        <div v-show="isStudy" class="box18">
          政治・経済に興味があります。歴史を学ぶのも好きです。
          <br>簿記やFPなど、お金にまつわる知識は早めに獲得しておきたいものです。
        </div>
        <div v-show="isBoardGame" class="box18">
          ドラスレが最もお気に入りです。ゴキポも好き。
          <br>ワーバスが最強という説もありますが。
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Hobby",
      sports: ["バドミントン", "ランニング", "登山", "サイクリング"],
      cultures: ["読書", "勉強", "ボードゲーム"],
      isBadminton: false,
      isRunning: false,
      isClimbing: false,
      isCycling: false,
      isNovel: false,
      isStudy: false,
      isBoardGame: false
    };
  },
  methods: {
    show_sports_detail(num) {
      switch (num) {
        case 0:
          this.isBadminton = true;
          this.isRunning = false;
          this.isClimbing = false;
          this.isCycling = false;
          break;
        case 1:
          this.isBadminton = false;
          this.isRunning = true;
          this.isClimbing = false;
          this.isCycling = false;
          break;
        case 2:
          this.isBadminton = false;
          this.isRunning = false;
          this.isClimbing = true;
          this.isCycling = false;
          break;
        case 3:
          this.isBadminton = false;
          this.isRunning = false;
          this.isClimbing = false;
          this.isCycling = true;
          break;
        default:
          break;
      }
      this.isNovel = false;
      this.isStudy = false;
      this.isBoardGame = false;
    },
    show_culture_detail(num) {
      switch (num) {
        case 0:
          this.isNovel = true;
          this.isStudy = false;
          this.isBoardGame = false;
          break;
        case 1:
          this.isNovel = false;
          this.isStudy = true;
          this.isBoardGame = false;
          break;
        case 2:
          this.isNovel = false;
          this.isStudy = false;
          this.isBoardGame = true;
          break;
        default:
          break;
      }
      this.isBadminton = false;
      this.isRunning = false;
      this.isClimbing = false;
      this.isCycling = false;
    }
  }
};
</script>
