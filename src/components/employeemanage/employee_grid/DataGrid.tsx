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
    return {
      번호,
      프로필,
      임직원명,
      생년월일,
      성별,
      연락처,
      와우인가입요청,
      임직원접속여부,
      부서,
      직책,
      직위,
    };
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
  const [checkedAll, setCheckedAll] = useState(false);
  const [checkedItems, setCheckedItems] = useState(Array(rows.length).fill(false));
  //전체 체크박스 핸들러
  const handleCheckAllChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setCheckedAll(checked);
    setCheckedItems(Array(rows.length).fill(checked));
  };
  //개별 체크 박스 핸들러
  const handleCheckItemChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setCheckedItems((prev) => prev.map((item, i) => (i === index ? checked : item)));
  };

  useEffect(() => {
    //checkedItems 가 모두 true 라면 전체 체크 표시 활성화 아니라면 indetermine 상태로 바꿈.
    if (checkedItems.every((item) => item)) {
      setCheckedAll(true);
    } else {
      setCheckedAll(false);
    }
  }, [checkedItems]);
  //전체 체크 표시

  const tableBodyRef = useRef<HTMLTableRowElement>(null);

  return (
    <TableContainer ref={tableBodyRef} className="grid" component={Paper}>
      <Table stickyHeader={true} sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow hover>
            <TableCell padding="checkbox" align="center">
              {/* 전체 체크 해제 체크박스 */}
              <FormControlLabel
                label=""
                control={
                  <Checkbox
                    // 체크 표시
                    checked={checkedAll}
                    // 모두 체크 되지 않았을때 checkedItems.some 하나라도 true 가 있으면 true 반환
                    indeterminate={!checkedAll && checkedItems.some((item) => item)}
                    // 이건 모두 체크
                    onChange={handleCheckAllChange}
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
            <TableCell align="center">직위</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="scroll">
          {rows.map((row, idx) => (
            <TableRow key={row.프로필} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="left" component="th" scope="row">
                {/* 개별 체크박스 */}
                <FormControlLabel
                  label=""
                  control={<Checkbox checked={checkedItems[idx]} onChange={handleCheckItemChange(idx)} />}
                />
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
              <TableCell align="center">{row.연락처}</TableCell>
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
              <TableCell align="center">{row.직책}</TableCell>
              <TableCell align="center">{row.직위}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeDataGrid;
