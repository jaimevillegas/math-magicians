import { useEffect, useState } from 'react';

const baseURL = 'https://api.api-ninjas.com/v1/quotes';
export default function Quote() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(null);

  const fetchingAPI = async () => {
    try {
      setLoading(true);
      await fetch(`${baseURL}/?category=life`, {
        method: 'GET',
        headers: { 'X-API-KEY': 'h1bUd0geh3MfKEKGB95BHzzlyV5lrmb80u5pzx7Y' },
        contentType: 'application/json',
      })
        .then((res) => res.json())
        .then((res) => setData(res));
      setLoading(false);
    } catch (error) {
      setHasError(true);
    }
  };

  useEffect(() => {
    fetchingAPI();
  }, []);

  if (hasError) return <div>Something went wrong!</div>;

  return (
    <div title="quote-container" className="quote-container">
      {!loading
        ? (
          <>
            Quote:
            {' '}
            {data ? data[0].quote : ''}
            {' '}
            <br />
            Author:
            {' '}
            {data ? data[0].author : ''}
            {' '}

          </>
        )
        : 'Loading Quote'}
    </div>

  );
}
