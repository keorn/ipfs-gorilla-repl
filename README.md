# IPFS Gorilla REPL Viewer

Gorilla is a rich REPL for Clojure in the notebook style. If you're interested you should take a look at its
[website](http://gorilla-repl.org).

This is a version of the viewer supports files on [IPFS](https://ipfs.io/) and is hosted on IPFS itself (see description on GitHub for the latest link).

## Instructions
[Original functionality](http://gorilla-repl.org/viewer.html) is still supported, but without initial `source=`, i.e.:
`\view.html?github&user=<user>&repo=<repo>&path=ws/graph-examples.clj`

To view files on IPFS the following can be appended to the viewer address:
`/view.html?path=<path>`, where `<path>` is a universal format, i.e.:
- IPFS: `/ipfs/<hash>/a/b/c`
- IPNS: `/ipns/<hash>/a/b/c` 

Direct URL viewing is also a new feature:
`\view.html?url=<clj-url>`

## Licence

Gorilla is licensed to you under the MIT licence. See LICENCE.txt for details.

Copyright © 2014- Jony Hudson and contributors
