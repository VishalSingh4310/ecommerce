import { Typography } from "@material-ui/core";
import React from "react";
import "./BrowseFilter.css";

const BrowseFilter = () => {
  return (
    <div className="browser">
      <>
        <Typography component="div">
          <Typography variant="body1" className="filter-heading">
            Browse By Price
            <Typography component="span"></Typography>
          </Typography>
          <div>
            <ul className="filter-browse">
              <li>
                <Typography variant="body2" component="span">
                  $0 - $24.99
                </Typography>
              </li>
              <li>
                <Typography variant="body2" component="span">
                  $25 - $54.99
                </Typography>
              </li>
              <li>
                <Typography variant="body2" component="span">
                  over $54.99
                </Typography>
              </li>
            </ul>
          </div>
        </Typography>
      </>
    </div>
  );
};

export default BrowseFilter;
