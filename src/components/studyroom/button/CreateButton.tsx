import SCreateButton from "../../button/SCreateButton";
// import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { CreateButtonStyle } from "./CreateButton.style";

function CreateButton() {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <CreateButtonStyle>
      <SCreateButton 
        label="스터디방 개설" 
        //onClick={openModal} 
        size="medium" 
        Icon={FaPlus}
        borderRadius="10px"
        fontSize="24px"
        iconSize={32}
      />

      {/* 모달 컴포넌트 추가 */}
    </CreateButtonStyle>
  );
};

export default CreateButton;