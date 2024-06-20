const UserCard = ({image,fullname,id}) => {
    return(
        <div>
            <img src= {image} alt = {`${fullname} profile`} />
            <h3>{fullname}</h3>
        </div>
    );
};
export default UserCard;