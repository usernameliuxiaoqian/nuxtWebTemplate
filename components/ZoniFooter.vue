<template>
  <header class="footer-wrpper">
    <div class="type-area footer__main fl">
      <div class="footer_main-left">
        <div class="pc_link-group fl">
          <div
            class="pc_link-item fl"
            v-for="(item, index) in pcLinkList"
            :key="index"
          >
            <NuxtLink :to="item.linkUrl">{{ item.linkName }}</NuxtLink>
            <span v-if="index !== pcLinkList.length - 1" class="line"></span>
          </div>
        </div>
        <div class="pc-title">辽宁省科技企业服务平台</div>
        <!--其他信息-->
        <div class="other-info fl">
          <div class="other-info_item fl">
            <div class="other-info_item-title">联系电话：024-23652392</div>
            <span class="line"></span>
          </div>
          <div class="other-info_item fl">
            <div class="other-info_item-title">联系邮箱：service@zoni8.com</div>
            <span class="line"></span>
          </div>
          <div class="other-info_item fl">
            <div class="other-info_item-title">
              联系地址：辽宁省沈阳市浑南区国际软件园A22号
            </div>
          </div>
        </div>
        <!--版权-->
        <div class="other-info fl">
          <div class="other-info_item fl">
            <div class="other-info_item-title">
              Copyright ©芝吧zoni8.com 版权所有
            </div>
            <span class="line"></span>
          </div>
          <div class="other-info_item fl">
            <div class="other-info_item-title">辽ICP备2020015362号</div>
          </div>
        </div>
        <!--备案号-->
        <div class="other-info fl">
          <img
            src="https://www.zoni8.com/static/cn/images/common/contents/huizhang.png"
            class="badge-icon"
          />
          <a
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=21011202000738"
            >辽公网安备 21011202000738号</a
          >
        </div>
      </div>
      <div class="footer_main-right fl">
        <div
          class="other-entrance"
          v-for="(item, index) in otherEntranceList"
          :key="index"
        >
          <NuxtImg :src="item.url" class="other-entrance_image" />
          <div class="other-entrance_text">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import type { FooterPCLink, OtherEntrance } from "~/types/config";
const pcLinkList = ref<FooterPCLink[]>([
  {
    linkName: "关于我们",
    linkUrl: "/",
  },
  {
    linkName: "联系我们",
    linkUrl: "/",
  },
  {
    linkName: "我要入驻",
    linkUrl: "/",
  },
  {
    linkName: "平台APP",
    linkUrl: "/",
  },
  {
    linkName: "投诉建议",
    linkUrl: "/",
  },
]);
const otherEntranceList = ref<OtherEntrance[]>([
  {
    url: "https://www.zoni8.com/static/cn/images/code-wx-mp@300.jpg",
    title: "平台小程序",
  },
  {
    url: "https://www.zoni8.com/static/cn/images/downloadtwo.png",
    title: "平台APP",
  },
  {
    url: "https://www.zoni8.com/static/cn/images/common/contents/ewm_01.jpg",
    title: "公众号",
  },
]);
</script>

<style lang="scss" scoped>
.footer-wrpper {
  background: #2b2b2b;
  .footer__main {
    padding: 30px 0 20px;

    .footer_main-left {
      .pc_link-group {
        padding-bottom: 15px;
        font-size: 13px;
        color: #999;
        border-bottom: 1px solid #999;
        display: inline-block;
        .pc_link-item {
          display: inline-flex;

          .line {
            width: 1px;
            height: 0.9em;
            background-color: #999;
            margin: 0 20px;
          }
        }
      }
      .pc-title {
        font-size: 22px;
        font-weight: bold;
        color: #fff;
        padding: 15px 0;
        line-height: 1;
      }
      .other-info {
        font-size: 12px;
        color: #999;
        margin-bottom: 15px;

        .other-info_item {
          .line {
            width: 1px;
            height: 0.8em;
            background-color: #999;
            margin: 0 10px;
          }
        }
        .badge-icon {
          width: 20px;
          height: 20px;
          margin-right: 5px;
        }
      }
    }
    .footer_main-right {
      margin-left: 10%;

      .other-entrance {
        text-align: center;
        color: #fff;
        font-size: 12px;
        margin-right: 20px;

        .other-entrace_text {
          margin-top: 10px;
        }
        &_image {
          width: 80px;
          height: 80px;
        }
      }
    }
  }
}
</style>
