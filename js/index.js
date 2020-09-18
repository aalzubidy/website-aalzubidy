// Document ready hide everything and assign buttons
$(document).ready(function () {
    // Hide everything and show welcome message
    $('.inner-sections').hide();
    $('#spinnerSection').show();

    setTimeout(function () {
        $('.inner-sections').hide();
        $('#welcomeMessage').show();
    }, 1500)

    // Assign buttons
    $('.fa-times-circle').click(function () {
        $('.inner-sections').hide();
        setTimeout(function () {
            $('#welcomeMessage').show();
        }, 500)
    })

    $('#aboutBtn').click(function () {
        $('.inner-sections').hide();
        $('#aboutSection').show();
    })

    $('#educationBtn').click(function () {
        $('.inner-sections').hide();
        $('#educationSection').show();
    })

    $('#experienceBtn').click(function () {
        $('.inner-sections').hide();
        $('#experienceSection').show();
    })

    $('#publicationBtn').click(function () {
        $('.inner-sections').hide();
        $('#publicationSection').show();
    })

    $('#connectBtn').click(function () {
        $('.inner-sections').hide();
        $('#connectSection').show();
    })

    $('#aboutBtn').click(function () {
        $('.inner-sections').hide();
        $('#aboutSection').show();
    })

    $('#aboutBtn').click(function () {
        $('.inner-sections').hide();
        $('#aboutSection').show();
    })

    $('#rebootBtn').click(function () {
        if (confirm('Are you sure you want to refresh back to the main page?')) {
            window.location.href = "index.html";
        }
    })
});

// code for clock
var tday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var tmonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function GetClock() {
    var d = new Date();
    var nday = d.getDay(),
        nmonth = d.getMonth(),
        ndate = d.getDate();
    var nhour = d.getHours(),
        nmin = d.getMinutes(),
        ap;
    if (nhour == 0) {
        ap = " AM";
        nhour = 12;
    } else if (nhour < 12) {
        ap = " AM";
    } else if (nhour == 12) {
        ap = " PM";
    } else if (nhour > 12) {
        ap = " PM";
        nhour -= 12;
    }

    if (nmin <= 9) nmin = "0" + nmin;

    var clocktext = "" + tday[nday] + ", " + tmonth[nmonth] + " " + ndate + " " + nhour + ":" + nmin + ap + "";
    document.getElementById('clockbox').innerHTML = clocktext;
}

GetClock();
setInterval(GetClock, 1000);