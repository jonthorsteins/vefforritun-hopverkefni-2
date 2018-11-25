//import List from './lib/list';
const API_URL = '/lectures.json?slug=';
let count = 0;
//const json = 'lectures.json';

document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('body');
  const leaf = document.querySelector('.title');
  const wraptext = document.querySelector('.category');
  const svg = document.querySelector('.svg__body');
  const isLecturePage = page.classList.contains('lecture-page');

  if (isLecturePage) {
  } else {

    // Notum Ajax til þess að loada inn lectures.json
    // Appendum því svo við viðeigandi element
    $.ajax({
      url: '../lectures.json',
      dataType: 'json',
      type: 'get',
      cache: false,
      success: function(data) {
        $(data.lectures).each(function(index,value) {
          //$("ul").append("<li><img src='"+ "../" + value.thumbnail + "'></img></li>");
          $(".lecture__category--"+count).append("<p>"+  value.category + "</p>");
          $(".lecture__title--"+count).append("<h1>"+  value.title + "</h1>");
          $(".lecture__img--"+count).append("<img src='"+ "../" + value.thumbnail + "'></img>");
          count++;

        });
      }
    });


    //const list = new List();
    //list.load();
  }

});
