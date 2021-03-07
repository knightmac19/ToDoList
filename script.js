$(document).ready(() => {
    console.log('script ready!');

    var pageDate = $('#page-date');
    var pageTime = $('#page-time');
    
    const setDateTime = () => {
        let rightNow = new Date().toString();
        let date = rightNow.substring(0, 15);
        let time = rightNow.substring(16, 24);

        pageDate.text(date);
        pageTime.text(time);
    }

    setInterval(setDateTime, 1000);

    

});

