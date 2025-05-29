import useHttp from '~/composables/useHttp'
import type { NavItemResponse } from '~/types/config'

// 根据name获取网站配置
export function getWebConfig(name: string) {
  return useHttp({
    url: `/config/${name}`,
    method: "get",
  })
}

// 根据分组获取网站配置
export function getWebConfigByGroup(group: string) {
  return useHttp({
    url: `/config/list/${group}`,
    method: "get",
  })
}

// 获取头部导航
export function getNavList() {
  return useHttp<NavItemResponse[]>({
    url: '/cate/list',
    method: "get",
  })
}
