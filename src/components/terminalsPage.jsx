import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Table, 
  TableHead, 
  TableRow, 
  TableCell, 
  TableBody, 
  Pagination, 
  Select, 
  MenuItem, 
  InputLabel, 
  FormControl, 
  TextField 
} from '@mui/material';

const TerminalsPage = () => {
  // todo: fetch logic
  const sampleTerminals = [
    { TerminalID: 1, TerminalKey: "Key123", Status: "Active", Type: "Type1", DateCreated: "2021-01-01", MerchantID: "Merchant1" },
  ];

  const [filters, setFilters] = useState({
    Status: '',
    Type: '',
    DateCreated: '',
    TerminalID: '',
  });

  const [page, setPage] = useState(1);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value,
    }));
    // todo: filter logic
  };

  const handlePageChange = (event, value) => {
    setPage(value);
    // todo: pagination logic
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
          <InputLabel>Type</InputLabel>
          <Select
            name="Type"
            value={filters.Type}
            label="Type"
            onChange={handleFilterChange}
          >
            <MenuItem value="Type1">tip1</MenuItem>
            <MenuItem value="Type2">tip2</MenuItem>
          </Select>
        </FormControl>
        <TextField sx={{ width: 150 }}
          type="date"
          name="DateCreated"
          value={filters.DateCreated}
          onChange={handleFilterChange}
          label="Date Created"
          InputLabelProps={{ shrink: true }}
        />
        <TextField sx={{ width: 150 }}
          name="TerminalID"
          value={filters.TerminalID}
          onChange={handleFilterChange}
          label="Terminal ID"
          variant="outlined"
        />
      </Box>
      <Paper sx={{ mb: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>TerminalID</TableCell>
              <TableCell>TerminalKey</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>DateCreated</TableCell>
              <TableCell>MerchantID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleTerminals.map((terminal) => (
              <TableRow key={terminal.TerminalID}>
                <TableCell>{terminal.TerminalID}</TableCell>
                <TableCell>{terminal.TerminalKey}</TableCell>
                <TableCell>{terminal.Status}</TableCell>
                <TableCell>{terminal.Type}</TableCell>
                <TableCell>{terminal.DateCreated}</TableCell>
                <TableCell>{terminal.MerchantID}</TableCell>
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

export default TerminalsPage;
