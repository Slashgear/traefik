# Entry Points Definition

## Reference

### TOML

```ini
defaultEntryPoints = ["http", "https"]

# ...
# ...

[entryPoints]
  [entryPoints.http]
    address = ":80"
    [entryPoints.http.compress]
    
    [entryPoints.http.clientIPStrategy]
      depth = 5
      excludedIPs = ["127.0.0.1/32", "192.168.1.7"]

    [entryPoints.http.whitelist]
      sourceRange = ["10.42.0.0/16", "152.89.1.33/32", "afed:be44::/16"]
      [entryPoints.http.whitelist.IPStrategy]
        depth = 5
        excludedIPs = ["127.0.0.1/32", "192.168.1.7"]
          
    [entryPoints.http.tls]
      minVersion = "VersionTLS12"
      cipherSuites = [
        "TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256",
        "TLS_RSA_WITH_AES_256_GCM_SHA384"
       ]
      [[entryPoints.http.tls.certificates]]
        certFile = "path/to/my.cert"
        keyFile = "path/to/my.key"
      [[entryPoints.http.tls.certificates]]
        certFile = "path/to/other.cert"
        keyFile = "path/to/other.key"
      # ...
      [entryPoints.http.tls.clientCA]
        files = ["path/to/ca1.crt", "path/to/ca2.crt"]
        optional = false

    [entryPoints.http.redirect]
      entryPoint = "https"
      regex = "^http://localhost/(.*)"
      replacement = "http://mydomain/$1"
      permanent = true

    [entryPoints.http.auth]
      headerField = "X-WebAuth-User"
      [entryPoints.http.auth.basic]
        removeHeader = true
        realm = "Your realm"
        users = [
          "test:$apr1$H6uskkkW$IgXLP6ewTrSuBkTrqE8wj/",
          "test2:$apr1$d9hr9HBB$4HxwgUir3HP4EsggP/QNo0",
        ]
        usersFile = "/path/to/.htpasswd"
      [entryPoints.http.auth.digest]
        removeHeader = true
        users = [
          "test:traefik:a2688e031edb4be6a3797f3882655c05",
          "test2:traefik:518845800f9e2bfb1f1f740ec24f074e",
        ]
        usersFile = "/path/to/.htdigest"
      [entryPoints.http.auth.forward]
        address = "https://authserver.com/auth"
        trustForwardHeader = true
        authResponseHeaders = ["X-Auth-User"]
        [entryPoints.http.auth.forward.tls]
          ca = "path/to/local.crt"
          caOptional = true
          cert = "path/to/foo.cert"
          key = "path/to/foo.key"
          insecureSkipVerify = true

    [entryPoints.http.proxyProtocol]
      insecure = true
      trustedIPs = ["10.10.10.1", "10.10.10.2"]

    [entryPoints.http.forwardedHeaders]
      trustedIPs = ["10.10.10.1", "10.10.10.2"]
      insecure = false

  [entryPoints.https]
    # ...
```

### CLI

