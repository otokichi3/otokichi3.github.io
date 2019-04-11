<template>
  <div>
    <article class="test">
      <intro-topic topic="Works"></intro-topic>
      <div class="contents">
          <dl style="margin-left: 100px;">
              <dt>CapitaWorld</dt>
              <dd>Android アプリ。世界の首都を答える。Android アプリのリリースの勉強のために作成。</dd>
              <dt>これ自身</dt>
              <dd>ポートフォリオページとして作り始めたが、いまいちゴールが見えず。</dd>
          </dl>
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
