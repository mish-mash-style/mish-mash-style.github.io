(function($, App, window) {

    App.prototype._buildRoutes = Backbone.Router.extend({
        routes: {
            '': 'indexRoute',
            ':partial': 'partialRoute'
        }
    });

    App.prototype._initRoutes = function() {
        var self = this;
        this.routes = new this._buildRoutes;
        this.routes.on('route', function(route) {
            console.log('route:' + route);
        }, self);
        // Listen out for changes to the URL.
        Backbone.history.start({pushState: true});
    };

})(jQuery, App, window);