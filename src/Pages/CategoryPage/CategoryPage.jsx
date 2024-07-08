import React, { useEffect, useState } from "react";
import { Button, Container, Grid, Modal, Typography } from "@mui/material";
import "../CategoryPage/categoryPage.css";
import image1 from "../../images/LatheMachineaccessories/LatheTailstockDieHolder.jpg";
import image2 from "../../images/MillingMachineTools/Drill Sleeves.jpg";
import image3 from "../../images/Vice&WorkHolding/Bench Vises.jpg";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Link } from "react-router-dom";
import axios from "axios";

const CategoryPage = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  
  const getApiData = async () => {
    try {
      let res = await axios.get("https://ujjwalbackend.onrender.com/api/subcategory");
      const newData = res.data.data;

      const groupedData = newData.reduce((acc, item) => {
        if (!acc[item.categoryname]) {
          acc[item.categoryname] = [];
        }
        acc[item.categoryname].push(item);
        return acc;
      }, {});

      const groupedArray = Object.keys(groupedData).map(key => ({
        name: key,
        items: groupedData[key]
      })).reverse();

      setCategories(groupedArray);
    } catch (error) {
      console.log(error);
    }
  };

  
  const getCategorydata = async () => {
    try {
      let res = await axios.get("https://ujjwalbackend.onrender.com/api/category");
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApiData();
    getCategorydata();
  }, []);

  const handleMouseEnter = index => {
    setActiveCategory(index);
  };

  const handleMouseLeave = () => {
    setActiveCategory(null);
  };

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const newProduct = [
    {
      image: image1,
      description: "Ultra Precision Working Block Pairs",
    },
    {
      image: image2,
      description: "Ultra Precision Working Block Pairs",
    },
    {
      image: image3,
      description: "Ultra Precision Working Block Pairs",
    },
  ];

  return (
    <Container maxWidth="xl">
      <Typography
        mt={2}
        style={{
          textAlign: "center",
          color: "rgb(18 80 141)",
          fontFamily: "poppins",
          fontWeight: "600",
          margin: "0",
          padding: "1rem",
        }}
        mb={2}
        sx={{ fontSize: { xs: "25px", md: "30px", sm: "30px" } }}
      >
        Category
      </Typography>
      <Grid container spacing={3}>
        {/* Sidebar with categories and subcategories */}
        <Grid item md={3} xs={12}>
          <div className="sidebar" onMouseLeave={handleMouseLeave}>
            {categories.map((category, index) => (
              <div
                key={index}
                className="sidebar-category"
                onMouseEnter={() => handleMouseEnter(index)}
              >
                {category.name}
                {activeCategory === index && (
                  <ul className="sidebar-items">
                    {category.items.map((item, idx) => (
                      <li key={idx}>
                        <KeyboardDoubleArrowRightIcon/>
                        <Link to={`/our-category/products/${item._id}`}>
                          {item.subcategoryName}
                        </Link> 
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </Grid>

        {/* Main content area with product cards */}
        <Grid item md={7} xs={12}>
          <div className="categoryImage">
            <div className="overlay">
              <Container>
                <Grid container spacing={2}>
                  {data.map((item, index) => (
                    <Grid item xs={6} sm={6} md={4} key={index}>
                      <article className="card">
                        <Link to={`/our-category/products/${item._id}`}>
                          <div className="card__img">
                            <img src={item.image} alt={item.categoryname} />
                          </div>
                          <div className="card__name">
                            <p style={{ margin: "0" }}>{item.categoryname}</p>
                          </div>
                          <div
                            className="CardContentBottom"
                            style={{
                              textAlign: "center",
                              position: "relative",
                              fontSize: "12px",
                            }}
                          >
                            <p className="bottomContent">{item.categoryname}</p>
                          </div>
                        </Link>
                      </article>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </div>
          </div>
        </Grid>

        {/* New product launch section */}
        <Grid item md={2} xs={12} p={0}>
          <div className="newLaunch">
            <Typography
              style={{
                textAlign: "center",
                fontFamily: "poppins",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              <u>New Product Launch</u>
            </Typography>
            {newProduct.map((product, index) => (
              <div key={index} className="productCard" style={{ marginBottom: '20px', padding: '10px' }}>
                <img
                  style={{ borderRadius: "10px", cursor: 'pointer' }}
                  width={"100%"}
                  src={product.image}
                  alt="New Launch Product"
                  onClick={() => handleOpenModal(product)}
                />
                <p style={{ textAlign: "center", margin: "10px 0" }}>
                  {product.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "8px",
                    marginBottom: "10px",
                  }}
                >
                  <button className="viewButton" onClick={() => handleOpenModal(product)}>View</button>
                  <Link to={"/contact"}>
                  <button className="viewButton">Enquiry Now</button>
                  </Link>
                </div>
              </div>
            ))}
            
            {/* Modal Component */}
            <Modal
              open={openModal}
              onClose={handleCloseModal}
              aria-labelledby="product-modal-title"
              aria-describedby="product-modal-description"
            >
              <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "white",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                borderRadius: "10px",
                padding: "20px",
                maxWidth: "80%",
                maxHeight: "80%",
                overflow: "auto"
              }}>
                {selectedProduct && (
                  <>
                    <img
                      src={selectedProduct.image}
                      alt="Product"
                      style={{ width: "100%", borderRadius: "10px" }}
                    />
                    <Typography variant="body1" style={{ marginTop: '10px', textAlign: 'center' }}>
                      {selectedProduct.description}
                    </Typography>
                  </>
                )}
              </div>
            </Modal>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CategoryPage;
