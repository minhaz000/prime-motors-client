import React from 'react';

function Blog(props) {
  return (
    <div className=' min-h-screen px-10 mx-auto py-20'>
       
       <div> 
        <h1 className=' text-green-500 text-2xl'> #. What are the different ways to manage a state in a React application? </h1>
        <p>
          <strong>Local (UI) state –  </strong> <br /> Local state is data we manage in one or another component.
          Local state is most often managed in React using the useState hook.
          For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.
            <br />
          <strong>Global (UI) state – </strong>    <br /> Global state is data we manage across multiple components.
          Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
          A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.
        </p>
       </div>

       <div className='mt-10'> 
        <h1 className=' text-green-500 text-2xl'> #. How does prototypical inheritance work? </h1>
        <p>
          <strong>prototypical –  </strong> <br /> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the '[[Prototype]]' of an object, we use Object. getPrototypeOf and Object.J
      </p>
       </div> 
       
       <div className='mt-10'> 
        <h1 className=' text-green-500 text-2xl'> #. How does prototypical inheritance work? </h1>
        <p>
          <strong>prototypical –  </strong> <br />
          The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
      </p>
       </div>

          <div className='mt-10'> 
              <h1 className=' text-green-500 text-2xl'> #. React vs. Angular vs. Vue? </h1>
              <p> <br />
            <strong>Angular : </strong> Developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework. A substantial shift occurred in 2016 on the release of Angular 2 (and the dropping of the “JS” from the original name – AngularJS). Angular 2+ is known as just Angular. Although AngularJS (version 1) still gets updates, we will focus the discussion on Angular.
            <br /><br />
          <strong>Vue : </strong> Vue , also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014. Over the last several years, Vue has seen a substantial shift in popularity, even though it doesn’t have the backing of a large company. The most current version is always announced on the official Vue website on their releases page. Contributors for Vue are supported by Patreon. It should be noted that Vue also has its own GitHub repo, and functions using TypeScript.
            Further reading: Vue.js Tutorial for Beginner Developers
            <br /><br />
            <strong>React : </strong> Developed by Facebook, was initially released in 2013. Facebook uses React extensively in their products (Facebook, Instagram, and WhatsApp). Similar to Vue, the React developers also announce their newest version on the blog section of the React website.


              </p>
            </div>


       
    </div>
  );
}

export default Blog;