import { useState } from 'react';
import styled from 'styled-components';
import { DropdownBtn, DropdownCheck } from '../public/assets';

const Dropdown = ({ list, selected, getNoteData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <div style={{ marginTop: '2rem' }}>Select version:</div>
      <Box>
        <span className="__text">{selected}</span>
        <span className="__btn" onClick={handleOpen}><DropdownBtn /></span>
      </Box>
      {isOpen && (
        <Drop>
          {list.map((item: string) => (
            <Item isSelected={selected === item} onClick={() => getNoteData(item)}>
              {item === selected
            && <span className="__check"><DropdownCheck /></span>}
              <span className="__text">{item}</span>
            </Item>
          ))}
        </Drop>
      )}
    </Container>
  );
};

const Container = styled.div`
  font-weight: 300;
  font-size: 1.7rem;
  color: ${({ theme }) => theme.color.white};
  position: relative;
  background-color: #001B33;
`;

const Box = styled.div`
  margin-top: 0.8rem;
  position: relative;
  width: 22rem;
  padding: 0.5rem 0;
  border: 1px solid ${({ theme }) => theme.color.gray[700]};
  border-radius: 0.4rem;
  .__btn{
    cursor: pointer;
    position: absolute;
    right: 1.239rem;
  }
  .__text{
    margin-left: 1.4rem;
  }
`;

const Drop = styled.div`
  margin-top: 0.2rem;
  width: 22rem;
  position: absolute;
  background-color: #001B33;
  border: 1px solid ${({ theme }) => theme.color.gray[700]};
  border-radius: 0.4rem;
`;

const Item = styled.div<{isSelected: boolean}>`
  position: relative;
  padding: 0.5rem 0;
  color: ${({ isSelected }) => isSelected && '#65CBA0'};
  .__check{
    position: absolute;
    bottom: 0.5rem;
    margin-left: 1.4rem;
  }
  .__text{
    cursor: pointer;
    margin-left: 3rem;
    :hover{
      color: ${({ theme }) => theme.color.green};
    }
  }
`;

export default Dropdown;
