import React, { useState } from "react";

const Search = ({getQuery}) => {

    const [search, setSearch] = useState('')

       const onChange = (q) => {
           setSearch(q)
           getQuery(q)

       }

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          value = {search}
          onChange= {(e) => onChange(e.target.value)}
          autoFocus
        >
         
        </input>
      </form>
    </section>
  );
};

export default Search;
