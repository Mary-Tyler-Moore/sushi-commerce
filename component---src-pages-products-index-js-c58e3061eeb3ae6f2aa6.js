webpackJsonp([19643344707044],{74:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}t.__esModule=!0;var a=r(1),l=o(a),i=r(2),u=n(i),c=function(e){var t=e.price,r=e.className,n=void 0===r?"":r,o=(0,u.default)({textColor:"gray",textSize:"4"});return l.createElement("span",{className:o+" "+n},"$",t)};t.default=c,e.exports=t.default},265:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.query=void 0;var u=r(1),c=o(u),s=r(14),f=(n(s),r(2)),p=n(f),d=r(31),m=r(45),y=r(74),h=n(y),b=function(e){function t(){return a(this,t),l(this,e.apply(this,arguments))}return i(t,e),t.prototype.displayProducts=function(e){return e.map(function(e){var t=e.node,r=t.fields.slug,n=t.frontmatter,o=n.price,a=n.featuredImage,l=a.src,i=a.alt,u=n.title,s={minWidth:"200px"},f=(0,p.default)({column:["4-desktop","6-tablet","12-mobile"]}),y={marginBottom:"0 !important"};return c.createElement("div",{style:s,className:f,key:u},c.createElement(m.GridImage,{to:r,src:l,alt:i}),c.createElement(d.GridTitle,{title:u,to:r,style:y}),c.createElement(h.default,{price:o}))})},t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges,t={display:"flex",flexDirection:"column",alignItems:"center",width:"95vw",maxWidth:"1250px",margin:"auto",marginBottom:"200px"},r=(0,p.default)({raw:"title",textSize:"2"}),n={margin:"auto"},o=(0,p.default)({raw:"columns is-multiline",is:["mobile","centered"]});return c.createElement("div",{style:t},c.createElement("h1",{className:r},"Products"),c.createElement("section",{style:n,className:o},this.displayProducts(e)))},t}(c.Component);t.default=b;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-products-index-js-c58e3061eeb3ae6f2aa6.js.map