import { Modal, useMantineTheme } from '@mantine/core';
import { Button } from '@mui/material';
import './ProFileModal.css'

const ProfileModal = ({modalopen, setmodalopen}) => {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size='40%'
      opened={modalopen} //IF MODEL OPEN IS TRUE THIS MODEL WILL BE OPEN
      onClose={()=>setmodalopen(false)}//on close the fuction will tell setmodalopen to turn it to false
    >
      <form className='form-info'>
        <h3 style={{textAlign:"center"}}>Your Info</h3>
        <div className="form-input">
            <input name="firstName" placeholder='First Name' className='info-input' />
            <input name="lastName" placeholder='Last Name'  className='info-input' />
        </div>
        <div className="form-input">
            <input name="lastName" placeholder='Works At'  className='info-input' style={{width:'28rem'}} />
        </div>

        <div className="form-input">
            <input type='text' name="firstName" placeholder='Lives In' className='info-input' />
            <input type='text' name="lastName" placeholder='Relationship Status'  className='info-input' />
        </div>
        <div className="region">
          <input type="file" name='profileImg' />
          <input type="file" name='coverImg' />
        </div>
        <Button size="small" variant='contained'>Update</Button>
      </form>
    </Modal>
  );
}

export default ProfileModal