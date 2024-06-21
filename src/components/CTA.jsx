import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  Paper,
} from '@mui/material';

function CTA() {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegistration = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    if (!isRegistered) {
      localStorage.setItem('registrationData', JSON.stringify(data));
    } else {
      const existingData = JSON.parse(localStorage.getItem('registrationData')) || {};
      const updatedData = { ...existingData, ...data };
      localStorage.setItem('registrationData', JSON.stringify(updatedData));
    }

    setIsRegistered(true);
  };

  return (
    <section
      id="cta"
      style={{
        background: 'url(https://source.unsplash.com/1600x900/?wedding) no-repeat center center/cover',
        padding: '50px 0',
      }}
    >
      <Container>
        <Paper elevation={3} style={{ padding: '30px', maxWidth: '800px', margin: '0 auto' }} className="from_data">
          <Box textAlign="center" mb={3}  >
            <Typography variant="h4" component="h2">
              Register for the Wedding Event!
            </Typography>
            <Typography variant="body1">
              {isRegistered
                ? 'Please complete your registration by filling in the details below.'
                : 'Join us for a memorable event. Fill in your details to register.'}
            </Typography>
          </Box>

          <form onSubmit={handleRegistration} name="sign-up" >
            <Typography variant="h6" component="h3" mt={3} mb={2}>
              Wedding Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Date of Event"
                  name="date"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Time of Event"
                  name="time"
                  type="time"
                  InputLabelProps={{ shrink: true }}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Total Days Contracted"
                  name="total-days"
                  type="text"
                  placeholder="ex: 3 Days"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Location Address"
                  name="location-address"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Location Contact"
                  name="location-contact"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Location Phone"
                  name="location-phone"
                  type="tel"
                  placeholder="(000) 000-0000"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Estimated Attendance"
                  name="estimated-attendance"
                  type="number"
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Age Range From"
                  name="age-range-from"
                  type="number"
                  placeholder="From"
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Age Range To"
                  name="age-range-to"
                  type="number"
                  placeholder="To"
                  required
                />
              </Grid>
            </Grid>

            <Typography variant="h6" component="h3" mt={3} mb={2}>
              Bride's Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Bride's First Name"
                  name="bride-first-name"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Bride's Last Name"
                  name="bride-last-name"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Bride's Address"
                  name="bride-address"
                  placeholder="Street Address"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Bride's Address Line 2"
                  name="bride-address-2"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="City"
                  name="bride-city"
                  required
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="State"
                  name="bride-state"
                  required
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Zip Code"
                  name="bride-zip"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Bride's Birth Date"
                  name="bride-birth-date"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  required
                />
              </Grid>
            </Grid>

            <Typography variant="h6" component="h3" mt={3} mb={2}>
              Groom's Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Groom's First Name"
                  name="groom-first-name"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Groom's Last Name"
                  name="groom-last-name"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Groom's Address"
                  name="groom-address"
                  placeholder="Street Address"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Groom's Address Line 2"
                  name="groom-address-2"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="City"
                  name="groom-city"
                  required
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="State"
                  name="groom-state"
                  required
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Zip Code"
                  name="groom-zip"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Groom's Birth Date"
                  name="groom-birth-date"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  required
                />
              </Grid>
            </Grid>

            <Typography variant="h6" component="h3" mt={3} mb={2}>
              Event Services
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Decoration Services"
                  name="decoration-services"
                  placeholder="Describe the decoration services required"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Food Services"
                  name="food-services"
                  placeholder="Describe the food services required"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Invitation Services"
                  name="invitation-services"
                  placeholder="Describe the invitation services required"
                  required
                />
              </Grid>
            </Grid>

            <Button variant="contained" color="primary" type="submit" fullWidth sx={{ mt: 3 }}>
              Submit
            </Button>
          </form>
        </Paper>
      </Container>
    </section>
  );
}

export default CTA;
