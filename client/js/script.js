let box = $('.box')
let randomColor = $('#random-color')

randomColor.click(function(){
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/color',
    dataType: 'json',
    success: function(data){
      console.log(data);
      box[data.index].style.backgroundColor = `rgb(${data.rgb1},${data.rgb2},${data.rgb3})`;
    },
    error: function() {
      alert("Something problem with connetions");
    }
  })
})
