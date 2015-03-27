
$(document).ready(function(){
    // parallax fullpage.js
    // $("#demosMenu").change(function(){
    //   window.location.href = $(this).find("option:selected").attr("id") + '.html';
    // });
    $('#fullpage').fullpage({
        'verticalCentered': false,
        'css3': false,
        'autoScrolling': false,
        'sectionsColor': ['#ff6633', '#fff', '#ff6633', '#fff','#272625'],
        'navigation': true,
        'navigationPosition': 'right',
        'navigationTooltips': ['fullPage.js', 'Powerful', 'Amazing', 'Simple'],

        'afterLoad': function(anchorLink, index){
            if(index == 2){
                $('#iphone3, #iphone2, #iphone4').addClass('active');
            }
        },

        'onLeave': function(index, nextIndex, direction){
            if (index == 3 && direction == 'down'){
                $('.section').eq(index -1).removeClass('moveDown').addClass('moveUp');
            }
            else if(index == 3 && direction == 'up'){
                $('.section').eq(index -1).removeClass('moveUp').addClass('moveDown');
            }

            $('#staticImg').toggleClass('active', (index == 2 && direction == 'down' ) || (index == 4 && direction == 'up'));
            $('#staticImg').toggleClass('moveDown', nextIndex == 4);
            $('#staticImg').toggleClass('moveUp', index == 4 && direction == 'up');
        }
    });
});
