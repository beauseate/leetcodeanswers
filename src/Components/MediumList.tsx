import React from "react";
import avatar from "../IMG/avatar.png";
import "../SCSS/MediumList.scss";
import { withRouter } from "react-router-dom";

function MediumList() {
  return (
    <section className="card-list">
      <a href="#">
        <article className="mediumTitleCard">
          <header className="mediumTitleCard-header">
            <h2>Medium</h2>
            <h3>Coming Soon...</h3>
          </header>
        </article>
      </a>
    </section>
  );
}

export default withRouter(MediumList);