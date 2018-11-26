//import List from './lib/list';
const API_URL = '/lectures.json?slug=';
let count = 1;
let html_clicked = false;
let css_clicked = false;
let js_clicked = false;
let param = window.location.search.substr(6);

//const json = 'lectures.json';

document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('body');
  const html_btn = document.querySelector('.button__html');
  const css_btn = document.querySelector('.button__css');
  const js_btn = document.querySelector('.button__js');
  const isLecturePage = page.classList.contains('lecture-page');


  if (isLecturePage) {

    $.ajax({
      url: '../lectures.json',
      dataType: 'json',
      type: 'get',
      cache: false,
      success: function(data) {
        $(data.lectures).each(function(index,value) {

          // Ber saman slug við enda á URL
          // Bætum svo við viðeigandi texta, linkum og myndum
          if( param == value.slug){

            // Athugar hvort data sé linkur
            if (value.content[index].type = "youtube" )
                $("iframe").attr('src', value.content[index].data);

            // Bætum við og appendum gildum í fyrirlestur.html
            $(".code").attr('src', value.image);
            $(".img__text").append("<h3>"+  value.category + "</h3>");
            $(".img__text").append("<h1>"+  value.slug + "</h1>");

            }
        });
      }
    });


  } else {
    // Notum Ajax til þess að loada inn lectures.json
    // Appendum því svo við viðeigandi element
    // Wrap-um <a href> fyrir hvern lecture
    $.ajax({
      url: '../lectures.json',
      dataType: 'json',
      type: 'get',
      cache: false,
      success: function(data) {
        $(data.lectures).each(function(index,value) {
          $(".lecture__category--"+count).append("<p>"+  value.category + "</p>");
          $(".lecture__title--"+count).append("<h1>"+  value.title + "</h1>");
          if(value.thumbnail !== undefined) {$(".lecture__img--"+count).append("<img src='"+ "../" + value.thumbnail + "' ></img>");}
          $(".lecture:nth-child("+count+")").wrap("<a class = 'link' href='"+ "../fyrirlestur.html?slug=" + value.slug + "'></a>");
          count++;
        });
      }
    });

    /** EventListener fyrir takka á index.html
      * litar takka þegar smellt er á þá og raðar lectures
    **/
    html_btn.addEventListener("click", function(){
      if(!html_clicked) {
        html_btn.style.backgroundColor = "#2d2";
        html_clicked = true;
        }
      else {
        html_btn.style.backgroundColor = "#ccc";
        html_clicked = false;
    }});

    css_btn.addEventListener("click", function(){
      if(!css_clicked) {
        css_btn.style.backgroundColor = "#2d2";
        css_clicked = true;
        }
      else {
        css_btn.style.backgroundColor = "#ccc";
        css_clicked = false;
    }});

    js_btn.addEventListener("click", function(){
      if(!js_clicked) {
        js_btn.style.backgroundColor = "#2d2";
        js_clicked = true;
        }
      else {
        js_btn.style.backgroundColor = "#ccc";
        js_clicked = false;
    }});


    //const list = new List();
    //list.load();
  }

});
