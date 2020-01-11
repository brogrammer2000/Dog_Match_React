import React from "react";
import { Link } from "react-router-dom";

function HomeBody() {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
        omnis quo cumque, iste sint, doloremque nam quas, tempore ut reiciendis
        cum. Architecto deleniti ea aspernatur adipisci expedita, totam eius
        asperiores.
      </p>
      <Link to="/match">
        <p>FIND YOUR MATCH NOW!</p>
      </Link>
    </div>
  );
}

export default HomeBody;
