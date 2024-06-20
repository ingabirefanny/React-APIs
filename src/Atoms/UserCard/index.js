import './index.css'
const UserCard = ({image,fullName}) =>{
    const cards = {
        display: 'flex',
        alignItems: 'center',
        // padding: '10px'
        justifyContent: 'space-between'
    };

    const words = {
        fontSize: '30px',
        fontWeight: 'bold'
    };

    const photo = {
        width: '150px',
        height: '100px',
        marginRight: '60px',
        // gap:'900px'
    };
    return(
        <div  className='users'  style={cards}>
            <img src= {image} alt = {`${fullName} profile`} style={photo} />
            <h3 style={words}>{fullName}</h3>
        </div>
    );

};
export default UserCard;