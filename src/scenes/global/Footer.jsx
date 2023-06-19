import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import { shades } from "../../theme";

const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box mt="70px" p="40px 0 " backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            FASHION
          </Typography>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta qui
            sint consequuntur cum eveniet est? Placeat, quis explicabo
            aspernatur saepe ea libero atque neque nulla, ullam dolorum eos
            totam cumque.
          </div>
        </Box>

        <Box>
            <Typography variant="h4" fontWeight="bold" mb="30px">
                About Us
            </Typography>
            <Typography mb="30px">Careers</Typography>
            <Typography mb="30px">Terms & Conditions</Typography>
            <Typography mb="30px">Our Stores</Typography>
            <Typography mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
            <Typography variant="h4" fontWeight="bold" mb="30px">
                Customer Care
            </Typography>
            <Typography mb="30px">Help Center</Typography>
            <Typography mb="30px">Track order</Typography>
            <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
            <Typography mb="30px">Refund & Returns</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
        <Typography variant="h4" fontWeight="bold" mb="30px">
                Contact Us
            </Typography>
            <Typography mb="30px">Vilniaus str. 17, Vilnius LT-1009</Typography>
            <Typography mb="30px">Email: superfashion@fashion.com</Typography>
            <Typography mb="30px">+370 6 123 4874</Typography>

        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
