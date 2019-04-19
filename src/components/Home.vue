<template>
  <div>
    <div class="welcome_msg pc_only">
        Life is like a easy game.
    </div>
    <div class="welcome_msg sp_only">
        Life is<br>like a easy game.
    </div>
  </div>
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
