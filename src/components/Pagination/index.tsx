import { Box, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination(){
  return (
    <Stack
      direction={["column", "row"]}
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <PaginationItem pagNumber={1} isCurrent={true}/>
        <PaginationItem pagNumber={2} />
        <PaginationItem pagNumber={3} />
        <PaginationItem pagNumber={4} />
        <PaginationItem pagNumber={5} />
        <PaginationItem pagNumber={6} />
        
      </Stack>
    </Stack>
  );
}