import './App.scss';
import { useState, useEffect } from 'react';
import CodeEditor from './CodeEditor';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';

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

function App() {

    const [htmlContent, setHtmlContent] = useState(""); // State: { 'htmlContent' : ... }
    const [drawerShow, setDrawer] = useState(false);

    return (
        <div className="App">
            
            <ThemeProvider theme={darkTheme}>
                <Drawer open={drawerShow} onClose={() => {
                    setDrawer(false);
                }}>
                    <Box sx={{width: 250}}>
                        <List>
                            <ListItem disablePadding sx={{paddingTop: '1rem', paddingBottom: '1rem'}}>
                                <ListItemButton key="copy">
                                    <ListItemIcon>
                                        <ContentPasteIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Copy Markdown" />
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                            <ListItem disablePadding sx={{paddingTop: '1rem'}}>
                                <ListItemButton key="source">
                                    <ListItemIcon>
                                        <GitHubIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Source" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton key="about">
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
                    }} color="inherit" aria-label="delete">
                        <MenuIcon />
                    </IconButton>

                </div>
                <CodeEditor setHtmlContent={setHtmlContent} />
                <div className="previewContainer" dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
            </div>
        </div>
    );
}

export default App;