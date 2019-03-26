<template>
    <div>
        <article class="test">
            <h1>{{ title }}</h1>
            <div class="contents">
                <table>
                    <tr>
                        <th></th>
                        <th>言語</th>
                        <th>レベル</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td>C</td>
                        <td>大学の実習</td>
                    </tr>
                </table>
            </div>
        </article>
    </div>
</template>

<script>
export default {
    name: 'Lang',
    data () {
        return {
            title: 'Lang',
        }
    }
}
</script>
