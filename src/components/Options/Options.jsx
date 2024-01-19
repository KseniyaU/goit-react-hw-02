export const Options = ({ name, onUpdate}) => {
    
    return (
        <div>
            <button onClick={onUpdate}>{name}</button> 
        </div>
    );
}