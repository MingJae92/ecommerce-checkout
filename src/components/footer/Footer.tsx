import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';
import {
  footerContainer,
  footerContent,
  gridItem,
  footerSectionTitle,
  footerLink,
  socialLink,
  footerCopyright
} from '../../styles/footerstyles/footer.styles';

const Footer = () => {
  return (
    <Box sx={footerContainer}>
      <Box sx={footerContent}>
        <Grid container spacing={4}>
          {/* Shop Section */}
          <Grid item xs={12} sm={3} sx={gridItem}>
            <Typography variant="h6" sx={footerSectionTitle}>
              Shop
            </Typography>
            <Box>
              <Link href="/products" color="inherit" sx={footerLink}>
                Products
              </Link>
              <Link href="/sales" color="inherit" sx={footerLink}>
                Sales
              </Link>
              <Link href="/new-arrivals" color="inherit" sx={footerLink}>
                New Arrivals
              </Link>
            </Box>
          </Grid>

          {/* Customer Service Section */}
          <Grid item xs={12} sm={3} sx={gridItem}>
            <Typography variant="h6" sx={footerSectionTitle}>
              Customer Service
            </Typography>
            <Box>
              <Link href="/contact" color="inherit" sx={footerLink}>
                Contact Us
              </Link>
              <Link href="/returns" color="inherit" sx={footerLink}>
                Returns
              </Link>
              <Link href="/shipping" color="inherit" sx={footerLink}>
                Shipping Info
              </Link>
              <Link href="/faq" color="inherit" sx={footerLink}>
                FAQ
              </Link>
            </Box>
          </Grid>

          {/* Company Section */}
          <Grid item xs={12} sm={3} sx={gridItem}>
            <Typography variant="h6" sx={footerSectionTitle}>
              Company
            </Typography>
            <Box>
              <Link href="/about" color="inherit" sx={footerLink}>
                About Us
              </Link>
              <Link href="/careers" color="inherit" sx={footerLink}>
                Careers
              </Link>
              <Link href="/privacy" color="inherit" sx={footerLink}>
                Privacy Policy
              </Link>
              <Link href="/terms" color="inherit" sx={footerLink}>
                Terms of Service
              </Link>
            </Box>
          </Grid>

          {/* Social Media Section */}
          <Grid item xs={12} sm={3} sx={gridItem}>
            <Typography variant="h6" sx={footerSectionTitle}>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link href="#" color="inherit" sx={socialLink}>
                FB
              </Link>
              <Link href="#" color="inherit" sx={socialLink}>
                IG
              </Link>
              <Link href="#" color="inherit" sx={socialLink}>
                TW
              </Link>
              <Link href="#" color="inherit" sx={socialLink}>
                YT
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Bottom Copyright Section */}
      <Box sx={footerCopyright}>
        <Typography variant="body2">
          &copy; 2025 Your E-Commerce Store. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
