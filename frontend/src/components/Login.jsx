import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { FitnessCenter, Mail, Lock } from "@mui/icons-material";

const Login = () => {
  const [role, setRole] = useState("customer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/read", {
        role,
        email,
        password,
      });
      if (response.data.success) {
        if (role === "customer") {
          navigate("/");
        } else if (role === "trainer") {
          navigate("/");
        }
      } else {
        // Handle login error
        console.error("Login failed:", response.data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage:
          "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-barbell-gym-concept-sport-healthy-lifestyle_167862-91.jpg-5GYtoQxYIoIZxP4JuOly0ZSWOM9jo0.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      {/* Overlay with gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom right, rgba(0,0,0,0.8), rgba(0,0,0,0.7), rgba(139,0,0,0.5))",
        }}
      ></div>

      {/* Main Content */}
      <Card
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "400px",
          margin: "0 16px",
          backgroundColor: "rgba(0,0,0,0.8)",
          border: "1px solid #8B0000",
        }}
      >
        <CardHeader
          title={
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  background: "linear-gradient(to right, #DC143C, #8B0000)",
                  padding: "12px",
                  borderRadius: "50%",
                  marginBottom: "8px",
                }}
              >
                <FitnessCenter style={{ fontSize: 32, color: "white" }} />
              </div>
              <Typography
                variant="h5"
                style={{ color: "white", fontWeight: "bold" }}
              >
                Quest DigiFlex Login
              </Typography>
            </div>
          }
          subheader={
            <Typography
              variant="body2"
              style={{ color: "#A9A9A9", textAlign: "center" }}
            >
              Choose your role and sign in to your account
            </Typography>
          }
        />
        <CardContent>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <FormControl fullWidth variant="outlined">
              <InputLabel id="role-label" style={{ color: "white" }}>
                Select Role
              </InputLabel>
              <Select
                labelId="role-label"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                label="Select Role"
                style={{
                  backgroundColor: "rgba(0,0,0,0.5)",
                  color: "white",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(139,0,0,0.5)",
                  },
                }}
              >
                <MenuItem value="customer">Customer</MenuItem>
                <MenuItem value="trainer">Trainer</MenuItem>
              </Select>
            </FormControl>

            <TextField
              fullWidth
              color="white"
              placeholder="Enter your email"
              label="Email"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              InputProps={{
                startAdornment: (
                  <Mail style={{ color: "white", marginRight: "8px" }} />
                ),
              }}
              InputLabelProps={{
                style: { color: "white" },
              }}
              style={{
                color: "white",
                backgroundColor: "rgba(0,0,0,0.5)",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "rgba(139,0,0,0.5)",
                  },
                  "&:hover fieldset": {
                    borderColor: "rgba(139,0,0,0.8)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#DC143C",
                  },
                },
              }}
            />

            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              InputProps={{
                startAdornment: (
                  <Lock style={{ color: "#A9A9A9", marginRight: "8px" }} />
                ),
              }}
              InputLabelProps={{
                style: { color: "#A9A9A9" },
              }}
              style={{
                backgroundColor: "rgba(0,0,0,0.5)",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "rgba(139,0,0,0.5)",
                  },
                  "&:hover fieldset": {
                    borderColor: "rgba(139,0,0,0.8)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#DC143C",
                  },
                },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              style={{
                background: "linear-gradient(to right, #DC143C, #8B0000)",
                color: "white",
                padding: "12px",
              }}
            >
              Sign In {role.charAt(0).toUpperCase() + role.slice(1)}
            </Button>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "16px",
              }}
            >
              <a
                href="#"
                style={{
                  color: "#DC143C",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                Forgot password?
              </a>
              <a
                href="/signup"
                style={{
                  color: "#DC143C",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                Create account
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
