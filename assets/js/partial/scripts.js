
$(document).ready(function(){

    $('#fullpage').fullpage({
        'verticalCentered': false,
        'css3': false,
        'autoScrolling': true,
        'sectionsColor': ['', '', '', '',''],
        'navigation': true,
        'navigationPosition': 'right',
        'navigationTooltips': ['', '', '', '', ''],

        'afterLoad': function(anchorLink, index){
            if(index == 1){
                $('.ss__page1__left').removeClass('left').addClass('toleft');
                $('.ss__page1__right').removeClass('right').addClass('toright');
            }
            else if(index == 2){
                $('.title2').removeClass('fromdown').addClass('tonormal');
                $('.desc2').removeClass('fromright').addClass('tonormal');
            }
            else if(index == 3){
                $('.title3').removeClass('fromdown').addClass('tonormal');
                $('.desc3').removeClass('fromright').addClass('tonormal');
            }
            else if(index == 4){
                $('.title4').removeClass('fromdown').addClass('tonormal');
                $('.desc4').removeClass('fromright').addClass('tonormal');
            }
        },

        'onLeave': function(index, nextIndex, direction){
            if (index == 1){
                $('.ss__page1__left').removeClass('toleft').addClass('left');
                $('.ss__page1__right').removeClass('toright').addClass('right');
            }
            // else if (index == 2){
            //     $('.title2').removeClass('tonormal').addClass('fromleft');
            //     $('.desc2').removeClass('tonormal').addClass('fromright');
            // }
            // else if (index == 3){
            //     $('.title3').removeClass('tonormal').addClass('fromleft');
            //     $('.desc3').removeClass('tonormal').addClass('fromright');
            // }
            // else if (index == 4){
            //     $('.title4').removeClass('tonormal').addClass('fromleft');
            //     $('.desc4').removeClass('tonormal').addClass('fromright');
            // }
        }
    });
    
    $(window).load(function() {
        $('.ss__page1__left').removeClass('left').addClass('toleft');
        $('.ss__page1__right').removeClass('right').addClass('toright');        
        setTimeout(function (){
            $('.title1').removeClass('fromleft').addClass('tonormal');
        }, 300);
        setTimeout(function (){
            $('.newsletter,.desc1').removeClass('fromright').addClass('tonormal');
        }, 300);
    });

});
