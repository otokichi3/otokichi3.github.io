<template>
    <div>
        <article class="test">
            <h1>{{ title }}</h1>
            <div class="contents">contents</div>
        </article>
    </div>
</template>

<script>
export default {
  name: 'self-introduction',
  data () {
    return {
      title: 'Hobby',
      msg: ''
    }
  }
}
</script>

<style scoped>
.contents {
    width: 80%;
}
</style>
