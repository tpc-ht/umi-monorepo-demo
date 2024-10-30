// import styled from 'styled-components';
import {Button as AntdButton, ButtonProps} from 'antd';
import React from 'react';

// export const HandlerBtn = styled.div`
//   font-size: 16px;
//   cursor: pointer;
//
//   &:hover {
//     color: var(--focus-border);
//   }
// `;
export const Button: React.FC<ButtonProps> = (props) => {
  return <AntdButton {...props}/>
}
