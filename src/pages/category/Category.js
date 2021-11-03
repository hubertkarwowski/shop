import React, { useEffect } from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/CollectionItem/CollectionItem";

import { selectCollection } from "../../redux/shop/shopSelector";

import { firestore } from "../../firebase/firebase-utils";

import "./Category.scss";

const CollectionPage = ({ collection }) => {
  useEffect(() => {
    console.log("sub");
    const unsubscribeFromCollections = firestore
      .collection("collections")
      .onSnapshot((snapshot) => console.log(snapshot));
    return () => {
      console.log("unsub");
      unsubscribeFromCollections();
    };
  }, []);
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
