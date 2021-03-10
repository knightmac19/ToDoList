$(document).ready(() => {
    var pageDate = $('#page-date');
    var pageTime = $('#page-time');
    let currentHour = 0;

    const setColors = () => {
        $('.hour-block').each(function() {
            let el = $(this)[0];
            let idHour = parseInt(el.id)
    
            if (idHour < currentHour) {
                $(this).children('textarea').removeClass('present future');
                $(this).children('textarea').addClass('bg-secondary text-white');
            } 
            if (idHour === currentHour) {
                $(this).children('textarea').removeClass('bg-secondary future');
                $(this).children('textarea').addClass('present text-white');
            }
            if (idHour > currentHour) {
                $(this).children('textarea').removeClass('bg-secondary present text-white');
                $(this).children('textarea').addClass('future');
            }
        })
    }
    
    const setDateTime = () => {
        let rightNow = new Date();
        let date = rightNow.toString().substring(0, 15);
        let time = rightNow.toLocaleString(
            'en-US', 
            { 
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true
            }
        );
        let military = rightNow.toLocaleString(
            'en-US', 
            { 
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: false
            }
        )

        pageDate.text(date);
        pageTime.text(time);
        currentHour = parseInt(military.substring(0, 2));
        setColors();
    }

    setDateTime();
    setInterval(setDateTime, 1000);

    $('.textarea').on('keyup', function() {
        let input = $(this).val().trim();
        let key = parseInt($(this).parent()[0].id)
        
        localStorage.setItem(`${key}`, input);
    });

    $('.clear-this').on('click', function() {
        $(this).parent().siblings('textarea').val('');

        let input = '';
        let key = parseInt($(this).parent().parent()[0].id)
        
        localStorage.setItem(`${key}`, input);
    });

    $('.clear-btn').on('click', function() {
        localStorage.clear();
        for (var i = 8; i < 23; i++) {
            $(`#${i}`).children('textarea').val('');
        }
    });

    for (var i = 8; i < 23; i++) {
        $(`#${i}`).children('textarea').val(localStorage.getItem(i));
    }

});

