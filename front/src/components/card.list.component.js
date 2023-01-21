/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Full name',
    minWidth: 100,
    editable: false,

  },
  {
    field: 'pan',
    headerName: 'Primary Account Number',
    minWidth: 150,
    flex: 1,
    editable: false,

  },
  {
    field: 'balance',
    headerName: 'Balance',
    type: 'number',
    minWidth: 110,
    editable: false,

  },
  {
    field: 'limit',
    headerName: 'Limit',
    type: 'number',
    minWidth: 110,
    editable: false,
  },
];

export default function DataGridDemo({ cards }) {
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
          fontWeight: 'bold',
        },
      }}
      >
        <DataGrid
          rows={cards}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          getCellClassName={(params) => {
            if (params.field === 'balance' && params.value <= 0) {
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

DataGridDemo.propTypes = {
  cards: PropTypes.array.isRequired,
};
