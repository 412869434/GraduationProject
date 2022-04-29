import { Flex, Box, Text } from "@chakra-ui/react";

function PromptContainer({ props }) {
  return (
    <Flex
      className="prompt-container"
      direction="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      w="100%"
      h="100%"
      pointerEvents="none"
    >
      <Box
        as="svg"
        aria-hidden="true"
        focusable="false"
        data-prefix="far"
        data-icon="image"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        w={128}
        h={128}
        transition="0.3s"
        fill={props.hover ? "honoluluBlue.500" : "#e4e6ed"}
      >
        <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z"></path>
      </Box>
      <Box className="prompt" color="#868f9b" mt={4}>
        <Text>把图片拖到此处，或者</Text>
        <Text>
          从你的电脑中{" "}
          <Box as="span" className="dialogue-link" color="black" textDecoration="underline">
            打开
          </Box>{" "}
        </Text>
      </Box>
    </Flex>
  );
}

export default PromptContainer;
