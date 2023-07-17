#!/usr/bin/env node

const { execSync } = require('child_process');

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Failed to execute ${command}`, e);
    return false;
  }
  return true;
};

const repoName = process.argv[2];

const gitCloneCommand = `git clone --depth 1 https://github.com/startercode-dev/js-template.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm i`;
const localGitCommand = `cd ${repoName} && rm -rf ./.git && git init && git add . && git commit -m 'init'`;

console.log(`Cloning template into ${repoName}`);
const gitClone = runCommand(gitCloneCommand);
if (!gitClone) process.exit(1);

console.log('Setting up local git...');
const localGit = runCommand(localGitCommand);
if (!localGit) process.exit(1);

console.log(`Installing dependencies for ${repoName}`);
const installDeps = runCommand(installDepsCommand);
if (!installDeps) process.exit(1);

console.log(`----------------------`);
console.log(`ALL DONE! =]`);
console.log(`"cd ${repoName}" and "npm run dev" to get started!`);
