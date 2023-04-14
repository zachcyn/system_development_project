import {    Avatar,    Box,    Button,    Card,    CardActions,    CardContent,    Divider,    Typography  } from '@mui/material';
import Profile from "../../assets/img/profile.png"
  
  const user = {
    avatar: Profile,
    city: 'Seremban',
    country: 'Malaysia',
    jobTitle: 'UX/UI Designer & Developer',
    name: 'Yie Nian Chu',
    timezone: 'BST'
  };
  
  export const AccountProfile = () => (
    <Card>
      <CardContent>
        <Box
          sx={{
            pt: 5,
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Avatar
            src={user.avatar}
            sx={{
              height: 80,
              mb: 2,
              width: 80,
            }}
          />
          <Typography
            gutterBottom
            variant="h5"
          >
            {user.name}
          </Typography>
          <Typography
            color="text.secondary"
            variant="body2"
          >
            {user.city}, {user.country}
          </Typography>
          <Typography
            color="text.secondary"
            variant="body2"
          >
            {user.timezone}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          fullWidth
          variant="text"
        >
          Upload picture
        </Button>
      </CardActions>
    </Card>
  );