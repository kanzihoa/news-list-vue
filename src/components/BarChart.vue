<template>
  <div>
    <canvas ref="myCahrtBar" id="myChart"></canvas>
  </div>
</template>

<script>
export default {
  mounted() {
    // const ctx = document.getElementById("myChart");
    const ctx = this.$refs.myCahrtBar;
    const myChart = new this.$_Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 100],
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
