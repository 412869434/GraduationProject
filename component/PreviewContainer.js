import * as tf from "@tensorflow/tfjs";
import { useEffect, useState } from "react";
import Image from "next/image";
import LABELS from "../public/labels";
import DetectionContainer from "./DetectionContainer";
import { Box, Center, Flex } from "@chakra-ui/react";

const [MODEL_WIDTH, MODEL_HEIGHT] = [640, 640];

function PreviewContainer({ props }) {
  const [dataPredict, setDataPredict] = useState([]);
  const { setData } = props;

  useEffect(() => {
    // console.log(dataPredict);
    setData(dataPredict);
  }, [dataPredict]);

  // handler for object detection
  const detect = async (net) => {
    setDataPredict([]); // reset bounding box
    const imagePlaceholder = document.getElementsByClassName("preview-img")[0];
    const imageTensor = tf.browser.fromPixels(imagePlaceholder);

    // load input
    const input = tf.image.resizeBilinear(imageTensor, [MODEL_WIDTH, MODEL_HEIGHT]).div(255.0).expandDims(0);

    // inference
    const res = await net.executeAsync(input);
    const [boxes, scores, classes, valid_detections] = res;

    for (let i = 0; i < valid_detections.dataSync()[0]; i++) {
      const [x1, y1, x2, y2] = boxes.dataSync().slice(i * 4, (i + 1) * 4);
      setDataPredict((dataPredict) => [
        ...dataPredict,
        {
          score: scores.dataSync()[i].toFixed(2),
          label: LABELS[classes.dataSync()[i]],
          x: (x1 * 100).toFixed(2) + "%",
          y: (y1 * 100).toFixed(2) + "%",
          width: ((x2 - x1) * 100).toFixed(2) + "%",
          height: ((y2 - y1) * 100).toFixed(2) + "%",
        },
      ]);
    }
  };

  return (
    <Flex
      className="preview-container"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      position="relative"
    >
      <Box className="preview" w={480} h={320}>
        <Image
          className="preview-img"
          src={props.image}
          layout="fill"
          onLoad={() => detect(props.model)}
          alt="Image Preview"
        />
        {dataPredict.length == 0 ? (
          <Center
            position="absolute"
            w="100%"
            h="100%"
            color="white"
            backgroundColor="rgba(0,0,0,0.8)"
            cursor="progress"
          >
            检测中...
          </Center>
        ) : (
          dataPredict.map((row, i) => {
            return <DetectionContainer key={i} props={row} />;
          })
        )}
      </Box>
    </Flex>
  );
}

export default PreviewContainer;
