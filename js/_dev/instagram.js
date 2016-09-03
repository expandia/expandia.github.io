jQuery(document).ready(function($){
	var feed = new Instafeed({
		get: 'user',
		userId: '1650944',
		accessToken: '1650944.e8017a5.ea487e834b4b4879a2aeb1686db66649',
		resolution: 'low_resolution',
		target: 'instagramFeed',
		links: false,
		limit: 3,
		template: '<div class="instagram__container"><div class="instagram__img-container"><img class="instagram__img" src="{{image}}" /></div><div class="instagram__caption-container"><div class="instagram__caption">{{caption}}</div></div></div>'

	});
	feed.run();
});