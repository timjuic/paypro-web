import React, { useState } from "react";
import Navigation from "./navigation";
import UserTable from "./userTable";
import { 
  Container, 
  Pagination, 
  Box, 
  Typography, 
  Button, 
  TextField, 
  InputAdornment,
  IconButton
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const InlinePagination = ({ count, page, onChange }) => {
  return (
    <Pagination count={count} page={page} onChange={onChange} color="primary" />
  );
};

const usersData = [
  // todo
];

const UsersPage = () => {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    search: '',
    // todo
  });

  const handlePageChange = (event, value) => {
    setPage(value);
    // todo
  };

  const handleFilterChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
    });
    // todo
  };

  const handleSearch = () => {
    // todo
  };

  return (
    <Container maxWidth="lg">
      <main>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 , mt:4}}>
          <TextField
            name="search"
            value={filters.search}
            onChange={handleFilterChange}
            placeholder="Search Users"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleSearch}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {/* ... */}
        </Box>
        <UserTable users={usersData} />
        <Box sx={{ my: 2, display: 'flex', justifyContent: 'center' }}>
          <InlinePagination count={10} page={page} onChange={handlePageChange} />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3, mb: 2 }}>
          <Button variant="contained" color="primary">
            CONFIRM
          </Button>
        </Box>
      </main>
    </Container>
  );
};

export default UsersPage;
