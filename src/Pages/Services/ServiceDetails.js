import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const { _id, img, price, title, description } = useLoaderData();

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

    fetch('http://localhost:5000/review', {
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

      <div className="">
        <form onSubmit={handleReview}>
          <textarea name='review' className="textarea textarea-bordered h-24 w-full my-3" placeholder="Add a Review" required></textarea>
          <br />
          <input className='btn btn-secondary' type="submit" value="Review" />
        </form>

      </div>
    </div>
  );
};

export default ServiceDetails;