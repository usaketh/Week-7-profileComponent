import PropTypes from 'prop-types';
import NavBar from './NavBar';

const Profile = ({user}) => {
  return (
    <div style={styles.card}>
      <img style={styles.img}src={user.avatar} alt="User Avatar"/>
      <h2 style={styles.name}><b>{user.name}</b> 32</h2>
      <h1 style={styles.description}>{user.location}</h1>
      <NavBar/>
    </div>
    
    
  )
}

Profile.propTypes = {
  user: PropTypes.object.isRequired
}

const styles = {
    card: {
      border: '3px solid #ddd',
      borderRadius: '8px',
      padding: '10px',
      margin: '10px',
      maxWidth: '500px',
      boxShadow: '0 6px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f8f9fa'
    },
    name: {
      fontSize: '24px',
      marginBottom: '10px',
      color: '#333',
    },
    description: {
      fontSize: '16px',
      color: '#555',
      marginBottom: '15px',
    },
    img: {
        width: '200px',
        height:'200px',
        borderRadius: '50%'
    }
};
export default Profile