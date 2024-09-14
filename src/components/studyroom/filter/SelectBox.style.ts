import styled from "styled-components";

export const SelectBoxStyle = styled.div`
  display: flex;
  
  .select-wrap {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 160px;
    height: 64px;
    margin-left: 31px;

    select {
      border: none;
      appearance: none;
      box-sizing: border-box;
			outline: none;
      background: transparent; // 배경색 투명
      width: 100%;
      height: 100%;
      // margin-left: 20px;
      font-size: 20px;
      text-align: center;
    }

    .triangle {
      position: relative;
      font-size: 18px;
      color: #C7C7C7;
    }
  }

  select option {
    background: ${({ theme }) => theme.color.bgLightGray}; 
    font-size: 18px;
    padding: 10px;
    border-radius: 4px;
    border-color: #E4E4E4;
  }
`;