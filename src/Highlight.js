export default function Highlight({ text, searchText }) {
  if (!searchText || !text) return <span>{text}</span>;

  const parts = text.split(new RegExp(`(${searchText})`, 'gi'));

  return (
    <span>
      {parts.map((part, i) =>
        part.toLowerCase() === searchText.toLowerCase() ? (
          <mark key={i} className="search-highlight">{part}</mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
}