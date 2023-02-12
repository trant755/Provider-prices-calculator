const pricesCtx = document.getElementById("pricesChart");

export const pricesChart = new Chart(pricesCtx, {
  type: "bar",
  data: {
    labels: ["backblaze.com", "bunny.net", "scaleway.com", "vultr.com"],
    datasets: [
      {
        datalabels: {
          align: "end",
          backgroundColor: function (context) {
            return context.dataset.backgroundColor;
          },
          anchor: "end",
          borderRadius: 4,
          color: "white",
          font: {
            weight: "bold",
          },
          formatter: function (value, context) {
            return value + " $";
          },
          padding: 6,
        },
        label: "values",
        data: [0, 0, 0, 0],
        backgroundColor: ["grey", "grey", "grey", "grey"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },

    indexAxis: "x",
    scales: {
      x: {
        display: true,
        ticks: {
          display: false,
        },
      },
      y: {
        display: false,
        beginAtZero: true,
        max: 100,
      },
    },
  },
  plugins: [ChartDataLabels],
});
