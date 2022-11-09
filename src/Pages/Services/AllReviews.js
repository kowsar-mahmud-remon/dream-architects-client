import React from 'react';

const AllReviews = ({ allReview }) => {
  const { _id, serviceName, price, email, customerName, customerImg, review } = allReview;
  return (
    <tr>
      <th>
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
      </th>
    </tr>
  );
};

export default AllReviews;