import { useState, useEffect, useRef } from 'react';

function useFetch<T>(initialUrl: string, initialData: T, postData?: any) {
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
        if (postData) {
          const formBody = [];
          // eslint-disable-next-line guard-for-in,no-restricted-syntax
          for (const property in postData) {
            const encodedKey = encodeURIComponent(property);
            const encodedValue = encodeURIComponent(postData[property]);
            formBody.push(`${encodedKey}=${encodedValue}`);
          }
          body = formBody.join('&');
        }
        const result = await fetch(`${process.env.REACT_APP_BE_URL}${url}`, {
          method: postData ? 'POST' : 'GET',
          body: postData ? body : null,
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            token: localStorage.getItem('id_token') || '',
          },
        });

        if (!didCancel.current) {
          result.json().then(a => setData(a));
        }
      } catch (error) {
        if (!didCancel.current) {
          setIsError(true);
        }
      }

      setIsLoading(false);
    };
    fetchData();

    return () => {
      didCancel.current = true;
    };
    // eslint-disable-next-line
  }, [url]);

  const doFetch = (_url: string) => {
    setUrl(_url);
  };

  return {
    data,
    isLoading,
    isError,
    doFetch,
  };
}

export const usePassTime = () =>
  useFetch('/allTime', {
    One: -1,
    Two: -1,
    Three: -1,
    Four: -1,
    Five: -1,
  });

export const useRank = () =>
  useFetch('/allRank', [
    {
      OpenId: '',
      NickName: '',
      Total: -1,
    },
  ]);

export const usePass = (stepNum: number, time: number) => {
  const number = ['one', 'two', 'three', 'four', 'five'];
  const step = number[stepNum - 1];
  return useFetch('/pass', { isRecord: false, time: -1 }, { step, time });
};

export const usePassAll = () =>
  useFetch('/addTotal', {
    rank: -1,
    totalTime: -1,
  });

export default useFetch;
