import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
  useTitle('Add Service');
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const price = form.price.value;
    const description = form.description.value;

    const service = {
      title: name,
      img: photoURL,
      price: price,
      description: description
    };

    fetch('http://localhost:5000/services', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(service)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.acknowledged) {

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

          form.reset();
        }
      })
      .catch(error => console.error(error));

  };
  return (
    <div className='mb-20'>
      <form onSubmit={handleAddService}>
        <h2 className='text-4xl text-center my-10'>Add New Service</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input name='name' type="text" placeholder="Service name" className="input input-ghost input-bordered w-full" required />
          <input name='photoURL' type="text" placeholder="Photo URL" className="input input-ghost input-bordered w-full" required />
          <input name='price' type="text" placeholder="Price" className="input input-ghost input-bordered w-full" required />
          <input name='description' type="text" placeholder="Description" className="input input-ghost input-bordered w-full" required />
        </div>
        <input className='btn btn-secondary my-5' type="submit" value="Add New Service" />
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddService;