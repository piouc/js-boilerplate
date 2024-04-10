import React from 'react';
import { FunctionComponent } from 'react';
import { ResetCss } from './components/reset-css';
import { RootCss } from './components/root-css';
import { RestoreScroll } from './components/restore-scroll'

export const App: FunctionComponent = () => {
  return <>
    <ResetCss />
    <RootCss />
    <RestoreScroll />
  </>
}