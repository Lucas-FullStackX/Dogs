import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiCall, search } from "../../store/actions";
const Search = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  useEffect(() => {
    dispatch(apiCall(`?name=${name}`));
  }, [name]);
  function handleChange(event) {
    setName(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div>
      <form className="findContainer" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <input
            type="text"
            id="breedName"
            autoComplete="off"
            placeholder="Search..."
            value={name}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <input type="reset" value="=>" onChange={() => dispatch(search())} />
      </form>
    </div>
  );
};

export default Search;
