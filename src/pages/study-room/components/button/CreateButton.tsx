import SCreateButton from '@/components/button/SCreateButton';
import { FaPlus } from 'react-icons/fa';

interface CreateButtonProps {
  onClick: () => void;
}

function CreateButton({ onClick }: CreateButtonProps) {
  return (
    <SCreateButton
      label="스터디방 개설"
      size="medium"
      Icon={FaPlus}
      borderRadius="10px"
      fontSize="24px"
      iconSize="32px"
      onClick={onClick}
    />
  );
}

export default CreateButton;
