$('.mast div').live('click', function () {

    if ($(this).attr('class') == 'unknown') {
        $(this).addClass('table').css({
            'opacity': '0.4',
            'border': '0px',
            'margin': '3px'
        }).removeClass('unknown');
    } else if ($(this).attr('class') == 'sopernik') {
        $(this).addClass('table').css({
            'opacity': '0.4',
            'border': '0px',
            'margin': '3px'
        }).removeClass('sopernik');
    } else if ($(this).attr('class') == 'moikarty') {
        $(this).addClass('table').css({
            'opacity': '0.4',
            'border': '0px',
            'margin': '3px'
        }).removeClass('moikarty');
    } else if ($(this).attr('class') == 'table') {
        $(this).addClass('unknown').css({
            'opacity': '1',
            'border': '0px',
            'margin': '3px'
        }).removeClass('table');
    }
});

$('#otboy').live('click', function () {
    $('.table').addClass('otboy').css({
        'background-position': '0 -360px',
        'opacity': '1',
        'border': '0px'
    }).removeClass('table');
});

$('#sopernik').live('click', function () {
    $('.table').addClass('sopernik').css({
        'opacity': '1',
        'border': '2px solid red',
        'margin': '1px'
    }).removeClass('table');
});

$('#moijarty').live('click', function () {
    $('.table').addClass('moikarty').css({
        'opacity': '1',
        'border': '2px solid blue',
        'margin': '1px'
    }).removeClass('table');
});

function newgame() {
    var mast = ['pik', 'che', 'kre', 'bub']

    var html_content = '<div style="text-align: center;"><a href="index.html" id="cardsnumber" class="myButton">36 CARDS</a></div><div style="display: flex;justify-content: center;"><div id="stol" style="min-width: 420px;max-width: 400px;">';

    for (var i = 0; i < 4; i++) {
        html_content += '<div class="mast">';
        for (var j = 9; j < 15; j++) {
            html_content += '<div id="' + mast[i] + j + '" class="unknown"></div>';
        }
        html_content += '</div>';
    }
    html_content += '</div></div><div class="btnblock" style="text-align: center;clear: both;min-width: 470px;"><span id="sopernik" class="myButton" style="clear: both;">RIVAL</span><span id="moijarty" class="myButton" style="clear: both;">TAKEN</span><span id="otboy" class="myButton">CLEAR</span></div><div style="text-align: center;"><span id="newgame" class="myButton">NEW GAME</span></div>';

    $('body').empty().append(html_content);

    $('.mast').css({
        'clear': 'both'
    });
    $('.mast div').css({
        'width': '60px',
        'height': '90px',
        'margin': '3px',
        'float': 'left',
        'background-image': 'url(./img/cards.png)',
        'background-size': '780px 450px'
    });

    for (var i = 0; i < 4; i++) {
        var vert = i * 90 + 'px';
        for (var j = 6; j < 15; j++) {
            $('#' + mast[i] + j).css({
                'background-position': '-' + (j * 60 - 60) + 'px -' + vert
            });
        }
    }
}



$('#newgame').live('click', function () {
    newgame();
});
