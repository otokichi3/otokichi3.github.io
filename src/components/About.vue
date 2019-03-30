<template>
  <div>
    <article class="test">
      <h1>{{ title }}</h1>
      <div class="contents">
        <h2>経歴</h2>
        <ul class="cp_stepflow07">
          <li
            v-for="(background, i) in backgrounds"
            :key="background"
            v-bind:class="{ active: active[i], completed: completed[i] }"
            @mouseenter="activate(i)"
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
        `大して勉強はしていませんでしたが、勉強は出来ました。授業と宿題を真面目に聞いていたからだと思います。
          初心者ながらソフトテニス部に入り、前衛を張っていました。一応、県大会ベスト４に入りました。団体ですが。
          青春の感はありませんでしたし、できれば同窓会すら参加したくないぐらい、好きじゃないです。`,
        `一般のつもりでしたが、AO入試で入学しました。割と実力より上の大学に入りました。
        学業はそこそこ、あとはバドミントンサークルとバイトをしていました。すごーく無為な
        時間を過ごしたなあ、と思います。`,
        `学部生のときとは打って変わって厳しくなりました。ですが、持ち前の不優秀を発揮し、
        教員からは怒られがち。研究も大した成果出せぬまま修論。修了出来て良かった。
        ただ、実績はなかなか良い。経済産業大臣賞。`,
        `研究室の厳しさから、社会はもっと厳しいものと思い臨んだためか、
        あまりの緩さに愕然。この緩さで仕事をすると腐る、と思い入社時に退職を決意。
        所属部署の上司は優秀な人ばかりだったが、ちょうど案件がたち消えたので、
        そのタイミングで退職。２年半だった。`,
        `現職。`
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
