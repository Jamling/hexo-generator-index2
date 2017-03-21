[![Build Status](https://travis-ci.org/Jamling/hexo-generator-index2.svg?branch=master)](https://travis-ci.org/Jamling/hexo-generator-index2)
[![node](https://img.shields.io/node/v/hexo-generator-index2.svg)](https://www.npmjs.com/package/hexo-generator-index2)
[![npm downloads](https://img.shields.io/npm/dt/hexo-generator-index2.svg)](https://www.npmjs.com/package/hexo-generator-index2)
[![npm version](https://img.shields.io/npm/v/hexo-generator-index2.svg)](https://www.npmjs.com/package/hexo-generator-index2)
[![GitHub release](https://img.shields.io/github/release/jamling/hexo-generator-index2.svg)](https://github.com/Jamling/hexo-generator-index2/releases/latest)

## Introduction

Filtered index generator for [Hexo]. Add filter feature base on the official index generator.

[简体中文](https://github.com/Jamling/hexo-generator-index2/blob/master/README_zh.md)

## Installation

``` bash
$ npm install hexo-generator-index2 --save
$ npm uninstall hexo-generator-index --save
```

Don't worry about the uninstallation, this plugin works same as offical index generator when no include/exclude options.

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
