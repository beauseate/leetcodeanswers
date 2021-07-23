import React from "react";
import avatar from "../IMG/avatar.png";
import TwoSumThumbnail from "../IMG/TwoSumThumbnail.jpg";
import MaxSubarrayThumbnail from "../IMG/MaxSubarrayThumbnail.jpg";
import "../SCSS/EasyList.scss";
import { withRouter } from "react-router-dom";

function EasyList() {
  return (
    <section className="card-list">
      <a href="https://leetcodeanswers.com">
        <article className="easyTitleCard">
          <header className="easyTitleCard-header">
            <h2>Easy</h2>
            <h3>More +</h3>
          </header>
        </article>
      </a>

      <article className="easyCard">
        <header className="easyCard-header">
          <p>Jul 21 2021</p>
          <a href="https://youtu.be/WIvFu41U5Fg" target="_blank" rel="noopener noreferrer">
            <h2>#1 Two Sum</h2>
          </a>
        </header>
        <div className="videoThumbnail">
            <a href="https://youtu.be/WIvFu41U5Fg" target="_blank" rel="noopener noreferrer">
        <img src={TwoSumThumbnail} alt="Two Sum Thumbnail" />
        </a>
        </div>
        <div className="easyCard-author">
          <a className="easyAuthor-avatar" href="https://www.linkedin.com/in/beauseate/" target="_blank" rel="noopener noreferrer">
            <img src={avatar} alt="Beau Avatar" />
          </a>
          <svg className="easyHalf-circle" viewBox="0 0 106 57">
            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
          </svg>

          <div className="easyAuthor-name">
            <div className="easyAuthor-name-prefix">Video Author</div>
            Beau Seate
          </div>
        </div>
        <div className="easyTags">
          <a href="https://leetcodeanswers.com">Easy</a>
          <a href="https://leetcodeanswers.com">Arrays</a>
        </div>
      </article>

      <article className="easyCard">
        <header className="easyCard-header">
          <p>Jul 23 2021</p>
          <a href="https://youtu.be/MnaI_qacwis" target="_blank" rel="noopener noreferrer">
            <h2>#53 Maximum Subarray</h2>
          </a>
        </header>
        <div className="videoThumbnail">
            <a href="https://youtu.be/MnaI_qacwis" target="_blank" rel="noopener noreferrer">
        <img src={MaxSubarrayThumbnail} alt="Max SubarrayThumbnail" />
        </a>
        </div>
        <div className="easyCard-author">
          <a className="easyAuthor-avatar" href="https://www.linkedin.com/in/beauseate/" target="_blank" rel="noopener noreferrer">
            <img src={avatar} alt="Beau Avatar" />
          </a>
          <svg className="easyHalf-circle" viewBox="0 0 106 57">
            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
          </svg>

          <div className="easyAuthor-name">
            <div className="easyAuthor-name-prefix">Video Author</div>
            Beau Seate
          </div>
        </div>
        <div className="easyTags">
          <a href="https://leetcodeanswers.com">Easy</a>
          <a href="https://leetcodeanswers.com">Arrays</a>
        </div>
      </article>
    </section>
  );
}

export default withRouter(EasyList);
