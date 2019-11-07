export default function routes(app, addon) {
    app.get('/users-view', addon.authenticate(), (req, res) => {
        // Rendering a template is easy; the render method takes two params:
        // name of template and a json object to pass the context in.

        res.render('users-view');

    });

}