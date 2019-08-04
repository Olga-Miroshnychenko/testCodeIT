'use strict'
$.ajax({
    type: 'GET',
    url: 'http://codeit.ai/codeitCandidates/serverFrontendTest/company/getList',
    dataType: "json",
}).done(function (data) {
    console.log(data);
    for (let a = 0; a < data.list.length; a++) {
        document.getElementById('container').innerHTML += ('<div class="item" >' + '<a href="">' + data.list[a].name + '</a>' + '</div>');
    }
    document.onclick = function (e) {
        if (e.target.nodeName !== 'LI') return false;
        e.target.clicked = true;
    };
    let g = document.getElementById('container');
    for (let i = 0, len = g.children.length; i < len; i++) {
        (function (index) {
            g.children[i].onclick = function () {
                for (let n = 0; n < data.list[index].partners.length; n++) {
                    document.getElementById('namePart').innerHTML += ('<div class="name" >' + data.list[index].partners[n].name + '</div>' + '<div class="value">' + data.list[index].partners[n].value + '%' + '</div>' + '<br>');
                }
            }
        })(i);

    }
    document.getElementById('totRes').innerHTML = data.list.length;
}).fail(function (textStatus) {
    alert(textStatus);
});

$.ajax({
    type: 'GET',
    url: 'http://codeit.ai/codeitCandidates/serverFrontendTest/news/getList',
    dataType: "json",
}).done(function (data) {
    console.log(data);
    for (let i = 0; i < data.list.length; i++) {
        document.getElementById('imgActive').innerHTML = ('<div class="carousel-caption"><div class="row"><div class="col-sm-3"><img class="rounded-circle img-fluid " style="height: 150px; width:100%" src=' + data.list[i].img + '></div><div class="col-sm-9"><h3>' + '<a href=' + data.list[i].link + '>' + 'Title' + '</a>' + '</h3><small>' + data.list[i].description.substring(0, 50) + ' ...' + '</small><small class="smallest mute"><br>' + '<span>Author: </span>' + data.list[i].author + '<br>' + '<span>Date: </span>' + timeConverter(data.list[i].date) + '</small></div></div></div>');
        document.getElementById('img').innerHTML += ('<div class="carousel-item"><div class="carousel-caption"><div class="row"><div class="col-sm-3"><img style="height: 150px; width:100%" class="rounded-circle img-fluid" src=' + data.list[i].img + '></div><div class="col-sm-9"><h3>' + '<a href=' + data.list[i].link + '>' + 'Title' + '</a>' + '</h3><small>' + data.list[i].description.substring(0, 50) + ' ...' + '</small><small class="smallest mute"><br>' + '<span>Author: </span>' + data.list[i].author + '<br>' + '<span>Date: </span>' + timeConverter(data.list[i].date) + '</small></div></div></div></div>');

        function timeConverter(dd) {
            var a = new Date(dd * 1000);
            var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            var year = a.getFullYear();
            var month = months[a.getMonth()];
            var date = a.getDate();
            var hour = a.getHours();
            var min = a.getMinutes();
            var sec = a.getSeconds();
            var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
            return time;
        }

    }
}).fail(function (textStatus) {
    alert(textStatus);
});



