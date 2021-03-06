import { useState } from 'react';
import styled from 'styled-components';
import { device } from '../styles/theme';
import { DropdownBtn, DropdownCheck } from '../public/assets';

const Dropdown = ({ list, selected, getNoteData }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Container>
            <span>Select version:</span>
            <DropdownBox onClick={handleOpen} isOpen={isOpen}>
                <span className="__text">{selected}</span>
                <span
                    className="__btn"
                    aria-label="dropdown"
                    onKeyPress={handleOpen}
                    tabIndex={0}
                    role="button"
                >
                    <DropdownBtn />
                </span>
            </DropdownBox>
            {isOpen && (
                <DropdownCont>
                    {list.map((item: string, idx: number) => (
                        <DropdownItem key={item} isSelected={selected === item}>
                            {item === selected
                            && <span className="__icon__selected"><DropdownCheck /></span>}
                            <span
                                className="__text"
                                tabIndex={idx}
                                role="button"
                                onKeyPress={() => getNoteData(item)}
                                onClick={() => getNoteData(item)}
                            >{item}
                            </span>
                        </DropdownItem>
                    ))}
                </DropdownCont>
            )}
        </Container>
    );
};

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  font-size: 1.7rem;
  color: ${({ theme }) => theme.color.white};

  @media ${device.tablet} {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  @media ${device.mobile} {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
`;

const DropdownBox = styled.div<{ isOpen: boolean }>`
  flex-shrink: 1;
  cursor: pointer;
  position: relative;
  width: 35rem;
  padding: 1rem 0;
  margin-left: 1rem;
  border: 1px solid ${({ theme }) => theme.color.gray[700]};
  border-radius: 0.4rem;

  .__btn {
    position: absolute;
    right: 1.239rem;
    transition-duration: .2s;
    transform: ${({ isOpen }) => isOpen && 'rotate(180deg)'};
  }

  .__text {
    margin-left: 1.4rem;
  }

  @media ${device.tablet} {
    width: 100%;
    margin-top: 1.5rem;
    margin-left: 0;
  }

  @media ${device.mobile} {
    width: 100%;
    margin-top: 1.5rem;
    margin-left: 0;
  }
`;

const DropdownCont = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 35rem;
  margin-top: 0.2rem;
  background-color: #1C1E21;
  border: 1px solid ${({ theme }) => theme.color.gray[700]};
  border-radius: 0.4rem;

  @media ${device.tablet} {
    width: 100%;
  }

  @media ${device.mobile} {
    width: 100%;
  }
`;

const DropdownItem = styled.div<{ isSelected: boolean }>`
  position: relative;
  padding: 0.5rem 0;
  color: ${({ isSelected }) => isSelected && '#65CBA0'};

  .__icon__selected {
    position: absolute;
    bottom: 0.5rem;
    margin-left: 1.4rem;
  }

  .__text {
    cursor: pointer;
    margin-left: 3rem;

    :hover {
      color: ${({ theme }) => theme.color.green};
    }
  }
`;

export default Dropdown;
