const path = require('path');
const fs = require('fs');
const rimraf = require('rimraf');
const ESDocCLI = require('esdoc/out/src/ESDocCLI.js').default;

describe('test external events results:', () => {
    const cliPath = path.resolve('./node_modules/esdoc/out/ESDocCLI.js');
    const argv = ['node', cliPath, '-c', './__tests__/esdoc.json'];
    const cli = new ESDocCLI(argv);

    cli.exec();

    const tmp = fs.readFileSync('./__tests__/doc/index.json').toString();
    const tags = JSON.parse(tmp);

    rimraf.sync('./__tests__/doc');

    test('has external DOM events', () => {
        const tag = tags.find(tag => tag.kind === 'external' && tag.name === 'KeyboardEvent');
        expect(tag.externalLink).toBe('https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent');
    });

    test('removed external-events.js', () => {
        expect(() => {
            fs.readFileSync('./__tests__/.external-events.js');
        }).toThrowError();
    });
});
