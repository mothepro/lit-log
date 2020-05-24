# Lit Log

> Simple way to log events to the DOM

[![npm](https://img.shields.io/npm/v/lit-log.svg)](https://www.npmjs.com/package/lit-log)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/lit-log)

## Install

`yarn add lit-log`

## How to Use

| Attribute | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `hidden` | `boolean` | `false` | Whether the element should be displayed |
| `open` | `boolean` | `false` | Whether the log should be shown by default |
| `entry` | `any` | `undefined` | Adds a new entry |

<!--
Inline demo for webcomponents.org
```
<custom-element-demo>
  <template>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<!-- 
  Import the element.

  The `module` query parameter expands "bare" imports to full unpkg.com urls.
  This means use of an import map isn't needed.
  @see https://unpkg.com#query-params
-->
<script type="module" src="//unpkg.com/lit-log/dist/esm/index.js?module"></script>

<lit-log
  open
  entry="first"
>
  <span slot="summary">Cool Logger</span>
</lit-log>
```

TODO add better log formats (Ideally it should be like `console.log`)
