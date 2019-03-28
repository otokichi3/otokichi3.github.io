<template>
  <div>
    <article class="test">
      <h1>{{ title }}</h1>
      <div class="contents">
        <h2>経歴</h2>
        <ul class="cp_stepflow07">
          <li
            v-bind:class="{ active: active[0], completed: completed[0] }"
            @mouseenter="activate(0)"
            @mouseleave="deactivate(0)"
            @click="toggle_completion(0)"
          >
            <span class="bubble"></span>
            <span>高校</span>
          </li>
          <li
            v-bind:class="{ active: active[1], completed: completed[1] }"
            @mouseenter="activate(1)"
            @mouseleave="deactivate(1)"
            @click="toggle_completion(1)"
          >
            <span class="bubble"></span>
            <span>大学</span>
          </li>
          <li
            v-bind:class="{ active: active[2], completed: completed[2] }"
            @mouseenter="activate(2)"
            @mouseleave="deactivate(2)"
            @click="toggle_completion(2)"
          >
            <span class="bubble"></span>
            <span>大学院</span>
          </li>
          <li
            v-bind:class="{ active: active[3], completed: completed[3] }"
            @mouseenter="activate(3)"
            @mouseleave="deactivate(3)"
            @click="toggle_completion(3)"
          >
            <span class="bubble"></span>
            <span>最初の会社</span>
          </li>
          <li
            v-bind:class="{ active: active[4], completed: completed[4] }"
            @mouseenter="activate(4)"
            @mouseleave="deactivate(4)"
            @click="toggle_completion(4)"
          >
            <span class="bubble"></span>
            <span>今の会社</span>
          </li>
        </ul>
        <div v-for="(content, i) in content_list" :key="content">
          <p v-if="active[i] && !completed[i]">{{ content }}</p>
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
