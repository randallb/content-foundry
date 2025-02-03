Content Foundry authentication is designed exclusively to facilitate the entry
of blog posts and update of brand book.

## Goals

1. Secure enough to use for a backend editor
2. Passwordless
3. Works the first time / every time.
4. Users should only be able to be created with a secure link generated from a
   bff command
5. There should be a single organization with each users added to the same org.

## Anti goals

1. Forgot password
2. Extensibility
3. multi organizational use


## Design
[BfPerson](/packages/bfDb/models/BfPerson.ts) should have a [BfPersonCredential](tbd) which implements [simplewebauthn's data structures](https://simplewebauthn.dev/docs/packages/server#additional-data-structures).

