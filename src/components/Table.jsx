import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableVirtuoso } from "react-virtuoso";

// Virtuoso components wrapper
const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table
      {...props}
      sx={{ borderCollapse: "separate", tableLayout: "fixed" }}
    />
  ),
  TableHead: React.forwardRef((props, ref) => (
    <TableHead {...props} ref={ref} />
  )),
  TableRow,
  TableBody: React.forwardRef((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

// render table header
function fixedHeaderContent(headers) {
  return (
    <TableRow>
      {headers.map((col) => (
        <TableCell
          key={col.key}
          variant="head"
          align={col.numeric ? "right" : "left"}
          style={{ width: col.width }}
          sx={{ backgroundColor: "background.paper" }}
        >
          {col.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

// render table row
function rowContent(_index, row, headers,selectedItem) {
  return (
    <React.Fragment>
      {headers.map((col) => (
        <TableCell
          onClick={(e) => selectedItem(e,row)}
          key={col.key}
          align={col.numeric ? "right" : "left"}
          style={{ cursor: "pointer" }}
        >
          {row[col.key]}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

// Reusable component
export default function CustomizedTables({ props,selectedItem }) {
  if (!props || props.length === 0) return null;

  // Build headers from keys of first row
  const headers = Object.keys(props[0]).map((key) => ({
    key,
    label: key.toUpperCase(),
    numeric: false,
    width: 100,
    hight: 100,
  }));

  return (
    <Paper style={{ height:'100%', width: "100%" }}>
      <TableVirtuoso
        data={props}
        components={VirtuosoTableComponents}
        fixedHeaderContent={() => fixedHeaderContent(headers)}
        itemContent={(index, row) => rowContent(index, row, headers,selectedItem)}
      />
    </Paper>
  );
}
