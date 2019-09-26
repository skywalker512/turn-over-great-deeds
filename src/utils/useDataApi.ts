import { useState, useEffect, useRef } from 'react';

const useFetch = (initialUrl: string, initialData: any) => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const didCancel = useRef<boolean>();
  useEffect(() => {
    didCancel.current = false;
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        let body;
        if (initialData) {
          const formBody = [];
          // eslint-disable-next-line guard-for-in,no-restricted-syntax
          for (const property in initialData) {
            const encodedKey = encodeURIComponent(property);
            const encodedValue = encodeURIComponent(initialData[property]);
            formBody.push(`${encodedKey}=${encodedValue}`);
          }
          body = formBody.join('&');
        }

        const result = await fetch(`http://94.191.3.170:8085${url}`, {
          method: initialData ? 'POST' : 'GET',
          mode: 'cors',
          credentials: 'include',
          body: initialData ? body : null,
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            token: localStorage.getItem('id_token') || '',
          },
        });

        if (!didCancel.current) {
          setData(result);
        }
      } catch (error) {
        if (!didCancel.current) {
          setIsError(true);
        }
      }

      setIsLoading(false);
    };

    fetchData().catch(() => {
      setIsError(true);
    });

    return () => {
      didCancel.current = true;
    };
  }, [initialData, url]);

  const doFetch = (_url: string) => {
    setUrl(_url);
  };

  return [data, isLoading, isError, doFetch];
};

export default useFetch;
