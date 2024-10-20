import module from "./SearchBar.module.css";

const SearchBar = ({ onSearch, setInputIsEmpty }) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const searchValue = event.currentTarget.elements.search.value.trim();
        if (searchValue === '') {
            setInputIsEmpty(true);
        } else {
            onSearch(searchValue);
        }
    }

    return (
        <div className={module.searchDiv}>
            <form className={module.searchForm} onSubmit={handleSubmit}>
                <input
                    className={module.searchInput}
                    type="text"
                    autoComplete="off"
                    name="search"
                    autoFocus
                    placeholder="Search movie"
                />
                <button className={module.searchBtn} type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar;
