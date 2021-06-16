const data = {
  labels: [
    'Instagram',
    'Telegram',
    'Email',
    'Whatsapp'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [7, 43, 15,35],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(91, 186, 59)'
    ],
    hoverOffset: 6
  }]
};

 var myChart = new Chart(
		 document.getElementById('myChart'),
	{
	  type: 'doughnut',
	  data: data,
	}
		);
	

const labels = [
    '0 ставок',
    '1-5 ставок',
    '5-30 ставок',
    'больше 30 ставок',
 
  ]; 
const data2 = {
    labels: labels,
  datasets: [{
    label: '% от клиентов',
    data: [17, 23, 40, 20,50,60,70,80,90,100],
    backgroundColor: [
      'rgba(255, 99, 132, 0.9)',
      'rgba(255, 159, 64, 0.9)',
      'rgba(255, 205, 86, 0.9)',
      'rgba(75, 192, 192, 0.9)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)' 
    ],
    borderWidth: 1
  }]
};


 var myChart2 = new Chart(
		 document.getElementById('myChart2'),
	{
	  type: 'bar',
	  data: data2,
	  options: {
	    scales: {
	      y: {
	        beginAtZero: true
	      }
	    }
	  },
	}
		);

 var labels2 = [
     'старт',
     '1 месяц',
     '3 месяца',
     '6 месяцев',

   ]; 

const data3 = {
  labels: labels2,
  datasets: [{
    label: 'игровой баланс',
    data: [0,2600,5200,11000,10000,12000],
    fill: true,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};



var myChart3 = new Chart(
     document.getElementById('myChart3'),
  {
    type: 'line',
    data: data3,
  },
    );