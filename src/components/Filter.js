import React from 'react';

function Filter({filterValue, filterInput}) {

  return (
    <label>
        Find contacts by name <br/>
        <input type="text" name="filter" value={filterValue} onChange={e => filterInput(e)} />
    </label>
  );
}

export default Filter;