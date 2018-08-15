/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import * as vscode from 'vscode';
const helpers = require('./helpers.js');

export function activate(context: vscode.ExtensionContext) {
    console.log('Generate SRI HASH is active');

    let generateSriHash256 = vscode.commands.registerCommand('extension.generateSriHash256', () => {
        let editor = vscode.window.activeTextEditor;
        sriHash(editor, 'sha256');
    });

    let generateSriHash384= vscode.commands.registerCommand('extension.generateSriHash384', () => {
        let editor = vscode.window.activeTextEditor;
        return sriHash(editor, 'sha384');
    });

    let generateSriHash512 = vscode.commands.registerCommand('extension.generateSriHash512', () => {
        let editor = vscode.window.activeTextEditor;
        sriHash(editor, 'sha512');
    });

    context.subscriptions.push(generateSriHash256);
    context.subscriptions.push(generateSriHash384);
    context.subscriptions.push(generateSriHash512);
}

function sriHash(editor: vscode.TextEditor | undefined, algorithm: string) {
    if (!editor) {
        vscode.window.showInformationMessage('Please select a valid url within a file.');
        return;
    }

    vscode.window.showInformationMessage('Generating SRI Hash, one moment...');

    let selection = editor.selection;
    const url = editor.document.getText(selection);

    helpers.generateElement(url, algorithm, (result:any ) => {
        editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }

        let selection = editor.selection;

        editor.edit(function(editor) {
            editor.replace(selection, result);
        });
        }
      );

}

// this method is called when your extension is deactivated
export function deactivate() {
    console.log('Generate SRI HASH is deactivated');
}