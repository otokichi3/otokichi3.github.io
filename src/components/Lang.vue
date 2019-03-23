<template>
    <div>
        <p>This is {{ title }} Page.</p>
        <router-link to="/">Go to Home page.</router-link>
        <router-link to="/about">Go to About page.</router-link>
        <router-link to="/hobby">Go to Hobby page.</router-link>
        <router-link to="/works">Go to Works page.</router-link>
        <router-link to="/lang">Go to Lang page.</router-link>
    </div>
</template>

<script>
export default {
  name: 'self-introduction',
  data () {
    return {
      title: 'Lang',
      msg: ''
    }
  }
}
</script>