For more information about the CLI, see the documentation about [Traefik command](/basics/#traefik).

```shell
--entryPoints='Name:http Address::80'
--entryPoints='Name:https Address::443 TLS'
```

::: tip
    Whitespace is used as option separator and `,` is used as value separator for the list.  
    The names of the options are case-insensitive.
:::

In compose file the entrypoint syntax is different:

```yaml
traefik:
    image: traefik
    command:
        - --defaultentrypoints=powpow
        - "--entryPoints=Name:powpow Address::42 Compress:true"
```
or
```yaml
traefik:
    image: traefik
    command: --defaultentrypoints=powpow --entryPoints='Name:powpow Address::42 Compress:true'
```

#### All available options:

```ini
Name:foo
Address::80
TLS:/my/path/foo.cert,/my/path/foo.key;/my/path/goo.cert,/my/path/goo.key;/my/path/hoo.cert,/my/path/hoo.key
TLS
TLS.MinVersion:VersionTLS11
TLS.CipherSuites:TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA384
TLS.SniStrict:true
TLS.DefaultCertificate.Cert:path/to/foo.cert
TLS.DefaultCertificate.Key:path/to/foo.key
CA:car
CA.Optional:true
Redirect.EntryPoint:https
Redirect.Regex:http://localhost/(.*)
Redirect.Replacement:http://mydomain/$1
Redirect.Permanent:true
Compress:true
WhiteList.SourceRange:10.42.0.0/16,152.89.1.33/32,afed:be44::/16
WhiteList.IPStrategy.depth:3
WhiteList.IPStrategy.ExcludedIPs:10.0.0.3/24,20.0.0.3/24
ProxyProtocol.TrustedIPs:192.168.0.1
ProxyProtocol.Insecure:true
ForwardedHeaders.TrustedIPs:10.0.0.3/24,20.0.0.3/24
Auth.Basic.Users:test:$apr1$H6uskkkW$IgXLP6ewTrSuBkTrqE8wj/,test2:$apr1$d9hr9HBB$4HxwgUir3HP4EsggP/QNo0
Auth.Basic.Removeheader:true
Auth.Basic.Realm:traefik
Auth.Digest.Users:test:traefik:a2688e031edb4be6a3797f3882655c05,test2:traefik:518845800f9e2bfb1f1f740ec24f074e
Auth.Digest.Removeheader:true
Auth.HeaderField:X-WebAuth-User
Auth.Forward.Address:https://authserver.com/auth
Auth.Forward.AuthResponseHeaders:X-Auth,X-Test,X-Secret
Auth.Forward.TrustForwardHeader:true
Auth.Forward.TLS.CA:path/to/local.crt
Auth.Forward.TLS.CAOptional:true
Auth.Forward.TLS.Cert:path/to/foo.cert
Auth.Forward.TLS.Key:path/to/foo.key
Auth.Forward.TLS.InsecureSkipVerify:true
```

## Basic

```ini
# Entrypoints definition
#
# Default:
# [entryPoints]
#   [entryPoints.http]
#   address = ":80"
#
[entryPoints]
  [entryPoints.http]
  address = ":80"
```

## Redirect HTTP to HTTPS

To redirect an http entrypoint to an https entrypoint (with SNI support).

```ini
[entryPoints]
  [entryPoints.http]
  address = ":80"
    [entryPoints.http.redirect]
    entryPoint = "https"
  [entryPoints.https]
  address = ":443"
    [entryPoints.https.tls]
      [[entryPoints.https.tls.certificates]]
      certFile = "integration/fixtures/https/snitest.com.cert"
      keyFile = "integration/fixtures/https/snitest.com.key"
      [[entryPoints.https.tls.certificates]]
      certFile = "integration/fixtures/https/snitest.org.cert"
      keyFile = "integration/fixtures/https/snitest.org.key"
```

::: tip
    Please note that `regex` and `replacement` do not have to be set in the `redirect` structure if an entrypoint is defined for the redirection (they will not be used in this case).
:::

## Rewriting URL

To redirect an entrypoint rewriting the URL.

```ini
[entryPoints]
  [entryPoints.http]
  address = ":80"
    [entryPoints.http.redirect]
    regex = "^http://localhost/(.*)"
    replacement = "http://mydomain/$1"
```

::: tip
    Please note that `regex` and `replacement` do not have to be set in the `redirect` structure if an `entrypoint` is defined for the redirection (they will not be used in this case).
:::

Care should be taken when defining replacement expand variables: `$1x` is equivalent to `${1x}`, not `${1}x` (see [Regexp.Expand](https://golang.org/pkg/regexp/#Regexp.Expand)), so use `${1}` syntax.

Regular expressions and replacements can be tested using online tools such as [Go Playground](https://play.golang.org/p/mWU9p-wk2ru) or the [Regex101](https://regex101.com/r/58sIgx/2).

## TLS

### Static Certificates

Define an entrypoint with SNI support.

```ini
[entryPoints]
  [entryPoints.https]
  address = ":443"
    [entryPoints.https.tls]
      [[entryPoints.https.tls.certificates]]
      certFile = "integration/fixtures/https/snitest.com.cert"
      keyFile = "integration/fixtures/https/snitest.com.key"
```

::: tip
    If an empty TLS configuration is provided, default self-signed certificates are generated.
:::

### Dynamic Certificates

If you need to add or remove TLS certificates while Traefik is started, Dynamic TLS certificates are supported using the [file provider](/configuration/backends/file).


## TLS Mutual Authentication

TLS Mutual Authentication can be `optional` or not.
If it's `optional`, Traefik will authorize connection with certificates not signed by a specified Certificate Authority (CA).
Otherwise, Traefik will only accept clients that present a certificate signed by a specified Certificate Authority (CA).
`ClientCA.files` can be configured with multiple `CA:s` in the same file or use multiple files containing one or several `CA:s`.
The `CA:s` has to be in PEM format.

By default, `ClientCA.files` is not optional, all clients will be required to present a valid cert.
The requirement will apply to all server certs in the entrypoint.

In the example below both `snitest.com` and `snitest.org` will require client certs

```ini
[entryPoints]
  [entryPoints.https]
  address = ":443"
  [entryPoints.https.tls]
    [entryPoints.https.tls.ClientCA]
    files = ["tests/clientca1.crt", "tests/clientca2.crt"]
    optional = false
    [[entryPoints.https.tls.certificates]]
    certFile = "integration/fixtures/https/snitest.com.cert"
    keyFile = "integration/fixtures/https/snitest.com.key"
    [[entryPoints.https.tls.certificates]]
    certFile = "integration/fixtures/https/snitest.org.cert"
    keyFile = "integration/fixtures/https/snitest.org.key"
```

## Authentication

### Basic Authentication

Passwords can be encoded in MD5, SHA1 and BCrypt: you can use `htpasswd` to generate them.

Users can be specified directly in the TOML file, or indirectly by referencing an external file;
 if both are provided, the two are merged, with external file contents having precedence.

```ini
# To enable basic auth on an entrypoint with 2 user/pass: test:test and test2:test2
[entryPoints]
  [entryPoints.http]
  address = ":80"
  [entryPoints.http.auth.basic]
  users = ["test:$apr1$H6uskkkW$IgXLP6ewTrSuBkTrqE8wj/", "test2:$apr1$d9hr9HBB$4HxwgUir3HP4EsggP/QNo0"]
  usersFile = "/path/to/.htpasswd"
```

Optionally, you can:

- customize the realm

```ini
[entryPoints]
  [entryPoints.http]
  address = ":80"
  [entryPoints.http.auth]
    [entryPoints.http.auth.basic]
    realm = "Your realm"
    users = ["test:$apr1$H6uskkkW$IgXLP6ewTrSuBkTrqE8wj/", "test2:$apr1$d9hr9HBB$4HxwgUir3HP4EsggP/QNo0"]
```

- pass authenticated user to application via headers

```ini
[entryPoints]
  [entryPoints.http]
  address = ":80"
  [entryPoints.http.auth]
    headerField = "X-WebAuth-User" # <-- header for the authenticated user
    [entryPoints.http.auth.basic]
    users = ["test:$apr1$H6uskkkW$IgXLP6ewTrSuBkTrqE8wj/", "test2:$apr1$d9hr9HBB$4HxwgUir3HP4EsggP/QNo0"]
```

- remove the Authorization header

```ini
[entryPoints]
  [entryPoints.http]
  address = ":80"
  [entryPoints.http.auth]
    [entryPoints.http.auth.basic]
    removeHeader = true # <-- remove the Authorization header
    users = ["test:$apr1$H6uskkkW$IgXLP6ewTrSuBkTrqE8wj/", "test2:$apr1$d9hr9HBB$4HxwgUir3HP4EsggP/QNo0"]
```

### Digest Authentication

You can use `htdigest` to generate them.

Users can be specified directly in the TOML file, or indirectly by referencing an external file;
 if both are provided, the two are merged, with external file contents having precedence

```ini
# To enable digest auth on an entrypoint with 2 user/realm/pass: test:traefik:test and test2:traefik:test2
[entryPoints]
  [entryPoints.http]
  address = ":80"
  [entryPoints.http.auth.digest]
  users = ["test:traefik:a2688e031edb4be6a3797f3882655c05", "test2:traefik:518845800f9e2bfb1f1f740ec24f074e"]
  usersFile = "/path/to/.htdigest"
```

Optionally, you can!

- pass authenticated user to application via headers.

```ini
[entryPoints]
  [entryPoints.http]
  address = ":80"
  [entryPoints.http.auth]
    headerField = "X-WebAuth-User" # <-- header for the authenticated user
    [entryPoints.http.auth.digest]
    users = ["test:traefik:a2688e031edb4be6a3797f3882655c05", "test2:traefik:518845800f9e2bfb1f1f740ec24f074e"]
```

- remove the Authorization header.

```ini
[entryPoints]
  [entryPoints.http]
  address = ":80"
  [entryPoints.http.auth]
    [entryPoints.http.auth.digest]
    removeHeader = true # <-- remove the Authorization header
    users = ["test:traefik:a2688e031edb4be6a3797f3882655c05", "test2:traefik:518845800f9e2bfb1f1f740ec24f074e"]
```

### Forward Authentication

This configuration will first forward the request to `http://authserver.com/auth`.

If the response code is 2XX, access is granted and the original request is performed.
Otherwise, the response from the authentication server is returned.

```ini
[entryPoints]
  [entryPoints.http]
    # ...
    # To enable forward auth on an entrypoint
    [entryPoints.http.auth.forward]
    address = "https://authserver.com/auth"

    # Trust existing X-Forwarded-* headers.
    # Useful with another reverse proxy in front of Traefik.
    #
    # Optional
    # Default: false
    #
    trustForwardHeader = true

    # Copy headers from the authentication server to the request.
    #
    # Optional
    #
    authResponseHeaders = ["X-Auth-User", "X-Secret"]

      # Enable forward auth TLS connection.
      #
      # Optional
      #
      [entryPoints.http.auth.forward.tls]
      ca = "path/to/local.crt"
      caOptional = true
      cert = "path/to/foo.cert"
      key = "path/to/foo.key"
```

## Specify Minimum TLS Version

To specify an https entry point with a minimum TLS version, and specifying an array of cipher suites (from [crypto/tls](https://godoc.org/crypto/tls#pkg-constants)).

```ini
[entryPoints]
  [entryPoints.https]
  address = ":443"
    [entryPoints.https.tls]
    minVersion = "VersionTLS12"
    cipherSuites = [
      "TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256",
      "TLS_RSA_WITH_AES_256_GCM_SHA384"
    ]
      [[entryPoints.https.tls.certificates]]
      certFile = "integration/fixtures/https/snitest.com.cert"
      keyFile = "integration/fixtures/https/snitest.com.key"
      [[entryPoints.https.tls.certificates]]
      certFile = "integration/fixtures/https/snitest.org.cert"
      keyFile = "integration/fixtures/https/snitest.org.key"
```

## Strict SNI Checking

To enable strict SNI checking, so that connections cannot be made if a matching certificate does not exist.

```ini
[entryPoints]
  [entryPoints.https]
  address = ":443"
    [entryPoints.https.tls]
    sniStrict = true
      [[entryPoints.https.tls.certificates]]
      certFile = "integration/fixtures/https/snitest.com.cert"
      keyFile = "integration/fixtures/https/snitest.com.key"
```

## Default Certificate

To enable a default certificate to serve, so that connections without SNI or without a matching domain will be served this certificate.

```ini
[entryPoints]
  [entryPoints.https]
  address = ":443"
    [entryPoints.https.tls]
    [entryPoints.https.tls.defaultCertificate]
      certFile = "integration/fixtures/https/snitest.com.cert"
      keyFile = "integration/fixtures/https/snitest.com.key"
```

::: tip
    There can only be one `defaultCertificate` set per entrypoint.
    Use a single set of square brackets `[ ]`, instead of the two needed for normal certificates.
    If no default certificate is provided, a self-signed certificate will be generated by Traefik, and used instead.
:::

## Compression

To enable compression support using gzip format.

```ini
[entryPoints]
  [entryPoints.http]
  address = ":80"
  [entryPoints.http.compress]
```

Responses are compressed when:

* The response body is larger than `512` bytes
* And the `Accept-Encoding` request header contains `gzip`
* And the response is not already compressed, i.e. the `Content-Encoding` response header is not already set.

## White Listing

Traefik supports whitelisting to accept or refuse requests based on the client IP.

The following example enables IP white listing and accepts requests from client IPs defined in `sourceRange`.

```ini
[entryPoints]
  [entryPoints.http]
    address = ":80"

    [entryPoints.http.whiteList]
      sourceRange = ["127.0.0.1/32", "192.168.1.7"]
      # [entryPoints.http.whiteList.IPStrategy]
      # Override the clientIPStrategy
```

By default, Traefik uses the client IP (see [ClientIPStrategy](/configuration/entrypoints/#clientipstrategy)) for the whitelisting.

If you want to use another IP than the one determined by `ClientIPStrategy` for the whitelisting, you can define the `IPStrategy` option:

```ini
[entryPoints]
  [entryPoints.http.clientIPStrategy]
    depth = 4
  [entryPoints.http]
    address = ":80"

    [entryPoints.http.whiteList]
      sourceRange = ["127.0.0.1/32", "192.168.1.7"]
      [entryPoints.http.whiteList.IPStrategy]
      depth = 2
```

In the above example, if the value of the `X-Forwarded-For` header was `"10.0.0.1,11.0.0.1,12.0.0.1,13.0.0.1"` then the client IP would be `"10.0.0.1"` (`clientIPStrategy.depth=4`) but the IP used for the whitelisting would be `"12.0.0.1"` (`whitelist.IPStrategy.depth=2`).

## ClientIPStrategy

The `clientIPStrategy` defines how you want Traefik to determine the client IP (used for whitelisting for example).

There are several option available:

### Depth

This option uses the `X-Forwarded-For` header and takes the IP located at the `depth` position (starting from the right).
```ini
[entryPoints]
  [entryPoints.http]
    address = ":80"

    [entryPoints.http.clientIPStrategy]
```
 
```ini
[entryPoints]
  [entryPoints.http]
    address = ":80"

    [entryPoints.http.clientIPStrategy]
      depth = 5
```

::: tip
    - If `depth` is greater than the total number of IPs in `X-Forwarded-For`, then clientIP will be empty.
    - If `depth` is lesser than or equal to 0, then the option is ignored.
:::

Examples:
  
| `X-Forwarded-For`                       | `depth` | clientIP     |
|-----------------------------------------|---------|--------------|
| `"10.0.0.1,11.0.0.1,12.0.0.1,13.0.0.1"` | `1`     | `"13.0.0.1"` |
| `"10.0.0.1,11.0.0.1,12.0.0.1,13.0.0.1"` | `3`     | `"11.0.0.1"` |
| `"10.0.0.1,11.0.0.1,12.0.0.1,13.0.0.1"` | `5`     | `""`         |
  
### Excluded IPs

Traefik will scan the `X-Forwarded-For` header (from the right) and pick the first IP not in the `excludedIPs` list.

```ini
[entryPoints]
  [entryPoints.http]
    address = ":80"

    [entryPoints.http.clientIPStrategy]
      excludedIPs = ["127.0.0.1/32", "192.168.1.7"]
```

::: tip
    If `depth` is specified, `excludedIPs` is ignored.
:::

Examples:

| `X-Forwarded-For`                       | `excludedIPs`         | clientIP     |
|-----------------------------------------|-----------------------|--------------|
| `"10.0.0.1,11.0.0.1,12.0.0.1,13.0.0.1"` | `"12.0.0.1,13.0.0.1"` | `"11.0.0.1"` |
| `"10.0.0.1,11.0.0.1,12.0.0.1,13.0.0.1"` | `"15.0.0.1,13.0.0.1"` | `"12.0.0.1"` |
| `"10.0.0.1,11.0.0.1,12.0.0.1,13.0.0.1"` | `"10.0.0.1,13.0.0.1"` | `"12.0.0.1"` |
| `"10.0.0.1,11.0.0.1,12.0.0.1,13.0.0.1"` | `"15.0.0.1,16.0.0.1"` | `"13.0.0.1"` |
| `"10.0.0.1,11.0.0.1"`                   | `"10.0.0.1,11.0.0.1"` | `""`         |

### Default

If there are no `depth` or `excludedIPs`, then the client IP is the IP of the computer that initiated the connection with the Traefik server (the remote address).

## ProxyProtocol

To enable [ProxyProtocol](https://www.haproxy.org/download/1.8/doc/proxy-protocol.txt) support.
Only IPs in `trustedIPs` will lead to remote client address replacement: you should declare your load-balancer IP or CIDR range here (in testing environment, you can trust everyone using `insecure = true`).

!!! danger
    When queuing Traefik behind another load-balancer, be sure to carefully configure Proxy Protocol on both sides.
    Otherwise, it could introduce a security risk in your system by forging requests.

```ini
[entryPoints]
  [entryPoints.http]
    address = ":80"

    # Enable ProxyProtocol
    [entryPoints.http.proxyProtocol]
      # List of trusted IPs
      #
      # Required
      # Default: []
      #
      trustedIPs = ["127.0.0.1/32", "192.168.1.7"]

      # Insecure mode FOR TESTING ENVIRONNEMENT ONLY
      #
      # Optional
      # Default: false
      #
      # insecure = true
```

## Forwarded Header

Only IPs in `trustedIPs` will be authorized to trust the client forwarded headers (`X-Forwarded-*`).

```ini
[entryPoints]
  [entryPoints.http]
    address = ":80"

    # Enable Forwarded Headers
    [entryPoints.http.forwardedHeaders]
      # List of trusted IPs
      #
      # Required
      # Default: []
      #
      trustedIPs = ["127.0.0.1/32", "192.168.1.7"]
      
      # Insecure mode
      #
      # Optional
      # Default: false
      #
      # insecure = true

```
