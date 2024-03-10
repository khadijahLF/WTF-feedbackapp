

import React from 'react';
import ReviewList from '../ReviewList/';
import data from '../../data/reviewData';

function ListReview() {
  return (
    <div class="allreviewCard">
      <h1>Reviews</h1>
      <ReviewList reviews={data} />
    </div>
  );
}

export default ListReview;
