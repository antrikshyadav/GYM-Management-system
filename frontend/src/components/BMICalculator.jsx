import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  IconButton,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const BMICalculator = () => {
  const [open, setOpen] = useState(false);
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [unit, setUnit] = useState('metric');
  const [result, setResult] = useState('');

  const calculateBMI = () => {
    if (weight && height && age && gender) {
      let bmi;
      if (unit === 'metric') {
        // Metric calculation (weight in kg, height in cm)
        const heightInMeters = height / 100;
        bmi = weight / (heightInMeters * heightInMeters);
      } else {
        // Imperial calculation (weight in lbs, height in inches)
        bmi = (weight * 703) / (height * height);
      }

      let category = '';
      if (bmi < 18.5) category = 'Underweight';
      else if (bmi < 25) category = 'Normal weight';
      else if (bmi < 30) category = 'Overweight';
      else category = 'Obese';

      setResult(`BMI: ${bmi.toFixed(1)}\nCategory: ${category}\nAge: ${age}\nGender: ${gender}`);
    } else {
      setResult('Please fill in all fields');
    }
  };

  const clearFields = () => {
    setWeight('');
    setHeight('');
    setAge('');
    setGender('');
    setResult('');
  };

  const handleClose = () => {
    setOpen(false);
    clearFields();
  };

  return (
    <>
      <Button
        variant="outlined"
        onClick={() => setOpen(true)}
        sx={{
          color: '#FFD700',
          borderColor: '#FFD700',
          '&:hover': {
            borderColor: '#FFF',
            bgcolor: 'rgba(255, 215, 0, 0.1)',
          },
        }}
      >
        BMI Calculator
      </Button>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ m: 0, p: 2, bgcolor: '#111', color: '#fff' }}>
          BMI Calculator
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: '#fff',
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ bgcolor: '#111', color: '#fff', pt: 2 }}>
          {/* Units Selection */}
          <FormControl component="fieldset" sx={{ mb: 2, width: '100%' }}>
            <RadioGroup
              row
              value={unit}
              onChange={(e) => {
                setUnit(e.target.value);
                setWeight('');
                setHeight('');
              }}
            >
              <FormControlLabel 
                value="metric" 
                control={<Radio sx={{ color: '#FFD700' }} />} 
                label="Metric (kg/cm)" 
                sx={{ color: '#fff' }}
              />
              <FormControlLabel 
                value="imperial" 
                control={<Radio sx={{ color: '#FFD700' }} />} 
                label="Imperial (lbs/in)" 
                sx={{ color: '#fff' }}
              />
            </RadioGroup>
          </FormControl>

          {/* Age Field */}
          <TextField
            fullWidth
            label="Age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            sx={{
              mb: 2,
              '& .MuiOutlinedInput-root': {
                color: '#fff',
                '& fieldset': { borderColor: '#333' },
                '&:hover fieldset': { borderColor: '#FFD700' },
              },
              '& .MuiInputLabel-root': { color: '#fff' },
            }}
          />

          {/* Gender Selection */}
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel sx={{ color: '#fff' }}>Gender</InputLabel>
            <Select
              value={gender}
              label="Gender"
              onChange={(e) => setGender(e.target.value)}
              sx={{
                color: '#fff',
                '& .MuiOutlinedInput-notchedOutline': { borderColor: '#333' },
                '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#FFD700' },
              }}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>

          {/* Weight Field */}
          <TextField
            fullWidth
            label={unit === 'metric' ? 'Weight (kg)' : 'Weight (lbs)'}
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            sx={{
              mb: 2,
              '& .MuiOutlinedInput-root': {
                color: '#fff',
                '& fieldset': { borderColor: '#333' },
                '&:hover fieldset': { borderColor: '#FFD700' },
              },
              '& .MuiInputLabel-root': { color: '#fff' },
            }}
          />

          {/* Height Field */}
          <TextField
            fullWidth
            label={unit === 'metric' ? 'Height (cm)' : 'Height (inches)'}
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            sx={{
              mb: 2,
              '& .MuiOutlinedInput-root': {
                color: '#fff',
                '& fieldset': { borderColor: '#333' },
                '&:hover fieldset': { borderColor: '#FFD700' },
              },
              '& .MuiInputLabel-root': { color: '#fff' },
            }}
          />

          {result && (
            <Typography sx={{ mt: 2, color: '#FFD700', fontWeight: 'bold', whiteSpace: 'pre-line' }}>
              {result}
            </Typography>
          )}
        </DialogContent>

     

<DialogActions sx={{ bgcolor: '#111', p: 2, gap: 2 }}>
  <Button
    variant="contained"
    onClick={calculateBMI}
    sx={{
      bgcolor: '#FFD700',
      color: '#000',
      '&:hover': {
        bgcolor: '#FFF',
      },
    }}
  >
    Calculate
  </Button>
  <Button
    variant="outlined"
    onClick={clearFields}
    sx={{
      color: '#FFD700',
      borderColor: '#FFD700',
      '&:hover': {
        borderColor: '#FFF',
        bgcolor: 'rgba(255, 215, 0, 0.1)',
      },
    }}
  >
    Clear
  </Button>
</DialogActions>


      </Dialog>
    </>
  );
};

export default BMICalculator;