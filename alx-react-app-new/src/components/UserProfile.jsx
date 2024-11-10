// Using the Arrow function syntax
const UserProfile = (props) => {
  return (
    <div style={{ border: '1px solid red', padding: '10px', margin: '10px' }}>
      <h2 style={{color: 'blue'}}>{props.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
      <p>Bio:<span style={{ fontSize: '1rem', color: 'red'}}> {props.bio}</span> </p>
    </div>
  );
};

export default UserProfile;
