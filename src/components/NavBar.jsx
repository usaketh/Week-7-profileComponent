const NavBar = () => {
    return (
      <nav style={styles.nav}>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <b>80K</b><br />Followers
          </li>
          <li style={styles.li}>
            <b>803K</b><br />Likes
          </li>
          <li style={styles.li}>
            <b>1.4K</b><br />Photos
          </li>
        </ul>
      </nav>
    );
  };
  
  const styles = {
    nav: {
        
        borderTop: '3px solid #ccc', // Add a border at the bottom for the line
        paddingBottom: '10px', // Adjust as needed for spacing
    },
    ul: {
      listStyle: 'none', // Change from 'list-style' to 'listStyle'
      display: 'flex',
      justifyContent: 'space-around',
    },
    
    li: {
      marginRight: '30px', // Change from 'margin-right' to 'marginRight'
    },
  };
  
  export default NavBar;
  