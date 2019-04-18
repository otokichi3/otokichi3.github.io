<template>
  <div>
    <article class="works">
      <intro-topic topic="Works"></intro-topic>
      <div class="contents">
          <div id="cssgrid">
            <div>
                <p class="box-header">
                    CapitaWorld
                </p>
                <p class="box-contents">
                    初リリースの Android アプリ。世界の国々が順番に表示されるため、
                    表示された国の首都を答えるというだけのシンプルなアプリ。
                    Android アプリリリースの一通りの流れは勉強出来た。
                </p>
            </div>
            <div>
                <p class="box-header">
                    REST API
                </p>
                <p class="box-contents">
                    Laravel を使って何かをしたかったから作った REST API 。
                    OAuth 認証を使用。また AWS S3 上で構築。色々勉強となった。
                </p>
            </div>
            <div>
                <p class="box-header">
                    バドの自動組み合わせ(TBA)
                </p>
                <p class="box-contents">
                    所属するサークルで、数十人の試合の組み合わせを考えるのが大変だと感じたため、
                    負担軽減のために作成予定。
                </p>
            </div>
            <div>
                To Be Appeared
            </div>
          </div>
          <!-- <dl style="margin-left: 100px;">
              <dt>CapitaWorld</dt>
              <dd>Android アプリ。世界の首都を答える。Android アプリのリリースの勉強のために作成。</dd>
              <dt>これ自身</dt>
              <dd>ポートフォリオページとして作り始めたが、いまいちゴールが見えず。</dd>
          </dl> -->
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
