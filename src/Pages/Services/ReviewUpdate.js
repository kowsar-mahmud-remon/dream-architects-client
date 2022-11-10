import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReviewUpdate = () => {
  const { user } = useContext(AuthContext);
  const { _id, img, price, title, description } = useLoaderData();

  // const [newReview, setNewReview] = useState();


  const handleUpdateReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = user?.displayName || 'unregistered';
    const photoURL = user?.photoURL || 'unregistered';
    const email = user?.email || 'unregistered';
    const review = form.review.value;

    const reviewDetails = {
      service: _id,
      serviceName: title,
      price,
      customerName: name,
      customerImg: photoURL,
      email,
      review
    };

    fetch(`http://localhost:5000/review/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(reviewDetails)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          // alert('user updated');

          toast('Updated Successfully!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          console.log(data);
          event.target.reset();
        }
      });

  };


  return (
    <div className='mb-20'>
      <h2 className='text-4xl text-center my-10'>Please Update Your Review</h2>
      <form onSubmit={handleUpdateReview} className='w-full lg:w-3/4 mx-auto'>
        <textarea name='review' className="textarea textarea-bordered h-24 w-full my-3" placeholder="Add a Review" required></textarea>
        <br />
        <input className='btn btn-secondary' type="submit" value="Update Review" />
      </form>
      <ToastContainer />
    </div>
  );
};

export default ReviewUpdate;