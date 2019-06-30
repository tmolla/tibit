import React from "react";

function Form({ query, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>search word</strong>
        </label>
        <input
          className="form-control"
          id="Title"
          type="text"
          value={query}
          placeholder="Type word to search for in Tibits"
          name="q"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-danger float-right"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
