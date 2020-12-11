import React, { useState } from 'react';
import XButton from './XButton.js';
import StartGenreButton from './StartGenreButton.js';

function Homepage(props){
    return <div className = 'main'>
        <XButton className = 'exit'
            onClick = {getOverview}
        />
        <div className = 'textbox'>What music genre would you like to learn about?</div>
        <div className = 'buttonRow'>
            <StartGenreButton
                title = {props.name1}
                onClick = {getBigBubble}
            />
            <StartGenreButton
                title = {props.name2}
                onClick = {getBigBubble}
            />
            <StartGenreButton
                title = {props.name3}
                onClick = {getBigBubble}
            />
        </div>
        <SearchBar
            onClick = {getBigBubble}
        />
        <PlayButton/>
    </div>
}