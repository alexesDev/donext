import { Notice, Plugin, MarkdownView } from 'obsidian';

export default class DoNextTaskPlugin extends Plugin {
	async onload() {
		// Add ribbon icon for marking next task
		this.addRibbonIcon('check-circle', 'Mark Next Task', async () => {
			await this.markNextTask();
		});

		// Add command for marking next task
		this.addCommand({
			id: 'mark-next-task',
			name: 'Mark Next Task',
			callback: async () => {
				await this.markNextTask();
			}
		});
	}

	async markNextTask() {
		const activeView = this.app.workspace.getActiveViewOfType(MarkdownView);

		if (!activeView) {
			new Notice('No active note');
			return;
		}

		const editor = activeView.editor;
		const lineCount = editor.lineCount();

		// Find first unchecked task
		let taskLineIndex = -1;
		const taskRegex = /^(\s*[-*]\s+\[)\s(\].*)/;

		for (let i = 0; i < lineCount; i++) {
			const line = editor.getLine(i);
			if (taskRegex.test(line)) {
				taskLineIndex = i;
				break;
			}
		}

		if (taskLineIndex === -1) {
			new Notice('No uncompleted tasks found');
			return;
		}

		// Get current time in HH:MM format
		const now = new Date();
		const hours = String(now.getHours()).padStart(2, '0');
		const minutes = String(now.getMinutes()).padStart(2, '0');
		const timeString = `${hours}:${minutes}`;

		// Replace the task line using replaceRange to preserve cursor position
		const oldLine = editor.getLine(taskLineIndex);
		const match = oldLine.match(taskRegex);

		if (match) {
			const newLine = `${match[1]}x] ${timeString}${match[2].substring(1)}`;

			// Replace only the specific line
			editor.replaceRange(
				newLine,
				{ line: taskLineIndex, ch: 0 },
				{ line: taskLineIndex, ch: oldLine.length }
			);

			new Notice('Task marked as completed');
		}
	}

	onunload() {
		// Cleanup if needed
	}
}
