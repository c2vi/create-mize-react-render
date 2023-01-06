import React from "react";
import reactDom from "react-dom";
import App from "./App";

class Test extends HTMLElement {
	  connectedCallback() {
		      const mountPoint = document.createElement('span');
		      this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

		      //const root = ReactDOM.createRoot(mountPoint);
		      //root.render(<App />);
		  		reactDom.render(<App />, mountPoint);
		    }
}
mize.defineRender(Test)
