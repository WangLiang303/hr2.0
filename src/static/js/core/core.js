<<<<<<< HEAD
'use strict';
=======
>>>>>>> origin/zhy
(function(global) {
	/**
	* 添加string.format方法
	*/
	if(!String.prototype.format) {
		String.prototype.format = function(){
			var args = arguments;
			return this.replace(/\{(\d+)\}/g,                
		    function(match, number){
		        return typeof args[number] != 'undefined' ? args[number] : match;
		    });
		};
	}
<<<<<<< HEAD
	/*
	* 本地验证规则
	*/
	var regulation = {
		number: /^[1-9]{1,}$/,
		phone: /^1[\d+]{10}$/,
		idc: /^[\d+]{14|17}[\d+|Xx]{1}$/i
	}
	global.regulation = $.extend(global.regulation || {}, regulation);
})(window);
=======
})(window)
>>>>>>> origin/zhy

























































































































































































































































