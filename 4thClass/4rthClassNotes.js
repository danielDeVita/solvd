/* 

Package Managers=

Files combined together, consist of parts of code that
solves tasks (saves time)
One package may use other packages

NPM:
Node Package Manager, presented in 2010
Uses caching to avoid installing same package twice

YARN:
From 2016, by Facebook
Advantages (other Package Managers now include) =>
1) Workspaces, it's a shared space for different Projects,
hence you install a package in a workspace where every
project links to the installed package (saves space)
2) Automatic handling dependencies in lock files,
it takes care of outdated packages for you
3) Selective dependency resolution,
it marks a package if it has critical erros so you don't
install it. YARN will try to go to the stable version
4) Yarn Upgrade-interactive, it updates all packages to
their updated version

PNPM:
From 2016, the main advantage is hard links which
installs a package in a project01 and if package02 needs the
same package it will move that package one level up
and create a link for package02

*******************
NPM, a bit slower than the others but more stable
YARN, less features but a bit faster than NPM
PNPM, faster than YARN

*******************
npm install 
npm i 
npm i <package_name>
npm i myPackage@2.3.4 (for a specific version)

--save (by default, not need to specify). it installs in
"dependencies" object in package.json

--save -dev .it installs in "devDependencies" object in 
package.json, only used in development

npm update (it updates all packages)
npm update <package_name> 

npm <task_name> (for a script)
npm run <task_name>
you have to modify "scripts" object in package.json

you can install packages locally in node_modules for
each project or you can do it globally in your computer
by doing npm i -g myPckg
to find out where they are installed, run:
npm root -g (it will provide folder where they are installed
globally)

npx is used for scripts

*******************
package.json:
- defines dependencies of 
our app/library such as React, Express etc., 
along with their versions

-"name": it contains name of the project
-"author": link to gitHub or email, or an object with
:{name, url,etc}
-"contribuitors": if it is open project (string or object)
-"bugs": link to open jira or gitHub for issues
-"homepage": website URL
-"version": rule of semantic version, it has 3 numbeers=
x.y.z (major.minor.patch)

when major version is zero (0), it means the package is
in development. you can't publish it still

z = minor patches, like refactoring
y = new feature. keep deprecated FN, backwards compatible
x = no backwards compatibility

-"keywords": metatext for searching purposes
-"description": ...
-"repository": {type:"git",url:<repo>} specifies repo type and its location
-"main": initial point of package ("src/main.js")
-"private": boolean
-"dependencies": list of dependencies
-"devDependencies": list of development dependencies
-"engines": {"node":">=12","npm":">6"} to avoid bugs

*******************
package.lock.json || yarn.lock:
this file keeps track of all dependent libraries' exact 
versions that were resolved during installation process

npm i --lock (installs versions specified in package.lock.json)

it follows concrete versions, so we don't encounter version issues

*/
