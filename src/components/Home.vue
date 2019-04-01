<template>
  <div>
    <article class="test">
      <intro-topic topic="Home"></intro-topic>
      <div class="contents">
        <h2 @click="reverse_message">{{ greeting }}</h2>
        <div class="center">
          <p class="name_model">You input:&nbsp;{{ name }}</p>
          <input v-model="name">
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
    greeting: function() {
      var date = new Date();
      return date.getHours() >= 12 ? this.after_noon_msg : this.noon_msg;
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
