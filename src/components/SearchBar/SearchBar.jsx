
const SearchBar = ({ onSearch }) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const searchValue = event.currentTarget.elements.search.value;
        if (searchValue === '') {
            return;
        } else {
            onSearch(searchValue);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    autoComplete="off"
                    name="search"
                    autoFocus
                    placeholder="Search movie"
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar
