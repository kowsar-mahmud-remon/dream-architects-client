import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import ReviewDetails from './ReviewDetails';

const Review = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/review?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setReviews(data));
  }, [user?.email]);

  return (
    <div>
      <h2 className='text-5xl'>You have {reviews.length} Reviews</h2>
      <div className="overflow-x-auto w-full my-10">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Service Name</th>
              <th>Review</th>
              <th>Review</th>
            </tr>
          </thead>
          <tbody>
            {
              reviews.map(allReview => <ReviewDetails
                key={allReview._id}
                allReview={allReview}
              ></ReviewDetails>)
            }
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default Review;