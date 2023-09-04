# React notes

## Folder Structure
> **Time stamp:** 30:39

- **Node modules:** It contains all dependencies required by the app. Main dependencies are also listed in package.json.
- **public:** It contains static assets incluiding *index.html* (Page template)
  - Inside of `id="root"` is where all our website is going to be contained.
- **src:** It's the brain of the app, where we will do all of our work src/index.js is the JavaScript entry point.
- **.gitignore:** It specifies which git should ignore.
- **package.json:** Every Node.js project has a package.json and it contains info about our project, for example list of dependencies and scripts (The command you put with `npm`, Ex: `npm run start`).
  - Inside of it you have the main dependencies, but installed in your pc are the dependencies from the main dependencies.
- **package-lock.json:** A snapshot of the entire dependency tree.
- **README:** A markdown file where you can share more info about the project.

### Removing Boilerplate
- Remove the *src* folder.
- Create the *src* folder.
  - Create *index.js* file inside *src*.

## First component
> **Time stamp:** 43:12

1. Write the next block of code inside *index.js*:
    ```javascript
    function Greeting() {
      return <h2>My First Component</h2>;
    }
    ```

    You can also use arrow functions!
    ```javascript
    // arrow function also works

    const Greeting = () => {
      return <h2>My First Component</h2>;
    };
    ```

    - In order to create a component in react, you need to create a Javascript function, and inside of it you'll return an HTML element.
  
2. Every time you create a component, you'll have to export it!, Add this line after your `Greeting` function:
    ```javascript
    export default Greeting;
    ```

3. Do you remember the Root Component? It's the main component where we'll add al the rest of components. It's the sucker that will be inserted inside of the `div="root`. So go to *index.js* and insert the next piece of code:
    ```javascript
    import React from 'react';
    import ReactDOM from 'react-dom/client';

    function Greeting() {
      return <h2>My First Component</h2>;
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(<Greeting />); 
    ```
    - The first and last codes are something that will be repeated again and again, the important part is the `function` code, which is our component.
    - The line `root.render(<Greeting />);` is for rendering our component. It's important to close it! wether it's `<></>` or `< />`.
    - Think about components like functions.

## Extensions and settings.json
> **Time stamp:** 53:27

The tutor starts talking about his extensions and settings. I dunno, you can take it if you want them:

- Auto Rename Tag
- Highlight Matching Tag
  - customize in settings.json
- Prettier
  - format on save
  - format on paste
  - Default Formatter (Prettier - Code formatter)

And for *settings.json*:
```
"editor.formatOnPaste": true,
"editor.formatOnSave": true,
"editor.defaultFormatter": "esbenp.prettier-vscode",
  "prettier.singleQuote": true,
  "prettier.semi": false,
```

- And he also uses Emmet, he shows how to use in VS code.
- ES7 Snippets, for creating snippets from React fast.
