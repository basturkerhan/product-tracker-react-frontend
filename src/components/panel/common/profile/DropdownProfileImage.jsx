import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SmallProfileImage from '../profile/SmallProfileImage'

function DropdownProfileImage() {
  return (
    <DropdownButton
      align="end"
      title={<SmallProfileImage src="https://media.istockphoto.com/vectors/profile-picture-vector-illustration-vector-id587805156?s=170667a" alt="profile" />}
      id="dropdown-menu-align-end"
    >
      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
      <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </DropdownButton>
  );
}

export default DropdownProfileImage;