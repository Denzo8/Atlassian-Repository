/* App frontend script */
$(document).ready(function() {
    // GET our Service Desk requests via the Jira Service Desk REST API
    AP.request({
        url: '/rest/api/3/project/SCRUMT1',
        success: function(response) {
            // Parse the response JSON
            var json = JSON.parse(response);

            console.log(json)


            $('<table>').addClass('aui').append(
                $('<thead>').append(
                    $('<tr>').append(
                        $('<th>').text('Issue Key'),
                        $('<th>').text('Name'),
                        $('<th>').text('Assignee Type'),
                        $('<th>').text('Created By'),
                        $('<th>').text('Project Type')
                    )
                ),
                $('<tbody>').append(

                    $('<tr>').append(
                        $('<td>').text(
                            json.key
                        ),
                        $('<td>').text(json.name),
                        $('<td>').text(json.assigneeType),
                        $('<td>').text(json.lead.displayName),
                        $('<td>').text(json.projectTypeKey)


                    )

                )


            ).appendTo('#main-content');

        }
    })

})