const Search = (props) => {
  // console.log(props);

  const changeFind = props.changeFind;

  return (
    <header>
      <h1>😎 Emoji Search 😎</h1>
      <input
        onChange={(event) => {
          changeFind(event.target.value);
        }}
        type="text"
        placeholder="what emoji are you looking for ?"
      />
    </header>
  );
};

export default Search;
