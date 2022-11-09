import React from 'react';

const Blog = () => {
  return (
    <div className=' mb-28 mt-10'>
      <h2 className='text-4xl text-center my-14 font-bold'>Blog Section</h2>
      <div className="card card-compact w-full bg-base-200 shadow-xl mb-10 p-5">
        <div className="card-body">
          <h2 className="card-title text-3xl">Difference between SQL and NoSQL</h2>
          <p className=' text-lg'>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
        </div>
      </div>

      <div className="card card-compact w-full bg-base-200 shadow-xl mb-10 p-5">
        <div className="card-body">
          <h2 className="card-title text-3xl">What is JWT, and how does it work?</h2>
          <p className=' text-lg'>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. JWTs are digitally signed using either a secret (HMAC) or a public/private key pair (RSA or ECDSA) which safeguards them from being modified by the client or an attacker. Stored only on the client: You generate JWTs on the server and send them to the client. The client then submits the JWT with every request.</p>
        </div>
      </div>

      <div className="card card-compact w-full bg-base-200 shadow-xl mb-10 p-5">
        <div className="card-body">
          <h2 className="card-title text-3xl">What is the difference between javascript and NodeJS?</h2>
          <p className=' text-lg'>JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
        </div>
      </div>

      <div className="card card-compact w-full bg-base-200 shadow-xl mb-10 p-5">
        <div className="card-body">
          <h2 className="card-title text-3xl">How does NodeJS handle multiple requests at the same time?</h2>
          <p className=' text-lg'>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
        </div>
      </div>

    </div>
  );
};

export default Blog;