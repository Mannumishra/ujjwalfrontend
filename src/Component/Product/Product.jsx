import { Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import '../../Pages/CategoryPage/categoryPage.css';
import '../../Component/Product/Product.css';
import axios from "axios";

const Product = () => {
  const [data, setData] = useState([]);

  const getCategorydata = async () => {
    try {
      let res = await axios.get("https://ujjwalbackend.onrender.com/api/category");
      console.log(res);
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  var settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    getCategorydata();
  }, []);

  return (
    <>
      <Typography
        style={{
          textAlign: "center",
          color: "rgb(18, 80, 141)",
          fontFamily: "inherit",
          fontWeight: "600",
          padding: '1rem'
        }}
        mb={2}
        sx={{ fontSize: { xs: "25px", md: "30px", sm: "30px" }, margin: { xs: '0', sm: '0', md: '1' } }}
      >
        New Launches
      </Typography>
      <div style={{ background: "#181d45", padding: "2rem" }}>
        <Container style={{ marginBottom: "1rem" }}>
          <Slider {...settings}>
            {
              data.map((item, index) => (
                <div key={index}>
                  <div className="box">
                    <img
                      className="product"
                      width={"100%"}
                      style={{
                        height: "220px",
                      }}
                      src={item.image}
                      alt={item.categoryname}
                    />
                    <Typography
                      style={{
                        fontSize: "16px",
                        fontWeight: "700",
                        margin: "0",
                        padding: "5px",
                      }}
                      mt={2}
                      textAlign="center"
                      variant="body2"
                    >
                      {item.categoryname}
                    </Typography>
                  </div>
                </div>
              ))
            }
          </Slider>
        </Container>
      </div>
    </>
  );
};

export default Product;
