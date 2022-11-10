import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import ReviewDetails from './ReviewDetails';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../hooks/useTitle';

const Review = () => {
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useTitle('My Review');


  useEffect(() => {
    fetch(`http://localhost:5000/review?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then(data => {
        setReviews(data);
      });
  }, [user?.email, logOut]);

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

            toast('Deleted Successfully!', {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });

            const remaining = reviews.filter(rvu => rvu._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  return (
    <div className=' mb-32'>
      {
        reviews.length ?

          <div className="overflow-x-auto w-full my-10">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Delete</th>
                  <th>Name</th>
                  <th>Service Name</th>
                  <th>Review</th>
                  <th>Update</th>
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
          :
          <h2 className='text-5xl text-center py-52'>No reviews were added</h2>
      }
      <ToastContainer />

    </div>
  );
};

export default Review;