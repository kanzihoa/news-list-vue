<template>
  <canvas ref="myChartLine" id="myChartLine"></canvas>
</template>

<script>
export default {
  mounted() {
    // const ctx = document.getElementById("myChartLine");
    const ctx = this.$refs.myChartLine;
    const myChart = new this.$_Chart(ctx, {
      type: "line",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 30],
            borderWidth: 3,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
    console.log(myChart);
  },
};
</script>

<style></style>
