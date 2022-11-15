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
    <div className="sub-card">
      <div className="owo">
      <img
        className="subc-image"
        src={element.Files[0]?.Uri}
        alt={element.Files[0]?.AltText}
      />
      </div>
  
      <div className="uwu">
        <h1>{element.Name}</h1>
        <p>{`${element.Address.AddressLine1 ? element.Address.AddressLine1 : "" }${
          element.Address.AddressLine2
            ? `${element.Address.AddressLine1 ? "," : ""}` + element.Address.AddressLine2
            : ""
        }${element.Address.AddressLine2 + element.Address.AddressLine1 ? "," : ""} ${element.Address.PostalCode} ${element.Address.City}`}</p>
        <p id="description-modal" onClick={handleDescription}>
          See description {">"}
        </p>
      </div>

      {/* If a gallery is needed: {element.Files.map((picture) => <img src={picture.Uri} alt={picture.AltText}/>)} */}
    </div>
  );
}
