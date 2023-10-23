import React, { ComponentProps } from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

const Picture = styled.picture`
  display: content;
`

const Img = styled.img`
  display: block;
`

export type ImageProps = {
  src: string
} & ComponentProps<'img'>
export const Image: FunctionComponent<ImageProps> = (props) => {
  return <Picture>
    <source type="image/webp" srcSet={`${props.src.replace(/\..*$/, '')}.webp`} />
    <Img {...props}/>
  </Picture>
}