// $(function() {
//   $('.get-gif').click(getGif)
//   $('.save-gif').click(saveGif)
//   $('.saved-gifs').click(getSavedGifs)
// });
//thi first one is just a cleaner way
$(function() {
  $('.get-gif').on('click' function(){
        getRandomGif();
    })
      // .fail(function(data){
      //   console.log(data.data.errorMessage);
      // }); if failed this what will you would put
  });
    function getRandomGif(){
        $('.get-gif').on('click' function(){
    (  $.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=pg')
      .done(function(data) {
      console.log(data.data.image_url);
      $('.image-jumbotron').attr('src', data.data.image_url)
    }
//this is the same thing
$(function() {
  $('.get-gif').on('click' function(){
      $.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=pg')
      .done(function(data) {
      console.log(data.data.image_url);
      $('.image-jumbotron').attr('src', data.data.image_url)
    });






//   $('.save-gif').click(saveGif)
//   $('.saved-gifs').click(getSavedGifs)
// })
// var getGif = function(event) {
//   var $el = $(this)
//   $.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=pg')
//   .done(function(giphyResponse) {
//     // $el.css('color', 'red')
//     // console.log(giphyResponse);
//     $('.image-jumbotron').attr('src', giphyResponse.data.image_url)
//   });
// };

// var saveGif = function(event) {
//   var url = $('.image-jumbotron').attr('src');
//   console.log(url)
//   $.post('/gifs', { url: url })
//     .done(function(response) {
//       console.log(response)
//     })
// }

// var getSavedGifs = function(event) {
//   $.get('/gifs')
//   .done(function(data) {
//     var $container = $('.all-gifs-container');
//     $container.html('')

//     data.gifs.forEach(function(el) {
//       var $div = $('<div>');
//       var $img = $('<img>').attr('src', el.url)

//       $container.append($div.append($img))
//     })
//   })
// };








// asdfs
