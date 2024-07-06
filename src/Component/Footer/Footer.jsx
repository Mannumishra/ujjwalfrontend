import React from "react";
import { Link } from "react-router-dom";
import "../Footer/Footer.css";
import { Container, Grid, TextField, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
const Footer = () => {
  return (
    <>
    
    
    <div className="footer">
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} lg={2} xl={3}>
            <div className="tt-mobile-collapse">
              <Typography variant="h6" className="tt-collapse-title">
                Customer Service
              </Typography>
              <div className="tt-collapse-content">
                <address>
                  <Typography variant="body2">
                    <span>ADDRESS:</span> Shastri Nagar Near Metro Station
                    Landmark Gurudwara
                  </Typography>
                  <Typography variant="body2">
                    <span>PHONE:</span> +91 9268381216
                  </Typography>
                  <Typography variant="body2">
                    <span>E-MAIL:</span>{" "}
                    <Link style={{color:'red'}} href="mailto:Assorts.rahul@gmail.com">
                      Assorts.rahul@gmail.com
                    </Link>
                  </Typography>
                </address>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={2} xl={3}>
            <div className="tt-mobile-collapse">
              <Typography variant="h6" className="tt-collapse-title">
                Information
              </Typography>
              <div className="tt-collapse-content">
                <ul className="tt-list">
                  <li>
                    <Link to="/pages/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link to="/pages/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={2} xl={3}>
            <div className="tt-mobile-collapse">
              <Typography variant="h6" className="tt-collapse-title">
                Categories
              </Typography>
              <div className="tt-collapse-content">
                <ul className="tt-list">
                  <li>
                    <Link to="/collections/hindu-dieties">Lathe Machine Accessories</Link>
                  </li>
                  <li>
                    <Link to="/collections/home-decor">Milling Machine Accessories</Link>
                  </li>
                  <li>
                    <Link to="/collections/home-kitchen">Vices & Work Holding</Link>
                  </li>
                  <li>
                    <Link to="/collections/pooja-decor">Measuring Tool & Equipments</Link>
                  </li>
                  
                </ul>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={2} xl={3}>
            <div className="tt-mobile-collapse">
              <Typography
                style={{ visibility: "hidden" }}
                variant="h6"
                className="tt-collapse-title"
              >
                Categories
              </Typography>
              <div className="tt-collapse-content">
                <ul className="tt-list">
                <li>
                    <Link to="/collections/pooja-decor">Jewellery & Watch Making</Link>
                  </li>
                  <li>
                    <Link to="/collections/pooja-decor">DIY Tools</Link>
                  </li>
                  <li>
                    <Link to="/collections/pooja-decor">Best Seller-Best Combos</Link>
                  </li>
                  <li>
                    <Link to="/collections/pooja-decor">Indexable Tool</Link>
                  </li>
                </ul>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <div className="tt-newsletter">
              <div className="tt-mobile-collapse">
                <Typography variant="h6" className="tt-collapse-title">
                  Newsletter
                </Typography>
                <p>Subcribe to our Newsletter to get more info.</p>
                <div>
                  <Typography variant="h6">
                    <Link style={{ display: "flex", alignItems:'center', color:'white' }} to={"/"}>
                      Catalogs <ArrowRightIcon />
                    </Link>
                  </Typography>
                </div>
                <div>
                  <Typography variant="h6">
                    <Link style={{ display: "flex", alignItems:'center', color:'white' }} to={"/"}>
                      Sitemap <ArrowRightIcon />
                    </Link>
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>

        {/* ---- Copyright ---  */}
      </Container>
    </div>
      <Grid container className="copyright">
        <Grid item xs={12} className="text-center">
          <Typography className="text" variant="body2" align="center">
            © Copyright 2024, Designed by &nbsp;<Link href="https://digital4now.in/" target="_blank">
              DIGI INDIA SOLUTION
            </Link>
          </Typography>
        </Grid>
      </Grid>
      </>
  );
};

export default Footer;
