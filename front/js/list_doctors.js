$(document).ready(function (){
   initCommentsUsersSwiper();
   $(".doctor-rating").starRating({
      readOnly: true,
      emptyColor:'#ffc107',
      starSize: 18,
      totalStars: 1,
      starShape: 'rounded',
      hoverColor: 'salmon',
      activeColor: 'crimson',
      useGradient: false
   });
});

