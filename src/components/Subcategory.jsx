/* Subcategory component
 * Returns a subcategory or in the case of events, returns the events themselves
 */

export default function Subcategory({ subcategory }) {
  return (
    <div className="card">
      <div>{subcategory.Name}</div>
      {/* If the id is 58, we are looking at an event, and in that case we get the first available image
      from the event's gallery */}
      {subcategory.MainCategory?.Id === 58 ? (
        <img
          alt={subcategory.Files[0]?.AltText}
          src={subcategory.Files[0]?.Uri}
        />
      ) : (
        ""
      )}
    </div>
  );
}
