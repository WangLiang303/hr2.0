//$('#menu > a').on('click', function() {
//	var tar = $(this).data('href');
//	window.location.href = window.location.href + '#' + tar;
//	
//})
//$('#pageToolbar').Paging({pagesize:10,count:85,toolbar:true});	

$(function() {
	$.ajax({
		url: $http.api('menu'),
		crossDomain: true,
		dataType: 'jsonp',
		jsonpCallback: 'cb',
		success: function(result) {
			var $menu = new menu('#menu', result.data, router.render);
			router.init(function(menuId) {
				if(!menuId) { return $menu.setup('loanProcess'); }
				$menu.setup(menuId, true);
			})
		},
		error: function(err) {
			console.log(err);
		}/*$http.ok(function(result) {
			var $menu = new menu('#menu', result.data, router.render);
			router.init(function(menuId) {
				if(!menuId) { return $menu.setup('loanProcess'); }
				$menu.setup(menuId, true);
			})
		})*/
	})
});
