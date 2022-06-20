import './App.scss';
import { useState, useEffect, useRef } from 'react';
import CodeEditor from './CodeEditor';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

// No Internet Explorer support currently (to fix using 'window' clipboard object)
function handleCopy(rawContent, {setSnack, setToastType, setToastText}) {

    navigator.clipboard.writeText(rawContent).then( () => {
        setToastType('success');
        setToastText('Copied to clipboard!');
    }, () => {
        setToastType('error');
        setToastText('Failed to copy to clipboard!');
    });

    return setSnack(true);
}

function App() {

    const [htmlContent, setHtmlContent] = useState(""); // State: { 'htmlContent' : ... }
    const [rawContent, setRawContent] = useState("");   // State: { 'rawContent' : ... }
    const [drawerShow, setDrawer] = useState(false);
    const [snackShow, setSnack] = useState(false);
    const [toastType, setToastType] = useState("error");
    const [toastText, setToastText] = useState("An error occurred");

    return (
        <div className="App">

            <Snackbar open={snackShow} autoHideDuration={3000} onClose={ () => { 
                setSnack(false);
            }}>
                <Alert severity={toastType} sx={{ width: '100%' }}>
                    {toastText}
                </Alert>
            </Snackbar>
            
            <ThemeProvider theme={darkTheme}>
                <Drawer open={drawerShow} onClose={() => {
                    setDrawer(false);
                }}>
                    <Box sx={{width: 250}}>
                        <List>
                            <ListItem disablePadding sx={{paddingTop: '1rem', paddingBottom: '1rem'}}>
                                <ListItemButton key="copy" onClick={() => {
                                    handleCopy(rawContent, {setSnack, setToastType, setToastText});
                                }}>
                                    <ListItemIcon>
                                        <ContentPasteIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Copy Markdown" />
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                            <ListItem disablePadding sx={{paddingTop: '1rem'}}>
                                <ListItemButton key="source" component="a" href="https://github.com/spacetimed/noteTaken">
                                    <ListItemIcon>
                                        <GitHubIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Source" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton key="about" component="a" href="https://github.com/spacetimed/noteTaken">
                                    <ListItemIcon>
                                        <LibraryBooksIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="About" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>
            </ThemeProvider>

            <div className="contentGrid">

                <div className="sidebar">
                    <IconButton onClick={() => {
                        setDrawer(true);
                    }} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                </div>

                <CodeEditor setHtmlContent={setHtmlContent} setRawContent={setRawContent} />

                <div className="previewContainer">
                    <div className="previewContent" dangerouslySetInnerHTML={{ __html: htmlContent }}>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;