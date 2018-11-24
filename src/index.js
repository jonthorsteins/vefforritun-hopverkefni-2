//import List from './lib/list';
//import Lectures from '/lectures.json'
const API_URL = '/lectures.json?slug=';
//const json = 'lectures.json';

document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('body');
  const isLecturePage = page.classList.contains('lecture-page');

  // Notum Ajax til þess að loada inn lectures.json
  $.ajax({
    url: '../lectures.json',
    dataType: 'json',
    type: 'get',
    cache: false,
    success: function(data) {
      $(data.lectures).each(function(index,value) {
        //$(".lecture").append("<p>"+value.slug+"</p>");
        //$(".lecture__text").append("<p>"+value.title+"</p>");
        //$(".lecture__thumbnail").append("<img>"+value.thumbnail+"</img>");
        //$('.lecture__thumbnail').append('<div> <img height="256px" width="256px" src="../img/thumb1.jpg"> </div>');
        $(".lecture__thumbnail").append("<img width = '300px' src='"+ "../" + value.thumbnail + "'></img>");

      });
    }
  });

xhr = new XMLHttpRequest();
xhr.open("GET","../img/html-boxes.svg",false);
// Following line is just to be on the safe side;
// not needed if your server delivers SVG with correct MIME type
xhr.overrideMimeType("image/svg+xml");
xhr.send("");
document.getElementById("svgContainer")
  .appendChild(xhr.responseXML.documentElement);

  if (isLecturePage) {
  } else {
    //const list = new List();
    //list.load();
  }

});
