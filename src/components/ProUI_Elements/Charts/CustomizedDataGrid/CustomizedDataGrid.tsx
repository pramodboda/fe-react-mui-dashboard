// import * as React from "react";
import {Stack, Box, Button} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "../../../../internals/gridData";


import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ProUI_SearchInputField from "../../ProUI_SearchInputField/ProUI_SearchInputField";


export default function CustomizedDataGrid() {
  return (
    <>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{padding: "0.5rem 1rem", backgroundColor: "#f9f9f9"}}>
 
        <ProUI_SearchInputField/>
<Button variant="contained" size="small" startIcon={<FileDownloadIcon/>}>Export (.xls)</Button>

    </Stack>
    <DataGrid
      checkboxSelection
      rows={rows}
      columns={columns}
      getRowClassName={(params) =>
        params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
      }
      initialState={{
        pagination: { paginationModel: { pageSize: 20 } },
      }}
      pageSizeOptions={[10, 20, 50]}
      disableColumnResize
      density="compact"
      slotProps={{
        filterPanel: {
          filterFormProps: {
            logicOperatorInputProps: {
              variant: "outlined",
              size: "small",
            },
            columnInputProps: {
              variant: "outlined",
              size: "small",
              sx: { mt: "auto" },
            },
            operatorInputProps: {
              variant: "outlined",
              size: "small",
              sx: { mt: "auto" },
            },
            valueInputProps: {
              InputComponentProps: {
                variant: "outlined",
                size: "small",
              },
            },
          },
        },
      }}
    />
    </>

  );
}
