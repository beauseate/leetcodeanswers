import React from "react";
import avatar from "../IMG/avatar.png";
import "../SCSS/HardList.scss";
import { withRouter } from "react-router-dom";

function HardList() {
  return (
    <section className="card-list">
      <a href="#">
        <article className="hardTitleCard">
          <header className="hardTitleCard-header">
            <h2>Hard</h2>
            <h3>Coming Soon...</h3>
          </header>
        </article>
      </a>
    </section>
  );
}

export default withRouter(HardList);