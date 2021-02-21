# Solando theme

This is my custom theme piggy-backing on the code that makes remedy tick.

The theme is under ./theme and the structure here is copied from the remedy themes

To build, run the default vscode build task, which will create a dist/solando-color-theme.json file.

## Debugging

The remedy packages are sylinked from the parent directory. All kinds of wacky node arguments are needed to make the combination of experimental ESM modules and symlinking work properly.

We are running all the .mjs files as ES modules in node, so you cannot use require. I had to fix one line of code in the parent that did this.
