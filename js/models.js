(function($, App, window) {
    /**
    * Build up the models that contain the listings information.
    *
    * @method _directoryModel
    * @param {Object} opts
    * @return {Object} Returns a new model instance.
    */
	App.prototype._directoryModel = function(opts) {
		var self = this,
			model = Backbone.Model.extend({
				defaults: {
					title: '',
					location: ''
				},
				initialize: function(data) {
                    var model = this;
					self._directoryList({
                        model: model
                    });
				}
			});
		return new model(opts);
	};

    /**
    * Read the _partial/directory.json file and build models from the returned data.
    *
    * @method _fetchDirectoryEntries
    * @return N/A
    */
	App.prototype._fetchDirectoryEntries = function() {
		var self = this,
			directory = this._buildDirectory();
		$.ajax({
			url: '_partials/directory.json',
			dataType: 'json',
			success: function(data) {
				var partials = data.partials;
				if(partials.length) {
					var i = partials.length;
					while(i--){
						var model = self._directoryModel({
								title: partials[i].title,
								location: partials[i].location
							});
						directory.add(model);
					}
				}
			} 	
		});
	};

})(jQuery, App, window);