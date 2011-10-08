jQuery.getJSON('http://api.tumblr.com/v2/blog/savesafe.tumblr.com/posts?api_key=5KShzHfHnwPMFxIsEDbdYgYsqIHeSENb7hJug8Mct6hVjguEMW&jsonp=?', function(data){
	var tags = [], tag_list;
	for(x in data.response.posts){
		data.response.posts[x].tags.forEach(
			function(tag){
				tags.push(tag);
			}
		);
	}
	tags = _.uniq(tags);
	console.log(tags)
	
	tag_list = document.body.getElementsByClassName("tag_list")[0];
	for(x in tags){
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(tags[x]));
		tag_list.appendChild(li);
	}
});



var $li = $("<li />");
$li.text(tagName);
$tag_list.append($li);