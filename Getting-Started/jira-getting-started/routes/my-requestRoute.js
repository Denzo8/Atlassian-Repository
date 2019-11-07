export default function routes(app, addon) {
    app.get('/my-requests', addon.authenticate(), function(req, res) {
        res.render('my-requests');
    });
}