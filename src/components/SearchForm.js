import React, { useState } from "react";

export default function SearchForm(props) {
 


  return (
    <section className="search-form">
      <label htmlFor="name">Search: </label>
     <form>
      <input 
      id="name"
      type="text"
      name="textfield"
      placeholder="Search"
      
      />

     </form>
    </section>
  );
}
