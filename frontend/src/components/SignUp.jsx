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
import { FitnessCenter, Person, Mail, Lock } from "@mui/icons-material";

const SignUp = () => {
  const [role, setRole] = useState("customer");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/create", {
        role,
        name,
        email,
        password,
      });
      if (response.data.success) {
        if (role === "customer") {
          navigate("/customer");
        } else if (role === "trainer") {
          navigate("/trainer");
        }
      } else {
        // Handle signup error
        console.error("Signup failed:", response.data.message);
      }
    } catch (error) {
      console.error("Signup error:", error);
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
          "url('https://imgs.search.brave.com/Wbdszq3ENsGY2DS13-xRBeF5Gjy_J0on8G7XPrQBFGU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4LzE2Lzg1Lzk1/LzM2MF9GXzgxNjg1/OTU0M19ybFlFREJw/bDhEamZjdkhIRnFm/MHZucmdFMm0xd01W/WC5qcGc')",
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
                Quest DigiFlex Signup
              </Typography>
            </div>
          }
          subheader={
            <Typography
              variant="body2"
              style={{ color: "#A9A9A9", textAlign: "center" }}
            >
              Create your account to start your fitness journey
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
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              InputProps={{
                startAdornment: (
                  <Person style={{ color: "white", marginRight: "8px" }} />
                ),
              }}
              InputLabelProps={{
                style: { color: "#white" },
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

            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              InputProps={{
                startAdornment: (
                  <Mail style={{ color: "#A9A9A9", marginRight: "8px" }} />
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
              Sign Up {role.charAt(0).toUpperCase() + role.slice(1)}
            </Button>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "16px",
              }}
            >
              <Typography variant="body2" style={{ color: "#A9A9A9" }}>
                Already have an account?{" "}
                <a
                  href="/login"
                  style={{ color: "#DC143C", textDecoration: "none" }}
                >
                  Log in
                </a>
              </Typography>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
