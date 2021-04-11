import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">  {/*   User info (Name, Email, Avatar)   */}
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Adrian Valdes</Text>
          <Text color="gray.300" fontSize="small">
            adriangvaldes@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Adrian Valdes" src="https://github.com/adriangvaldes.png"/> 
  </Flex>
  );
}