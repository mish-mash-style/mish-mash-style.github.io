(function($, App, window) {
    /**
    * Initiate the application logic
    *
    * @method _init
    * @constructor
    */
	App.prototype._init = function() {
		this._fetchDirectoryEntries();
        this._initRoutes();
		return this;
	};

	$(document).on({
		ready: function() {
			var app = new App()._init();
		}
	});

})(jQuery, App, window);