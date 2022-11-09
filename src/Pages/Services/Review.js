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

  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure, you delete your review?');
    if (proceed) {
      fetch(`http://localhost:5000/review/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert('Deleted Successfully');
            const remaining = reviews.filter(rvu => rvu._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

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
                handleDelete={handleDelete}
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