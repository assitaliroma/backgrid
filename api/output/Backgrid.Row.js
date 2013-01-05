Ext.data.JsonP.Backgrid_Row({
  "tagname": "class",
  "name": "Backgrid.Row",
  "extends": "Backbone.View",
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "aliases": {
  },
  "singleton": false,
  "requires": [

  ],
  "uses": [

  ],
  "enum": null,
  "override": null,
  "inheritable": null,
  "inheritdoc": null,
  "meta": {
  },
  "private": null,
  "id": "class-Backgrid.Row",
  "members": {
    "cfg": [

    ],
    "property": [
      {
        "name": "tagName",
        "tagname": "property",
        "owner": "Backgrid.Row",
        "meta": {
        },
        "id": "property-tagName"
      }
    ],
    "method": [
      {
        "name": "initialize",
        "tagname": "method",
        "owner": "Backgrid.Row",
        "meta": {
        },
        "id": "method-initialize"
      },
      {
        "name": "render",
        "tagname": "method",
        "owner": "Backgrid.Row",
        "meta": {
          "chainable": true
        },
        "id": "method-render"
      },
      {
        "name": "renderColumn",
        "tagname": "method",
        "owner": "Backgrid.Row",
        "meta": {
        },
        "id": "method-renderColumn"
      }
    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "linenr": 9,
  "files": [
    {
      "filename": "row.js",
      "href": null
    }
  ],
  "html_meta": {
  },
  "statics": {
    "cfg": [

    ],
    "property": [

    ],
    "method": [

    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "component": false,
  "superclasses": [
    "Backbone.View"
  ],
  "subclasses": [
    "Backgrid.HeaderRow"
  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ],
  "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Backbone.View<div class='subclass '><strong>Backgrid.Row</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Backgrid.HeaderRow' rel='Backgrid.HeaderRow' class='docClass'>Backgrid.HeaderRow</a></div></pre><div class='doc-contents'><p>Row is a simple container view that takes a model instance and a list of\ncolumn metadata describing how each of the model's attribute is to be\nrendered, and apply the appropriate cell to each attribute.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-tagName' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Row'>Backgrid.Row</span><br/></div><a href='#!/api/Backgrid.Row-property-tagName' class='name expandable'>tagName</a><span> : String</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;tr&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-initialize' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Row'>Backgrid.Row</span><br/></div><a href='#!/api/Backgrid.Row-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>options</span> )</div><div class='description'><div class='short'>Initializes a row view instance. ...</div><div class='long'><p>Initializes a row view instance.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n<ul><li><span class='pre'>columns</span> : Backbone.Collection.&lt;<a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a>&gt;|Array.&lt;<a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a>&gt;|Array.&lt;Object&gt;<div class='sub-desc'><p>Column metadata.</p>\n</div></li><li><span class='pre'>model</span> : Backbone.Model<div class='sub-desc'><p>The model instance to render.</p>\n</div></li></ul></div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>TypeError</span><div class='sub-desc'><p>If options.columns or options.model is undefined.</p>\n</div></li></ul></div></div></div><div id='method-render' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Row'>Backgrid.Row</span><br/></div><a href='#!/api/Backgrid.Row-method-render' class='name expandable'>render</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.Row\" rel=\"Backgrid.Row\" class=\"docClass\">Backgrid.Row</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Renders a row of cells for this row's model. ...</div><div class='long'><p>Renders a row of cells for this row's model.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.Row\" rel=\"Backgrid.Row\" class=\"docClass\">Backgrid.Row</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-renderColumn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Row'>Backgrid.Row</span><br/></div><a href='#!/api/Backgrid.Row-method-renderColumn' class='name expandable'>renderColumn</a>( <span class='pre'>column, renderable</span> )</div><div class='description'><div class='short'>Backbone event handler. ...</div><div class='long'><p>Backbone event handler. Insert a table cell to the right column in the row\nif renderable is true, detach otherwise.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>column</span> : <a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a><div class='sub-desc'>\n</div></li><li><span class='pre'>renderable</span> : boolean<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"
});