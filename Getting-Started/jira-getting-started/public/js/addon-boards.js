/* App frontend script */
$(document).ready(function() {
    // GET our Service Desk requests via the Jira Service Desk REST API
    AP.request({
        url: '/rest/agile/1.0/board',
        success: function(response) {
            // Parse the response JSON
            var json = JSON.parse(response);

            console.log(json);


            $('<table>').addClass('aui').append(
                $('<thead>').append(
                    $('<tr>').append(
                        $('<th>').text('Name'),
                        $('<th>').text('Type'),
                        $('<th>').text('Project Name')

                    )
                ),

                $('<tbody>').append(
                    $.map(json.values, function(e) {
                        return $('<tr>').append(

                            $('<td>').text(e.name),
                            $('<td>').text(e.type),
                            $('<td>').text(e.location.projectName)


                        );

                    })
                )


            ).appendTo('#boards-content');

        }
    })

})