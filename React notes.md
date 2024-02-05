# React notes - Fundamentals

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

## Simple List
> **Time stamp:** 2:35:12

In React we can't render objects directly in jsx, so for example, if we try this:
```jsx
const books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: './images/book-1.jpg',
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
  },
];

const BookList = () => {
  return <section className='booklist'>{books}</section>
}
```

So, for doing that we need to start knowing how to work with simple lists. **map** is a React function that let us create a new array from calling a function for every  array element:
```jsx
const names = ['john', 'peter', 'susan'];
const newNames = names.map((name) => {
  console.log(name);
  return <h1>{name}</h1>;
});

function BookList() {
  return <section className='booklist'>{newNames}</section>;
}
```

And now it will return a React element that is wrapped in h1 tags, and not only that, but it will return every element that is inside `names`.

## Proper List
> **Time stamp:** 2:43:48

So if we want to do what we did in the last chapter but for every book, we need to do it again in this way:
```jsx
function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        console.log(book);
        const { img, title, author, id } = book;
        return <Book img={img} title={title} author={author} key={id}/>;
      })}
    </section>
  );
}
```
- Basically here, we have taken the HTML structure from `Book` and now we applied inside `BookList`
- So doing this, we are iterating through `book` (which contains books' data), then we are pulling out the properties from book and then we create a `Book` component with the properties we just pulled out.

Finally, React is goint to give us a warning saying that *"Each child should have a unique "key" prop"*, so in order to apply that requirement, we just need to add the `id` properties to every object in `books`. **The id must be unique**:
```jsx
const books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: './images/book-1.jpg',
    id:1,
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    id:2,
  },
];
```

## Key Prop
> **Time Stamp:** 2:51:12

Somethines, when you are mapping through a list of components, you'll see an `index` variable inside of `map`. 

> You can get away with putting index as a key, but this is not recommendable if you know that the list will be changing. (This is also the last chapter btw0.)

### How to pass the entire object as a prop?
If you don't want to pull out the properties from `props`, here you can watch some approaches :D

- Pass the entire object as a prop:
    ```jsx
    function BookList() {
      return (
        <section className='booklist'>
          {books.map((book) => {
            console.log(book);
            const { img, title, author } = book;
            return <Book book={book} key={book.id}/>;
          })}
        </section>
      );
    }

    const Book = (props) => {
      const { img, title, author } = props.book;

      return (
        <article className='book'>
          <img src={img} alt={title} />
          <h2>{title}</h2>
          <h4>{author} </h4>
        </article>
      );
    };
    ```
- As an alternative for the `Book` component, you can do it also like this:
    ```jsx
    const Book = ({ book: { img, title, author } }) => {
      return (
        <article className='book'>
          <img src={img} alt={title} />
          <h2>{title}</h2>
          <h4>{author} </h4>
        </article>
      );
    };
    ```

- Use the map operator (How you've seen it in the last chapters). This is useful if I have an object and I want to pass all their properties
- Use the spread operator:
    ```jsx
        function BookList() {
      return (
        <section className='booklist'>
          {books.map((book) => {
            return <Book {...book} key={book.id} />;
          })}
        </section>
      );
    }

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
    const Book = ({ img, title, author }) => {
      // rest of the code
    };
    ```

    And this is *people.jsx*:
    ```javascript
    // Creating data of people
    const people = ['John', 'Alexander', 'Cassandra', 'Tom', 'Sara']

    // Exporting data
    export default people
    ```


## Events
> **Time-stamp:** 2:58:59

Rendering a list with the help of components is awesome, but we need the user to interact with our applicacion, in other words, **It needs events**.

### React Events
React events are the recommended here in this tutorial because they are quite easy to implement. The most common of them are:
- **`onClick`:** When the user clicks.
- **`onSubmit`:** When the user submits forms.
- **`onChange`:** When there is an input change.

So in order to implement a React event, you need to:
1. Create a component, in this case will be `EventExamples`:
    ```jsx
    const EventExamples = () => {

    }
    ```
2. Components need to always return something, so let's make it return:
    ```jsx
    const EventExamples = () => {
      return (
        <section>
          <form>
            <h2>Typical Form</h2>
            <input 
            type='text' 
            name='example' 
            onChange={handleFormInput}
            style={{ margin: '1rem 0'}}
            />
          </form>
          <button onClick={handleButtonClick}>Click me</button>
        </section>
      );
    }
    ```

3. Finally, we have settled up that the input will react `onChange` and that the button will react `onButton`  , but what functions are going to be executed? Let's create them inside of `EventExamples`!
    ```jsx
    const EventExamples = () => {
      const handleFormInput = () => {
        console.log('handle form input');
      };
      const handleButtonClick = () => {
        alert('handle button click');
      };
    }
    ```

4. If you click in the button or type something in the input, their respective events will be getting executed. And it's done!

## Event Object and Form Submission
> **Time stamp:** 3:12:25

We can also substract the event information through an event. Let's take a look: If we modify `handleFormInput` in the next way:
```jsx
const handleFormInput = (e) => {
  console.log(e);
};
```

But we don't need entirely all the information of the event, we just need useful information, and we can substract like this:
```jsx
const handleFormInput = (e) => {
  console.log(e);
  // e.target - element
  console.log(`Input Name : ${e.target.name}`);
  console.log(`Input Value : ${e.target.value}`);
  // console.log('handle form input');
};
```
- **`e.target`:** It returns the HTML - JSX element (In this case: `<input>`)
- **`e.target.name`:** It's returning the Input field name (Which, in this case is *example*)
- **`e.target.value`:** It's returning the Input field value (What the user has written in the input field)

### Form Submission
In our app, for submitting a form, we have to modify our code in the next way:
```jsx
const EventExamples = () => {
  const handleFormInput = (e) => {
    //...
  };
  const handleButtonClick = () => {
    alert('handle button click');
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log('form submitted');
  };
  return (
    <section>
      {/* add onSubmit Event Handler */}
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type='text'
          name='example'
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
        {/* add button with type='submit' */}
        <button type='submit'>submit form</button>
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  );
};
```
- In this case. `handleFormSubmission` won't be activated when the form is submitted with the button because the default behavior of the forms is to collect those values and sent it to some URL. But because we need to handle those forms by ourselvs. we use `e.preventDefault()`
- By the way, for submitting a form you can also do it like this from a button (You have to delete de `onSubmit` event from the `<form>` tag):
    ```jsx
    <button type='submit' onClick={handleFormSubmission}>
      submit form
    </button>
    ```

## Mind Grenade
> **Time stamp:** 3:21:51

It's not neccessary to create those functions handelers that we created before! You can also pass them as anonymous functions like this:
```jsx
const EventExamples = () => {
  return (
    <section>
      <button onClick={() => console.log('hello there')}>click me</button>
    </section>
  );
};
```
- And if you need to get access to the event, you can pass `e` as a parameter in the anonymous function c:

### Mind Grenade #2
> **Time stamp:** 3:25:35
- The event from the components are independent by default. If you display the title of a book with a event, you are going to display the name from the data of **that** item. Watch the video if you don't remember what I'm talking about

## Component Feature
> **Time stamp:** 3:28:55

### Prop Drilling
In React, the data flows through the components, in other words, it can only pass props down. So if you want props to a child component, you need to pass it through the parent component and so on. This is an example of this:
```jsx
function BookList() {
  const someValue = 'shakeAndBake';
  const displayValue = () => {
    console.log(someValue);
  };
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book {...book} key={book.id} displayValue={displayValue} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author, displayValue } = props;

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={displayValue}>click me</button>
      <h4>{author} </h4>
    </article>
  );
};
```
- Here you have created the event `displayValue` inside of `bookList`, and in order to use it in the child component from `Book`, you need to pass it as a prop and receive it as well.

## Challenge
> **Time stamp:** 3:35:53

Here he does a challenge. Look for the code in order to see what was done!

## ES6 Modules
> **Time stamp:** 3:48:51

An ES6 module is a file containing JS code. There’s no special module keyword; a module mostly reads just like a script. There are two differences.
- ES6 modules are automatically strict-mode code, even if you don’t write "use strict"; in them.
- You can use import and export in modules.

In this tutorial we'll only focus in two ways for importing modules.

1. Go to src and create *books.js* and *Book.js*.
2. Delete `books` from *index.js*.
3. Add it to *books.js*.
4. Let's put in *books.js* the next line:
   ```jsx
   export const books = [/*...*/]
   ```
5. In *index.js* you need to import the books from *books.js*. You can do it in the next way:
   ```jsx
   import {books} from './books'
   ```
   And now you can access books from other files :D
6. Alternatively to step 4, you can do it also in this way:
   ```jsx
   //At the end of the code
   export default books
   ```
7. And now in *index.js* you can import it like, for example:
   ```jsx
   import banana from './books'
   ```
   And if you make the changes in code from book to banana, it is going to work, but please leave it as `books`.
8. Now go and take the `Book` function, cut it and paste it in *Book.js*.
9. Add at the end of *Book.js*:
    ```jsx
    export default Book;
    ``` 
10. In *index.js*, you need to import it like:
    ```jsx
    import Book from './Book';
    ```

And yes, You've learned how do exports and imports work in React - Javascript :D

## Local Images (src folder)
You need to learn how to save local images in the src folder, since they have a better performance because they are optimized.

1. In this tutorial, we saved the images inside the *src* folder that has a folder called *images*. It's quite probably that in future projects we start by the *assests* folder.
2. For importing the images, we need to add at the begginning of *Book.js*:
    ```jsx
    import img1 from './images/book-1.jpg';
    import img2 from './images/book-2.jpg';
    import img3 from './images/book-3.jpg';
    ```
3. And then we can use imgs inside every book, like this:
    ```jsx
    export const books = [
      {
        author: 'Walter Isaacson',
        title: 'Elon Musk',
        img: img1,
        id:1,
      },
      {
        author: 'Mark R. Levin',
        title: 'The Democrat Party Hates America',
        img: img2,
        id:2,
      },
      {
        author: 'Keila Shaheen',
        title: 'The Shadow Work Journal',
        img: img3,
        id:3,
      },
    ];
    ```

## More Challenges
> **Time stamp:** 4:02:06

Yeah, another challenge...
Go look the code ewe.
And here I am adding the title challenge

## Deployment
> **Time stamp:** 4:10:00

When we run the server in our code, we are running a development sever, ¿But what if I want to deploy a frontend globally? Follow with me:
1. `npm run build` It's for creating a production build, for deployment. It will create a extra folder: the *build* folder.
2. You can use any provider for deployment a frontend, but in this tutorial it will be used ***netifly***. Sign up!
3. Select "Add new site" > "Deploy manually".
4. Drag the *build* folder that you created before.
5. Go and see your deployed website!.
6. If you wan to change your site name: "Site settings" > "Change site name"

THIS IS THE END OF REACT - FUNDAMENTALS
---
# React - Backroads Project - Advanced
For this part, we'll be working on a new project, so type inside the folder you are going to start: ```npx create-react-app@latest backroads-app```

By the way, in *index.js* you have some tags called `<React.StrictMode>`, this is for returning me warnings in the developer server, and it will render the website twice. Take it in account!

## Vite
Vite is much faster than create react app and it provides a lot of features, having a great experience developing

So for setting our project with vite, follow the next steps:
1. Insert the next command where you will set up your project: ```npm create vite@latest my-react-app -- --template react```
2. Open the project in VSCode.
3. For running our developer server, we need to use `npm run dev`, remembeter to install with `npm i` the dependencies.
   - The host here will be the 5173.
4. Now our files are not *.js* but *.jsx*.

**Differences:**
- *.js* -> *.jsx*
- *index.js* -> *main.jsx*
- *assets* are in the *src* folder.
- *build* -> *dist*

---
# Advanced React
Now you have a tutorial directory. In order to follow the tutorial you have to work in the *starter* folder and in order to test the final import content from *final* and put them inside of `App`, like this:
```jsx
import Starter from './tutorial/1-useState/starter/1-error-example';
import Final from './tutorial/1-useState/final/1-error-example';
function App() {
  return (
    <div className='container'>
      <Starter />
      <Final />
    </div>
  );
}

export default App;
```

## useState Hook
> **Time stamp:** 4:49:55

Let's say for example we want to do a counter, and we create the next app:
```jsx
function App() {

  let count = 0;  

  const handleClick = () =>{
    count = count + 1;
    console.log(count);
  }

  return (
    <div>
      <h2>{count}</h2>
      <button type="button" onClick={handleClick}>
        increase
      </button>
    </div>
  );
}

export default App;
```

Aaaaaand, it's not working. Why? Let's see:

useState hook is a function we want to invoke that function and we want to pass in the default value, in order to use i, you need to invoke it like this:

```jsx
import { useState } from 'react';

const UseStateBasics = () => {
  console.log(useState(1));
  return <h2>useState basics</h2>;
};

export default UseStateBasics
```

So the value `1` will be the default value, the console.log is returning `[1,f]`

If we want to get the value inside of `useState`, you just need to do `const value = useState(1)[0]` and for finding the function that is controlling that value is `const func = useState(1)[1]`.

So why is it important? See it:
```jsx
import { useState } from 'react';

const UseStateBasics = () => {
  const [count,setCount] = useState(0) //Here we are doing the same that I told in the last paragraph, we are deconstructing and obtainin the value and function.

  const handleClick = () => {
    setCount(count + 1)
  }

  return <div>
    <h4> You clicked {count}</h4>
    <button type='button' className='btn' onClick={handleClick}></button>
  </div>;
};

export default UseStateBasics
```
And now every you click the button, it will updated :D

### Initial Render
> **Time stamp:** 5:00:51

In a React application, the initial render is the first time that the component tree is rendered to the DOM. It happens when the application first loads, or when the root component is first rendered. This is also known as "mounting" the components.

Re-renders, on the other hand, happen when the component's state or props change, and the component needs to be updated in the DOM to reflect these changes. React uses a virtual DOM to optimize the process of updating the actual DOM, so that only the necessary changes are made.

There are a few ways that you can trigger a re-render in a React component:

- By changing the component's state or props. When the component's state or props change, React will re-render the component to reflect these changes.

- When the parent element re-renders, even if the component's state or props have not changed.

### General Rules of Hooks
> **Time stamp:** 5:03:57

- All the hooks start with **use** (From react and custom hooks).
- Components must be upperCase.
- They have to be invoked inside the component body.
- Don't call hooks conditionally.
- Set functions don't update state inmediately.

### useState with Array
> **Time stamp:** 5:06:33

[Just look the code ewe](03-advanced-react/src/tutorial/01-useState/final/03-useState-array.jsx)

This my solution by the way:
```javascript
/*
- Import data 
- Setup a state value
  - People - default value equal to data
  - Display list(people) in the browser

  - Create two functions
    - One that removes single item from the list
    - One that clears entire list
*/

// Importing data and the neccesary
import { useState } from 'react';
import people from './people'

const UseStateArray = () => {

  //Creating the useState
  const [peopleState, setPeopleState] = useState(people)

  // Using the setPeopleState for deleting a person
  // **This is only working when there are no repeated people**
  const deletePerson = (person) => {
    const updatedPeople = peopleState.filter((p) => p !== person);
    setPeopleState(updatedPeople);
  }

  const deletePeople = () => {
    const updatedPeople = []
    setPeopleState(updatedPeople)
  }

  // Component that returns each one of the people
  const newPeople = peopleState.map((person) => {
    return (
      <div>
        <h3>{person}</h3>
        <button type='button' name='delete' onClick={() => deletePerson(person)}>Delete</button>
      </div>
      )
  })

  // Final Return
  return(
    <>
      <h2>useState array example</h2>
      {newPeople}
      <button type='button' name='deleteAll' onClick={() => deletePeople()}>Delete All</button>
    </>
  )

};

export default UseStateArray;
```

## Automatic Batching
> **Time stamp:** 5:27:28

In React, "batching" refers to the process of grouping multiple state updates into a single update. This can be useful in certain cases because it allows React to optimize the rendering of your components by minimizing the number of DOM updates that it has to perform.

By default, React uses a technique called "auto-batching" to group state updates that occur within the same event loop into a single update. This means that if you call the state update function multiple times in a short period of time, React will only perform a single re-render for all of the updates.

React v18 ensures that state updates invoked from any location will be batched by default. This will batch state updates, including native event handlers, asynchronous operations, timeouts, and intervals.

## Switch to Object
> **Time stamp:** 5:28:07

We may have multiple properties for a person (name, age, hobby, etc). and for that case we may be tempted to use 3 or more useStates, but we can use just one state for an object in this way:
```javascript
import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson ] = useState({
    name:'peter',
    age:24,
    hobby:'read books'
  })
}
```

And for displaying the information, we can do it in the next way:
```javascript
const displayPerson = () => {
  setPerson({name: 'john', age: 28, hobby: 'scream at the computer'})
}
```

Finally, because we are sing an object it's mandatory to destructure the object where we are using it:
```javascript
// Final return
return  (
  <>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h4>Enjoys: {person.hobby}</h4>
    <button className='btn' onClick={displayPerson}>
      show john
    </button>
)
```

> If you want only to change one property, remember to use the **spread operator**!:
> ```javascript
> const displayPerson = () => {
>   setPerson({...person, name:'susan'})
> }
> ```

## Set Function "Gotcha" 
> **Time stamp:** 5:34:04

useState has a defect, and it's that the state it's not updated inmediately and synchronously, for example if you have this piece of code:
```javascript
const handleClick = () => {
  setValue(value + 1);
  console.log(value)
}
```

Meanwhile, in the browser, the number displayed will be `7`, the number in the console will be `6` and so on. In order to correct this you can pass a function to setState that receives the previous state as an argument and returns th new state. For example:
```javascript
setState((prevState) => {
  return {...prevState, value: newValue};
});
```

This can be useful if you need to update the state based on the previous state, or if you need to update the state synchronously, in our current example would be:
```javascript
const handleClick = () => {
  setValue((currentState) => {
    const newState = currentState + 1
    return newState
  });

  console.log(value) // This is woring ok!
}
```

## useEffect Hook
> **Time stamp:** 5:52:22

useEffect is a hook in React that allows yoy to perform side effects in function components. Basically any work outside of the component. Some examples of side effects are: subscriptions, fetching data, directly updating the DOM, event listeners, timers, etc. ([Code file here](03-advanced-react\src\tutorial\02-useEffect\final\02-useEffect-basics.jsx))

1. Import useEffect hook
2. It accpets two arguments (Second optional)
3. First argument - CallBack function
  - By default, it runs on each render (Initial one and re-render).
  - The CallBack function can't return promise (So can't make it async).
4. Second argument - Dependency array
  - If dependency array empty [] runs only on initial render

So in order to start, it's neccesary to import it:
```jsx
import { useState, useEffect } from 'react';
```

Then we may use it like this:
```jsx
import { useState, useEffect } from 'react';

const UseEffectBasics = () => {
  const [value setValue] = useState(0);
  const sayHello = () => {
    console.log('hello there');
  };

  // This will be executed every time there is a render (Because 2nd argument is empty)
  // That means: The initial render and every re-render from 'useState'
  useEffect(() => {
    console.log('hello from useEffect');
  });

  return (
    // [...]
  )
}
```

Now, if we put a dependency array:
```jsx
// Now only runs in the initial render
useEffect(() => {
  console.log('hello from useEffect');
}, []);
```

## Dependency Array
> **Time stamp:** 5:59:15

Now, we don't want `useEffect` to be executed every time we do a render. That's what the **Dependency array** is for, for indicating when do we want to apply a specific effect. Let's take for example ([Code here](03-advanced-react\src\tutorial\02-useEffect\final\03-multiple-effects.jsx)):
```jsx
import { useState, useEffect } from 'react';

const MultipleEffects = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  /* This useEffect is only executed when the 'value' is updated.
  That means when the first button is pushed
  */
  useEffect(() => {
    console.log('hello from first useEffect');
  }, [value]);

  /* This useEffect is only executed when the 'secondValue' is updated.
  That means when the second button is pushed
  */
  useEffect(() => {
    console.log('hello from second useEffect');
  }, [secondValue]);

  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        value
      </button>
      <h1>second value : {secondValue}</h1>
      <button className='btn' onClick={() => setSecondValue(secondValue + 1)}>
        second value
      </button>
    </div>
  );
};

export default MultipleEffects;
```

## Javascript Nuggets - Fetch API
> **Time stamp:** 6:02:57 

Fetch API is a Browser API for HTTP (AJAX) Requests.

- It's not necessary to import it since it comes by default.
- It does GET Requests by default.
- It supports other methods as well.
- It returns a Promise.

This is how you can use it:
```jsx
const url = 'https://www.course-api.com/react-tours-project'

console.log(fetch(url)) // This returns 'Promise(<pending>)

fetch(url) // Do a GET request
  .then((resp) => console.log(resp)) // Take the COMPLETE request
  .catch(err => console.log(err)) // Catch the error if there is one

fetch(url)
  .then((resp) => resp.json()
  .then(data => console.log(data))) // This is how you display the JSON request
  .catch(err => console.log(err))

// How to do a request with async()
const getTours = async() => {
  try {
    const resp = await fetch(url)
    return resp.json()
    
  } catch (error) {
    console.log(error);
  }
}

getTours().then()


```

## Fetch Data
> **Time stamp:** 6:02:57 

You can see the [code here](03-advanced-react\src\tutorial\02-useEffect\final\04-fetch-data.jsx)

## Multiple Returns - Basic
> **Time stamp:** 6:17:15

In Vanilla JS we can setup multiple returns, and we can make the same in React:
```jsx
import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect (() => {
    setTimeout(() => {
      // Done Fetching data
      setIsLoading(false);
    }, 3000)
  })

  // After 3 seconds, the webiste "will be loaded"
  if(isLoading){
    return <h2>Loading...</h2>;
  }
  return <h2>Multiple Returns Basics</h2>;
};
export default MultipleReturnsBasics;
```

## Multiple Returns - Fetch Data - Fetch Errors "Gotcha"
> **Time stamp:** 6:22:54

You can see the [code here](03-advanced-react\src\tutorial\03-conditional-rendering\final\02-multiple-returns-fetch-data.jsx)


## Order Matters
> **Time stamp:** 6:40:40

Nothing important here, just that you should start working with the variables that fetches data on your component after you have modified the state, **not before**

## Truthy and Falsy Values
> **Time stamp:** 6:51:45

Maybe you can [read this](https://www.freecodecamp.org/news/what-are-falsey-values-in-javascript)

## Short Circuit Evaluation
> ** Time stamp:** 6:53:55

In JavaScript, short-circuit evaluation is a techinque that allows you to use logical operators (such as && and ||) to perform conditional evaluations in a concise way.

The && operator returns the first operand if it is "falsy", or the second operand if the first operand is "thruthy"

For example:
```javascript
const x = 0;
const y = 1;

console.log(x && y) // Output: 0 (First operand)
console.log(y && x) // Output: 0 (Second operand)
```

The || operator (logical OR) returns the first operand if it is "thruty", or the second operand if the first operand is "falsy"

For example:
```javascript
const x = 0;
const y = 1;

console.log(x || y) // Output: 1 (First operand)
console.log(y || x) // Output: 1 (Second operand)
```
Short-circuit evaluation can be useful in cases where you want to perform a certain action only if a certain condition is met, or you want to return a default value if a certain condition is not met.

For example:

```js
function displayName(name) {
  return name || 'Anonymous';
}

console.log(displayName('Pizza')); // Output: "Pizza"
console.log(displayName()); // Output: "Anonymous"
```

In this example, the displayName() function returns the name property of the user object if it exists, or "Anonymous" if the name property is not present. This is done using the || operator and short-circuit evaluation.

## Short Circuit Evaluation React - Basics
> **Time stamp:** 6:57:05

Here we apply the last topic in React code. You can see the [code here](03-advanced-react\src\tutorial\03-conditional-rendering\final\04-short-circuit-overview.jsx)

## Short Circuit Evaluation React - Common Approaches
> **Time stamp:** 7:02:15

Here we keep applying the last topic in React code. You can see the [code here](03-advanced-react\src\tutorial\03-conditional-rendering\final\05-short-circuit-examples.jsx)f

But this is important, with this approach you can return components:
```jsx
// If the user exists, then build the component
{user && <SomeComponent name={user.name} / >}
```

## Ternary Operator
> **Time stamp:** 7:10:00

Vanilla JS

In JavaScript, the ternary operator is a way to concisely express a simple conditional statement. It is often called the "conditional operator" or the "ternary conditional operator".

Here is the basic syntax for using the ternary operator:

```js
condition ? expression1 : expression2;
```

If condition is truthy, the operator will return expression1. If condition is falsy, it will return expression2.

Jobster Example

[Jobster ](https://redux-toolkit-jobster.netlify.app/landing)

You can do things like this:
```jsx
// True = edit --- False = add
<button>{isEditing ?'edit':'add'}</button>
```

or:
```jsx
{user ? (<div>
      <h4> hello there user {user.name} </h4>
    </div>
  ) : (
    <div>
      <h4> Please, login </h4>
    </div>
  )}
```


## Toggle Challenge
> **Time stamp:** 7:14:24

This was my solution:
```
/*
- Create state value (boolean)
- Return a button and a component/element
- When user clicks the button
  - Toggle state value
  - Conditionally render component/element
*/

import { useState, useEffect } from 'react'

const ToggleChallenge = () => {

  const [isGreeting, setIsGreeting] = useState(false)

  return (
    <div>
      <h2>toggle challenge</h2>
      <button onClick={() => setIsGreeting(!isGreeting)}>{!isGreeting ? 'Press for hello!' : 'Nice to greet you!'}</button>
      {isGreeting ? (
        <h3>Hello Dear User! </h3>
      ) : (null)}
    </div>);
};

export default ToggleChallenge;

```

You can see the [code here](03-advanced-react\src\tutorial\03-conditional-rendering\final\06-toggle-challenge.jsx)

## User Challenge
> **Time stamp:** 7:21:00

You can see the [code here](03-advanced-react/src/tutorial/03-conditional-rendering/final/07-user-challenge.jsx). I was lazy :p






