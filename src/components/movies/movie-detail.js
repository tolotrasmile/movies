import React from 'react';
import { createCache, createResource } from 'react-cache';
import { movieDetails } from '../../query';

const cache = createCache();
const result = createResource(movieDetails);

export default function MovieDetail({ id }) {
  const movie = result.read(cache, id);
  return (
    <div>
      <pre>{JSON.stringify(movie, null, 4)}</pre>
    </div>
  );
}
