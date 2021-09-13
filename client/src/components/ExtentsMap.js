import React from 'react';
import config from '../config/map';
import { loadMap, showItemsOnMap } from '../utils/map';

class ExtentsMap extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.items,"items");
    // a ref to the DOM node where we want to create the map
    // see: https://reactjs.org/docs/refs-and-the-dom.html
    this.mapNode = React.createRef();
  }

  // show items on the map w/ the symbol and popupTemplate from the config
  showItems() {
    const { symbol, popupTemplate } = config.itemExtents;
    showItemsOnMap(this._view, this.props.items, symbol, popupTemplate);
  }

  // react lifecycle methods
  // wait until after the component is added to the DOM before creating the map
  componentDidMount() {
    // create a map at this element's DOM node
    loadMap(this.mapNode.current, config.options).then(view => {
      
      this._view = view;
      // show the initial items on the map
      this.showItems();
    });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.items !== this.props.items && this._view) {
      this.showItems();
    }
  }
  // destroy the map before this component is removed from the DOM
  componentWillUnmount() {
    if (this._view) {
      this._view.container = null;
      delete this._view;
    }
  }
  render() {
    return <div className="extents-map" data-testid="map" ref={this.mapNode} />;
  }
}

export default ExtentsMap;
