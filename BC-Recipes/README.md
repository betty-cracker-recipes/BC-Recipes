# Documentation

### Installations

The following software must be installed on your device in order to modify the website locally and/ or deploy changes.

- [Git](https://git-scm.com/downloads)
- [VS Code](https://code.visualstudio.com/download)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)
- [Node JS](https://nodejs.org/en/download/)

### Site Set Up

```
$ yarn start
```

1. Open file explorer and create a new folder titled `BC-Recipes` 
2. Click on the file path for this new folder on the top of the file explorer, highlight it and type `cmd` and press `enter`.
3. A new command line should appear, here you can type `npx create-docusaurus@latest BC-Recipes classic --typescript` this will create a pre-populated subfolder from the static site generator [Docusaurus 2](https://docusaurus.io/)

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Local Development
```
 yarn start
```
To test changes without pushing them to the git repository or deploying them to the live site this command can be used. It will open a local host window in your browser which runs the site and allows you to view change in real time without committing them.

### Github Pages Deployment
```
cd BC-Recipes
```
Enter the repository folder

```
cmd /C "set GIT_USER=betty-cracker-recipes&& yarn deploy"
```
Push changes to the deployment branch. The first time this command is run should create the gh-pages branch.

### Resources

photo sources undraw,
algolia,
favicon

