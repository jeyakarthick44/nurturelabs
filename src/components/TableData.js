import React,{ useEffect,useState }  from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function TableData() {

    const [data, setData] = useState('')
  useEffect(() => {
    tableData();
  }, []);
  const tableData = () => {
    axios
      .get("https://raw.githubusercontent.com/akshita151199/APIs/main/data")
      .then(function (response) {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ASSET</StyledTableCell>
            <StyledTableCell align="right">AMOUNT</StyledTableCell>
            <StyledTableCell align="right">USER ACCOUNT</StyledTableCell>
            <StyledTableCell align="right">REFERRAL EARNING</StyledTableCell>
          </TableRow>
        </TableHead>
        {/* <TableBody>
          {data.map((item) => (
            <StyledTableRow key={item.asset}>
              <StyledTableCell align="right">{item.asset}</StyledTableCell>
              <StyledTableCell align="right">{item.amount}</StyledTableCell>
              <StyledTableCell align="right">{item.asset}</StyledTableCell>
              <StyledTableCell align="right">{item.amount}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody> */}
      </Table>
    </TableContainer>
  );
}
