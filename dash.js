
const options = {
  chart: {
    type: 'line',
    height: 350,
    width: '50%',
    background: '#545454',
    foreColor: '#111',    
  },
  series: [{
    name: 'sales',
    data: [30,40,35,50,49,56,70,88,98,125,200]
  }],
  xaxis: {
    categories: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020]
  },
  title:{
    text:'Car Sales',
    aline:'center',
    margin:10,
    offsetY:20,
    style:{
      fontSize: '16px',
      font:'Times New Roman',
    }
  }
}
const chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
