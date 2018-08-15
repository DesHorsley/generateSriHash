# Generate SRI HASH

## Features
Takes a url to a .js or .css file and replaces it with a script tag including hash.

Example:  
`https://code.jquery.com/jquery-3.3.1.min.js`  
will become
```html 
<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
  ```  

To run the extension:
1. Select the url
1. Open the command palette (`Ctrl + ⇧Shift + P` windows, `⇧⌘P` mac) then start to type `Generate`
1. You will see options for **SHA-256**, **SHA-384**, or **SHA-512**. Select one of them
1. After a few seconds the url will be replaced inline with the script tag

The extension will fetch the file, then produce a hash of its contents. The time it takes to generate the hash will depend on your available bandwidth and the size of the target file. 

![Imgur](https://i.imgur.com/GJCRux0.gif)

This extension is based on the code running at https://www.srihash.org/