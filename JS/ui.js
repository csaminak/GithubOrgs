(function(ns){
    'use strict';
    window.githubOrgs = ns = (ns || {});



    $('.loadOrgs').on('click', function(event){
        event.preventDefault();
        retrieveOrgs($('.userName').val());
        $('.userName').val('');
    });


    function retrieveOrgs(userName) {

        $.ajax({
            url: 'https://api.github.com/users/'+ userName + '/orgs',
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            dataType: 'json'
        })
        .done(function(data){
            $('.results').text(displayOrgs(data));
        })
        .fail(function(xhr){
            errorMessage(xhr, '.results');
        });
    }

    function errorMessage(xhr, elem) {
        if(xhr.status === 404) {
            $(elem).text('link was not found');
        } else {
            $(elem).text('something isn\'t right');
        }
    }

    function displayOrgs(data){
        data.forEach(function(organization){
            $('.results')
                .append(
                    '<li class="userOrg">\
                        <img src=' + organization.avatar_url + ' class="avatar" alt="orgLogo">\
                        <h2 class="orgName">' + organization.login.toLowerCase() + '</h2>\
                    </li>'
                );
        });
    }



})(window.githubOrgs);
