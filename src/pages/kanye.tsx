import { NextPage } from 'next/types';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getAll } from '../features/posts';
import { wrapper } from '../app/store';

const kanye: NextPage = () => {
  const dispatch = useAppDispatch();

  const { isLoading, posts, error} = useAppSelector((state) => state.posts);

  return (
    <div>
      <h2>Generate random Kanye West quote</h2>
      {isLoading && <p>Loading...</p>}
     
      <div>
          {isLoading ? (
            "loading .... "
          ) : (
            <div>
              <ul>
                {posts.map((item, index) => (
                  <li key={index}>{item.title}</li>
                ))}
              </ul>
            </div> 
          )}
        </div>
      {error && <p>Oops, something went wrong</p>}
    </div>
  );
};

kanye.getInitialProps = wrapper.getInitialPageProps(
  ({ dispatch }) =>
    async () => {
      await dispatch(getAll());
    }
);

export default kanye;
