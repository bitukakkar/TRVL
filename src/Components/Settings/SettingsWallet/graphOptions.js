export const options = {
  chart: {
    backgroundColor: null,
    type: "line",
    height: 60,
  },
  legend: { enabled: false },
  credits: {
    enabled: false,
  },
  xAxis: {
    visible: false,
    title: {
      text: null,
    },
  },
  yAxis: {
    title: {
      text: null,
    },
    gridLineWidth: 0,
    labels: {
      enabled: false,
    },
    plotLines: null,
    opposite: true,
  },
  plotOptions: {
    series: {
      marker: {
        enabled: false,
        symbol: "circle",
        states: {
          hover: {
            enabled: true,
          },
        },
      },
      label: {
        connectorAllowed: false,
        style: { textOutline: 0 },
      },
    },
  },

  tooltip: {
    backgroundColor: null,
    border: null,
    borderColor: null,
    borderWidth: 0,
    style: {
      color: "#21D1CC",
      fontFamily: "IBMPlexSans",
      fontWeight: 400,
      fontSize: "16px",
    },
    formatter: function () {
      return "<strong>$" + this.y + "</strong>";
    },
  },
  title: { text: null },
  series: [
    {
      data: [60, 400, 900, 403, 940, 760],
      color: "#1C232B",
      lineWidth: 4,
    },
  ],
};
