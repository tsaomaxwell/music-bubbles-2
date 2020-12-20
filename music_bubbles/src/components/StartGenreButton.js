import './StartGenreButton.css';

function StartGenreButton(props){
    return <button className = 'starter' onClick = {()=> {props.onClick(props.title)}}>
        {props.title}
    </button>
}

export default StartGenreButton;