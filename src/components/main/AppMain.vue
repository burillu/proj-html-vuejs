<template>
    <AppHero />
    <AppPresent />
    <AppStats />
    <AppFeat />
    <AppOurProcess />
    <AppOurTeam />
    <AppWhyUs />
    <AppContactUs />
</template>

<script>
import AppWhyUs from './App.WhyUs.vue';
import AppContactUs from './AppContactUs.vue';
import AppFeat from './AppFeat.vue';
import AppHero from './AppHero.vue';
import AppOurProcess from './AppOurProcess.vue';
import AppOurTeam from './AppOurTeam.vue';
import AppPresent from './AppPresent.vue';
import AppStats from './AppStats.vue';


export default {
    name: "AppMain",
    components: { AppHero, AppPresent, AppFeat, AppOurProcess, AppOurTeam, AppWhyUs, AppContactUs, AppStats }
}
</script>

<style lang="scss" scoped></style>