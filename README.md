# Do Next Task - Obsidian Plugin

A simple Obsidian plugin that helps you complete tasks one by one with automatic timestamps.

## Features

- Click a ribbon icon to mark the first uncompleted task in the current note
- Automatically adds completion time in `HH:MM` format
- Preserves cursor position and scroll location
- Works with both `- [ ]` and `* [ ]` task formats
- Supports tasks with any level of indentation

## Usage

1. Open a note with task lists
2. Click the check-circle icon in the left ribbon, or
3. Use the command palette (Ctrl/Cmd + P) and search for "Mark Next Task"

### Example

Before:
```markdown
- [ ] First task
- [ ] Second task
- [ ] Third task
```

After clicking the button:
```markdown
- [x] 14:30 First task
- [ ] Second task
- [ ] Third task
```

## Installation

### Manual Installation

1. Download `main.js` and `manifest.json` from the latest release
2. Create a folder `VaultFolder/.obsidian/plugins/donext/`
3. Copy the downloaded files into this folder
4. Reload Obsidian
5. Enable "Do Next Task" in Settings → Community Plugins

### Development

1. Clone this repo into `.obsidian/plugins/donext/`
2. Run `npm i` to install dependencies
3. Run `npm run dev` to start compilation in watch mode
4. Reload Obsidian and enable the plugin

## Commands

- **Mark Next Task**: Finds and marks the first uncompleted task with current time

## License

MIT
