import path from 'path';
import test from 'ava';
import {test as helpers} from 'yeoman-generator';
import assert from 'yeoman-assert';
import pify from 'pify';

let generator;

test.beforeEach(async () => {
	await pify(helpers.testDirectory)(path.join(__dirname, 'temp'));
	generator = helpers.createGenerator('juan:app', ['../app'], null, {skipInstall: true});
});

test.serial('generates expected files', async () => {
	helpers.mockPrompt(generator, {
		moduleName: 'test',
		githubUsername: 'test',
		website: 'test.com',
		cli: false
	});

	await pify(generator.run.bind(generator))();

	assert.file([
		'.editorconfig',
		'.git',
		'.gitattributes',
		'.gitignore',
		'.travis.yml',
		'index.js',
		'LICENSE',
		'package.json',
		'README.md',
		'test.js'
	]);

	assert.noFile('cli.js');
});

test.serial('CLI option', async () => {
	helpers.mockPrompt(generator, {
		moduleName: 'test',
		githubUsername: 'test',
		website: 'test.com',
		cli: true
	});

	await pify(generator.run.bind(generator))();

	assert.file('bin/test');
	assert.fileContent('package.json', /"bin":/);
	assert.fileContent('package.json', /"bin": "bin\/test"/);
	assert.fileContent('package.json', /"meow"/);
});