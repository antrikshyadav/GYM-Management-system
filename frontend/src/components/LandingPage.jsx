import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Card,
  Container,
  Grid,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  AccessTime,
  ArrowForward,
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  LocationOn,
  Menu as MenuIcon,
  Phone,
  Twitter,
} from "@mui/icons-material";

const LandingPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  return (
    <Box sx={{ bgcolor: "#111", color: "#fff", minHeight: "100vh" }}>
      {/* Header */}
      <AppBar position="fixed" sx={{ bgcolor: "rgba(17, 17, 17, 0.95)" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            QUEST DIGIFLEX
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="outlined"
              sx={{
                color: "#FFD700",
                borderColor: "#FFD700",
                "&:hover": {
                  borderColor: "#FFF",
                  bgcolor: "rgba(255, 215, 0, 0.1)",
                },
              }}
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#FFD700",
                color: "#000",
                "&:hover": {
                  bgcolor: "#FFF",
                },
              }}
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          background: "logo1.jpeg",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: "rgba(0,0,0,0.6)",
          },
        }}
      >
        <Container sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: "bold",
              mb: 2,
            }}
          >
            YOUR FITNESS
            <br />
            JOURNEY BEGINS HERE
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, maxWidth: 600 }}>
            Our state-of-the-art facilities and expert trainers are here to help
            you achieve your fitness goals, no matter your starting point.
          </Typography>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForward />}
            sx={{
              bgcolor: "#FFD700",
              color: "#000",
              "&:hover": {
                bgcolor: "#FFF",
              },
            }}
          >
            Explore more
          </Button>
        </Container>
      </Box>

      {/* Personal Training Section */}
      <Box sx={{ py: 8, bgcolor: "#000" }}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" sx={{ mb: 3, color: "#FFD700" }}>
                PERSONAL TRAINING
              </Typography>
              <Typography variant="h5" sx={{ mb: 4 }}>
                WE OFFER
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Free trial sessions for new members. Our expert trainers will
                help you achieve your fitness goals with personalized workout
                plans.
              </Typography>
              <Button
                variant="outlined"
                endIcon={<ArrowForward />}
                sx={{
                  color: "#FFD700",
                  borderColor: "#FFD700",
                  "&:hover": {
                    borderColor: "#FFF",
                    bgcolor: "rgba(255, 215, 0, 0.1)",
                  },
                }}
              >
                Get started
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/placeholder.svg?height=400&width=600"
                alt="Personal Training"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 2,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Membership Plans */}
      <Box sx={{ py: 8 }}>
        <Container>
          <Typography variant="h2" align="center" sx={{ mb: 6 }}>
            FLEXIBLE MEMBERSHIP PLANS
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                title: "Basic",
                price: "$70",
                features: [
                  "Access to gym floor",
                  "Basic equipment",
                  "Locker access",
                ],
              },
              {
                title: "Premium",
                price: "$320",
                features: [
                  "Professional Trainers",
                  "All Facilities",
                  "Free Drinks and Equipment",
                  "Diet Program",
                ],
              },
              {
                title: "Family",
                price: "$550",
                features: [
                  "Family access",
                  "All premium features",
                  "Child care services",
                ],
              },
            ].map((plan) => (
              <Grid item xs={12} md={4} key={plan.title}>
                <Card sx={{ bgcolor: "#222", height: "100%", p: 3 }}>
                  <Typography variant="h5" sx={{ mb: 2 }}>
                    {plan.title}
                  </Typography>
                  <Typography variant="h3" sx={{ color: "#FFD700", mb: 3 }}>
                    {plan.price}
                    <Typography component="span" variant="body1">
                      /month
                    </Typography>
                  </Typography>
                  <Box sx={{ mb: 3 }}>
                    {plan.features.map((feature) => (
                      <Typography key={feature} sx={{ mb: 1 }}>
                        • {feature}
                      </Typography>
                    ))}
                  </Box>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      bgcolor: "#FFD700",
                      color: "#000",
                      "&:hover": {
                        bgcolor: "#FFF",
                      },
                    }}
                  >
                    Choose Plan
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Success Stories */}
      <Box sx={{ py: 8, bgcolor: "#FFD700" }}>
        <Container>
          <Typography variant="h2" sx={{ color: "#000", mb: 4 }}>
            SUCCESS STORIES
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
              <Box sx={{ textAlign: "center", color: "#000" }}>
                <Typography variant="h3">6,154</Typography>
                <Typography>Gym Members Since January 2024</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={{ textAlign: "center", color: "#000" }}>
                <Typography variant="h3">350</Typography>
                <Typography>
                  State-Level Body Builder Champions Every Year
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={{ textAlign: "center", color: "#000" }}>
                <Typography variant="h3">90%</Typography>
                <Typography>
                  Members get their fit form in 3-6 months
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={{ textAlign: "center", color: "#000" }}>
                <Typography variant="h3">20%</Typography>
                <Typography>
                  Mass Muscle in increase in 6-12 Months Training
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Newsletter Section */}
      <Box sx={{ py: 8, bgcolor: "#111" }}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={{ mb: 3 }}>
                SIGNUP OUR NEWSLETTER TO GET UPDATE INFORMATION, INSIGHT OR NEWS
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      color: "#fff",
                      "& fieldset": {
                        borderColor: "#333",
                      },
                      "&:hover fieldset": {
                        borderColor: "#FFD700",
                      },
                    },
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#FFD700",
                    color: "#000",
                    "&:hover": {
                      bgcolor: "#FFF",
                    },
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/placeholder.svg?height=300&width=600"
                alt="Location Map"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 2,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ py: 6, bgcolor: "#000" }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                QUEST DIGIFLEX
              </Typography>
              <Typography sx={{ mb: 2 }}>
                skyee ,indore
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                <IconButton size="small" sx={{ color: "#FFD700" }}>
                  <Facebook />
                </IconButton>
                <IconButton size="small" sx={{ color: "#FFD700" }}>
                  <Twitter />
                </IconButton>
                <IconButton size="small" sx={{ color: "#FFD700" }}>
                  <Instagram />
                </IconButton>
                <IconButton size="small" sx={{ color: "#FFD700" }}>
                  <LinkedIn />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Quick Links
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Button sx={{ color: "#fff", justifyContent: "flex-start" }}>
                  Home
                </Button>
                <Button sx={{ color: "#fff", justifyContent: "flex-start" }}>
                  About
                </Button>
                <Button sx={{ color: "#fff", justifyContent: "flex-start" }}>
                  Classes
                </Button>
                <Button sx={{ color: "#fff", justifyContent: "flex-start" }}>
                  Contact
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Operating Hours
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <AccessTime sx={{ mr: 1, color: "#FFD700" }} />
                <Typography>Mon-Fri: 6:00 - 22:00</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <AccessTime sx={{ mr: 1, color: "#FFD700" }} />
                <Typography>Sat-Sun: 8:00 - 20:00</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Phone sx={{ mr: 1, color: "#FFD700" }} />
                <Typography>+1 (555) 000-000-0000</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Email sx={{ mr: 1, color: "#FFD700" }} />
                <Typography>info@questdigiflex.com</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;
