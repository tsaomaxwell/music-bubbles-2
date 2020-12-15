import React, { useState } from 'react';
import XButton from './XButton.js';
import StartGenreButton from './StartGenreButton.js';

function Homepage(props){
    return <div className = 'main'>
        <XButton className = 'exit'
            onClick = {props.getOverview}
        />
        <div className = 'textbox'>What music genre would you like to learn about?</div>
        <div className = 'buttonRow'>
            <StartGenreButton
                title = {props.name1}
                onClick = {props.getBigBubble}
            />
            <StartGenreButton
                title = {props.name2}
                onClick = {props.getBigBubble}
            />
            <StartGenreButton
                title = {props.name3}
                onClick = {props.getBigBubble}
            />
        </div>
        <SearchBar
            onClick = {props.getBigBubble}
        />
        <PlayButton/>
    </div>
}