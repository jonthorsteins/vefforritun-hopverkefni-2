//import List from './lib/list';
const API_URL = '/lectures.json?slug=';
let count = 1;
let html_clicked = false;
let css_clicked = false;
let js_clicked = false;
let param = window.location.search.substr(6);
let cache = [];
let cacheDOM_1; let cacheDOM_2; let cacheDOM_3; let cacheDOM_4;
let cacheDOM_5; let cacheDOM_6; let cacheDOM_7; let cacheDOM_8;
let cacheDOM_9; let cacheDOM_10; let cacheDOM_11; let cacheDOM_12; let cacheDOM_13;

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
          if( param == value.slug) {

            if(param == "html-sagan") {

            // Athugar hvort data sé linkur
            if (value.content[index].type = "youtube" )
                $("iframe").attr('src', value.content[0].data);

            if (value.content[index].type = "text" )
              $(".smallText_1").append(value.content[1].data);
              $(".quote").append(value.content[2].data);
              $(".author").append(value.content[2].attribute);
              $(".smallText_2").append(value.content[3].data);
              $(".computer").attr('src', value.content[4].data);
              $(".caption").append(value.content[4].caption);
              $(".caption").append("<h1>"+ value.content[5].data+"</h1>")
              for (let i = 0 ; i < 4; i++)
                $("ul").append("<li>"+ value.content[6].data[i]+"</li>")
              $("ul").append("<code>"+ value.content[7].data +"</code>")




            // Bætum við og appendum gildum í fyrirlestur.html
            $(".code").attr('src', value.image);
            $(".img__text").append("<h3>"+  value.category + "</h3>");
            $(".img__text").append("<h1>"+  value.slug + "</h1>");


          }}
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

          $(".lecture__category--"+index).append("<p> "+  value.category + "</p>");
          $(".lecture__title--"+count).append("<h1>"+  value.title + "</h1>");
          if(value.thumbnail !== undefined) {$(".lecture__img--"+count).append("<img src='"+ "../" + value.thumbnail + "' ></img>");}
          $("#sectionLecture"+count).wrap("<a class = 'link' href='"+ "../fyrirlestur.html?slug=" + value.slug + "'></a>");

          count++;

     });

     cacheDOM_1 = $("#col1"); cacheDOM_2 = $("#col2");
     cacheDOM_3 = $("#col3"); cacheDOM_4 = $("#col4");
     cacheDOM_5 = $("#col5"); cacheDOM_6 = $("#col6");
     cacheDOM_7 = $("#col7"); cacheDOM_8 = $("#col8");
     cacheDOM_9 = $("#col9"); cacheDOM_10 = $("#col10");
     cacheDOM_11 = $("#col11"); cacheDOM_12 = $("#col12");
     cacheDOM_13 = $("#col13");


     /**  EventListener fyrir takka á index.html
       *  litar takka þegar smellt er á þá og raðar lectures
       **/

     css_btn.addEventListener("click", function(){

       for(let x = 1; x<14; x++)
           $("#col"+x).remove();

           $(".lectures__row").append(cacheDOM_4);
           $(".lectures__row").append(cacheDOM_5);
           $(".lectures__row").append(cacheDOM_6);
           $(".lectures__row").append(cacheDOM_7);

       if(!css_clicked) {
         css_btn.style.backgroundColor = "#2d2";
         css_clicked = true;

         if (html_clicked){
           $(".lectures__row").append(cacheDOM_1);
           $(".lectures__row").append(cacheDOM_2);
           $(".lectures__row").append(cacheDOM_3);
          }

          if (js_clicked){
            $(".lectures__row").append(cacheDOM_8);
            $(".lectures__row").append(cacheDOM_9);
            $(".lectures__row").append(cacheDOM_10);
            $(".lectures__row").append(cacheDOM_11);
            $(".lectures__row").append(cacheDOM_12);
            $(".lectures__row").append(cacheDOM_13);
           }
         }
       else {
         for(let x = 1; x<14; x++)
             $("#col"+x).remove();

         $(".lectures__row").append(cacheDOM_3);
         $(".lectures__row").append(cacheDOM_4);
         $(".lectures__row").append(cacheDOM_5);
         $(".lectures__row").append(cacheDOM_6);
         css_btn.style.backgroundColor = "#ccc";
         css_clicked = false;
     }});

      js_btn.addEventListener("click", function(){

        for(let x = 1; x<14; x++)
            $("#col"+x).remove();

            $(".lectures__row").append(cacheDOM_8);
            $(".lectures__row").append(cacheDOM_9);
            $(".lectures__row").append(cacheDOM_10);
            $(".lectures__row").append(cacheDOM_11);
            $(".lectures__row").append(cacheDOM_12);
            $(".lectures__row").append(cacheDOM_13);

        if(!js_clicked) {
          js_btn.style.backgroundColor = "#2d2";
          js_clicked = true;

          if (html_clicked){
            $(".lectures__row").append(cacheDOM_1);
            $(".lectures__row").append(cacheDOM_2);
            $(".lectures__row").append(cacheDOM_3);
           }

          if (css_clicked){
            $(".lectures__row").append(cacheDOM_4);
            $(".lectures__row").append(cacheDOM_5);
            $(".lectures__row").append(cacheDOM_6);
            $(".lectures__row").append(cacheDOM_7);
            }
          }
        else {
          for(let x = 1; x<14; x++)
              $("#col"+x).remove();
          $(".lectures__row").append(cacheDOM_1);
          $(".lectures__row").append(cacheDOM_2);
          $(".lectures__row").append(cacheDOM_3);
          $(".lectures__row").append(cacheDOM_4);
          $(".lectures__row").append(cacheDOM_5);
          $(".lectures__row").append(cacheDOM_6);
          $(".lectures__row").append(cacheDOM_7);
          js_btn.style.backgroundColor = "#ccc";
          js_clicked = false;
      }});

      html_btn.addEventListener("click", function(){

        for(let x = 1; x<14; x++)
            $("#col"+x).remove();

            $(".lectures__row").append(cacheDOM_1);
            $(".lectures__row").append(cacheDOM_2);
            $(".lectures__row").append(cacheDOM_3);

        if(!html_clicked) {
          html_btn.style.backgroundColor = "#2d2";
          html_clicked = true;

          if (css_clicked){
            $(".lectures__row").append(cacheDOM_4);
            $(".lectures__row").append(cacheDOM_5);
            $(".lectures__row").append(cacheDOM_6);
            $(".lectures__row").append(cacheDOM_7);
          }

          if (js_clicked){
            $(".lectures__row").append(cacheDOM_8);
            $(".lectures__row").append(cacheDOM_9);
            $(".lectures__row").append(cacheDOM_10);
            $(".lectures__row").append(cacheDOM_11);
            $(".lectures__row").append(cacheDOM_12);
            $(".lectures__row").append(cacheDOM_13);
           }
        }
        else  {
          for(let x = 1; x<14; x++)
              $("#col"+x).remove();
          $(".lectures__row").append(cacheDOM_4);
          $(".lectures__row").append(cacheDOM_5);
          $(".lectures__row").append(cacheDOM_6);
          $(".lectures__row").append(cacheDOM_7);
          $(".lectures__row").append(cacheDOM_8);
          $(".lectures__row").append(cacheDOM_9);
          $(".lectures__row").append(cacheDOM_10);
          $(".lectures__row").append(cacheDOM_11);
          $(".lectures__row").append(cacheDOM_12);
          $(".lectures__row").append(cacheDOM_13);
          html_btn.style.backgroundColor = "#ccc";
          html_clicked = false;

      }});
   }
});
    //const list = new List();
    //list.load();
  }

});
