export default function SearchBar({
  filterText,
  onFilterTextChange
}) {
  return (
    <form>
      <input 
        type="select" 
        value={filterText} placeholder="Search..." 
        onChange={(e) => onFilterTextChange(e.target.value)} />

    </form>
  );
}

