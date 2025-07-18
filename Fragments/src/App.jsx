import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // A Fragment is a wrapper that lets you group multiple elements without adding extra nodes to the DOM.

  // In React, components must return a single parent element.
  // So if you want to return multiple siblings (like <h1> and <p>), you need to wrap them.
  return (
    // <h1>Hello</h1>
    // <h1>Fragments</h1>   // This will cause an error because there are multiple root elements.

    // <div>
    //   <h1>Hello</h1>
    //   <h1>Fragments</h1>
    //   <ul className="list-group">
    //     <li class="list-group-item">React</li>
    //     <li class="list-group-item">Angular</li>
    //     <li class="list-group-item">Vue</li>
    //     <li class="list-group-item">Svelte</li>
    //     <li class="list-group-item">Ember</li>
    //     <li class="list-group-item">Backbone</li>
    //   </ul>
    // </div>

    // it's not right way beacuse it adds an extra <div> to the DOM then use <React.Fragment> or the shorthand <> </> to avoid this.

    // <>
    //   <h1>Hello</h1>
    //   <h1>Fragments</h1>
    //   <ul className="list-group">
    //     <li class="list-group-item">React</li>
    //     <li class="list-group-item">Angular</li>
    //     <li class="list-group-item">Vue</li>
    //     <li class="list-group-item">Svelte</li>
    //     <li class="list-group-item">Ember</li>
    //     <li class="list-group-item">Backbone</li>
    //   </ul>
    // </>

    <React.Fragment>
      <h1>Hello</h1>
      <h1>Fragments</h1>
      <ul className="list-group">
        <li class="list-group-item">React</li>
        <li class="list-group-item">Angular</li>
        <li class="list-group-item">Vue</li>
        <li class="list-group-item">Svelte</li>
        <li class="list-group-item">Ember</li>
        <li class="list-group-item">Backbone</li>
      </ul>
    </React.Fragment>

    // Most prefer shorthand syntax for fragments, which is just empty tags <> </>.
  );
}

export default App;
