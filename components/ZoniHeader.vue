<template>
  <header class="header__wrapper">
    <div class="top-bar__wrapper">
      <div class="type-area top-bar__main">
        <div class="header-l__wrapper">
          <NuxtImg
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
    </div>

    <div class="search-bar__wrapper">
      <div class="type-area search-bar__main">
        <div class="search-bar-l__wrapper">
          <NuxtLink to="/">
            <div class="logo__wrapper">
              <NuxtImg
                class="icon-logo"
                src="https://www.zoni8.com/static/cn/images/common/homeV1/zhiba-logo.png"
              />
              <h2 class="title">辽宁省科技企业服务平台</h2>
            </div>
          </NuxtLink>

          <div class="search__wrapper">
            <el-input placeholder="关键字搜索" class="search-input">
              <template #append>
                <div class="search-input-icon__wrapper">
                  <el-button :icon="Search" />
                </div>
              </template>
            </el-input>
          </div>
        </div>

        <div class="search-bar-r__wrapper"></div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { getNavList, getWebConfigByGroup } from "~/api/config";
import type { NavItemResponse } from "~/types/config";

import { Search } from "@element-plus/icons-vue";

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
  .top-bar__wrapper {
    background-color: rgba(245, 245, 245, 0.5);

    .top-bar__main {
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
            width: 80px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            font-size: 12px;
            color: rgb(102, 102, 102);
          }
        }
      }
    }
  }

  .search-bar__wrapper {
    padding: 15px 0;

    .search-bar__main {
      display: flex;
      justify-content: space-between;

      .search-bar-l__wrapper {
        display: flex;

        .logo__wrapper {
          display: flex;
          align-items: center;

          .icon-logo {
            width: 50px;
            margin-right: 10px;
          }

          .title {
            margin: 0;
            font-size: 22px;
            font-weight: bold;
            color: #333;
          }
        }

        .search__wrapper {
          :deep(.el-input) {
            .el-input-group__append {
              padding: 0;
              background-color: var(--zoni-primary-color);
            }

            .el-input__wrapper {
              --el-input-hover-border-color: var(--zoni-primary-color);
              --el-input-focus-border-color: var(--zoni-primary-color);
              --el-input-border-color: var(--zoni-primary-color);
              --el-border-color: var(--zoni-primary-color);
              box-shadow: 0 0 0 2px
                var(--el-input-border-color, var(--el-border-color)) inset;
            }
          }

          .search-input {
            .search-input-icon__wrapper {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 55px;
              height: 40px;
              border: 1px solid var(--zoni-primary-color);
            }
          }
        }
      }

      .search-bar-r__wrapper {
      }
    }
  }
}
</style>
