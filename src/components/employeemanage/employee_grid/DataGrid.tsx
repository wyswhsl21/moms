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
import { useRecoilState } from 'recoil';
import { useUserState } from '../../../recoil/OnMom';
import { serviceUser } from '../../../constants/constans';
const EmployeeDataGrid = () => {
  const [isLabelCheck, setIsLabelCheck] = useState(true);
  const label = { inputProps: { 'aria-label': 'Size switch demo' } };
  const [user, setUser] = useRecoilState(useUserState);
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

  //checkbox 핸들러
  const [checkedAll, setCheckedAll] = useState(false);
  const [checkedItems, setCheckedItems] = useState(Array(serviceUser.length).fill(false));
  console.log(checkedItems);
  //전체 체크박스 핸들러
  const handleCheckAllChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setCheckedAll(checked);
    setCheckedItems(Array(serviceUser.length).fill(checked));
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
      <Table stickyHeader={true} sx={{ minWidth: 1000 }} aria-label="simple table">
        <TableHead>
          <TableRow hover={true}>
            <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }} padding="checkbox" align="center">
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
            <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }} align="center">
              번호
            </TableCell>
            <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }} align="center">
              프로필
            </TableCell>
            <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }} align="center">
              임직원명
            </TableCell>
            <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }} align="center">
              생년월일
            </TableCell>
            <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }} align="center">
              성별
            </TableCell>
            <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }} align="center">
              연락처
            </TableCell>
            <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }} align="center">
              와우인 가입요청
            </TableCell>
            <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }} align="center">
              임직원 접속여부
            </TableCell>
            <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }} align="center">
              부서
            </TableCell>
            <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }} align="center">
              직책
            </TableCell>
            <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }} align="center">
              직위
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="scroll">
          {user.map((row, idx) => (
            <TableRow key={row.프로필} sx={{ '&:last-child td, &:last-child th': { border: '' } }}>
              <TableCell
                sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}
                align="center"
                component="th"
                scope="row"
              >
                {/* 개별 체크박스 */}
                <FormControlLabel
                  label=""
                  control={<Checkbox checked={checkedItems[idx]} onChange={handleCheckItemChange(idx)} />}
                />
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}
                component="th"
                scope="row"
              >
                {row.번호}
              </TableCell>
              <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }} align="center">
                <img style={{ width: '30px' }} src={row.프로필} />
              </TableCell>
              <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }} align="center">
                {row.임직원명}
              </TableCell>
              <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }} align="center">
                {row.생년월일}
              </TableCell>
              <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }} align="center">
                {row.성별}
              </TableCell>
              <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }} align="center">
                {row.연락처}
              </TableCell>
              <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }} align="center">
                {row.와우인가입요청 ? (
                  <Box
                    sx={{
                      ml: 7,
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
              <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }} align="center">
                {row.임직원접속여부 ? (
                  <Switch sx={{ ml: 1 }} checked={true} {...label} defaultChecked size="small" />
                ) : (
                  <Switch sx={{ ml: 1 }} checked={false} {...label} defaultChecked />
                )}
              </TableCell>
              <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }} align="center">
                {row.부서}
              </TableCell>
              <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }} align="center">
                {row.직책}
              </TableCell>
              <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }} align="center">
                {row.직위}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeDataGrid;
