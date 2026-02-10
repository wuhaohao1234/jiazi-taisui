<template>
  <div class="min-h-screen flex flex-col">
    <!-- 导航栏 -->
    <nav class="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <router-link to="/" class="flex-shrink-0 flex items-center">
              <span class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">六十甲子太岁神</span>
            </router-link>
          </div>
          <div class="hidden md:flex items-center space-x-8">
            <router-link to="/" class="nav-link" active-class="nav-link-active">首页</router-link>
            <router-link to="/list" class="nav-link" active-class="nav-link-active">太岁名录</router-link>
            <router-link to="/about" class="nav-link" active-class="nav-link-active">关于项目</router-link>
          </div>
          <div class="md:hidden flex items-center">
            <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-gray-700 hover:text-indigo-600">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" v-if="!mobileMenuOpen"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" v-else></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <!-- 移动端菜单 -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-white border-t border-gray-100 shadow-lg">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <router-link to="/" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50" @click="mobileMenuOpen = false">首页</router-link>
          <router-link to="/list" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50" @click="mobileMenuOpen = false">太岁名录</router-link>
          <router-link to="/about" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50" @click="mobileMenuOpen = false">关于项目</router-link>
        </div>
      </div>
    </nav>

    <!-- 主内容 -->
    <main class="flex-grow">
      <router-view />
    </main>

    <!-- 页脚 -->
    <footer class="bg-gray-50 border-t border-border py-12">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-lg font-semibold mb-4">六十甲子太岁神</h3>
            <p class="text-muted">太岁信仰是中国传统文化的重要组成部分，本网站旨在整理和传播六十甲子太岁神的相关知识。</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">快速链接</h3>
            <ul class="space-y-2">
              <li><router-link to="/" class="text-muted hover:text-primary">首页</router-link></li>
              <li><router-link to="/list" class="text-muted hover:text-primary">太岁名录</router-link></li>
              <li><router-link to="/about" class="text-muted hover:text-primary">关于项目</router-link></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">联系我们</h3>
            <p class="text-muted">如有任何问题或建议，欢迎联系我们。</p>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-border text-center text-muted">
          <p>© {{ new Date().getFullYear() }} 六十甲子太岁神网站. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      mobileMenuOpen: false
    }
  }
}
</script>

<style>
/* 全局样式已在style.css中定义 */
</style>