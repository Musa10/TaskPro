import * as vscode from 'vscode';
import axios from 'axios';

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('taskpro.showTasks', async () => {
    try {
      const response = await axios.get('http://localhost:3000/tasks');
      const tasks = response.data;
      vscode.window.showQuickPick(tasks.map((t: any) => `${t.done ? '✅' : '❌'} ${t.title}`), {
        placeHolder: 'Your Tasks',
      });
    } catch (err) {
      vscode.window.showErrorMessage('Failed to load tasks.');
    }
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
