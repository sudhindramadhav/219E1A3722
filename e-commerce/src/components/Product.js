import React, { useState, useEffect } from 'react';

const Product = () => {
  const [primes, setPrimes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrimes = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://20.244.56.144/test/primes', {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE2NjE1MTUxLCJpYXQiOjE3MTY2MTQ4NTEsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjczOTM5OTg3LTdlOTItNDIxNS1hMjU3LWRmMGViZWFkYTRkYyIsInN1YiI6Imsuay5tLnN1ZGhpbmRyYUBnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJnb01hcnQiLCJjbGllbnRJRCI6IjczOTM5OTg3LTdlOTItNDIxNS1hMjU3LWRmMGViZWFkYTRkYyIsImNsaWVudFNlY3JldCI6Im1JeHhMZVB4SkRxdFlqYWIiLCJvd25lck5hbWUiOiJTdWRoaW5kcmEiLCJvd25lckVtYWlsIjoiay5rLm0uc3VkaGluZHJhQGdtYWlsLmNvbSIsInJvbGxObyI6IjIxOUUxQTM3MjIifQ.zrThwoKubbS9dFYxAbDFUOATqsbJHJM3MnEAX_9B3oo'
          }
        });
        const data = await response.json();
        setPrimes(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPrimes();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Prime Numbers</h1>
      <ul>
        {primes.map((prime, index) => (
          <li key={index}>
            <h2>Prime: {prime.number}</h2>
            <p>Value: {prime.value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
