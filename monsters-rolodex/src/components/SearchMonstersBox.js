const SearchMonstersBox = (props) => {

  const { onChange } = props;

  return (
    <input
      className="my-3 p-2 rounded-lg border-2 border-lime-500 focus:outline-none focus:border-lime-600"
      type="search"
      placeholder={props.placeholder}
      onChange={onChange}
      />
    );
}

export default SearchMonstersBox;