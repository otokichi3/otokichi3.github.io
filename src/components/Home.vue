<template>
  <div>
    <article class="test">
      <intro-topic topic="Home"></intro-topic>
      <div class="contents">
        <h2
          v-if="now >= 12"
          v-bind:title="message"
          v-on:click="reverse_message"
        >{{ after_noon_msg }}</h2>
        <h2 v-on:click="reverse_message" v-else>{{ noon_msg }}</h2>
        <div class="center">
          <p class="name_model">You input:&nbsp;{{ name }}</p>
          <input v-model="name">
        </div>
        <div class="center">
            <input type="checkbox" id="checkbox" v-model="checked">
            <label for="checkbox">{{ checked }}</label>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      title: "Home",
      message: "v-bind:title",
      noon_msg: "Good morning visitor",
      after_noon_msg: "Good afternoon visitor",
      name: "Please enter your name."
    };
  },
  computed: {
    now: function() {
      var date = new Date();
      return date.getHours();
    }
  },
  methods: {
    reverse_message: function() {
      if (this.now >= 12) {
        this.after_noon_msg = this.after_noon_msg
          .split("")
          .reverse()
          .join("");
      } else {
        this.noon_msg = this.noon_msg
          .split("")
          .reverse()
          .join("");
      }
    }
  }
};
</script>
