import React, { ComponentProps } from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

const Picture = styled.picture`
  display: block;
`

const Img = styled.img`
  display: block;
`

export type ImageProps = {
  src: string,
  alt?: string,
  width?: number | string,
  height?: number | string,
  lazy?: boolean,
  webp?: boolean
}
export const Image: FunctionComponent<ImageProps> = ({src, alt, width, height, lazy, webp = false}) => {
  return <Picture>
    {
      webp &&
      <source type="image/webp" srcSet={`${src.replace(/\..*$/, '')}.webp`} />
    }
    <Img src={src} width={width} height={height} alt={alt} loading={lazy ? 'lazy' : 'eager'}/>
  </Picture>
}

const Outer = styled.div`
  position: relative;
  picture {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`
const ProxyCanvas = styled.canvas`
  display: block;
  width: 100%;
`

export const FixedRatioImage: FunctionComponent<ImageProps> = ({src, alt, width, height, webp}) => {
  return <Outer>
    <ProxyCanvas width={width} height={height}/>
    <Image src={src} width={width} height={height} alt={alt} webp={webp}/>
  </Outer>
}