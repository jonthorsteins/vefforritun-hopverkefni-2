//import List from './lib/list';
const API_URL = '/lectures.json?slug=';
//const json = 'lectures.json';

document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('body');
  const isLecturePage = page.classList.contains('lecture-page');



  if (isLecturePage) {
  } else {

    // Notum Ajax til þess að loada inn lectures.json
    // Appendum því svo sem <li> á index.html
    $.ajax({
      url: '../lectures.json',
      dataType: 'json',
      type: 'get',
      cache: false,
      success: function(data) {
        $(data.lectures).each(function(index,value) {
          $("ul").append("<li><img  src='"+ "../" + value.thumbnail + "'></img></li>");
        });
      }
    });

    //const list = new List();
    //list.load();
  }

});
