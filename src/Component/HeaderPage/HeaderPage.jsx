import {
  Box,
  Container,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "../../images/logo-assorts.png";
import "../HeaderPage/Header.css";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import experience from "../../images/experience.png";
import axios from "axios";

const HeaderPage = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      window.scrollTo({
        top:1000,
        behavior:"smooth"
      })
    }
  };

  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);

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


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header>
        <div className="topbar" style={{ backgroundColor: "#1D2C59" }}>
          <Container>
            <Box className="icons">
              <Box class="icon"></Box>
              <div style={{ display: "flex", justifyContent: "flex-end", gap: "15px" }}>
                <FacebookIcon className="face" />
                <InstagramIcon className="instagram" style={{ backgroundColor: 'radial-gradient(circle at 30% 107%, rgb(253, 244, 151) 0px, rgb(253, 244, 151) 5%, rgb(253, 89, 73) 45%, rgb(214, 36, 159) 60%, rgb(40, 90, 235) 90%)' }} />
                <LinkedInIcon className="linkedin" />
                <YouTubeIcon className="youtube" />
              </div>
            </Box>
          </Container>
        </div>
        <div class="for-laptop">
          <Grid class="headerMain" container spacing={2}>
            <Grid item xs={8} md={2}>
              <div className="logo">
                <Link to={'/'}>
                  <img
                    src={logo}
                    width={"100%"}
                    height={"100%"}
                    alt="Logo-Assorts"
                  />
                </Link>
              </div>
            </Grid>
            <Grid item xs={4} md={6}>
              <div class="navItem">
                <ul className="navbarUl">
                  <li class="navbarLi">
                    <Link class="ul_li_links" to={"/"}>
                      Home
                    </Link>
                  </li>
                  <li class="navbarLi">
                    <Link class="ul_li_links" to={"/about"}>
                      About
                    </Link>
                  </li>
                  <li class="navbarLi dropdown">
                    <li style={{ display: "flex", alignItems: "center" }}>
                      Category <ArrowDropDownIcon />
                    </li>
                    <div class="dropdown-content">
                      <div class="dropdown_inner_content">
                        {categories.map(category => (
                          <div key={category.name} className="dropdownWidth">
                            <Typography className="dropdownheading">
                              {category.name}
                            </Typography>
                            {category.items.map(item => (
                              <p key={item._id}>
                                <Link className="headingContent" to={`/our-category/products/${item._id}`}>
                                  <KeyboardDoubleArrowRightIcon
                                    style={{
                                      fontSize: "14px",
                                      color: "rgb(18, 80, 141)",
                                    }}
                                  />
                                  {item.subcategoryName}
                                </Link>
                              </p>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </li>
                  <li class="navbarLi">
                    <Link class="ul_li_links" to={"/contact"}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid
              item
              xs={4}
              md={4}
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <SearchIcon style={{ color: "white", marginLeft: "1rem" }} />
                <input class="searchbar" type="text" placeholder="Search" value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleSearch} />
              </div>
              <img
                style={{ position: "relative" }}
                width={"15%"}
                src={experience}
                alt="experience"
              />
            </Grid>
          </Grid>
        </div>
        <div className="responsive-mobile">
          <div className="menu-header">
            <Typography className="menu-item">
              <Link to={'/'}>
                <img src={logo} width={"100%"} alt="" />
              </Link>
            </Typography>
            <button className="menu-button" onClick={toggleMenu}>
              ☰
            </button>
          </div>
          <ul className={`responsiveUl ${menuOpen ? "open" : ""}`}>
            <li className="responsiveli">
              <Link to={"/"} onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="responsiveli">
              <Link to={"/about"} onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className="responsiveli">
              <div style={{ display: "flex", alignItems: "center" }}>
                Category <KeyboardDoubleArrowRightIcon />
              </div>
              <ul className="dropdown ">
                <li className="dropdown-item">
                  <Link to={"/"} onClick={closeMenu}>
                    Lathe Machine Accessories
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to={"/"} onClick={closeMenu}>
                    Milling Machine Accessories
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to={"/"} onClick={closeMenu}>
                    Vices & Work
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to={"/"} onClick={closeMenu}>
                    Measuring Tools & Equipments
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to={"/"} onClick={closeMenu}>
                    Jewellery & Watch Making
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to={"/"} onClick={closeMenu}>
                    DIY Tools (General WorkShop Tools)
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to={"/"} onClick={closeMenu}>
                    Best Seller Best Combos
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to={"/"} onClick={closeMenu}>
                    Indexable Tool
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to={"/"} onClick={closeMenu}>
                    HSS Cutting & Finishing Tools
                  </Link>
                </li>
              </ul>
            </li>
            <li className="responsiveli">
              <Link to={"/contact"} onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default HeaderPage;
