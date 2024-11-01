import React, { useState } from 'react';
import Button from '../../components/shared/button/Button';

const GenreAddPage = () => {
  const [genre, setGenre] = useState({
    name: '',
  });

  return (
    <div>
      <form>
        <label>Name</label>
        <input type="text" placeholder="Enter genre name"></input>
        <Button text="Add" type="submit" />
      </form>
    </div>
  );
};

export default GenreAddPage;
