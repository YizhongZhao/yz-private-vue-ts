<!--
 * @Author: yizhongZhao
 * @Date: 2022/8/12 10:11
 * @Description:
-->

<template>
  <div>
    <div ref="mydiv" style="width: 1300px;height:600px;margin: 48px auto"></div>
  </div>
</template>


<script lang="ts">
export default {
  name: "home2"
}
</script>
<script lang="ts" setup>
import {init} from 'echarts';
import * as echarts from 'echarts'
import {onMounted, ref} from "vue";
import * as obama_budget_2012 from '@/views/tabledata.json'

console.log(echarts)
const mydiv = ref<Nullable<HTMLElement>>(null);

// 指定图表的配置项和数据
const option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    data: ['Growth', 'Budget 2011', 'Budget 2012'],
    itemGap: 5
  },
  grid: {
    top: '12%',
    left: '1%',
    right: '10%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: obama_budget_2012.names
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: 'Budget (million USD)',
      axisLabel: {
        formatter: function (a) {
          a = +a;
          return isFinite(a) ? echarts.format.addCommas(+a / 1000) : '';
        }
      }
    }
  ],
  dataZoom: [
    {
      type: 'slider',
      show: true,
      start: 60,
      end: 100,
      handleSize: 16,
      showDataShadow: true,
      handleIcon: 'path://M96 0a32 32 0 0 1 32 32v960a32 32 0 0 1-64 0V32A32 32 0 0 1 96 0z m832 0a32 32 0 0 1 32 32v960a32 32 0 0 1-64 0V32a32 32 0 0 1 32-32zM384 800v-576a32 32 0 0 1 32-32h192a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32h-192a32 32 0 0 1-32-32z'

    },
  ],
  series: [
    {
      name: 'Budget 2011',
      type: 'bar',
      data: obama_budget_2012.budget2011List
    },
    {
      name: 'Budget 2012',
      type: 'bar',
      data: obama_budget_2012.budget2012List
    }
  ]
};

// 基于准备好的dom，初始化echarts实例
onMounted(() => {
  const myChart = init(mydiv.value);
  myChart.setOption(option);
})

</script>

<style scoped>

</style>