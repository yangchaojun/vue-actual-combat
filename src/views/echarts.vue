<template>
  <div class="charts-con">
    <div id="main" style="width: 600px;height:400px;"></div>
    <LineChart />
  </div>
</template>

<script>
import echarts from "echarts";
import LineChart from "@/components/charts/LineChart";
export default {
  components: {
    LineChart
  },
  mounted() {
    this.$nextTick(() => {
      this.drawChart();
    });
    // this.$chart.line1("main");
  },
  methods: {
    drawChart() {
      const myChart = echarts.init(document.getElementById("main"));
      // 配置图表的配置项和数据
      const options = {
        // 标题
        title: {
          text: "ECharts 入门示例"
        },
        // 提示框
        tooltip: {},
        // 图例
        legend: {
          data: ["销量"]
        },
        //x轴
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        // y轴
        yAxis: {},
        // 系列
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      };

      //使用刚才指定的配置项和数据显示图表
      myChart.setOption(options);
    }
  }
};
</script>

<style>
.charts-con {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
