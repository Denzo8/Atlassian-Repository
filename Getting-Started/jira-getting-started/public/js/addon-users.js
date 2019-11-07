/* App frontend script */
$(document).ready(function() {
    // GET our Service Desk requests via the Jira Service Desk REST API
    AP.request({
        url: '/rest/api/3/users/search',
        success: function(response) {
            // Parse the response JSON
            var json = JSON.parse(response);

            console.log(json)
            $.map(json, function(e) {

                $('<table>').addClass('aui').append(
                    $('<thead>').append(
                        $('<tr>').append(
                            $('<th>').text('Account Type'),
                            $('<th>').text('User Name'),
                            $('<th>').text('Email'),
                            $('<th>').text('Status')

                        )
                    ),
                    $('<tbody>').append(

                        $('<tr>').append(
                            $('<td>').text(e.accountType),
                            $('<td>').text(e.displayName),
                            $('<td>').text(e.emailAddress),
                            $('<td>').text(e.active)

                        )

                    )


                ).appendTo('#show-users');
            })

        }
    })

})