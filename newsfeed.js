
define('require-less/less!newsfeed/newsfeed',[],function(){});

define('text!newsfeed/newsfeed.html',[],function () { return '<ul class="newsfeed">\n    <li>More peace</li>\n    <li>Less war</li>\n</ul>';});

define('newsfeed/newsfeed',['require','jquery','less!newsfeed/newsfeed','text!newsfeed/newsfeed.html'],function (require) {
    require('jquery');
    require('less!newsfeed/newsfeed');
    var template = require('text!newsfeed/newsfeed.html');

    function render(container) {
        container.html(template);
    }

    return {
        render: render
    };
});

(function(c){var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[i]?s[i].cssText=c:s[a](d.createTextNode(c));})
('.newsfeed li {\n  color: #008000;\n}\n');
