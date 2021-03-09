$(document).ready(() => {
    console.log('script ready!');

    var todos = JSON.parse(localStorage.getItem('todos')) || [];

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
                // console.log(
                //     el.children[1]
                // )
                
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
        // currentHour = parseInt(time.substring(0 , 2));
        currentHour = parseInt(military.substring(0, 2));
        setColors();
    }

    setDateTime();
    setInterval(setDateTime, 1000);

    

    

    

});

