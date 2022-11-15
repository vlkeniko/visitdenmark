/*
 * Element Item
 * General component for every type of location
 *
 */

export default function ElementItem({ element }) {
  console.log(element);

  function handleDescription() {
    console.log(element.Descriptions[0].Text);
    //TODO build description modal?
  }

  return (
    <div className="card">
      <div>{element.Name}</div>
      <div>{`${element.Address.AddressLine1}${
        element.Address.AddressLine2 ? ", " + element.Address.AddressLine2 : ""
      }, ${element.Address.PostalCode} ${element.Address.City}`}</div>
      <div id="description-modal" onClick={handleDescription}>
        See description {">"}
      </div>
    </div>
  );
}
