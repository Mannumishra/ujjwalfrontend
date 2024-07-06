import { Breadcrumbs, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../ProductDetailPage/ProductDetail.css";
import Product from "../../Component/Product/Product";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ProductDetailPage = () => {
  const { _id } = useParams();
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  console.log(data)
  const getAllProductData = async () => {
    try {
      let res = await axios.get(`https://ujjwalbackend.onrender.com/api/product/${_id}`);
      console.log(res.data.data)
      setData(res.data.data);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProductData();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [_id]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="bread">
        <div className="overlay">
          <Container>
            <nav aria-label="breadcrumb">
              <Typography variant="h2" gutterBottom>
                Our Products
              </Typography>
              <Breadcrumbs className="breadCrumb_names" aria-label="breadcrumb">
                <Link to="/">Home</Link> /<Link to="/">{data.categoryname}</Link> /<Link to="/">{data.subcategoryName}</Link>/<Link to="/">Product-Detail</Link>
              </Breadcrumbs>
            </nav>
          </Container>
        </div>
      </section>

      <div className="detail">
        <Container style={{ marginTop: "1rem" }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={6}
              p={5}
              sx={{ padding: { xs: "2px", md: "10px", sm: "5px" } }}
            >
              <Typography
                sx={{ padding: { xs: "1rem", md: "2rem", sm: "1rem" } }}
                style={{ border: "1px solid lightgray" }}
              >
                <img src={data.image2} width={"100%"} alt={data.categoryname} />
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ padding: { xs: "1rem", md: "2rem", sm: "1rem" } }}
            >
              <Typography style={{fontSize:'30px'}} className="name" mt={5} mb={3}>
                <b>
                {data.productname}
                </b>
              </Typography>
              <Typography className="points"  variant="body1" mb={3}>
                {data.details}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Container >
        <Typography mt={5}>
          <Typography style={{textAlign:'center', fontSize:'30px'}} mb={3}>
            <b>
            Details Of {data.productname}
            </b>
          </Typography>
          <div dangerouslySetInnerHTML={{ __html: data.tableData }} />
        </Typography>

      </Container>

      <Product />
    </>
  );
};

export default ProductDetailPage;
