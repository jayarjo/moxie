(function() {
	var baseURL;

	var scripts = document.getElementsByTagName('script');
	for (var i = 0; i < scripts.length; i++) {
		var src = scripts[i].src;

		if (/moxie_loader\.js/.test(src)) {
			baseURL = src.substring(0, src.lastIndexOf('/'));
			break;
		}
	}

	var matches = document.location.search.match(/src=(min|dev|cov)/);
	var source = matches ? matches[1] : 'min';

	document.write('<script src="' + baseURL + '/../bin/js/moxie.' + source + '.js"></script>');
})();
