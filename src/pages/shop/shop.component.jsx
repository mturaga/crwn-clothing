import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import SHOP_DATA from "./shop.data.js";

class ShopPage extends React.Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    console.log(collections);
    return (
      <div>
        {collections.map(({ id, ...otherCollectionPreviewProps }) => (
          <CollectionPreview key={id} {...otherCollectionPreviewProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
