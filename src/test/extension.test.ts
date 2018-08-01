//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';
import { generateHash, generateScriptTag }  from '../extension';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
// import * as vscode from 'vscode';
// import * as myExtension from '../extension';

// Defines a Mocha test suite to group tests of similar kind together
suite("Extension Tests", function () {

    // Defines a Mocha unit test
    test("SHA256 Hashing with empty string", function() {
        assert.equal(generateHash(``, 'sha256'),'sha256-47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=');
    });test("SHA384 Hashing with empty string", function() {
        assert.equal(generateHash(``, 'sha384'),'sha384-OLBgp1GsljhM2TJ+sbHjaiH9txEUvgdDTAzHv2P24donTt6/529l+9Ua0vFImLlb');
    });
    test("SHA512 Hashing with empty string", function() {
        assert.equal(generateHash(``, 'sha512'),'sha512-z4PhNX7vuL3xVChQ1m2AB9Yg5AULVxXcg/SpIdNs6c5H0NE8XYXysP+DGNKHfuwvY7kxvUdBeoGlODJ6+SfaPg==');
     });

     test("generateScriptTag with empty string", function() {
         assert.equal(generateScriptTag('', 'sha512'), `<script src="" integrity="sha512-z4PhNX7vuL3xVChQ1m2AB9Yg5AULVxXcg/SpIdNs6c5H0NE8XYXysP+DGNKHfuwvY7kxvUdBeoGlODJ6+SfaPg==" crossorigin="anonymous"></script>`);
     });
});
