import React, { useState } from "react";
import { AutocompleteSearch } from "./AutocompleteSearch";

export const Review = () => {
  const [selectedMovie, setSelectedMovie] = useState<any>(null);

  const handleMovieSelect = (movie: any) => {
    setSelectedMovie(movie);
  };

  const handleReviewSubmit = (event: any) => {
    event.preventDefault();
    // Submit the review
  };

  return (
    <div>
      <h2>Write a Review</h2>
      <form onSubmit={handleReviewSubmit}>
        <div>
          <label>
            Movie:
            <AutocompleteSearch onSelect={handleMovieSelect} />
          </label>
        </div>
        {selectedMovie && (
          <div>
            <h3>Selected Movie: {selectedMovie?.title}</h3>
            {/* Additional review form fields */}
            {/* Submit button */}
          </div>
        )}
      </form>
    </div>
  );
};
