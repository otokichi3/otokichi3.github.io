<template>
  <div>
    <article class="test">
      <h1>{{ title }}</h1>
      <div class="contents">
        <h2>経歴</h2>
        <ul class="cp_stepflow07">
          <li class="completed">
            <span class="bubble"></span>
            <span>岡山県立玉野高校</span>
          </li>
          <li class="completed">
            <span class="bubble"></span>
            <span>岡山大学</span>
          </li>
          <li class="active">
            <span class="bubble"></span>
            <span>岡山大学大学院</span>
          </li>
          <li>
            <span class="bubble"></span>
            <span>日本電気株式会社</span>
          </li>
          <li>
            <span class="bubble"></span>
            <span>株式会社ジェニオ</span>
          </li>
        </ul>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      title: "About"
    };
  }
};
</script>
