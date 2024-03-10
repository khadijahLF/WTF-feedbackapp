import React from 'react';
import { Link } from 'react-router-dom';

const BtnComponent = () => {
  return (
    <div className="review-link">
      <Link to="/listreview">
        <button type='button' className="btn btn-secondary">
          See review list
        </button>
      </Link>
    </div>
  );
};

export default BtnComponent;
