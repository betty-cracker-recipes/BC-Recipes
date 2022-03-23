# Documentation

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installations

The following software must be installed on your device in order to modify the website locally and/ or deploy changes.

    - Git
    - VS Code
    - Yarn
    - Node JS

### Docusaurus Site Generator

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

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

### Deployment
```
cd BC-Recipes
cmd /C "set GIT_USER=betty-cracker-recipes&& yarn deploy"
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
