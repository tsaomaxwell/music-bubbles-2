import './StartGenreButton.css';

function StartGenreButton(props){

    return <button className = 'outer' onClick = {()=> {props.onClick(props.title)}}>
        {props.title}
    </button>
}