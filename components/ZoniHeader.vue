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
                  <el-button class="search-btn">
                    <el-icon size="25" color="#fff">
                      <Search />
                    </el-icon>
                  </el-button>
                </div>
              </template>
            </el-input>

            <ul class="keywords-list__wrapper">
              <li
                class="keywords-item"
                v-for="(item, index) in keywordsList"
                :key="index"
              >
                {{ item.label }}
              </li>
            </ul>
          </div>
        </div>

        <div class="search-bar-r__wrapper">
          <NuxtLink to="/article">
            <div class="cart__wrapper">
              <div>
                <NuxtImg
                  class="icon-cart"
                  src="https://www.zoni8.com/static/cn/images/common/contents/cart.png"
                />
                <span class="cart-num">0</span>
              </div>
              <span>我的购物车</span>
            </div>
          </NuxtLink>

          <NuxtLink to="/login">
            <div class="common-btn plain">登录</div>
          </NuxtLink>

          <NuxtLink to="/login">
            <div class="common-btn">注册</div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { getNavList, getWebConfigByGroup } from "~/api/config";
import type { NavItemResponse } from "~/types/config";

import { Search } from "@element-plus/icons-vue";

const navList = ref<NavItemResponse[]>([]);
const keywordsList = ref([
  { label: "高企", value: "高企" },
  { label: "资质认证", value: "资质认证" },
  { label: "商标设计", value: "商标设计" },
  { label: "工商代办", value: "工商代办" },
  { label: "代理记账", value: "代理记账" },
  { label: "专利", value: "专利" },
  { label: "审计", value: "审计" },
  { label: "软著", value: "软著" },
  { label: "管理体系", value: "管理体系" },
]);

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
          margin-left: 50px;

          :deep(.el-input) {
            .el-input-group__append {
              padding: 0;
              background-color: var(--zoni-primary-color);
              border-radius: 0;
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
            width: 550px;

            .search-input-icon__wrapper {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 55px;
              height: 40px;
              border: 1px solid var(--zoni-primary-color);

              .search-btn {
                padding: 0;
              }
            }
          }

          .keywords-list__wrapper {
            display: flex;
            align-items: center;

            .keywords-item {
              height: 30px;
              line-height: 30px;
              margin-left: 10px;
              cursor: pointer;
              font-size: 12px;
              color: #666666;
            }
          }
        }
      }

      .search-bar-r__wrapper {
        display: flex;
        padding-top: 5px;

        .cart__wrapper {
          display: flex;
          height: 40px;
          line-height: 40px;
          padding: 0 8px;
          font-size: 12px;
          border: 1px solid #eee;
          border-radius: 2px;
          color: var(--zoni-primary-color);

          .icon-cart {
            width: 15px;
          }

          .cart-num {
            position: relative;
            top: -10px;
            left: -6px;
            display: inline-block;
            width: 14px;
            height: 14px;
            line-height: 12px;
            font-size: 12px;
            text-align: center;
            color: #ffffff;
            border-radius: 8px;
            background: var(--zoni-primary-color);
          }
        }

        .common-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 40px;
          margin-left: 10px;
          font-size: 12px;
          background-color: var(--zoni-primary-color);
          color: #fff;
          border: 1px solid var(--zoni-primary-color);

          &.plain {
            background-color: #fff;
            border: 1px solid #eee;
            color: rgb(51, 51, 51);
          }
        }
      }
    }
  }
}
</style>
