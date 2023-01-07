import React from "react";
import { useState } from "react";
//import reactDom from "react-dom";
import { createRoot } from 'react-dom/client';
import Render from "./Render";
//import { createContainer } from 'react-tracked';

let useItem = {}
let useThisItem = {}

const hi = "hi"
const hello = "hello from index.js"

class Test extends HTMLElement {
	connectedCallback() {

		const mountPoint = document.createElement('span');
		this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

		//state with react-tracked ... doesn't work
		//const itemState = () => useState({});
		//const { ItemProvider: SharedStateProvider, useTracked: useSharedState } = createContainer(itemState);
		//const container = createContainer(itemState);
		//const ItemProvider = container.Provider
		//const useShared = container.useTracked

		this.items = {}
		this.id = mize.id_to_render

		//the hook for the item, we are rendering
		useItem = () => {
			if (arguments.length == 0){
				const [state, setState] = useState({_id: "hi"})
				this.items[this.id] = {item: state, setItem: setState}
				return [state, setState]

			} else {
				//get another item
				//TODO
			}
		}

		//rendering to the webcomponent
		const root = createRoot(mountPoint); // createRoot(container!) if you use TypeScript

		root.render(
			//<ItemProvider>
				<Render />
			//</ItemProvider>
		);
	}

	getItemCallback(item_raw){
		this.item_raw = item_raw
		//this.items[item_raw.id].setItem((prev) => ({...prev, ...item_raw.get_parsed(), hi: "hello hi"}))
		this.items[item_raw.id].setItem((prev) => ({ ...prev, ...item_raw.get_parsed()}));
	}

	updateCallback(update){
		this.item_raw = update.now
		this.items[update.now.id].setItem((prev) => ({ ...prev, ...update.now.get_parsed()}));
	}
}

export {useItem, hello}
mize.defineRender(Test)
