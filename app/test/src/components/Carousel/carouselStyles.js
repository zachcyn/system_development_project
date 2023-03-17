import * as React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';

/*
export const StyledBox = styled(Box)`
margin: auto;
padding: 20px;
maxWidth: 400;
flexGrow: 1;
`


export function BoxSx() {
    return (
        <Box
            sx={{
                margin: 'auto',
                padding: '20px',
                maxWidth: 400,
                flexGrow: 1
            },
            }}
        />
    );
}
*/
const StyledBox = styled(Box)({
    margin: 'auto',
    padding: '20px',
    maxWidth: 400,
    flexGrow: 1
});

export default function BasicUsage() {
    return <styledBox>daeshjklubgfhcuilw se</styledBox>;
}