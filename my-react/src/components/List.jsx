import React from "react";

function List(props) {
  return (
    <>
      <h3>
        Site name : <p>{props.siteName}</p>
      </h3>
      <h3>
        Address :
        <p>
          {props.streetName} {props.streetNum}, {props.city} {props.zipCode}
        </p>
      </h3>
    </>
  );
}

export default List;
