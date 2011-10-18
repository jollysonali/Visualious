jQuery.getJSON('http://api.tumblr.com/v2/blog/savesafe.tumblr.com/posts?api_key=5KShzHfHnwPMFxIsEDbdYgYsqIHeSENb7hJug8Mct6hVjguEMW&jsonp=?',
function(data) {

    var $elem;
    $elem = $(".tag_list").first();

    $.each(data.response.posts, function(idx, post) {
        $.each(post.tags, function(idx, tag) {
            if ($elem.find('a[href="/tagged/' + tag + '"]').length == 0) {
                $elem.append(
                    $('<li />').append(
                        $('<a />')
                            .attr('href', '/tagged/' + tag)
                            .text(tag)
                    )
                );
            }
        });
    });
});

$(".foo").each()