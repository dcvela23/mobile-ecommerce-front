import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

export const BreadCrumb = ({ links }) => {
  return (
    <div className="breadcrumbs">
      { links && links.length > 0 && Object.values(links).map((link, index) => {
        return (
          <div key={index} className="breadcrumbs_link">
            <Link to={link.path}>
              <p>{link.literal}</p>
              { links.length - 1 !== index && (<p className="breadcrumbs_link_separator"> - </p>)}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BreadCrumb;