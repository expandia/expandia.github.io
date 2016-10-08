jQuery(document).ready(function($){
	var feed = new Instafeed({
		get: 'user',
		userId: '3865913948',
		accessToken: '3865913948.c7381cf.90b1accea003497db3f3fa844e4bb1da',
		resolution: 'low_resolution',
		target: 'instagramFeed',
		links: false,
		limit: 3,
		template: '<div class="instagram__container"><div class="instagram__img-container"><img class="instagram__img" src="{{image}}" /></div><div class="instagram__caption-container"><div class="instagram__caption">{{caption}}</div></div></div>'

	});
	feed.run();
});