## Introduction

Filtered index generator for [Hexo]. Add filter feature base on the official index generator.

## Installation

``` bash
$ npm install hexo-generator-index2 --save
```

And replace the official hexo-generator-index to hexo-generator-index2 in <var>package.json</var>

```diff
"dependencies": {
    "hexo": "^3.2.0",
    "hexo-deployer-git": "^0.1.0",
    "hexo-generator-archive": "^0.1.4",
    "hexo-generator-category": "^0.1.3",
-     "hexo-generator-index": "^0.2.0",
+     "hexo-generator-index2": "^0.0.1",
    "hexo-generator-tag": "^0.2.0",
    "hexo-renderer-marked": "^0.2.10",
    "hexo-renderer-stylus": "^0.3.1",
    "hexo-server": "^0.2.0",
    "lodash": "^4.6.1",
    "hexo-generator-github": "^0.0.1",
    "hexo-generator-i18n": "^0.0.1"
  }

```

## Options

``` yaml
index_generator:
  per_page: 10
  order_by: -date
  include:
    - category Web # include article which category is Web
  exclude:
    - tag Hexo # exclude article which tag is Hexo

```

- **per_page**: Posts displayed per page. (0 = disable pagination)
- **order_by**: Posts order. (Order by date descending by default)
- **include**: Posts filter include option
- **exclude**: Posts filter exclude option

The <var>per_page</var> and <var>order_by</var> is the offical index generator option, just keep it.

Include/exclude option is `attribute value` format, available attribute are:

- category: Post category
- tag: Post tag
- path: Post source path


## License

MIT

[Hexo]: http://hexo.io/