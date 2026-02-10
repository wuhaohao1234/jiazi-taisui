<template>
  <div class="section">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 返回按钮 -->
      <router-link to="/list" class="inline-flex items-center text-gray-600 hover:text-indigo-600 mb-8 transition-colors duration-300">
        <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        返回太岁名录
      </router-link>

      <!-- 太岁详情 -->
      <div v-if="taisui" class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- 左侧信息 -->
        <div class="lg:col-span-2">
          <div class="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
            <h1 class="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">{{ taisui.stemBranch }}（{{ taisui.animal }}）</h1>
            <span class="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-medium shadow-sm">
              {{ taisui.group }}
            </span>
          </div>
          
          <div class="flex flex-wrap gap-3 mb-8">
            <span v-for="year in taisui.years" :key="year" class="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm shadow-sm">
              {{ year }}年
            </span>
          </div>

          <div class="card mb-8 border border-gray-100">
            <h2 class="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">{{ taisui.name }}</h2>
            <p v-if="taisui.otherNames.length > 0" class="text-gray-600 mb-6">
              异名：{{ taisui.otherNames.join('、') }}
            </p>
            <div class="space-y-6">
              <div>
                <h3 class="text-lg font-medium mb-3 text-gray-800">形象与法器</h3>
                <p class="text-gray-700 leading-relaxed">{{ taisui.image }}</p>
              </div>
              <div>
                <h3 class="text-lg font-medium mb-3 text-gray-800">历史朝代与核心故事</h3>
                <p class="text-gray-700 leading-relaxed">{{ taisui.story }}</p>
              </div>
            </div>
          </div>

          <!-- 相关太岁 -->
          <div>
            <h2 class="text-2xl font-semibold mb-6 text-indigo-700">同组太岁</h2>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              <router-link 
                v-for="item in sameGroupTaisui" 
                :key="item.id"
                :to="`/detail/${item.id}`"
                class="card p-4 hover:transform hover:scale-105 transition-all border border-gray-100"
                :class="{ 'ring-2 ring-indigo-500 ring-offset-2': item.id === taisui.id }"
              >
                <h3 class="font-medium mb-1 text-gray-800">{{ item.stemBranch }}</h3>
                <p class="text-sm bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">{{ item.name }}</p>
                <p class="text-xs text-gray-600">{{ item.animal }}</p>
              </router-link>
            </div>
          </div>
        </div>

        <!-- 右侧图像 -->
        <div class="lg:col-span-1">
          <div class="card sticky top-24 border border-gray-100">
            <div class="space-y-6">
              <div>
                <h3 class="text-lg font-medium mb-3 text-gray-800">太岁小知识</h3>
                <p class="text-gray-600 leading-relaxed">
                  太岁神是中国传统文化中的重要神祇，每年由一位太岁星君轮值，掌管当年人间吉凶、方位时序与祸福奖惩。
                </p>
              </div>
              <div>
                <h3 class="text-lg font-medium mb-3 text-gray-800">拜太岁习俗</h3>
                <p class="text-gray-600 leading-relaxed">
                  民间"拜太岁"习俗，核心是敬奉值年太岁与本命太岁，以祈流年顺遂、趋吉避凶。拜太岁的本质，是以先贤为榜样，警醒自身修身立德。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 未找到太岁 -->
      <div v-else class="text-center py-16">
        <p class="text-xl text-muted">未找到该太岁神的信息</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaisuiDetail',
  data() {
    return {
      taisui: null,
      taisuiData: [
        // 甲子组
        {
          id: 1,
          group: '甲子组',
          stemBranch: '甲子',
          animal: '鼠',
          years: ['1924', '1984', '2044'],
          name: '金辨大将军',
          otherNames: ['金濂'],
          image: '面目清癯，长髯，手持桃木手杖或浑仪',
          story: '明代山阳人。任知县时严惩贪腐、兴修水利，解决农田灌溉难题；倡办书院，搜集典籍供学子研读，推动当地文风兴盛。其"洞悉善恶"的特质，成为甲子太岁"统御开端"的象征。'
        },
        {
          id: 2,
          group: '甲子组',
          stemBranch: '甲戌',
          animal: '狗',
          years: ['1934', '1994', '2054'],
          name: '施广大将军',
          otherNames: [],
          image: '身着文官袍，手持玉笏',
          story: '明代官员。为官宽厚，主张"德化为本"，在地方任上简化赋税流程，安抚流亡百姓；遇灾年开仓放粮，亲自督导赈灾，深得民心，被誉为"施仁政之典范"。'
        },
        {
          id: 3,
          group: '甲子组',
          stemBranch: '甲申',
          animal: '猴',
          years: ['1944', '2004', '2064'],
          name: '方杰大将军',
          otherNames: [],
          image: '执长矛，身姿挺拔',
          story: '宋代名将。出身行伍，作战勇猛且善用谋略，在边防抵御外敌入侵时，多次以少胜多；治军严明，体恤士卒，麾下军队秋毫无犯，死后追赠忠毅侯。'
        },
        {
          id: 4,
          group: '甲子组',
          stemBranch: '甲午',
          animal: '马',
          years: ['1894', '1954', '2014'],
          name: '章词大将军',
          otherNames: ['章文粹'],
          image: '持书卷，文雅刚毅',
          story: '明代泾县人。博学多才，隐居讲学数十年，门生遍布乡里；后应召为官，任御史时直言敢谏，不畏权贵，力主整顿吏治，晚年辞官归里，仍以教化百姓为己任。'
        },
        {
          id: 5,
          group: '甲子组',
          stemBranch: '甲辰',
          animal: '龙',
          years: ['1904', '1964', '2024'],
          name: '李诚大将军',
          otherNames: [],
          image: '手持如意，神态祥和',
          story: '元代官员。任户部主事时，清正廉洁，拒绝权贵贿赂；主持地方财政时，精打细算，将结余钱粮用于修缮城池、救济贫民，著有《理财要略》，彰显"守诚尽责"之德。'
        },
        {
          id: 6,
          group: '甲子组',
          stemBranch: '甲寅',
          animal: '虎',
          years: ['1914', '1974', '2034'],
          name: '张朝大将军',
          otherNames: [],
          image: '执剑，威风凛凛',
          story: '明代将领。随军队平定叛乱时，身先士卒，冲锋陷阵；在镇守边疆期间，修筑防御工事，安抚少数民族，促进边境和平，因功擢升都督佥事，一生忠于职守。'
        },
        // 乙丑组
        {
          id: 7,
          group: '乙丑组',
          stemBranch: '乙丑',
          animal: '牛',
          years: ['1925', '1985', '2045'],
          name: '陈材大将军',
          otherNames: [],
          image: '执红缨枪，身披铠甲',
          story: '宋代名将。自幼习武，力大无穷，在抗击金兵的战役中，屡立战功；曾单枪匹马冲入敌阵，斩杀敌将，解救被困宋军，被誉为"陈铁枪"，忠勇之名流传后世。'
        },
        {
          id: 8,
          group: '乙丑组',
          stemBranch: '乙亥',
          animal: '猪',
          years: ['1935', '1995', '2055'],
          name: '任保大将军',
          otherNames: [],
          image: '持宝剑，目光锐利',
          story: '明代官员。任刑部郎中时，断案如神，明察秋毫，平反多起冤狱；为人刚正不阿，不徇私情，即使面对权贵请托，亦坚守法度，被百姓称为"任青天"。'
        },
        {
          id: 9,
          group: '乙丑组',
          stemBranch: '乙酉',
          animal: '鸡',
          years: ['1945', '2005', '2065'],
          name: '蒋崇大将军',
          otherNames: [],
          image: '持铜锤，沉稳有力',
          story: '元代将领。驻守海防期间，多次击败海盗侵扰，保护沿海百姓生命财产安全；组织渔民操练，建立海防预警体系，使辖区内"海晏河清"，百姓安居乐业。'
        },
        {
          id: 10,
          group: '乙丑组',
          stemBranch: '乙未',
          animal: '羊',
          years: ['1895', '1955', '2015'],
          name: '杨仙大将军',
          otherNames: [],
          image: '持拂尘，道骨仙风',
          story: '宋代隐士。精通医术，隐居山林，以草药为百姓治病，分文不取；擅长天文历法，能预测天气变化，指导农民耕种，深受乡人敬重，被尊为"杨仙翁"。'
        },
        {
          id: 11,
          group: '乙丑组',
          stemBranch: '乙巳',
          animal: '蛇',
          years: ['1905', '1965', '2025'],
          name: '吴遂大将军',
          otherNames: [],
          image: '手持折扇，神态儒雅',
          story: '宋代学者。精通经史，著书立说，主张"学以致用"；任地方官时，兴办学校，推广儒学，改善民风，同时兴修水利，发展农业，使辖区内经济文化双繁荣。'
        },
        {
          id: 12,
          group: '乙丑组',
          stemBranch: '乙卯',
          animal: '兔',
          years: ['1915', '1975', '2035'],
          name: '万清大将军',
          otherNames: [],
          image: '持玉圭，端庄肃穆',
          story: '元代官员。任礼部尚书时，主持礼乐制度修订，主张"礼治天下"；为人宽厚，待人真诚，在官场中以"清名"著称，晚年辞官，潜心研究礼乐典籍，贡献卓著。'
        },
        // 丙寅组
        {
          id: 13,
          group: '丙寅组',
          stemBranch: '丙寅',
          animal: '虎',
          years: ['1926', '1986', '2046'],
          name: '耿章大将军',
          otherNames: [],
          image: '手持如意，文官装扮',
          story: '明代官员。任侍郎时，辅佐朝政，恪尽职守；在地方任职期间，重视农业生产，推广新的耕作技术，增加粮食产量；同时兴办义学，让贫困子弟有书可读，德行兼备。'
        },
        {
          id: 14,
          group: '丙寅组',
          stemBranch: '丙子',
          animal: '鼠',
          years: ['1936', '1996', '2056'],
          name: '郭嘉大将军',
          otherNames: [],
          image: '持笏板，文官威仪',
          story: '元代官员。任监察御史时，直言进谏，弹劾贪腐官员，维护朝廷纲纪；主持地方政务时，轻徭薄赋，安抚百姓，在灾年组织自救，使百姓免受流离之苦，忠直可嘉。'
        },
        {
          id: 15,
          group: '丙寅组',
          stemBranch: '丙戌',
          animal: '狗',
          years: ['1946', '2006', '2066'],
          name: '白敏大将军',
          otherNames: [],
          image: '执剑，英姿飒爽',
          story: '明代将领。在平定西南叛乱时，巧用计策，分化叛军，兵不血刃平定战乱；镇守一方时，注重民生，修筑道路，发展贸易，使辖区内社会稳定，经济发展。'
        },
        {
          id: 16,
          group: '丙寅组',
          stemBranch: '丙申',
          animal: '猴',
          years: ['1896', '1956', '2016'],
          name: '管仲大将军',
          otherNames: ['管夷吾', '管敬仲'],
          image: '手托卷轴，神态睿智',
          story: '春秋齐国颍上人，"华夏第一相"。经鲍叔牙举荐，辅佐齐桓公推行改革，提出"仓廪实而知礼节，衣食足而知荣辱"，对内整顿内政、发展经济，对外"尊王攘夷"，助齐桓公成为春秋首霸。其治国智慧被奉为典范，道教尊其为丙申太岁。'
        },
        {
          id: 17,
          group: '丙寅组',
          stemBranch: '丙午',
          animal: '马',
          years: ['1906', '1966', '2026'],
          name: '文哲大将军',
          otherNames: [],
          image: '持书卷，目光深邃',
          story: '明代学者。精通哲学、史学，隐居讲学，主张"文以载道，哲以明理"；其著作涵盖修身、治国之道，影响深远，因"学识渊博、德行高尚"被奉为太岁，主掌2026年流年祸福。'
        },
        {
          id: 18,
          group: '丙寅组',
          stemBranch: '丙辰',
          animal: '龙',
          years: ['1916', '1976', '2036'],
          name: '辛亚大将军',
          otherNames: [],
          image: '持钢鞭，刚正威严',
          story: '元代将领。作战勇猛，在抵御蒙古部落侵扰时，屡建奇功；治军严格，赏罚分明，麾下士卒皆愿效死；任地方官时，打击豪强，保护百姓，深得民心。'
        },
        // 丁卯组
        {
          id: 19,
          group: '丁卯组',
          stemBranch: '丁卯',
          animal: '兔',
          years: ['1927', '1987', '2047'],
          name: '沈兴大将军',
          otherNames: [],
          image: '执枪，武将装扮',
          story: '明代将领。跟随军队征战四方，在平定倭寇的战役中，身先士卒，斩杀倭寇首领，收复失地；驻守东南沿海时，修建海防工事，训练水师，使倭寇不敢再犯，保卫了沿海百姓安全。'
        },
        {
          id: 20,
          group: '丁卯组',
          stemBranch: '丁丑',
          animal: '牛',
          years: ['1937', '1997', '2057'],
          name: '汪文大将军',
          otherNames: [],
          image: '执金瓜锤，威风凛凛',
          story: '明代官员。任将军时，镇守边疆，抵御外敌；在地方任职期间，兴修水利，治理河道，解决水患问题；同时重视教育，兴办学校，培养人才，文武双全，功绩卓著。'
        },
        {
          id: 21,
          group: '丁卯组',
          stemBranch: '丁亥',
          animal: '猪',
          years: ['1947', '2007', '2067'],
          name: '封济大将军',
          otherNames: [],
          image: '手持折扇，文官儒雅',
          story: '宋代官员。任户部侍郎时，善于理财，整顿财政秩序，堵塞漏洞；为人清廉，不贪财货，将节省的财政资金用于救济灾民和修缮公共设施，深受朝廷信任和百姓爱戴。'
        },
        {
          id: 22,
          group: '丁卯组',
          stemBranch: '丁酉',
          animal: '鸡',
          years: ['1897', '1957', '2017'],
          name: '唐杰大将军',
          otherNames: [],
          image: '执长矛，武将英武',
          story: '唐代名将。跟随唐太宗征战，在玄武门之变中辅佐太宗登基；后镇守西域，打通丝绸之路，促进中外交流；治军严明，体恤士卒，西域各国皆敬畏臣服。'
        },
        {
          id: 23,
          group: '丁卯组',
          stemBranch: '丁未',
          animal: '羊',
          years: ['1907', '1967', '2027'],
          name: '马均大将军',
          otherNames: [],
          image: '持剪刀，工艺匠人装扮',
          story: '三国魏国人，著名机械发明家。改良翻车（龙骨水车），提高农田灌溉效率；改进织绫机，简化工序，提高产量；发明指南车、连弩，为农业和军事发展作出巨大贡献，以"巧思济世"被奉为太岁。'
        },
        {
          id: 24,
          group: '丁卯组',
          stemBranch: '丁巳',
          animal: '蛇',
          years: ['1917', '1977', '2037'],
          name: '杨彦大将军',
          otherNames: [],
          image: '手持书卷，隐士装扮',
          story: '宋代隐士。学识渊博，淡泊名利，隐居山林讲学，拒绝朝廷征召；精通诗词书画，其作品蕴含修身之道，门生众多，皆以德行立身，被誉为"山林贤达"。'
        },
        // 戊辰组
        {
          id: 25,
          group: '戊辰组',
          stemBranch: '戊辰',
          animal: '龙',
          years: ['1928', '1988', '2048'],
          name: '赵达大将军',
          otherNames: [],
          image: '手持羽扇或龙杖，神态从容',
          story: '三国魏国人。精通术数、天文历法，能精准预测天气变化和战事胜负；曾为孙权幕僚，多次为其出谋划策，避免战败；为人低调，不炫其能，以"术济世人"著称。'
        },
        {
          id: 26,
          group: '戊辰组',
          stemBranch: '戊寅',
          animal: '虎',
          years: ['1938', '1998', '2058'],
          name: '鲁先大将军',
          otherNames: [],
          image: '持仙桃或笏板，神态祥和',
          story: '明代官员。任地方官时，重视农业，推广果树种植，使百姓增收；为人孝顺，侍奉双亲无微不至，其孝行被编入《孝子传》；同时清正廉洁，政绩卓著，深受百姓爱戴。'
        },
        {
          id: 27,
          group: '戊辰组',
          stemBranch: '戊子',
          animal: '鼠',
          years: ['1948', '2008', '2068'],
          name: '邹铛大将军',
          otherNames: ['邹通'],
          image: '持玉笏，文官端庄',
          story: '明代官员。洪武年间举人，任岳州知府时，平定地方盗匪，安抚乡民；后升任通政使，直言敢谏，辅佐朝政；品性廉洁，爱民如子，去除奸恶，民心所向。'
        },
        {
          id: 28,
          group: '戊辰组',
          stemBranch: '戊戌',
          animal: '狗',
          years: ['1898', '1958', '2018'],
          name: '姜武大将军',
          otherNames: [],
          image: '执钢鞭，刚正威猛',
          story: '明代保德州人。出身武将世家，作战勇猛，在抗击瓦剌入侵时，率军坚守城池，浴血奋战，最终击退敌军；为人忠勇，誓与城池共存亡，其事迹被百姓广为传颂。'
        },
        {
          id: 29,
          group: '戊辰组',
          stemBranch: '戊午',
          animal: '马',
          years: ['1918', '1978', '2038'],
          name: '黎卿大将军',
          otherNames: [],
          image: '持算盘，文官装扮',
          story: '明代官员。任户部官员时，善于理财，发展商业，繁荣地方经济；主持税收改革，公平税负，减轻百姓负担；为人精明强干，廉洁奉公，为朝廷积累了大量财富。'
        },
        {
          id: 30,
          group: '戊辰组',
          stemBranch: '戊申',
          animal: '猴',
          years: ['1908', '1968', '2028'],
          name: '徐浩大将军',
          otherNames: [],
          image: '持毛笔，书法家装扮',
          story: '唐代著名书法家、官员。官至太子少师，其书法端庄浑厚，与颜真卿齐名；任地方官时，重视文化教育，兴办书院，收藏典籍，推动当地文化发展，以"文名济世"被奉为太岁。'
        },
        // 己巳组
        {
          id: 31,
          group: '己巳组',
          stemBranch: '己巳',
          animal: '蛇',
          years: ['1929', '1989', '2049'],
          name: '郭灿大将军',
          otherNames: [],
          image: '执铁棍，刚劲有力',
          story: '明代官员。任监察御史时，不畏权贵，弹劾贪腐，维护朝廷纲纪；在地方任职期间，打击豪强，保护贫民，兴修水利，发展农业，因政绩突出，屡获升迁，刚正之名远扬。'
        },
        {
          id: 32,
          group: '己巳组',
          stemBranch: '己卯',
          animal: '兔',
          years: ['1939', '1999', '2059'],
          name: '龙仲大将军',
          otherNames: [],
          image: '持剑，武将风范',
          story: '宋代将领。在抗击西夏入侵时，屡立战功；善于安抚士卒，与士兵同甘共苦，麾下军队凝聚力极强；任地方官时，重视民生，修筑道路，发展贸易，使辖区内社会稳定。'
        },
        {
          id: 33,
          group: '己巳组',
          stemBranch: '己丑',
          animal: '牛',
          years: ['1949', '2009', '2069'],
          name: '傅佑大将军',
          otherNames: [],
          image: '持书卷，文官儒雅',
          story: '宋代学者。精通经史，任国子监博士时，教导学生以德行为先；著有《论语集解》，影响深远；为人谦逊，待人真诚，在学界享有崇高声誉，以"教化育人"被奉为太岁。'
        },
        {
          id: 34,
          group: '己巳组',
          stemBranch: '己亥',
          animal: '猪',
          years: ['1899', '1959', '2019'],
          name: '谢太大将军',
          otherNames: [],
          image: '持令旗，神态威严',
          story: '明代将领。跟随朱元璋征战，立下赫赫战功；明朝建立后，镇守北方边疆，修筑长城，抵御蒙古骑兵；治军严明，爱护百姓，边疆百姓安居乐业，尊称其为"谢老将军"。'
        },
        {
          id: 35,
          group: '己巳组',
          stemBranch: '己未',
          animal: '羊',
          years: ['1919', '1979', '2039'],
          name: '傅党大将军',
          otherNames: ['傅康'],
          image: '持教鞭，教师装扮',
          story: '宋代官员。善于教育，门生众多，其弟子多为贤达之士；任地方官时，兴办学校，推广教育，使当地文风兴盛；为人师表，以身作则，以"育人为本"的德行被奉为太岁。'
        },
        {
          id: 36,
          group: '己巳组',
          stemBranch: '己酉',
          animal: '鸡',
          years: ['1909', '1969', '2029'],
          name: '程宝大将军',
          otherNames: [],
          image: '执刀，武将勇猛',
          story: '五代十国将领。跟随君主征战，多次救主于危难之中；为人忠勇，不离不弃，即使战败亦坚守阵地；后辅佐新君，稳定政权，其忠勇之德被后世敬仰。'
        },
        // 庚午组
        {
          id: 37,
          group: '庚午组',
          stemBranch: '庚午',
          animal: '马',
          years: ['1930', '1990', '2050'],
          name: '王济大将军',
          otherNames: [],
          image: '持卷轴或书卷，文官睿智',
          story: '宋代官员。任三司使时，善于理财，整顿财政，平衡收支；为人正直，敢于直言，在朝廷中力主改革弊政；精通史学，著有《唐史补》，以"才德兼备"著称。'
        },
        {
          id: 38,
          group: '庚午组',
          stemBranch: '庚辰',
          animal: '龙',
          years: ['1940', '2000', '2060'],
          name: '董德大将军',
          otherNames: [],
          image: '持灯或扇，神态温和',
          story: '宋代官员。任地方官时，在灾年组织百姓生产自救，开设粥厂救济灾民；重视教育，兴办义学，让贫困子弟有书可读；为人善良，乐善好施，被百姓称为"董善人"。'
        },
        {
          id: 39,
          group: '庚午组',
          stemBranch: '庚寅',
          animal: '虎',
          years: ['1950', '2010', '2070'],
          name: '邬桓大将军',
          otherNames: [],
          image: '持铜锤，沉稳有力',
          story: '元代将领。驻守边疆期间，多次击败外敌入侵，保卫国土安全；组织百姓开垦荒地，发展农业，使边疆经济得到发展；治军严明，体恤士卒，深受士兵和百姓爱戴。'
        },
        {
          id: 40,
          group: '庚午组',
          stemBranch: '庚子',
          animal: '鼠',
          years: ['1900', '1960', '2020'],
          name: '卢秘大将军',
          otherNames: [],
          image: '持书卷，文官儒雅',
          story: '明代学者。精通天文历法，编制新的历法，精准预测节气变化，指导农业生产；隐居讲学，传授天文历法知识，其弟子多为天文爱好者，为古代天文发展作出贡献。'
        },
        {
          id: 41,
          group: '庚午组',
          stemBranch: '庚戌',
          animal: '狗',
          years: ['1910', '1970', '2030'],
          name: '倪秘大将军',
          otherNames: [],
          image: '持剑，武将风范',
          story: '宋代将领。在抗击金兵时，率领义军奋勇杀敌，收复失地；后归顺朝廷，任将军时，镇守一方，打击盗匪，保护百姓；为人忠勇，心系百姓，其事迹被广为传颂。'
        },
        {
          id: 42,
          group: '庚午组',
          stemBranch: '庚申',
          animal: '猴',
          years: ['1920', '1980', '2040'],
          name: '毛梓大将军',
          otherNames: ['毛子廉'],
          image: '手握长矛，武将英武',
          story: '元代潢州长泰人。出身武将，保卫家园时英勇奋战，多次击退敌军侵扰；治军严明，与士兵同甘共苦，麾下军队战斗力极强；因保卫家乡有功，被百姓尊为守护神。'
        },
        // 辛未组
        {
          id: 43,
          group: '辛未组',
          stemBranch: '辛未',
          animal: '羊',
          years: ['1931', '1991', '2051'],
          name: '李素大将军',
          otherNames: [],
          image: '持玉圭或钢鞭，刚柔并济',
          story: '唐代官员。任御史大夫时，断案公正，平反冤狱；为人刚正，不徇私情，即使面对权贵，亦坚守法度；同时善于安抚百姓，在灾年开仓放粮，救济灾民，被誉为"李青天"。'
        },
        {
          id: 44,
          group: '辛未组',
          stemBranch: '辛巳',
          animal: '蛇',
          years: ['1941', '2001', '2061'],
          name: '郑但大将军',
          otherNames: [],
          image: '持玉印，文官威仪',
          story: '汉代官员。任太守时，推行仁政，轻徭薄赋，安抚百姓；兴修水利，发展农业，使辖区内粮食丰收；同时重视教育，兴办学校，培养人才，以"政绩卓著"被奉为太岁。'
        },
        {
          id: 45,
          group: '辛未组',
          stemBranch: '辛卯',
          animal: '兔',
          years: ['1951', '2011', '2071'],
          name: '范宁大将军',
          otherNames: [],
          image: '持书卷，学者风范',
          story: '东晋学者。任豫章太守时，兴办学校，广招门生，亲自讲学；著有《春秋谷梁传集解》，是研究《谷梁传》的重要典籍；主张"重儒兴教"，对后世儒学发展影响深远。'
        },
        {
          id: 46,
          group: '辛未组',
          stemBranch: '辛丑',
          animal: '牛',
          years: ['1901', '1961', '2021'],
          name: '杨信大将军',
          otherNames: [],
          image: '持令旗，神态威严',
          story: '汉代将领。跟随卫青抗击匈奴，立下赫赫战功；在战场上英勇善战，多次冲锋陷阵，斩杀匈奴将领；为人忠诚，深得卫青信任，后被封为列侯。'
        },
        {
          id: 47,
          group: '辛未组',
          stemBranch: '辛亥',
          animal: '猪',
          years: ['1911', '1971', '2031'],
          name: '叶坚大将军',
          otherNames: [],
          image: '执剑，刚正威猛',
          story: '明代将领。在平定叛乱时，身先士卒，率领军队击败叛军；镇守地方时，打击豪强，保护贫民，兴修水利，发展农业；为人刚正，不贪财货，深受百姓爱戴。'
        },
        {
          id: 48,
          group: '辛未组',
          stemBranch: '辛酉',
          animal: '鸡',
          years: ['1921', '1981', '2041'],
          name: '石政大将军',
          otherNames: ['石正卿'],
          image: '执剑端坐，文官武将兼备',
          story: '元代河南人。任官员时，为政清廉，深得民心；在地方任职期间，兴修水利，治理河道，解决水患；同时重视教育，兴办学校，培养人才，以"清廉勤政"著称。'
        },
        // 壬申组
        {
          id: 49,
          group: '壬申组',
          stemBranch: '壬申',
          animal: '猴',
          years: ['1932', '1992', '2052'],
          name: '刘旺大将军',
          otherNames: [],
          image: '持纸卷或书册，文官装扮',
          story: '明代官员。任吏部官员时，善于选拔人才，唯才是举，不徇私情；所举荐之人，多为贤达之士，为朝廷作出重要贡献；为人正直，廉洁奉公，在官场中享有清名。'
        },
        {
          id: 50,
          group: '壬申组',
          stemBranch: '壬午',
          animal: '马',
          years: ['1942', '2002', '2062'],
          name: '陆明大将军',
          otherNames: ['陆鸣'],
          image: '持幡，神态庄重',
          story: '明代官员。酷爱读书，为官清正廉洁，百姓爱戴；任地方官时，去除奸恶，安抚百姓，兴修水利，发展农业；晚年辞官，潜心研究典籍，著书立说，贡献卓著。'
        },
        {
          id: 51,
          group: '壬申组',
          stemBranch: '壬辰',
          animal: '龙',
          years: ['1952', '2012', '2072'],
          name: '彭泰大将军',
          otherNames: [],
          image: '持如意，神态祥和',
          story: '宋代官员。任地方官时，重视水利建设，修筑堤坝，治理水患，使农田免受水淹；同时兴办学校，推广教育，发展农业，使辖区内经济文化繁荣，百姓安居乐业。'
        },
        {
          id: 52,
          group: '壬申组',
          stemBranch: '壬寅',
          animal: '虎',
          years: ['1902', '1962', '2022'],
          name: '贺鄂大将军',
          otherNames: ['贺贲'],
          image: '持剑，武将勇猛',
          story: '元代将领。跟随成吉思汗征战，立下赫赫战功；善于骑射，作战勇猛，多次在战场上救主于危难之中；为人忠诚，深得成吉思汗信任，后被封为千户侯。'
        },
        {
          id: 53,
          group: '壬申组',
          stemBranch: '壬子',
          animal: '鼠',
          years: ['1912', '1972', '2032'],
          name: '邱德大将军',
          otherNames: [],
          image: '持书卷，文官儒雅',
          story: '明代学者。精通理学，隐居讲学，主张"知行合一"；其弟子遍布各地，皆以德行立身；著有《理学要旨》，对后世理学发展影响深远，以"德行教化"被奉为太岁。'
        },
        {
          id: 54,
          group: '壬申组',
          stemBranch: '壬戌',
          animal: '狗',
          years: ['1922', '1982', '2042'],
          name: '洪充大将军',
          otherNames: ['洪锺'],
          image: '双手握拳，神态刚毅',
          story: '明代钱塘人。任右副都御史时，整顿吏治，弹劾贪腐；在地方任职期间，打击盗匪，保护百姓，兴修水利，发展农业；为人刚正，不畏权贵，深受百姓爱戴。'
        },
        // 癸酉组
        {
          id: 55,
          group: '癸酉组',
          stemBranch: '癸酉',
          animal: '鸡',
          years: ['1933', '1993', '2053'],
          name: '康志大将军',
          otherNames: [],
          image: '持令旗或宝剑，神态威严',
          story: '唐代将领。跟随唐太宗征战，立下战功；任地方官时，重视民生，兴修水利，发展农业；在边疆镇守时，抵御外敌，保护百姓，为人忠勇，深得民心。'
        },
        {
          id: 56,
          group: '癸酉组',
          stemBranch: '癸未',
          animal: '羊',
          years: ['1943', '2003', '2063'],
          name: '魏仁大将军',
          otherNames: [],
          image: '持如意，神态温和',
          story: '明代官员。任地方官时，乐善好施，经常救济贫困百姓；重视教育，兴办义学，让贫困子弟有书可读；为人善良，待人真诚，被百姓称为"魏善人"，德行远扬。'
        },
        {
          id: 57,
          group: '癸酉组',
          stemBranch: '癸巳',
          animal: '蛇',
          years: ['1953', '2013', '2073'],
          name: '徐单大将军',
          otherNames: [],
          image: '持剑，武将风范',
          story: '汉代将领。跟随李广抗击匈奴，作战勇猛，多次立下战功；为人忠诚，深得李广信任；在战场上，多次掩护军队撤退，舍生忘死，其忠勇之德被后世敬仰。'
        },
        {
          id: 58,
          group: '癸酉组',
          stemBranch: '癸卯',
          animal: '兔',
          years: ['1903', '1963', '2023'],
          name: '皮时大将军',
          otherNames: [],
          image: '持刀，武将勇猛',
          story: '北魏将领。跟随孝文帝改革，立下功劳；在战场上，英勇善战，多次击败敌军；任地方官时，推行汉化政策，促进民族融合，为北魏的发展作出重要贡献。'
        },
        {
          id: 59,
          group: '癸酉组',
          stemBranch: '癸丑',
          animal: '牛',
          years: ['1913', '1973', '2033'],
          name: '朱得大将军',
          otherNames: [],
          image: '持钢鞭，刚正威猛',
          story: '明代将领。跟随朱元璋征战，立下赫赫战功；明朝建立后，镇守南方边疆，打击盗匪，保护百姓；治军严明，体恤士卒，深受士兵和百姓爱戴，后被封为列侯。'
        },
        {
          id: 60,
          group: '癸酉组',
          stemBranch: '癸亥',
          animal: '猪',
          years: ['1923', '1983', '2043'],
          name: '虞程大将军',
          otherNames: ['虞臣'],
          image: '文袍加身，文官儒雅',
          story: '明代昆山人。刚正不屈，孝顺父母；为官二十年，谨慎自守，清正廉洁；晚年归隐山林，不问政事，怡然自乐，其"孝廉"之德被奉为典范，成为癸亥太岁，终结六十甲子循环。'
        }
      ]
    }
  },
  computed: {
    sameGroupTaisui() {
      if (!this.taisui) return []
      return this.taisuiData.filter(item => item.group === this.taisui.group)
    }
  },
  mounted() {
    // 获取路由参数中的id
    const id = parseInt(this.$route.params.id)
    // 查找对应的太岁信息
    this.taisui = this.taisuiData.find(item => item.id === id)
  }
}
</script>

<style scoped>
/* 页面特定样式 */
</style>