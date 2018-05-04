setTheCountdown('.fall-clock',((new Date("2018/09/06 09:00:00"))- (new Date()))/1000);

function setTheCountdown(objectName, time) {
    var clock = $(objectName).FlipClock(time,{
        countdown: true,
        clockFace: 'DailyCounter'
    });
}
