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

## JSX
> **Time stamp:** 1:06:21

We need to remember that our components need to:
- Start in capital letter.
- Must return something.
- **It has to have JSX Syntax**

So what's JSX? Let's find out:
1. Comment the entire of the `Greeting` function (*Psst, you can use Ctrl + /*).
2. Now create a new `Greeting` function like this:
    ```javascript
    function Greeting() {
      return React.createElement('h2', {}, 'hello world');
    }
    ```
     - Congratulations! You've created an h2 tag with JSX. They're called "React Elements" for constructing the DOM and mantaining it updated.
3. What about if I want to have an `h2` element inside a `div` element? You can do it like this:
    ```javascript
    function Greeting() {
      return React.createElement(
        'div', 
        {},
        React).createElement('h2', {}, 'hello world');
    }
    ```
    - Well, this starts to get strange. So in the long run, I recommend you to do it in the classic way (Using tags as in the last exercise).

### JSX Rules
- Always return a single element or one parent element. This means you cannot do something like this:
    ```jsx
    function Greeting() {
      return (
        <div>
          {/*Insert what you need here*/}
        </div>
        <h2> {/*This is entirely wrong, since you're returning a div and a h2 tag*/}
      )
    }
  ```
  But you can solve it like this:
  ```jsx
  function Greeting() {
    return (
      <>
      <div>
        {/*Insert what you need here*/}
      </div>
      <h2> {/*Now it works!*/}
      </>
    )
  }
  ```
  > `<>` means `<React.Fragment>`

- JSX has a naming convention for properties which is the **camelCase** convention.
- For CSS, you don't have the `class` property, instead you need to use `className`
- Any element that don't have a closing tag, you need to put it manually, for example: `<img />`.

### Nest Components
> **Time stamp:** 1:20:20
What if I want to insert a component inside a component. Is that possible? This is how you can do it:

1. Let's modify the `Greeting` function again:
    ```jsx
    function Greeting() {
      return(
        <div>
          <h2>John Doe</h2>
          <p>This is my message</p>
        </div>
      )
    }
    ```
2. Now we are going to create other two components with the code that `Greeting` has inside of it:
    ```jsx
    const Person = () => <h2>John doe</h2>
    const Message = () => {
      return <p>This is my message</p>;
    };
    ```
3. Now you can modify `Greeting` again like this!
    ```jsx
    function Greeting() {
      return(
        <div>
          <Person />
          <Message />
        </div>
      )
    }
    ```
    - And just like this, you can nest components inside of other components as much as you want. And this how your future applications will look that.
> By this moment you can download a React extension for looking component inside the Inspector code. Its name is **React Develper Tools**.

## Booklist
> **Time stamp:** 1:26:35
Now we'll be creating a Booklist in order to practice with what we've learned. I recommend you to just look the code since there's nothing to explain here.

## CSS
> **Time stamp:** 1:37:17
For creating a CSS File and importing to your React code, you need to follow the next steps:
1. Create a file in *src* called *index.css*.
2. Insert your CSS code. In the case of our Booklist, we'll add the next code:
    ```css
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      background: #f1f5f8;
      color: #222;
    }

    .booklist {
      width: 90vw;
      max-width: 1170px;
      margin: 5rem auto;
      display: grid;
      gap: 2rem;
    }

    @media screen and (min-width: 768px) {
      .booklist {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    .book {
      background: #fff;
      border-radius: 1rem;
      padding: 2rem;
      text-align: center;
    }
    .book img {
      width: 100%;
      object-fit: cover;
    }
    .book h2 {
      margin-top: 1rem;
      font-size: 1rem;
    }
    ```
3. Go to where you need your css file imported. In this case we'll go to *index.js* and import it in this way after the `ReactDOMT` import:
    ```jsx
    import './index.css' 
    ```
    - When it's about our own assets like our CSS file, we need to provide our path. It's always going to start with `./` and after that the route to our file.
4. We'll modify our BookList inserting their respective `className` properties:
   ```jsx
   function BookList() {
      return (
        <section className='booklist'>
          {/*...*/}
        </section>
      );
    }

    const Book = () => {
      return (
        <article className='book'>
          {/*...*/}
        </article>
      );
    };
   ```

## Local  Images
> **Time stamp:** 1:47:35

- For images, we have many options:
    - External images hosted on a different server.
    - Local images in the public folder which is less performant.
    - Local images in the src folder, which is better because they get optimized under the hood.

In order to do it, you need to:
1. Save the image.
2. Create an *images* folder in public.
3. Save the image there.
4. Rename it if you need it.
5. Replace the url in the src like: `./images/imageName.extension`.

So inside your *index.js* you need to modify it:
```jsx
const Image = () => (
  <img src='./images/book-1.jpg' alt='Elon Musk' />
);
```
## JSX - CSS
If you want to add CSS inside a JSX file to a tag element, you need to take into account this notes:
- In JSX, putting `{}` means writing again in javascript.
- CSS writed inside JSX is taking as an object with key/value pairs, meaning the values are inside `''`.

Inside of *index.js*, we'll modify our author component in this way in order to add it some CSS style:
```jsx
const Author = () => {
  return <h4 style={{color:'#617d98', fontSize:'0.75rem', marginTop:'0.5rem'}}>Walter Isaacson</h4>
}
```
- Take in mind that the CSS aplied directly like this will be over other CSS files.

By the way, you can apply CSS in other way:
```jsx
const Author = () => {
  const inlineHeadingStyles = {
    color: '#617d98',
    fontSize: '0.75rem',
    marginTop: '0.5rem',
  };
  return <h4 style={inlineHeadingStyles}>Jordan Moore </h4>;
};
```

## JSX - Javascript
> **Time stamp:** 2:02:17
- `{}` in JSX means that I'm going to use javascript inside of it
- It has to return a value. It has to be an expression.

You can do it like this, modifying the Book component:
```jsx
const author = 'Walter Isaacson'
const Book = () => {
  const title = 'Elon Musk';
  return (
    <article className='book'>
      <img
        src='./images/book-1.jpg'
        alt='Elon Musk'
      />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};
```
- In this scenario, we saved the title inisde `title` and we returned between the `<h2>` tags.

> **P.D:** The const variables were moved to the upper section to the code.

## Props
> **Time stamp:** 2:08:44
In Javascript, when we create a function, we can define some parameters to it, and we have to pass arguments when we call that respective function. In React we can also pass data to our component. This is the case if I need other book to render.

1. Let's add `props` as a parameter to the `Book` function:
   ```jsx
    const Book = (props) => {
      console.log(props); //This returns 'Object', an empty object.
      return (
        <article className='book'>
          <img src={props.img} alt={props.title} />
          <h2>{props.title}</h2>
          <h4>{props.author} </h4>
        </article>
      );
    };
    ```
2. Now I need to pass some arguments to `Book`, because why did we add `props` if we weren't going to use it? Go to `BookList` and modify the `<Book />` tag:
    ```jsx
    <Book job="developer" />
    <Book title="random title" number={2} />
    ```
    - Now in our console we'll be watching a dictionary, like this:
        ```javascript
        {title: 'random title', number: 22}
        ```
3. Let's now use it for something useful:
    ```jsx
    <Book author={author} title={title} img={img} />
    <Book author={author} title={title} img={img} />
    //...
    const Book = (props) => {
      console.log(props);
      return (
        <article className='book'>
          <img src={props.img} alt={props.title} />
          <h2>{props.title}</h2>
          <h4>{props.author} </h4>
        </article>
      );
    };
    ```
    - And now you are accessing the image, author and title from `props`!

## Props - Somewhat Dynamic Setup
> **Time stamp:** 2:18:33
We just made some changes to the code. Look for them!

## Access Props - Multiple Approaches
> **Time stamp:** 2:23:00
1. You can take the properties from an object and save them in a set of variables:
    ```javascript
    const someObject = {
      name: 'john',
      job: 'developer',
      location: 'florida',
    };

    console.log(someObject.name);
    const { name, job } = someObject;
    console.log(job);
    ```
    - So in our code would look something like this:
    ```jsx
    const Book = (props) => {
      const { img, title, author } = props;
      return (
        <article className='book'>
          <img src={img} alt={title} />
          <h2>{title}</h2>
          <h4>{author} </h4>
        </article>
      );
    };
    ```
    
## Children Prop
> **Time stamp:** 2:27:44
- It provides access to everything we render betwee component tags.
    - It's more useful in Context API.

What happens if I want to render a paragraph and a button in one of the components? Follow with me:
1. Open the `<Book>` tag inside of `BookList` like this: `<Book ...></Book>`
2. And now between the tags, add the information you need to show inside that component, for example:
    ```jsx
    <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
    >
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
        repudiandae inventore eos qui animi sed iusto alias eius ea sapiente.
      </p>
      <button>click me</button>
    </Book>
    ```

3. We are going to modify our `Book` component. We need to add **`children`** as a variable when we are taking the elements from `props`:
    ```jsx
    const Book = (props) => {
      const { img, title, author, children } = props;
      console.log(props);
      return (
        <article className='book'>
          <img src={img} alt={title} />
          <h2>{title}</h2>
          <h4>{author} </h4>
          {children} {/*Here we render children!*/}
        </article>
      );
    };
    ```

And that's it!









