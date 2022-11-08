import React from 'react';
import {ImageBackground} from 'react-native'

interface BIProps {
    children: React.ReactNode,



}

const BackgroundImage = ({children}: BIProps) => (
    <ImageBackground></ImageBackground>
)