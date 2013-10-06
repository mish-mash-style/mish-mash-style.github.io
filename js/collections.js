(function($, App, window) {

    /**
    * Build the collection that contains the directory listings models.
    *
    * @method _fetchDirectoryEntries
    * @params {Object} opts
    * @return {Object} A new collection instance.
    */
	App.prototype._buildDirectory = function(opts) {
		var self = this,
			collection = Backbone.Collection.extend({
				add: function(data) {
					console.log(data);
				}
			});
		return new collection(opts);
	};

})(jQuery, App, window);