
import { Box, TextField, Typography, Button, styled } from '@mui/material';

const Component = styled(Box)({
    marginTop: 20,
    '& > p': {
        fontSize: 26,
        marginBottom: 10
    },
    '& > div > div': {
        marginRight: 20,
        minWidth: 200
    }
})

const AddInvoice = () => {

    return(
        <Component>
            <Typography>Add Invoices</Typography>
            <Box>
                <TextField
                   variant='standard'
                   placeholder='Enter vender name'
                />
                <TextField
                   variant='standard'
                   placeholder='Enter product name'
                />
                <TextField
                   variant='standard'
                   placeholder='Enter amount (in Rs)'
                   type="number"
                />
                <TextField
                   variant='standard'
                   placeholder='Enter date'
                   type="date"
                />
                <Button variant="contained">
                    Add Invoice
                </Button>
            </Box>
        </Component>
    )
}

export default AddInvoice;