import useSWR from 'swr';

// const fetcher = (url: string) => fetch(url).then((res) => res.json());
const url = "api";

const fetchData = (url: string) => {
  return fetch(url).then(response => {
    
      if (!response.ok) 
        throw new Error('Network response was not ok');

      return response.json();
    });
};

export const useQuestions = () => {
  const { data, error } = useSWR(url, fetchData);

  return { data, error };
};




