import React from 'react';
import { connect } from "react-redux";

import CustomButton from "../custom-btn/custom-btn.component";
import { addItem } from '../../redux/cart/cart.actions';

import { AddButton, CollectionItemContainer, CollectionFooterContainer, BackgroundImage, NameContainer, PriceContainer } from "./collection-styles.styles";

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton  onClick={()=>addItem(item)} inverted> Add to Cart </AddButton>
    </CollectionItemContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item=> dispatch(addItem(item)) //dispatch redux action item to new item 
})

export default connect(null, mapDispatchToProps)(CollectionItem);