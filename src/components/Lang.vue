<template>
  <div>
    <article class="test">
      <intro-topic topic="Language"></intro-topic>
      <div class="contents">
        <table class="lang_table">
          <tr>
            <th>言語</th>
            <th>レベル</th>
            <th>好きな関数・命令</th>
          </tr>
          <tr>
            <td>C</td>
            <td>大学の実習で２年</td>
            <td>calloc</td>
          </tr>
          <tr>
            <td>PHP</td>
            <td>自学＋仕事で１年</td>
            <td>array_multisort</td>
          </tr>
          <tr>
            <td>Java</td>
            <td>大学の実習で１年間</td>
            <td>println</td>
          </tr>
          <tr>
            <td>アセンブリ</td>
            <td>大学の研究などで少々</td>
            <td>INT 0x80</td>
          </tr>
          <tr>
            <td>Python</td>
            <td>研究の合間に少々</td>
            <td>lambda</td>
          </tr>
        </table>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "Lang",
  data() {
    return {
      title: "Lang"
    };
  }
};
</script>
