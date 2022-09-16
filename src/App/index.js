import { Box } from '@mui/material';
import '../assets/styles/styles.css'

import TodoList from '../Components/customs/TodoList';
function App() {
  return (
    <Box sx={styles.appStyle}>
      <Box sx={styles.todoListContainer}>
        <TodoList/>
      </Box>
    </Box>
  );
}


const styles = {
  appStyle: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
},
todoListContainer:{
  flex:1,
  display:"flex",
  justifyContent:'center',
  alignItems: 'center',
  py:3
}
}
export default App;
