import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const Review = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState({});


  useEffect(() => {
    fetch(`http://localhost:5000/review?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setReviews(data));
  }, [user?.email]);

  return (
    <div>
      <h2 className='text-5xl'>You have {reviews.length} Reviews</h2>
    </div>
  );
};

export default Review;