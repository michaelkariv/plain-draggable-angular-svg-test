# The Project

This tiny Angular project is to test dragging in an SVG-templated component.
Unlike HTML, cdkDrag is not implemented for SVG. 

A library I found is plain-draggable, and this project is a test of its SVG+Angular dragging ability.

# Notes

1. Good start for reading would be [plain-draggable issues/96](https://github.com/anseki/plain-draggable/issues/96)
2. [Working simple example](https://stackblitz.com/edit/angular-ivy-mkm3q8) by the author of plain-draggble is a good place to start.
3. Use `declare let PlainDraggable: any;` instead of `import PlainDraggable from 'plain-draggable';`
I wish there were `@types/plain-draggable` typings, and Angular module but there isn't
4. Add plain-draggable to `angular.json/.../scripts`. See [issue 100](https://github.com/anseki/plain-draggable/issues/100) or [StackOverflow cover](https://stackoverflow.com/questions/68925686/import-3rd-party-js-lib-into-angular-12-library)
```JSON
"scripts": [
              {
                "input": "node_modules/plain-draggable/plain-draggable.min.js",
                "inject": true,
                "bundleName": "plain-draggable"
              }
            ]
```
