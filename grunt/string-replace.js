module.exports = {
	workImg: {
	    files: {
	      '_includes/expandia__work-img.svg': 'img/_temp/expandia__work-img.svg'
	    },
	    options: {
          replacements: [
            {
              pattern: '<use id="screen-img__placeholder" mask="url(#mask-4)" xlink:href="#path-3"/>',
              replacement: '<image id="screen-img" x="0" y="1.98461538" width="320.044093" height="170.676923" xlink:href="{{ site.url }}/img/dist/work/{{ project.img }}.jpg"></image>'
            },
            {
              pattern: '<use mask="url(#mask-10)" xlink:href="#path-9" id="phone-img__placeholder" stroke-width="2" stroke="#979797" fill="#D8D8D8"/>',
              replacement: '<image id="phone-img" mask="url(#mask-6)" x="-1.322" y="-9" width="107.085" height="202.704" xlink:href="{{ site.url }}/img/dist/work/{{ project.img }}--mobile.jpg"/>'
            },
            {
              pattern: '<svg',
              replacement: '<svg class="work__img"'
            }
          ]
        },
      files: {
        '_includes/expandia__work-img--about.svg': 'img/_temp/expandia__work-img.svg'
      },
      options: {
          replacements: [
            {
              pattern: '<use id="screen-img__placeholder" mask="url(#mask-4)" xlink:href="#path-3"/>',
              replacement: '<image id="screen-img" x="0" y="1.98461538" width="320.044093" height="170.676923" xlink:href="{{ site.url }}/img/dist/work/{{ client.img }}.jpg"></image>'
            },
            {
              pattern: '<use mask="url(#mask-10)" xlink:href="#path-9" id="phone-img__placeholder" stroke-width="2" stroke="#979797" fill="#D8D8D8"/>',
              replacement: '<image id="phone-img" mask="url(#mask-6)" x="-1.322" y="-9" width="107.085" height="202.704" xlink:href="{{ site.url }}/img/dist/work/{{ client.img }}--mobile.jpg"/>'
            },
            {
              pattern: '<svg',
              replacement: '<svg class="work-page__img"'
            }
          ]
        }
	  }
}