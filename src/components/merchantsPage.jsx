import React, { useState } from 'react';
import { Box, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody, Pagination, Select, MenuItem, InputLabel, FormControl, TextField } from '@mui/material';

const MerchantsPage = () => {
  // todo fetch
  const sampleMerchants = [
    { MerchantID: 1, Name: "Merchant A", Status: "Active", CardBrands: "Visa", City: "Zagreb", Address: "Ulica Zagreb", StreetNum: "10", PostalCode: "10000" },
  ];

  const [filters, setFilters] = useState({
    Status: '',
    CardBrand: '',
    City: '',
    MerchantID: '',
  });

  const [page, setPage] = useState(1);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value,
    }));
    // todo
  };

  const handlePageChange = (event, value) => {
    setPage(value);
    // todo
  };

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <FormControl sx={{ width: 150 }}>
          <InputLabel>Status</InputLabel>
          <Select
            name="Status"
            value={filters.Status}
            label="Status"
            onChange={handleFilterChange}
          >
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Inactive">Inactive</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: 150 }}>
          <InputLabel>Card Brand</InputLabel>
          <Select
            name="CardBrand"
            value={filters.CardBrand}
            label="Card Brand"
            onChange={handleFilterChange}
          >
            <MenuItem value="Visa">Visa</MenuItem>
            <MenuItem value="MasterCard">MasterCard</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: 150 }}>
          <InputLabel>City</InputLabel>
          <Select
            name="City"
            value={filters.City}
            label="City"
            onChange={handleFilterChange}
          >
            <MenuItem value="City A">City A</MenuItem>
            <MenuItem value="City B">City B</MenuItem>
          </Select>
        </FormControl>
        <TextField sx={{ width: 150 }}
          name="MerchantID"
          value={filters.MerchantID}
          onChange={handleFilterChange}
          label="Merchant ID"
          variant="outlined"
        />
      </Box>
      <Paper sx={{ mb: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>MerchantID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Card brands</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Street num</TableCell>
              <TableCell>Postal code</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleMerchants.map((merchant) => (
              <TableRow key={merchant.MerchantID}>
                <TableCell>{merchant.MerchantID}</TableCell>
                <TableCell>{merchant.Name}</TableCell>
                <TableCell>{merchant.Status}</TableCell>
                <TableCell>{merchant.CardBrands}</TableCell>
                <TableCell>{merchant.City}</TableCell>
                <TableCell>{merchant.Address}</TableCell>
                <TableCell>{merchant.StreetNum}</TableCell>
                <TableCell>{merchant.PostalCode}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination count={10} page={page} onChange={handlePageChange} />
      </Box>
    </Box>
  );
};

export default MerchantsPage;
