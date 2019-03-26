<template>
    <div id="header">
        <header>
            <ul>
                <router-link tag="li" to="/" exact><a>Home</a></router-link>
                <router-link tag="li" to="/about"><a>About</a></router-link>
                <router-link tag="li" to="/hobby"><a>Hobby</a></router-link>
                <router-link tag="li" to="/works"><a>Works</a></router-link>
                <router-link tag="li" to="/lang"><a>Lang</a></router-link>
            </ul>
        </header>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>
