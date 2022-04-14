import { Box } from "@chakra-ui/layout";

const Footer = () => (
  <Box
    textAlign="center"
    p="5"
    color="gray.600"
    borderTop="1px"
    borderColor="gray.100"
  >
    © 2022 Realtor, Inc. All rights reserved. <br />
    <b>
      designed and created by{" "}
      <span style={{ color: "#4169E1", fontWeight: 700, cursor: "pointer" }}>
        Madan Ghimire
      </span>{" "}
    </b>
  </Box>
);

export default Footer;
