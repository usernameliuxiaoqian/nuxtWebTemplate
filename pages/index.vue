<template>
  <list :articleList="articleList"></list>
</template>

<script setup lang="ts">
// import { getArtByType } from "~/api/service";
import list from "../components/articleList";

const route = useRoute();
const page = route.query.page;
const articleList = ref([]);

// const { data: articleList } = await getArtByType({
//   currentPage: page || 1,
//   artType: "code",
//   limit: 10,
// });
useHead({
  title: "首页 | Code - 重庆崽儿Brand的网络世界",
});
</script>

<style lang=""></style>
