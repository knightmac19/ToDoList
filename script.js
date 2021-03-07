$(document).ready(() => {
    console.log('script ready!');

    var pageDate = $('#page-date');
    var pageTime = $('#page-time');
    
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
            });

        pageDate.text(date);
        pageTime.text(time);
    }

    setInterval(setDateTime, 1000);

    

});

