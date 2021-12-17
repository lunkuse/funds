let url = 'http://localhost/onyango/';

$(document).ready(function() {

  /*-------------------------------------
  Navbar Toggle for Mobile
  -------------------------------------*/
  function navbarCollapse() {
    if($(window).width() < 992) {
      $(document).on('click', function(event) {
        var clickover = $(event.target);
        var _opened = $('#navbar-collapse').hasClass('in');
        if(_opened === true && !(clickover.is('.navbar-nav li, .navbar-nav *'))) {
          $('button.navbar-toggle').trigger('click');
        }
      });

      $('.site-nav .dropdown').unbind('click');
      $('.site-nav .dropdown').on('click', function(e) {
        $(this).siblings('.dropdown').children('.dropdown-menu').slideUp();
        $(this).children('.dropdown-menu').slideToggle();
        console.log('Hello');
      });
      $('.site-nav .dropdown>a *').on('click', function (e) {
        e.stopPropagation();
      });
    }
  }

  navbarCollapse();

function popbox3() {
    $('#overbox3').toggle();
}

  $('.coockies-close').on('click', function() {
    $('#overbox3').fadeOut();
  })

 function GetCookie(name) {
        var arg=name+"=";
        var alen=arg.length;
        var clen=document.cookie.length;
        var i=0;

        while (i<clen) {
            var j=i+alen;
                if (document.cookie.substring(i,j)==arg)
                    return "here";
                i=document.cookie.indexOf(" ",i)+1;
                if (i==0) 
                    break;
        }

        return null;
    }

    var visit=GetCookie("COOKIE1");

    if (visit==null){
    var expire=new Date();

    popbox3();

    expire=new Date(expire.getTime()+7776000000);
    document.cookie="COOKIE1=here; expires="+expire;
}


	/*-------------------------------------
	Smooth Scroll
	-------------------------------------*/
	$('#back-to-top').on('click', function () {
	  $("html, body").animate({
	  scrollTop: 0
	  }, "slow");
	  return false;
	});

  $('.coockies-close').on('click', function() {
    $('.cookies').fadeOut();
  })


  /*---------------------------------------
  Sticky Nav
  ---------------------------------------*/

  $(window).on('scroll', function(){
    var scroll = $(window).scrollTop();
    if(scroll >= 45) {
      $('.funds').addClass('fixed');
    } else {
      $('.funds').removeClass('fixed');
    }
  })

	/*-------------------------------------
	Country Search
	-------------------------------------*/
    var options = {
      url: url+"data/country.json",
      getValue: "name",
      list: {
        match: {
          enabled: true
        },
        maxNumberOfElements: 8
      },

      template: {
        type: "custom",
        method: function(value, item) {
          return "<span class='flag flag-" + (item.code).toLowerCase() + "' ></span>" + value;
        }
      },
      theme: "round"
    };
    $("#countries-flags").easyAutocomplete(options);

    $("#countries-flags").focus(function(){
      $.getJSON(url+"data/country.json", function(return_data){
        $.each(return_data, function(key, value){
          $("#eac-container-countries-flags ul").css('display', 'block');
          $("#eac-container-countries-flags ul").append('<li><div class="eac-item"><span class="flag flag-'+(value['code']).toLowerCase()+'"></span><span class="country_name">'+value['name']+'</span></div></li>');
          $("#eac-container-countries-flags ul li").on('mouseover', function(){
              $(this).siblings().removeClass('selected');
              $(this).addClass('selected'); 
          });
        });
        $('#eac-container-countries-flags ul').on('click', 'li', function(){
          var flagContent= $(this).find('.country_name').html();
          $('#countries-flags').val(flagContent);
        });
      });
    });

	/*-------------------------------------
  Taking Currency list
  -------------------------------------*/
    var currencyList = [];

    $.getJSON('data/latest.json', function(data) {
        var currencyList = data['rates'];
        // console.log(currencyList);
        var listToAddDom1 = $('#currency1');
        var listToAddDom2 = $('#currency2');
        $.each(currencyList, function(key, value){
            if(key == listToAddDom1.data('selected')){
                listToAddDom1.append('<option value="' + value + '" selected>'+key+'</option>'); 
            } else {
                listToAddDom1.append('<option value="' + value + '">'+key+'</option>');  
            }
            if(key == listToAddDom2.data('selected')){
                listToAddDom2.append('<option value="' + value + '" selected>'+key+'</option>'); 
            } else {
                listToAddDom2.append('<option value="' + value + '">'+key+'</option>'); 
            }
        });
    }).done(function(){
        changeTheValue();
    });

    /*-------------------------------------
      Magnific PopUp
    -------------------------------------*/
    $('.play-button').magnificPopup({
      type: 'iframe',
      gallery: {
        enabled: true,
      },
    });

    $.extend(true, $.magnificPopup.defaults, {
      iframe: {
        patterns: {
          youtube: {
            index: 'youtube.com/',
            id: 'v=',
            src: 'https://www.youtube.com/embed/%id%?autoplay=1'
          }
        }
      }
    });
    
    /*----------------------------
    Tackling the result
    ----------------------------*/
    function changeTheValue(){
        var value1 = $('#currency1').val();
        var value2 = $('#currency2').val();
        var calculate = value2/value1;
        $('#calulate').html('1' + $('#currency1 :selected').text() + ' → ' + calculate.toFixed(4) + $('#currency2 :selected').text() );
    }
    
    changeTheValue();
    
    $('#currency1, #currency2').on('change', function(){
        changeTheValue();
    });
    $(window).on('resize orientationchange', function() {
      navbarCollapse();
    })

});