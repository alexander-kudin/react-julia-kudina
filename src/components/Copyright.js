// Material UI
import { Typography, Link, Box } from '@mui/material';

// Localization
import { useTranslation } from "react-i18next";

export default function Copyright(props) {
  const { t } = useTranslation();

  return (
    <Box {...props}>
      <Typography variant="body2" color="text.secondary" align="center" mb={2}>
        <Link color="inherit" href="/privacy">
          {t("home.sectionNames.privacy")}
        </Link>
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center" mb={2}>
        {`© 2021–${new Date().getFullYear()} `}
        <Link color="inherit" href="/">
          {t("home.artistName")}
        </Link>
      </Typography>
    </Box>
  );
}
