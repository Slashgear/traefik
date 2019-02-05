(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{170:function(t,e,n){"use strict";n.r(e);var a=n(0),s=Object(a.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),n("p",[t._v("You have two options:")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._v(" "),n("p",[t._v("If you do not want to or cannot expose the health-check on a regular entry point - e.g. your security rules do not allow it, or you have a conflicting path - then you can enable health-check on its own entry point.\nUse the following configuration:")]),t._v(" "),t._m(15),t._m(16),t._v(" "),n("p",[t._v("In the above example, you would access a regular path and health-check as follows:")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),n("p",[t._v("If you are running traefik behind a external Load-balancer, and want to configure rotation health check on the Load-balancer to take a traefik instance out of rotation gracefully, you can configure "),n("router-link",{attrs:{to:"/configuration/commons.html#life-cycle"}},[t._v("lifecycle.requestAcceptGraceTimeout")]),t._v(" and the ping endpoint will return "),n("code",[t._v("503")]),t._v(" response on traefik server termination, so that the Load-balancer can take the terminating traefik instance out of rotation, before it stops responding.")],1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"ping-definition"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ping-definition","aria-hidden":"true"}},[this._v("#")]),this._v(" Ping Definition")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language-ini extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ini"}},[n("code",[t._v("# Ping definition\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[ping]")]),t._v('\n  # Name of the related entry point\n  #\n  # Optional\n  # Default: "traefik"\n  #\n'),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("  entryPoint")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(' "traefik"')]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("Path")]),t._v(" "),n("th",[t._v("Method")]),t._v(" "),n("th",[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("code",[t._v("/ping")])]),t._v(" "),n("td",[n("code",[t._v("GET")]),t._v(", "),n("code",[t._v("HEAD")])]),t._v(" "),n("td",[t._v("A simple endpoint to check for Traefik process liveness. Return a code "),n("code",[t._v("200")]),t._v(" with the content: "),n("code",[t._v("OK")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("!!! warning\nEven if you have authentication configured on entry point, the "),e("code",[this._v("/ping")]),this._v(" path of the api is excluded from authentication.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("The "),n("code",[t._v("/ping")]),t._v(" health-check URL is enabled with the command-line "),n("code",[t._v("--ping")]),t._v(" or config file option "),n("code",[t._v("[ping]")]),t._v(".\nThus, if you have a regular path for "),n("code",[t._v("/foo")]),t._v(" and an entrypoint on "),n("code",[t._v(":80")]),t._v(", you would access them as follows:")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("Regular path: "),n("code",[t._v("http://hostname:80/foo")])]),t._v(" "),n("li",[t._v("Admin panel: "),n("code",[t._v("http://hostname:8080/")])]),t._v(" "),n("li",[t._v("Ping URL: "),n("code",[t._v("http://hostname:8080/ping")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("However, for security reasons, you may want to be able to expose the "),e("code",[this._v("/ping")]),this._v(" health-check URL to outside health-checkers, e.g. an Internet service or cloud load-balancer, "),e("em",[this._v("without")]),this._v(" exposing your dashboard's port.\nIn many environments, the security staff may not "),e("em",[this._v("allow")]),this._v(" you to expose it.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Enable "),e("code",[this._v("/ping")]),this._v(" on a regular entry point")]),this._v(" "),e("li",[this._v("Enable "),e("code",[this._v("/ping")]),this._v(" on a dedicated port")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"ping-health-check-on-a-regular-entry-point"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ping-health-check-on-a-regular-entry-point","aria-hidden":"true"}},[this._v("#")]),this._v(" Ping health check on a regular entry point")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To proxy "),e("code",[this._v("/ping")]),this._v(" from a regular entry point to the administration one without exposing the dashboard, do the following:")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language-ini extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ini"}},[n("code",[n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("defaultEntryPoints")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(' ["http"]')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[entryPoints]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("  [entryPoints.http]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("  address")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(' ":80"')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[ping]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("entryPoint")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(' "http"')]),t._v("\n\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The above link "),e("code",[this._v("ping")]),this._v(" on the "),e("code",[this._v("http")]),this._v(" entry point and then expose it on port "),e("code",[this._v("80")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"enable-ping-health-check-on-dedicated-port"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#enable-ping-health-check-on-dedicated-port","aria-hidden":"true"}},[this._v("#")]),this._v(" Enable ping health check on dedicated port")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language-ini extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ini"}},[n("code",[n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("defaultEntryPoints")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(' ["http"]')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[entryPoints]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("  [entryPoints.http]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("  address")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(' ":80"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("  [entryPoints.ping]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("  address")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(' ":8082"')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[ping]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("entryPoint")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(' "ping"')]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The above is similar to the previous example, but instead of enabling "),e("code",[this._v("/ping")]),this._v(" on the "),e("em",[this._v("default")]),this._v(" entry point, we enable it on a "),e("em",[this._v("dedicated")]),this._v(" entry point.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Regular path: "),e("code",[this._v("http://hostname:80/foo")])]),this._v(" "),e("li",[this._v("Ping URL: "),e("code",[this._v("http://hostname:8082/ping")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Note the dedicated port "),e("code",[this._v(":8082")]),this._v(" for "),e("code",[this._v("/ping")]),this._v(".")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("In the above example, it is "),n("em",[t._v("very")]),t._v(" important to create a named dedicated entry point, and do "),n("strong",[t._v("not")]),t._v(" include it in "),n("code",[t._v("defaultEntryPoints")]),t._v(".\nOtherwise, you are likely to expose "),n("em",[t._v("all")]),t._v(" services via this entry point.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"using-ping-for-external-load-balancer-rotation-health-check"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-ping-for-external-load-balancer-rotation-health-check","aria-hidden":"true"}},[this._v("#")]),this._v(" Using ping for external Load-balancer rotation health check")])}],!1,null,null,null);e.default=s.exports}}]);