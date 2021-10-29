import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Posts from '../components/Posts';

function Home() {
  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
  });

  useEffect( () => {
    const apiURL = "https://jsonplaceholder.typicode.com/posts";
    setAppState({ loading: true });
    axios.get(apiURL).then(repos => {
      const allRepos = repos.data.slice(0,5);
      setAppState({loading: false, posts: allRepos});
    })
  }, [setAppState]);

  return (
      <Posts isLoading={appState.loading} posts={appState.posts}/>
  );

}
export default Home;
