import { Modal, useMantineTheme } from '@mantine/core';
import { Button } from '@mui/material';
import PostHeader from '../PostHeader/PostHeader';
import './ShareModal.css'

const ShareModal = ({setshare, share}) => {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size='40%'
      opened={share} //IF MODEL OPEN IS TRUE THIS MODEL WILL BE OPEN
      onClose={()=>setshare(false)}//on close the fuction will tell setmodalopen to turn it to false
    >
    <PostHeader />
     
    </Modal>
  );
}

export default ShareModal