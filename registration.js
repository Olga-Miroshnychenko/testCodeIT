'use strict'

document.forms['loginForm'].addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.elements['email'].value;
    const pass = e.target.elements['password'].value;
    const secondname = e.target.elements['secondname'].value;
    const name = e.target.elements['name'].value;
    const gender = e.target.elements['gender'].value;

    if (!email || !pass || !secondname || !name || !gender) return alert('Please, fill in all fields');

    if (!$('#check_id').is(":checked")) {
        alert('Please, checkes!');
    }
    $.ajax({
        type: 'POST',
        url: 'http://codeit.ai/codeitCandidates/serverFrontendTest/user/registration',
        dataType: "json",
        data: {
            name: $('#name').val(),
            secondname: $('#secondname').val(),
            email: $('#email').val(),
            gender: $('#gender').val(),
            pass: $('#password').val()
        }
    }).done(function (data) {
        if (data.message !== 'User created') {
            alert(data.message);
        } else {
            alert('User create');
            window.location.href = 'index.html';


        }
    }).fail(function (textStatus) {
        alert(textStatus);
    });
});

