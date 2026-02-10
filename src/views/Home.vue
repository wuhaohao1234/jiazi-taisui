<template>
  <div>
    <!-- 英雄区域 -->
    <section class="hero-gradient py-20 md:py-28">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">六十甲子太岁神</h1>
          <p class="text-lg md:text-xl text-gray-600 mb-8">中国传统文化中天文历法、道教信仰与历史人物崇拜的融合体</p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <router-link to="/list" class="btn btn-primary">浏览太岁名录</router-link>
            <router-link to="/about" class="btn btn-secondary">了解更多</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心概述 -->
    <section class="section">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="heading text-center mb-12">太岁信仰核心概述</h2>
        <div class="max-w-3xl mx-auto">
          <p class="text-lg mb-6">太岁，亦称"岁君""值年太岁"，源于中国古代天文历法中的"岁星纪年法"。古人假想与木星（岁星）运行方向相反、周期相同的"太岁星"，以六十甲子为循环，每年由一位太岁星君轮值，掌管当年人间吉凶、方位时序与祸福奖惩。</p>
          <p class="text-lg mb-6">道教将六十甲子人格化为"六十元辰"，均为历史上忠良贤达之士，生前以德行、功业造福一方，死后被奉为太岁神，兼具"监察人间善恶"与"护佑本命元辰"的职能。民间"拜太岁"习俗，核心是敬奉值年太岁与本命太岁，以祈流年顺遂、趋吉避凶。</p>
        </div>
      </div>
    </section>

    <!-- 2026年值年太岁 -->
    <section class="bg-white section">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="heading text-center mb-12">2026年丙午年值年太岁</h2>
        <div class="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="p-8 md:p-10">
              <div class="mb-6">
                <span class="text-sm font-medium text-gray-500">值年太岁</span>
                <h3 class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mt-1">文哲大将军</h3>
              </div>
              <div class="space-y-6">
                <div>
                  <span class="text-sm font-medium text-gray-500">太岁方位</span>
                  <p class="text-lg mt-1">正南方向（岁破位：正北方向）</p>
                </div>
                <div>
                  <span class="text-sm font-medium text-gray-500">犯太岁生肖</span>
                  <div class="flex flex-wrap gap-2 mt-2">
                    <span class="badge badge-primary">值太岁（马）</span>
                    <span class="badge badge-secondary">冲太岁（鼠）</span>
                    <span class="badge badge-secondary">害太岁（牛）</span>
                    <span class="badge badge-secondary">破太岁（兔）</span>
                  </div>
                </div>
                <div>
                  <span class="text-sm font-medium text-gray-500">形象法器</span>
                  <p class="text-lg mt-1">持书卷，目光深邃</p>
                </div>
                <div>
                  <span class="text-sm font-medium text-gray-500">朝代故事</span>
                  <p class="text-gray-600 mt-1 leading-relaxed">明代学者。精通哲学、史学，隐居讲学，主张"文以载道，哲以明理"；其著作涵盖修身、治国之道，影响深远，因"学识渊博、德行高尚"被奉为太岁，主掌2026年流年祸福。</p>
                </div>
              </div>
            </div>
            <div class="bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center p-8">
              <img 
                src="https://static.shenpowang.com/image/202512/232011257320.png" 
                alt="文哲大将军" 
                class="w-full h-auto max-h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 文化核心 -->
    <section class="section">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="heading text-center mb-12">文化核心总结</h2>
        <div class="max-w-3xl mx-auto">
          <p class="text-lg">六十甲子太岁信仰，是中国传统文化中"天文历法""道教信仰"与"历史人物崇拜"的融合体。太岁神皆以"<span class="font-semibold text-primary">忠、孝、廉、义、智</span>"为核心德行，其故事彰显了古人对"善"的追求与对"秩序"的尊崇。拜太岁的本质，并非迷信，而是以先贤为榜样，警醒自身修身立德、敬畏自然、顺应时序，追求流年顺遂与人生圆满。</p>
        </div>
      </div>
    </section>

    <!-- 快速入口 -->
    <section class="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 section">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="heading text-center mb-12">快速入口</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <router-link to="/list" class="card flex flex-col items-center justify-center p-8 text-center hover:transform hover:scale-105 transition-all">
            <div class="w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mb-6 shadow-md">
              <svg class="w-10 h-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-gray-800">太岁名录</h3>
            <p class="text-gray-600">浏览完整的六十甲子太岁神列表</p>
          </router-link>
          <router-link to="/list?group=甲子组" class="card flex flex-col items-center justify-center p-8 text-center hover:transform hover:scale-105 transition-all">
            <div class="w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mb-6 shadow-md">
              <svg class="w-10 h-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-gray-800">甲子组</h3>
            <p class="text-gray-600">甲与十二地支相配的太岁神</p>
          </router-link>
          <router-link to="/list?group=乙丑组" class="card flex flex-col items-center justify-center p-8 text-center hover:transform hover:scale-105 transition-all">
            <div class="w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mb-6 shadow-md">
              <svg class="w-10 h-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-gray-800">乙丑组</h3>
            <p class="text-gray-600">乙与十二地支相配的太岁神</p>
          </router-link>
          <router-link to="/about" class="card flex flex-col items-center justify-center p-8 text-center hover:transform hover:scale-105 transition-all">
            <div class="w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mb-6 shadow-md">
              <svg class="w-10 h-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-gray-800">关于项目</h3>
            <p class="text-gray-600">了解项目的背景和意义</p>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
/* 页面特定样式 */
</style>