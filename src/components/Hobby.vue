<template>
    <div>
        <article class="test">
            <h1>{{ title }}</h1>
            <div class="contents">
                <div class="sports">
                    <p v-for="(sport, i) in sports" :key="sport" v-on:click="show_sports_detail(i)">{{ sport }}</p>
                </div>
                <div class="culture">
                    <p v-for="(culture, i) in cultures" :key="culture" v-on:click="show_culture_detail(i)">{{ culture }}</p>
                </div>
                <div v-show="isBadminton" class="badminton">
                    bad
                </div>
                <div v-show="isRunning" class="running">
                    run
                </div>
                <div v-show="isClimbing" class="climbing">
                    climb
                </div>
                <div v-show="isCycling" class="cycling">
                    cycle
                </div>
                <div v-show="isNovel" class="novel">
                    直木賞作品を新しい方から読みつつ、たまに寄り道します。<br>
                    技術書も読みますが、最近はあまり手をつけられていません。
                </div>
                <div v-show="isStudy" class="study">
                    政治・経済に興味があります。歴史を学ぶのも好きです。<br>
                    簿記やFPなど、お金にまつわる知識は早めに獲得しておきたいものです。
                </div>
                <div v-show="isBoardGame" class="boardGame">
                    ドラスレが最もお気に入りです。ゴキポも好き。<br>
                    ワーバスが最強という説もありますが。
                </div>
            </div>
        </article>
    </div>
</template>

<script>
export default {
    data () {
        return {
            title: 'Hobby',
            sports: ['バドミントン', 'ランニング', '登山', 'サイクリング'],
            cultures: ['読書', '勉強', 'ボードゲーム'],
            isBadminton: false,
            isRunning:   false,
            isClimbing:  false,
            isCycling:   false,
            isNovel:     false,
            isStudy:     false,
            isBoardGame: false,
        }
    },
    methods: {
        show_sports_detail(num) {
            switch (num) {
                case 0:
                    this.isBadminton = true
                    this.isRunning   = false
                    this.isClimbing  = false
                    this.isCycling   = false
                    break
                case 1:
                    this.isBadminton = false
                    this.isRunning   = true
                    this.isClimbing  = false
                    this.isCycling   = false
                    break
                case 2:
                    this.isBadminton = false
                    this.isRunning   = false
                    this.isClimbing  = true
                    this.isCycling   = false
                    break
                case 3:
                    this.isBadminton = false
                    this.isRunning   = false
                    this.isClimbing  = false
                    this.isCycling   = true
                    break
                default:
                    this.isNovel     = false
                    this.isStudy     = false
                    this.isBoardGame = false
                    break
            }
        },
        show_culture_detail(num) {
            switch (num) {
                case 0:
                    this.isNovel     = true
                    this.isStudy     = false
                    this.isBoardGame = false
                    break
                case 1:
                    this.isNovel     = false
                    this.isStudy     = true
                    this.isBoardGame = false
                    break
                case 2:
                    this.isNovel     = false
                    this.isStudy     = false
                    this.isBoardGame = true
                    break
                default:
                    this.isBadminton = false
                    this.isRunning   = false
                    this.isClimbing  = false
                    this.isCycling   = false
                    break
            }
        }
    }
}
</script>
