<template>
  <header class="header__wrapper">
    <div class="type-area header__main">
      <div class="header-l__wrapper">
        <img
          class="icon-location"
          src="https://www.zoni8.com/static/cn/images/common/contents/top_area.png"
          alt=""
          srcset=""
        />
        <span class="location-name">大连市</span>
      </div>

      <div class="header-r__wrapper">
        <ul class="nav-list__wrapper">
          <li
            class="nav-list-item"
            v-for="(item, index) in navList"
            :key="index"
          >
            <NuxtLink :to="item.url">{{ item.name }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { getNavList, getWebConfigByGroup } from "~/api/config";
import type { NavItemResponse } from "~/types/config";

const navList = ref<NavItemResponse[]>([]);
const webData = await getWebConfigByGroup("web");
const layoutData = await getWebConfigByGroup("layout");
const navData = await getNavList();

navList.value = navData?.data?.filter((item) => item.type === "cate") ?? [];

console.log("st---navList", navList);
console.log("st---webData", webData);
console.log("st---layoutData", layoutData);
</script>

<style lang="scss" scoped>
.header__wrapper {
  .header__main {
    display: flex;
    justify-content: space-between;

    .header-l__wrapper {
      display: flex;
      align-items: center;

      .icon-location {
        width: 11px;
        height: 14px;
        margin-right: 10px;
      }

      .location-name {
        font-size: 12px;
        color: rgb(102, 102, 102);
      }
    }

    .header-r__wrapper {
      .nav-list__wrapper {
        display: flex;
        align-items: center;

        .nav-list-item {
        }
      }
    }
  }
}
</style>
