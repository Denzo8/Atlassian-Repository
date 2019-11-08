/* App frontend script */
$(document).ready(function() {
    // GET our Service Desk requests via the Jira Service Desk REST API
    AP.request({
        url: '/rest/api/3/project',
        success: function(response) {
            // Parse the response JSON
            var json = JSON.parse(response);

            console.log(json)


            $('<table>').addClass('aui').append(
                $('<thead>').append(
                    $('<tr>').append(
                        $('<th>').text('Issue Key'),
                        $('<th>').text('Name'),
                        $('<th>').text('Type')

                    )
                ),

                $('<tbody>').append(
                    $.map(json, function(e) {
                        return $('<tr>').append(
                            $('<td>').text(
                                e.key
                            ),
                            $('<td>').text(e.name),
                            $('<td>').text(e.projectTypeKey)



                        )

                    })
                )


            ).appendTo('#projects-content');
        }
    })

})