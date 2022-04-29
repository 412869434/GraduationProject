import { Box } from "@chakra-ui/react";
function DetectionContainer({ props }) {
  return (
    <Box
      className="detection"
      position="absolute"
      left={props.x}
      top={props.y}
      w={props.width}
      h={props.height}
      borderWidth="2px"
      borderStyle="solid"
      borderColor="red"
    >
      <Box
        className="label"
        position="absolute"
        left="1px"
        top="1px"
        color="#fff"
        padding="0.2em"
        whiteSpace="nowrap"
        textTransform="uppercase"
        fontWeight="500"
        fontSize="0.8em"
        cursor="default"
        backgroundColor="red"
      >
        {props.label} - {props.score}
      </Box>
    </Box>
  );
}

export default DetectionContainer;
