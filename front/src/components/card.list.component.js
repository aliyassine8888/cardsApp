import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
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
    width: 220,
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
        <Box sx={{
        height: 400,
        width: '100%',
        '& .normalClass': {
          color: '#1a3e72',
        },
        '& .redClass': {
          color: '#ff0000',
          fontWeight:'bold'
        },
      }}>
        <DataGrid
            rows={cards}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
            getCellClassName={(params) => {
              if (params.field === 'balance' && params.value <=0) {
                return 'redClass';
              }
              return 'normalClass';
            }}
        />
        </Box>
      ) : (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="error">No Cards Found!</Alert>
        </Stack>
      )
  );
}