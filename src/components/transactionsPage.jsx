import React, { useState } from 'react';
import {
  Box, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody,
  Pagination, Select, MenuItem, InputLabel, FormControl, TextField
} from '@mui/material';

const TransactionsPage = () => {
  // todo: fetch logic
  const sampleTransactions = [
    { TransactionID: 1, MerchantID: "Merchant1", TerminalID: "Terminal1", Amount: "100.00", DateCreated: "2021-01-01", CardBrand: "Visa", TransactionType: "Sale" },
  ];

  const [filters, setFilters] = useState({
    Type: '',
    DateCreated: '',
    TransactionID: '',
    CardBrand: '',
    MerchantID: '',
    TerminalID: '',
  });

  const [page, setPage] = useState(1);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value,
    }));
    // TODO: filter logic
  };

  const handlePageChange = (event, value) => {
    setPage(value);
    // TODO: pagination logic
  };

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', gap: 2, mb: 2, flexWrap: 'wrap' }}>

        <FormControl sx={{ width: 150 }}>
          <InputLabel>Type</InputLabel>
          <Select
            name="Type"
            value={filters.Type}
            label="Type"
            onChange={handleFilterChange}
          >
            <MenuItem value="Sale">Sale</MenuItem>
            <MenuItem value="Refund">Refund</MenuItem>
          </Select>
        </FormControl>
        <TextField
          sx={{ width: 150 }}
          type="date"
          name="DateCreated"
          value={filters.DateCreated}
          onChange={handleFilterChange}
          label="Date Created"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          sx={{ width: 150 }}
          name="TransactionID"
          value={filters.TransactionID}
          onChange={handleFilterChange}
          label="Transaction ID"
          variant="outlined"
        />
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
        <TextField
          sx={{ width: 150 }}
          name="MerchantID"
          value={filters.MerchantID}
          onChange={handleFilterChange}
          label="Merchant ID"
          variant="outlined"
        />
        <TextField
          sx={{ width: 150 }}
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
              <TableCell>TransactionID</TableCell>
              <TableCell>MerchantID</TableCell>
              <TableCell>TerminalID</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>DateCreated</TableCell>
              <TableCell>CardBrand</TableCell>
              <TableCell>TransactionType</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleTransactions.map((transaction) => (
              <TableRow key={transaction.TransactionID}>
                <TableCell>{transaction.TransactionID}</TableCell>
                <TableCell>{transaction.MerchantID}</TableCell>
                <TableCell>{transaction.TerminalID}</TableCell>
                <TableCell>{transaction.Amount}</TableCell>
                <TableCell>{transaction.DateCreated}</TableCell>
                <TableCell>{transaction.CardBrand}</TableCell>
                <TableCell>{transaction.TransactionType}</TableCell>
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

export default TransactionsPage;
