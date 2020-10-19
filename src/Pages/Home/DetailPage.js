import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import ProductCard from "../../components/detailPage/ProductCard";
import Pagination from "@material-ui/lab/Pagination";
import { Typography, Breadcrumbs } from "@material-ui/core";
import BrowseFilter from "../../components/home/BrowseFilter";
import "../../components/home/BrowseFilter.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const DetailPage = (props) => {
  let newDataArray = [];

  const selectedData = useSelector((state) =>
    state.products.products.find(
      (itemData) => itemData.name == props.match.params.id
    )
  );
  const itemsPerPage = 6;
  const [page, setPage] = useState(1);

  for (const key in selectedData.item) {
    newDataArray.push(selectedData.item[key]);
  }

  const handleChange = (event, value) => {
    setPage(value);
  };
  const noOfPages = Math.ceil(newDataArray.length / itemsPerPage);

  return (
    <Grid
      container
      justify="center"
      direction="row"
      style={{ padding: "2rem 0" }}
    >
      <Grid item xs={2} zeroMinWidth>
        <BrowseFilter />
      </Grid>

      <Grid
        container
        xs={9}
        spacing={3}
        style={{
          borderLeft: "1px solid #dbdbdb",
        }}
      >
        <Grid item xs={12} lg={12}>
          <div style={{ width: "100%", textAlign: "left" }}>
            <Breadcrumbs aria-label="breadcrumb" style={{ fontSize: "0.8rem" }}>
              <Link color="#dbdbdb" to="/">
                Home
              </Link>

              <Typography color="textPrimary">
                {props.match.params.id}
              </Typography>
            </Breadcrumbs>
            <Typography
              variant="h6"
              style={{ fontWeight: "bold" }}
              className="filter-heading"
            >
              {props.match.params.id}
              <Typography
                style={{ width: "10%", background: "#000", zIndex: 40 }}
                component="span"
              ></Typography>
              <span
                style={{
                  width: "100%",
                  height: "2px",
                  background: "#f7f7f7",
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
              ></span>
            </Typography>
            <Typography
              style={{ marginTop: "1rem", fontWeight: "bold" }}
              variant="body2"
              component="div"
            >
              Products ({newDataArray.length})
            </Typography>
          </div>
        </Grid>
        {newDataArray.length !== 0
          ? newDataArray
              .slice((page - 1) * itemsPerPage, page * itemsPerPage)
              .map((projectItem, index) => {
                return (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={4}
                    key={projectItem.title}
                  >
                    <Link
                      to={{
                        pathname: `/${props.match.params.id}/${index}`,
                        state: { selected: projectItem, array: newDataArray },
                      }}
                    >
                      <ProductCard
                        item={projectItem}
                        previousRoute={props.match.params.id}
                      />
                    </Link>
                  </Grid>
                );
              })
          : []}
      </Grid>
      <Grid xs={12} item style={{ justifyContent: "center", display: "flex" }}>
        {noOfPages !== 0 && (
          <Pagination
            count={noOfPages}
            page={page}
            onChange={handleChange}
            defaultPage={1}
            style={{
              justifyContent: "center",
              marginTop: "2rem",
              marginBottom: "1rem",
            }}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default DetailPage;
