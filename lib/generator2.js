'use strict';

var pagination = require('hexo-pagination');
var util = require('util');
var funcs = [];
funcs['category'] = function (post, value) {
    var ret = false;

    post.categories.forEach(function (item, i) {
        if (item.name == value) {
            ret = true;
            return;
        }
    });
    return ret;
};

funcs['tag'] = function (post, value) {
    var ret = false;
    post.tags.forEach(function (item, i) {
        if (item.name == value) {
            ret = true;
            return;
        }
    });
    return ret;
};

funcs['path'] = function (post, value) {
    var ret = false;
    ret = post.source.indexOf(value) > -1;
    return ret;
};

module.exports = function (locals) {
    var ret = [];
    var _self = this;

    function _generate(hexo, locals, generator) {
        var config = hexo.config;
        var posts = locals.posts.sort(generator.order_by);
        var paginationDir = config.pagination_dir || 'page';
        var path = generator.path || '';

        if (generator.include || generator.exclude) {
            var include = generator.include || [];
            var exclude = generator.exclude || [];
            if (!util.isArray(include)) {
                include = [include];
            }
            if (!util.isArray(exclude)) {
                exclude = [exclude];
            }

            posts = posts.filter(function (post) {
                var ret = false;
                if (include.length > 0) {
                    for (var i = 0; i < include.length; i++) {
                        var str = include[i].split(' ');
                        ret = funcs[str[0]].call(this, post, str[1]);
                        if (ret) {
                            break;
                        }
                    }
                }
                else {
                  ret = true;
                }
                if (exclude.length > 0) {
                    var ex = false;
                    for (var i = 0; i < exclude.length; i++) {
                        var str = exclude[i].split(' ');
                        ex = funcs[str[0]].call(this, post, str[1]);
                        if (ex) {
                            break;
                        }
                    }
                    ret = ret && !ex;
                }
                return ret;
            });
        }
        // if (path.length > 0 && path[path.length - 1] !== '/') {
        //     path += '/';
        // }
        var opts = {};
        if (generator.index) {
            opts.__index = true;
        } else {
            opts.__index2 = true;
        }
        opts.title = generator.path;
        ret = ret.concat(pagination(path, posts, {
            perPage: generator.per_page,
            layout: [generator.layout, 'archive'],
            format: paginationDir + '/%d/',
            data: opts
        }));
    }

    this.config.index2_generators.forEach(function (g) {
        //_self.log.info(JSON.stringify(g));
        _generate(_self, locals, g);
    });
    return ret;
};
