or 
```javascript
import {Boxrec as boxrec} from "boxrec";
```

Use credentials to log into BoxRec and then use any of the [methods](https://github.com/boxing/boxrec#methods-how-to-use) below.
Pass the cookie into all methods.

example:

```javascript
try {
  const cookies = await boxrec.login(BOXREC_USERNAME, BOXREC_PASSWORD);
  // successfully logged in
} catch (e) {
  // error occurred logging in
}
```

## Methods

Please read the [documentation](https://boxrec-npm-docs.s3.us-east-2.amazonaws.com/master/classes/boxrec.html) on how to use these methods

`getBoutById`
`getBoxerPDF`
`getBoxerPrint`
`getChampions`
`getDate`