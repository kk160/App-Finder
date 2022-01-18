var options = {
    series: [{
    name: 'Results',
    data: [80, 50, 30, 40, 100, 20],
  }],
    chart: {
    height: 250,
    type: 'radar',
    toolbar: {
        show: false,   
    }
  },
  xaxis: {
    categories: ['Philanthropist', 'Socialiser', 'Free Spirit', 'Achiever', 'Disruptor', 'Player'],
    labels: {
        show: true,
        style: {
            
            colors: ["#797979", "#797979", "#797979", "#797979", "#797979", "#797979"]
        }
    }
},
    stroke: {
      show: true,
      width: 2,
      colors: ["#fcbf26"],
      dashArray: 0
    },
    fill: {
        opacity: 0,
      },
      markers: {
        colors: ["#fcbf26"],
        size: 5,
        hover: {
          size: 10
        }
      }
};

  

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();


