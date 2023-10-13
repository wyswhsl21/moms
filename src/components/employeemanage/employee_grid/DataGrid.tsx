import React, { useEffect, useRef, useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator'; // 🔥 2
import {
  Box,
  Checkbox,
  FormControlLabel,
  Paper,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import profile from '../../../assets/profile/짱구.svg';
import './DataGrid.scss';
const EmployeeDataGrid = () => {
  const [isLabelCheck, setIsLabelCheck] = useState(true);
  const label = { inputProps: { 'aria-label': 'Size switch demo' } };

  function createData(
    번호: number,
    프로필: any,
    임직원명: string,
    생년월일: string,
    성별: string,
    연락처: string,
    와우인가입요청: boolean,
    임직원접속여부: boolean,
    부서: string,
    직책: string,
    직위: string,
  ) {
    return { 번호, 프로필, 임직원명, 생년월일, 성별, 연락처, 와우인가입요청, 임직원접속여부, 부서, 직책, 직위 };
  }
  const rows = [
    createData(
      1,
      profile,
      ' 권미정',
      '1990-10-29',
      '여자',
      '010-5096-4206',
      true,
      true,
      '미배정',
      '요양보호사',
      '사원님',
    ),
    createData(
      2,
      profile,
      ' 권미정',
      '1990-10-29',
      '여자',
      '010-5096-4206',
      true,
      true,
      '미배정',
      '요양보호사',
      '사원님',
    ),
    createData(
      3,
      profile,
      ' 권미정',
      '1990-10-29',
      '여자',
      '010-5096-4206',
      true,
      true,
      '미배정',
      '요양보호사',
      '사원님',
    ),
    createData(
      4,
      profile,
      ' 권미정',
      '1990-10-29',
      '여자',
      '010-5096-4206',
      true,
      true,
      '미배정',
      '요양보호사',
      '사원님',
    ),
    createData(
      5,
      profile,
      ' 권미정',
      '1990-10-29',
      '여자',
      '010-5096-4206',
      true,
      true,
      '미배정',
      '요양보호사',
      '사원님',
    ),
    createData(
      6,
      profile,
      ' 권미정',
      '1990-10-29',
      '여자',
      '010-5096-4206',
      true,
      true,
      '미배정',
      '요양보호사',
      '사원님',
    ),
    createData(
      1,
      profile,
      ' 권미정',
      '1990-10-29',
      '여자',
      '010-5096-4206',
      true,
      true,
      '미배정',
      '요양보호사',
      '사원님',
    ),
    createData(
      1,
      profile,
      ' 권미정',
      '1990-10-29',
      '여자',
      '010-5096-4206',
      true,
      true,
      '미배정',
      '요양보호사',
      '사원님',
    ),
    createData(
      1,
      profile,
      ' 권미정',
      '1990-10-29',
      '여자',
      '010-5096-4206',
      true,
      true,
      '미배정',
      '요양보호사',
      '사원님',
    ),
    createData(
      1,
      profile,
      ' 권미정',
      '1990-10-29',
      '여자',
      '010-5096-4206',
      true,
      true,
      '미배정',
      '요양보호사',
      '사원님',
    ),
    createData(
      1,
      profile,
      ' 권미정',
      '1990-10-29',
      '여자',
      '010-5096-4206',
      true,
      true,
      '미배정',
      '요양보호사',
      '사원님',
    ),
    createData(
      1,
      profile,
      ' 권미정',
      '1990-10-29',
      '여자',
      '010-5096-4206',
      true,
      true,
      '미배정',
      '요양보호사',
      '사원님',
    ),
    createData(
      1,
      profile,
      ' 권미정',
      '1990-10-29',
      '여자',
      '010-5096-4206',
      true,
      true,
      '미배정',
      '요양보호사',
      '사원님',
    ),
    createData(
      1,
      profile,
      ' 권미정',
      '1990-10-29',
      '여자',
      '010-5096-4206',
      true,
      true,
      '미배정',
      '요양보호사',
      '사원님',
    ),
    createData(
      1,
      profile,
      ' 권미정',
      '1990-10-29',
      '여자',
      '010-5096-4206',
      true,
      true,
      '미배정',
      '요양보호사',
      '사원님',
    ),
    createData(
      1,
      profile,
      ' 권미정',
      '1990-10-29',
      '여자',
      '010-5096-4206',
      true,
      true,
      '미배정',
      '요양보호사',
      '사원님',
    ),
    createData(
      1,
      profile,
      ' 권미정',
      '1990-10-29',
      '여자',
      '010-5096-4206',
      true,
      true,
      '미배정',
      '요양보호사',
      '사원님',
    ),
    createData(
      1,
      profile,
      ' 권미정',
      '1990-10-29',
      '여자',
      '010-5096-4206',
      true,
      true,
      '미배정',
      '요양보호사',
      '사원님',
    ),
    createData(
      1,
      profile,
      ' 권미정',
      '1990-10-29',
      '여자',
      '010-5096-4206',
      true,
      true,
      '미배정',
      '요양보호사',
      '사원님',
    ),
    createData(
      1,
      profile,
      ' 권미정',
      '1990-10-29',
      '여자',
      '010-5096-4206',
      true,
      true,
      '미배정',
      '요양보호사',
      '사원님',
    ),
    createData(
      1,
      profile,
      ' 권미정',
      '1990-10-29',
      '여자',
      '010-5096-4206',
      true,
      true,
      '미배정',
      '요양보호사',
      '사원님',
    ),
  ];

  //checkbox 핸들러
  const [checked, setChecked] = useState([true, false]);
  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };

  const tableBodyRef = useRef<HTMLTableRowElement>(null);

  //테이블 위치 스크롤 위치 고정 핸들러
  const fixScrollHandler = () => {
    if (tableBodyRef.current) {
      const scrollTop = tableBodyRef.current.scrollTop;
      if (scrollTop < 140) {
        tableBodyRef.current.scrollTop = 140;
      }
    }
  };
  useEffect(() => {
    //초기에 스크롤 위치 계산해서 잡아준다음 더이상 못올라가게끔 로직 수정

    if (tableBodyRef.current) {
      tableBodyRef.current.addEventListener('scroll', fixScrollHandler);
    }

    return () => {
      if (tableBodyRef.current) {
        tableBodyRef.current.removeEventListener('scroll', fixScrollHandler);
      }
    };
  }, []);
  return (
    <TableContainer ref={tableBodyRef} className="grid" component={Paper}>
      <Table stickyHeader={true} sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox" align="left">
              <FormControlLabel
                label=""
                control={
                  <Checkbox
                    checked={checked[0] && checked[1]}
                    indeterminate={checked[0] !== checked[1]}
                    onChange={handleChange1}
                  />
                }
              />
            </TableCell>
            <TableCell align="left">번호</TableCell>
            <TableCell align="left">프로필</TableCell>
            <TableCell align="left">임직원명</TableCell>
            <TableCell align="left">생년월일</TableCell>
            <TableCell align="left">성별</TableCell>
            <TableCell align="center">연락처</TableCell>
            <TableCell align="left">와우인 가입요청</TableCell>
            <TableCell align="left">임직원 접속여부</TableCell>
            <TableCell align="left">부서</TableCell>
            <TableCell align="center">직책</TableCell>
            <TableCell align="left">직위</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="scroll">
          {rows.map((row, idx) => (
            <TableRow key={row.프로필} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="left" component="th" scope="row">
                <FormControlLabel label="" control={<Checkbox checked={checked[0]} onChange={handleChange2} />} />
              </TableCell>
              <TableCell component="th" scope="row">
                {row.번호}
              </TableCell>
              <TableCell align="left">
                <img style={{ width: '30px' }} src={row.프로필} />
              </TableCell>
              <TableCell align="left">{row.임직원명}</TableCell>
              <TableCell align="left">{row.생년월일}</TableCell>
              <TableCell align="left">{row.성별}</TableCell>
              <TableCell align="left">{row.연락처}</TableCell>
              <TableCell align="left">
                {row.와우인가입요청 ? (
                  <Box
                    sx={{
                      ml: 3,
                      color: '#fff',
                      backgroundColor: '#2ecc71',
                      width: '60px',
                      height: '20px',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '11px',
                    }}
                  >
                    등록완료
                  </Box>
                ) : (
                  <Box>등록요청</Box>
                )}
              </TableCell>
              <TableCell align="left">
                {row.임직원접속여부 ? (
                  <Switch sx={{ ml: 3 }} checked={true} {...label} defaultChecked size="small" />
                ) : (
                  <Switch sx={{ ml: 3 }} checked={false} {...label} defaultChecked />
                )}
              </TableCell>
              <TableCell align="left">{row.부서}</TableCell>
              <TableCell align="left">{row.직책}</TableCell>
              <TableCell align="left">{row.직위}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeDataGrid;
