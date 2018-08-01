'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
const sriToolbox = require('sri-toolbox');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "myfirstextension" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.generateSriHash', () => {
        // TODO: add algorithms and checks
        // The code you place here will be executed every time your command is executed

        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showInformationMessage('Please select a valid url to hash https://www.srihash.org');
            return; // No open text editor
        }

        let selection = editor.selection;
        let text = editor.document.getText(selection);

        sriHash(editor, editor.document, selection);
    });

    context.subscriptions.push(disposable);
}

function sriHash(editor: vscode.TextEditor, document: vscode.TextDocument, selection: vscode.Selection) {
    const uri = editor.document.getText(selection)
    var integrity = sriToolbox.generate({
        algorithms: ["sha384"] // TODO: Make an option for the accepted algorithms
    }, uri);

    editor.edit(function(editor) {
        editor.replace(selection, `<script src="${uri}" integrity="${integrity}" crossorigin="anonymous"></script>`);
    });
}

// this method is called when your extension is deactivated
export function deactivate() {
}