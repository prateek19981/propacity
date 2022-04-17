import { Card, CardContent, Typography } from "@mui/material";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from "@mui/icons-material/Business";
import { Link as DOMLink } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <>
      <Card
        sx={{ minWidth: 275, marginTop: 5, backgroundColor: "#dcf2e2" }}
        raised={true}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <DOMLink
              to={`/users/${user.id}/albums`}
              style={{ textDecoration: "none" }}
            >
              {user.username}
            </DOMLink>
          </Typography>
          <Typography variant="h5" component="div">
            Leanne Graham
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Sincere@april.biz
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Kulas Light Apt. 556 Gwenborough 92998-3874
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary" display="flex">
            <LocalPhoneOutlinedIcon />
            9910321387
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary" display="flex">
            <LanguageIcon />
            hildegard.org
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary" display="flex">
            <BusinessIcon />
            Romaguera-Crona
          </Typography>
          <Typography paragraph color="text.secondary" display="flex">
            Multi-layered client-server neural-net
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default UserCard;
