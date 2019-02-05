(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{201:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("This section explains how to use Traefik as reverse proxy for gRPC application.")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("At last, we configure our Traefik instance to use both self-signed certificates.")]),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("This section explains how to use Traefik as reverse proxy for gRPC application with self-signed certificates.")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("In order to secure the gRPC server, we generate a self-signed certificate for backend url:")]),t._v(" "),t._m(10),a("p",[t._v("That will prompt for information, the important answer is:")]),t._v(" "),t._m(11),t._m(12),t._v(" "),a("p",[t._v("Generate your self-signed certificate for frontend url:")]),t._v(" "),t._m(13),a("p",[t._v("with")]),t._v(" "),t._m(14),t._m(15),t._v(" "),a("p",[t._v("At last, we configure our Traefik instance to use both self-signed certificates.")]),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._v(" "),a("p",[t._v("We use the gRPC greeter example in "),a("a",{attrs:{href:"https://github.com/grpc/grpc-go/tree/master/examples/helloworld",target:"_blank",rel:"noopener noreferrer"}},[t._v("grpc-go"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("!!! warning\nIn order to use this gRPC example, we need to modify it to use HTTPS")]),t._v(" "),a("p",[t._v('So we modify the "gRPC server example" to use our own self-signed certificate:')]),t._v(" "),t._m(19),a("p",[t._v("Next we will modify gRPC Client to use our Traefik self-signed certificate:")]),t._v(" "),t._m(20)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"grpc-examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grpc-examples","aria-hidden":"true"}},[this._v("#")]),this._v(" gRPC examples")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"with-http-h2c"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#with-http-h2c","aria-hidden":"true"}},[this._v("#")]),this._v(" With HTTP (h2c)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"traefik-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#traefik-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Traefik configuration")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ini extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("defaultEntryPoints")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(' ["https"]')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[entryPoints]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("  [entryPoints.http]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("  address")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(' ":80"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("    [entryPoints.http]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[api]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[file]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[backends]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("  [backends.backend1]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("    [backends.backend1.servers.server1]")]),t._v("\n    # Access on backend with h2c\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("    url")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(' "h2c://backend.local:8080"')]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[frontends]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("  [frontends.frontend1]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("  backend")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(' "backend1"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("    [frontends.frontend1.routes.test_1]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("    rule")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(' "Host:frontend.local"')]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("!!! warning\nFor provider with label, you will have to specify the "),s("code",[this._v("traefik.protocol=h2c")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"conclusion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[this._v("#")]),this._v(" Conclusion")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("We don't need specific configuration to use gRPC in Traefik, we just need to use "),s("code",[this._v("h2c")]),this._v(" protocol, or use HTTPS communications to have HTTP2 with the backend.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"with-https"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#with-https","aria-hidden":"true"}},[this._v("#")]),this._v(" With HTTPS")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"/img/grpc.svg",alt:"gRPC architecture"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"grpc-server-certificate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grpc-server-certificate","aria-hidden":"true"}},[this._v("#")]),this._v(" gRPC Server certificate")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./backend.key -out ./backend.cert\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("Common Name (e.g. server FQDN or YOUR name) []: backend.local\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"grpc-client-certificate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grpc-client-certificate","aria-hidden":"true"}},[this._v("#")]),this._v(" gRPC Client certificate")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./frontend.key -out ./frontend.cert\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("Common Name (e.g. server FQDN or YOUR name) []: frontend.local\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"traefik-configuration-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#traefik-configuration-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Traefik configuration")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ini extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("defaultEntryPoints")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(' ["https"]')]),t._v("\n\n# For secure connection on backend.local\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("rootCAs")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(' [ "./backend.cert" ]')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[entryPoints]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("  [entryPoints.https]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("  address")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(' ":4443"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("    [entryPoints.https.tls]")]),t._v("\n     # For secure connection on frontend.local\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("     [[entryPoints.https.tls.certificates]")]),t._v("]\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("     certFile")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(' "./frontend.cert"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("     keyFile")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(' "./frontend.key"')]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[api]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[file]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[backends]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("  [backends.backend1]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("    [backends.backend1.servers.server1]")]),t._v("\n    # Access on backend with HTTPS\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("    url")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(' "https://backend.local:8080"')]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[frontends]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("  [frontends.frontend1]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("  backend")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(' "backend1"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("    [frontends.frontend1.routes.test_1]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("    rule")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(' "Host:frontend.local"')]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("!!! warning\nWith some backends, the server URLs use the IP, so you may need to configure "),s("code",[this._v("insecureSkipVerify")]),this._v(" instead of the "),s("code",[this._v("rootCAS")]),this._v(" to activate HTTPS without hostname verification.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"a-grpc-example-in-go-modify-for-https"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a-grpc-example-in-go-modify-for-https","aria-hidden":"true"}},[this._v("#")]),this._v(" A gRPC example in go (modify for https)")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Read cert and key file")]),t._v("\nBackendCert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" ioutil"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ReadFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./backend.cert"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nBackendKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" ioutil"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ReadFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./backend.key"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Generate Certificate struct")]),t._v("\ncert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" tls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("X509KeyPair")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BackendCert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" BackendKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fatalf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"failed to parse certificate: %v"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create credentials")]),t._v("\ncreds "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" credentials"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewServerTLSFromCert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("cert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Use Credentials in gRPC server options")]),t._v("\nserverOption "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" grpc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Creds")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("creds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("grpc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Server "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" grpc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("serverOption"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defer")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Stop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\npb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("RegisterGreeterServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nerr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Serve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Read cert file")]),t._v("\nFrontendCert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" ioutil"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ReadFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./frontend.cert"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create CertPool")]),t._v("\nroots "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" x509"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewCertPool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nroots"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AppendCertsFromPEM")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FrontendCert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create credentials")]),t._v("\ncredsClient "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" credentials"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewClientTLSFromCert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("roots"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Dial with specific Transport (with credentials)")]),t._v("\nconn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" grpc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Dial")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"frontend.local:4443"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" grpc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithTransportCredentials")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("credsClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fatalf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"did not connect: %v"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defer")]),t._v(" conn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Close")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nclient "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" pb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewGreeterClient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("conn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nname "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"World"')]),t._v("\nr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SayHello")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("pb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HelloRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n")])])])}],!1,null,null,null);s.default=n.exports}}]);