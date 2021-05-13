$(function () {

	$('.button1').on('click', function () {
		$('#card1').addClass('active');
		$('#card2').removeClass('active');
		$('#card3').removeClass('active');
	});

	$('.button2').on('click', function () {
		$('#card2').addClass('active');
		$('#card1').removeClass('active');
		$('#card3').removeClass('active');
	});

	$('.button3').on('click', function () {
		$('#card3').addClass('active');
		$('#card1').removeClass('active');
		$('#card2').removeClass('active');
	});

});

new Vue({
  el: '#app',
  data: {
    coords: [55.669649, 37.676584],
    placemarks: [
        {
          coords: [55.669649, 37.676584],
          properties: {
            balloonContentBody: 'name1',
            balloonContentFooter: '1',
            balloonContentHeader: '1'
          },
          clusterName: '1',
          markerId: '1'
        },
        {
          coords: [55.669649, 37.676584],
          properties: {
            balloonContentBody: 'name2',
            balloonContentFooter: '1',
            balloonContentHeader: '1'
          },
          clusterName: '1',
          markerId: '2'
        },
        {
          coords: [55.669649, 37.676584],
          properties: {
            balloonContentBody: 'name2',
            balloonContentFooter: '1',
            balloonContentHeader: '1'
          },
          clusterName: '1',
          markerId: '3'
        },
      ],
    layout: '<div>{{ properties.balloonContentHeader }}</div><div>{{ properties.balloonContentBody }}</div><div>{{ properties.balloonContentFooter }}</div>'
  }
})

var app = new Vue ({
  el: '#app',
  data: {
    show: false
  }
})

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};