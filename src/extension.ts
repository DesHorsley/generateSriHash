'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
const sriToolbox = require('sri-toolbox');

export function activate(context: vscode.ExtensionContext) {
    console.log('Generate SRI HASH is active');

        let generateSriHash256 = vscode.commands.registerCommand('extension.generateSriHash256', () => {
            let editor = vscode.window.activeTextEditor;
            sriHash(editor, 'sha256');
        });

    let generateSriHash384= vscode.commands.registerCommand('extension.generateSriHash384', () => {
        let editor = vscode.window.activeTextEditor;
        sriHash(editor, 'sha384');
    });

    let generateSriHash512 = vscode.commands.registerCommand('extension.generateSriHash512', () => {
        let editor = vscode.window.activeTextEditor;
        sriHash(editor, 'sha512');
    });

    context.subscriptions.push(generateSriHash256);
    context.subscriptions.push(generateSriHash384);
    context.subscriptions.push(generateSriHash512);
}

export function generateHash(url:string, algorithm: string) {
    return sriToolbox.generate({
        algorithms: [algorithm]
    }, url);
}

export function generateScriptTag(url:string, algorithm: string) {
    const hash = generateHash(url, algorithm);
    return `<script src="${url}" integrity="${hash}" crossorigin="anonymous"></script>`;
}

function sriHash(editor: vscode.TextEditor | undefined, algorithm: string) {
    if (!editor) {
        vscode.window.showInformationMessage('Please select a valid url within a file.');
        return;
    }

    const selection = editor.selection;
    const url = editor.document.getText(selection)

    editor.edit(function(editor) {
        editor.replace(selection, generateScriptTag(url, algorithm));
    });
}

// this method is called when your extension is deactivated
export function deactivate() {
}