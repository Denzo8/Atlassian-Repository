export default function routes(app, addon) {
    // Redirect root path to /atlassian-connect.json,
    // which will be served by atlassian-connect-express.
    app.get('/', (req, res) => {
        res.redirect('/atlassian-connect.json');
    });

    // This is an example route used by "generalPages" module (see atlassian-connect.json).
    // Verify that the incoming request is authenticated with Atlassian Connect.
    app.get('/hello-world', addon.authenticate(), (req, res) => {
        // Rendering a template is easy; the render method takes two params:
        // name of template and a json object to pass the context in.
        res.render('hello-world', {
            title: 'Atlassian Connect'
                //issueId: req.query['issueId']
        });
    });
    app.get('/projects-view', addon.authenticate(), (req, res) => {
        // Rendering a template is easy; the render method takes two params:
        // name of template and a json object to pass the context in.

        res.render('projects-view', {

            title: 'My projects'
                //issueId: req.query['issueId']

        });
    });

    // Add additional route handlers here...

    app.get('/my-requests', addon.authenticate(), function(req, res) {
        res.render('my-requests');
    });



    app.get('/users-view', addon.authenticate(), (req, res) => {
        // Rendering a template is easy; the render method takes two params:
        // name of template and a json object to pass the context in.

        res.render('users-view');

    });
    app.get('/project-view', addon.authenticate(), (req, res) => {
        // Rendering a template is easy; the render method takes two params:
        // name of template and a json object to pass the context in.

        res.render('project-view', {

            //title: resp.key
            //issueId: req.query['issueId']

        });
    });
    app.get('/boards-view', addon.authenticate(), (req, res) => {
        // Rendering a template is easy; the render method takes two params:
        // name of template and a json object to pass the context in.

        res.render('boards-view', {

            //title: resp.key
            //issueId: req.query['issueId']

        });
    });


}