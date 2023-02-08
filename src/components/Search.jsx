import {useState, useEffect} from 'react';
import { FetchReviews } from './FetchData';

export default function Search() {


  return (
    <section className="container_search">
      <form>
        <input type="text" placeholder="Enter Search Criteria" />
        <button>Search</button>
      </form>
    </section>
  );
}
