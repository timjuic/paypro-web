import * as React from "react";
import Navigation from "./navigation";
import UserTable from "./userTable";
import { Table, TableHead, TableRow, TableCell, TableBody, Container, Pagination, Box, Typography, Button } from '@mui/material';

const InlinePagination = ({ count, page, onChange }) => {
    return (
      <Pagination count={count} page={page} onChange={onChange} color="primary" />
    );
  };
  
  const usersData = [
    // todo
  ];
  
  const ControlPanel = () => {
    const [page, setPage] = React.useState(1);
    const handlePageChange = (event, value) => {
      setPage(value);
      //TODO
    };
  
    return (
        <Container maxWidth="lg">
          <Box sx={{ my: 4 }}>
            <Navigation currentPage="Users" />
          </Box>
          <main>
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
  
  export default ControlPanel;