# Documentation

### Installations

The following software must be installed on your device in order to modify the website locally and/ or deploy changes.

- [Git](https://git-scm.com/downloads)
- [VS Code](https://code.visualstudio.com/download)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)
- [Node JS](https://nodejs.org/en/download/)

### Site Set Up

#### Docusaurus & Local Folder
1. Open file explorer and create a new folder titled `BC-Recipes` 
2. Click on the file path for this new folder on the top of the file explorer, highlight it and type `cmd` and press `enter`.
3. A new command line should appear, here you can type `npx create-docusaurus@latest BC-Recipes classic --typescript` this will create a pre-populated subfolder from the static site generator [Docusaurus 2](https://docusaurus.io/)

#### Linking to Git Repo
1. Create an empty repository in Github with the same name `BC-Recipes`
2. Same as step 2 from above.
3. In the command line type `git init` and hit `enter`
4. Next type `git add .` to add all the files from this folder into the repo
5. Commit the change with `git commit -m "intial commit"` and press `enter`
6. Use the steps provided by github to push an existing repository from the command line
    ```
      git remote add origin https://github.com/betty-cracker-recipes/BC-Recipes.git
      git branch -M main
      git push -u origin main
     ```
### Crawling the Site
Use the Algolia Docsearch Crawler documentation from the resources section below to create a search bar. This documentation will also take you through all the necessary installations to get the search feature working.

Once the `.env` and `config.json` files are created, modify the `docusaurus.config.js` file to include Algolia. The theme config should be modified to include: 
 ```
   algolia: {
          apiKey:'095d0154d0a88751c86fdf134f5f5775',
          indexName:'bc',
          appId:'33MRM77352',
      },
 ```

 Once all these steps are complete you will need to open the Git Bash Terminal and run the following commands:

 1. Enter the site folder:
  ```
  cd "C:\Users\Jessica\Desktop\BC-Recipes"
  ```
 2. Crawl the site:
  ```
  docker run --env-file=.env -e "CONFIG=$(cat ./config.json | jq -r tostring)" algolia/docsearch-scraper
  ```


   
### Local Development
```
 yarn start
```
To test changes without pushing them to the git repository or deploying them to the live site this command can be used. 

It will open a window in your browser which runs the site locally and allows you to view change in real time without committing them.

### Github Pages Deployment
```
cd BC-Recipes
```
Navigate to repository folder.

```
cmd /C "set GIT_USER=betty-cracker-recipes&& yarn deploy"
```
Push changes to the deployment branch. 
The first time this command is run should create the gh-pages branch.

### Additional Resources
- [Undraw](https://undraw.co/illustrations): HomePage Images
    - The Docusaurus [Styling & Layout Guide](https://docusaurus.io/docs/styling-layout) can be used to change site color schemes, you can also copy the HEX codes from this page into Undraw for color matching.
- [ICONS8](https://icons8.com/icons/set/favicon): Main Site Icon
- [Favicon](https://favicon.io/): Site Tab Icon
- [Algolia](https://www.algolia.com/): Search Feature
    - For more info on how to use Algolia DocSearch [click here](https://docsearch.algolia.com/docs/crawler/)
- [MailChimp](): Email List Management


