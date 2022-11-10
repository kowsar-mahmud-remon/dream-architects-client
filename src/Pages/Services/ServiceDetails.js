import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import AllReviews from './AllReviews';

const ServiceDetails = () => {
  const [allReviews, setAllReviews] = useState([]);
  const { user } = useContext(AuthContext);
  const { _id, img, price, title, description } = useLoaderData();
  useTitle('Service details');

  const handleReview = (event) => {
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

    fetch('https://dream-architects-server.vercel.app/review', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(reviewDetails)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.acknowledged) {
          alert('review successfully');
          form.reset();
        }
      })
      .catch(error => console.error(error));


  };

  useEffect(() => {
    fetch(`https://dream-architects-server.vercel.app/reviews?service=${_id}`)
      .then(res => res.json())
      .then(data => setAllReviews(data));
  }, [_id]);

  return (
    <div className="">
      <div className="card card-compact bg-base-100 shadow-xl md:w-1/2 mx-auto my-10">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className='text-2xl text-indigo-600 font-semibold'>Price: ${price}</p>
          <div className="card-actions justify-end">
            {description}
          </div>
        </div>
      </div>

      <div className="my-10">
        {
          user?.uid ?
            <form onSubmit={handleReview}>
              <textarea name='review' className="textarea textarea-bordered h-24 w-full my-3" placeholder="Add a Review" required></textarea>
              <br />
              <input className='btn btn-secondary' type="submit" value="Review" />
            </form>
            :
            <p className='text-4xl text-center'>Please <Link to='/login' className='text-secondary'>Login</Link> to add a review</p>
        }

      </div>

      <div className="">
        <div className="overflow-x-auto w-full my-10">
          <table className="table w-full">
            {/* <thead>
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
            </thead> */}
            <tbody>
              {
                allReviews.map(allReview => <AllReviews
                  key={allReview._id}
                  allReview={allReview}
                ></AllReviews>)
              }
            </tbody>

          </table>
        </div>
      </div>

    </div>
  );
};

export default ServiceDetails;