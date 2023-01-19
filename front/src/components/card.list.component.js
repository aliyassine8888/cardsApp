import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { CardActions } from '@mui/material';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Full name',
    width: 150,
    editable: true,
  },
  {
    field: 'pan',
    headerName: 'Primary Account Number',
    width: 150,
    editable: true,
  },
  {
    field: 'balance',
    headerName: 'Balance',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'limit',
    headerName: 'Limit',
    type: 'number',
    width: 110,
    editable: true,
  }
];

export default function DataGridDemo({cards}) {
  return (
    (cards && cards.length > 0) ? (
        <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
            rows={cards}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
        />
        </Box>
      ) : (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="error">No Cards Found!</Alert>
        </Stack>
      )
  );
}