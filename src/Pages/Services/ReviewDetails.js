import React from 'react';
import { Link } from 'react-router-dom';

const ReviewDetails = ({ allReview, handleDelete }) => {
  const { _id, serviceName, price, email, customerName, customerImg, review, service } = allReview;
  console.log('new', _id);

  return (
    <tr>
      <th>
        <label>
          <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
              <img src={customerImg} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{customerName}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        <br />
        <span className="badge badge-ghost badge-sm">${price}</span>
      </td>
      <td>{review}</td>
      <th>
        <Link to={`/update/${_id}`}><button className="btn btn-ghost">Edit Review</button></Link>
      </th>
    </tr>
  );
};

export default ReviewDetails;