$(document).ready(() => {
    console.log('script ready!');

    var todos = JSON.parse(localStorage.getItem('todos')) || [];

    var pageDate = $('#page-date');
    var pageTime = $('#page-time');
    let currentHour = 0;
    
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
    }

    setDateTime();
    setInterval(setDateTime, 1000);

    // $('.hour-block').each(() => {
    //     console.log(this);
    // })

    if (currentHour > 09) {
        console.log('greater')
    } else {
        console.log('less than')
    }
    console.log(currentHour);

    

});

