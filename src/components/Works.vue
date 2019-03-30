<template>
  <div>
    <article class="test">
      <intro-topic topic="Works"></intro-topic>
      <div class="contents">
        <div class="cssgrid">
          <div>CapitaWorld</div>
          <div>アイテム2</div>
          <div>アイテム3</div>
          <div>アイテム4</div>
          <div>アイテム5</div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "self-introduction",
  data() {
    return {
      title: "Works",
      msg: ""
    };
  }
};
</script>
