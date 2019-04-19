<template>
  <div>
    <article class="test">
      <intro-topic topic="About"></intro-topic>
      <div class="contents">
        <h2>経歴</h2>
        <ul class="cp_stepflow07">
          <li
            v-for="(background, i) in backgrounds"
            :key="background"
            :class="{ active: active[i], completed: completed[i] }"
            @mouseover="activate(i)"
            @mouseleave="deactivate(i)"
            @click="toggle_completion(i)"
          >
            <span class="bubble"></span>
            <span>{{ background }}</span>
          </li>
        </ul>
        <div v-for="(content, i) in content_list" :key="content">
          <p class="desc" v-if="active[i] && !completed[i]">{{ content }}</p>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      title: "About",
      backgrounds: ["高校", "大学", "大学院", "最初の会社", "現在の会社"],
      active: [false, false, false, false, false],
      completed: [false, false, false, false, false],
      content_list: [
        `
          普通科に進学。学業はそれなりで、部活もそれなり。進学校ではなかったが、
          無事岡山大学に入学した。所属していた軟式テニス部では初心者始めながら、
          副キャプテンの前衛を務め、県大会の団体戦ベスト８に貢献。
        `,
        `
          情報工学を専攻。バドミントンサークルに所属し精を出す。OS とセキュリティを
          研究する研究室に所属し、４年生からはハードな毎日を過ごす。
        `,
        `
          同大学院に進学し、電子情報システム工学を専攻。研究漬けの毎日。在学中に
          セキュリティの大会に出場し、優勝。経済産業大臣賞を獲得する。
          また、学会での受賞、国際会議での発表など、多くの経験を積んだ。
        `,
        `
          日本電気株式会社に SE として入社。コンビニ向け店舗システム開発に従事する。
          しかし、大企業では視座を高くするまでに時間がかかりすぎると感じたため、転職を決意。
          ２年半の勤務を経て退職。
        `,
        `
          現職である株式会社ジェニオに PG として入社。中古車輸出販売業者向けシステムの開発、
          環境事業者向けのシステム刷新に携わる。後者は SE で、要件定義から参画し、
          メンバー２人の管理も行っている。
        `
      ]
    };
  },
  methods: {
    activate: function(idx) {
      if (this.completed[idx] === false) {
        this.active.splice(idx, 1, true);
      }
    },
    deactivate: function(idx) {
      if (this.completed[idx] === false) {
        this.active.splice(idx, 1, false);
      }
    },
    toggle_completion: function(idx) {
      if (this.active[idx] === true) {
        this.active.splice(idx, 1, false);
      }
      this.completed.splice(idx, 1, !this.completed[idx]);
    }
  }
};
</script>
