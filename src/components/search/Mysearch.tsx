import { Box, IconButton } from '@mui/material';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import ReplayIcon from '@mui/icons-material/Replay';
import { useRecoilState } from 'recoil';
import { useUserState } from '../../recoil/OnMom';
import { serviceUser } from '../../constants/constans';

const Mysearch = () => {
  //user 리코일
  const [user, setUser] = useRecoilState(useUserState);

  //input 값
  const [value, setValue] = useState('');

  //input값
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  //search Handler
  const searchHandler = () => {
    const searchValue = user.filter((v) => v.임직원명 === value);
    if (searchValue.length !== 0) {
      setUser(searchValue);
    } else if (value === '') {
      setUser(serviceUser);
    } else {
      alert('일치하는 임직원이 없습니다!');
    }
  };

  return (
    <Box sx={{ display: 'flex', gap: '5px', height: '50px', alignItems: 'center' }}>
      <Input
        value={value}
        onChange={handleChange}
        placeholder="이름,연락처를 입력해주세요."
        sx={{ border: '1px solid #ddd', width: '300px', height: '37px' }}
      />
      <Button onClick={searchHandler} sx={{ display: 'flex', gap: '5px' }}>
        <SearchIcon />
        <span>조회</span>
      </Button>
      <Button sx={{ display: 'flex', gap: '5px' }}>
        <ReplayIcon sx={{ cursor: 'pointer', transform: 'scaleX(-1) rotate(-40deg)' }} />
        <span>새로고침</span>
      </Button>
    </Box>
  );
};

export default Mysearch;
