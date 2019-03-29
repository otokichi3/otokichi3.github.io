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
        `大学`,
        `大学院`,
        `NEC`,
        `GENIO`
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
