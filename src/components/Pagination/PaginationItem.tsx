import { Button } from "@chakra-ui/react"

interface PaginationItemProps {
  isCurrent?: boolean;
  pagNumber: number;
}

export function PaginationItem({ 
  isCurrent = false, 
  pagNumber 
}: PaginationItemProps){
  if(isCurrent){
    return (
      <Button 
        size="sm"
        fontSize="xs"
        w="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bgColor: 'pink.500',
          cursor: 'default'
        }}
      >
        {pagNumber}  
      </Button>
    )
  }
  return (
    <Button 
      size="sm"
      fontSize="xs"
      w="4"
      bg="gray.700"
      _hover={{
        bg: 'gray.500'
      }}
    >
      {pagNumber}  
    </Button>
  );
}