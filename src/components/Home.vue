<template>
  <!-- <div> -->
    <!-- <article class="test">
      <intro-topic topic="Home"></intro-topic> -->
      <!-- <div class="contents"> -->
        <!-- <h2 @click="reverse_message">{{ greeting }}<span style="color: gray;">{{ name }}</span></h2> -->
        <div class="welcome_msg">
            Welcome to Kota's Portfolio!
        </div>
        <!-- <div class="center">
          <input @change="check_name" v-model="name">
          <p v-show="is_genio">
              <a href="https://genio.co.jp/">GENIO</a>
          </p>
          <p v-show="is_yoshizaki">
              <a href="https://github.com/wiethkaty/wiethkaty.github.io">wiethkaty(GitHub)</a>
          </p>
          <p v-show="is_skill">
              <ul>
                  <li>世界の首都をだいたい言える！</li>
                  <li>三重跳びが今でも１０回は出来る！</li>
                  <li>バク転！（安全なところなら）</li>
              </ul>
          </p>
        </div> -->
      <!-- </div> -->
    <!-- </article> -->
  <!-- </div> -->
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      title:         "Home",
      message:       "v-bind:title",
      noon_msg:      "Good morning   ",
      afternoon_msg: "Good afternoon ",
      name:          "visitor!",
      is_genio:      false,
      is_yoshizaki:  false,
      is_skill:      false,
    };
  },
  computed: {
    greeting: function() {
      var date = new Date();
      return date.getHours() >= 12 ? this.afternoon_msg : this.noon_msg;
    }
  },
  methods: {
    reverse_message: function() {
      if (this.now >= 12) {
        this.afternoon_msg = this.afternoon_msg.split("").reverse().join("");
      } else {
        this.noon_msg = this.noon_msg.split("").reverse().join("");
      }
    },
    check_name: function() {
        console.log(this.name);
        if (this.name === 'genio') {
            this.is_genio     = true;
            this.is_yoshizaki = false;
            this.is_skill     = false;
        } else if (this.name === 'yoshizaki'){
            this.is_yoshizaki = true;
            this.is_genio     = false;
            this.is_skill     = false;
        } else if (this.name === 'skill'){
            this.is_genio     = false;
            this.is_yoshizaki = false;
            this.is_skill     = true;
        } else {
            this.is_genio     = false;
            this.is_yoshizaki = false;
            this.is_skill     = false;
        }
    }
  }
};
</script>
