<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app',
    data () {
        return {
            transitionName: "fadeInRight"
        }
    }
}
</script>

<style lang="less">
@import './styles/common/_reset.less';
@import './styles/common/reset.css';

#app {
    font-family:  Helvetica, Tahoma, Arial, 'Microsoft Yahei UI Light';
}
</style>
