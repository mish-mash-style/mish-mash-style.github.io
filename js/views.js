(function($, App, window) {

    /**
    * Build the view that acts as the interface between the data and the user.
    *
    * @method _directoryList
    * @params {Object} opts
    * @return {Object} A new view instance.
    */
	App.prototype._directoryList = function(opts) {
        var self = this,
            view = Backbone.View.extend({
                el: $('#primary-navigation'),
                template: $('#navigation-list').html(),
                render: function() {
                    var template = _.template(this.template, {
                            location: this.model.get('location'),
                            title: this.model.get('title')
                        });
                    this.$el.append(template);
                },
                initialize: function() {
                    this.render();
                }
            });
        return new view(opts);
    }

})(jQuery, App, window);