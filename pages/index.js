import { Center, Flex, Text, VisuallyHiddenInput, Heading } from "@chakra-ui/react";
import * as tf from "@tensorflow/tfjs";
import Head from "next/head";
import { useEffect, useState } from "react";
import PreviewContainer from "../component/PreviewContainer";
import PromptContainer from "../component/PromptConainer";
import MyCharts from "../component/MyCharts";
import MyTable from "../component/MyTable";
import { Layout } from "antd";
const { Header, Content } = Layout;

const BG_UPLOAD = `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='none' stroke='%23E4E6ED' stroke-width='4' stroke-dasharray='4, 12' stroke-linecap='square'/%3E%3C/svg%3E")`;
const WEIGHTS = "best_web_model/model.json";

export default function Home() {
  const [imagePreview, setImagePreview] = useState();
  const [isModelLoaded, setModelLoaded] = useState();
  const [isHover, setHover] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  // load model when the page is loaded
  useEffect(async () => {
    const model = await tf.loadGraphModel(WEIGHTS);
    setModelLoaded(model);
  }, []);

  // handler for element clicker
  const clickHandler = (elementId) => {
    document.getElementById(elementId).click();
  };

  // handler for uploading file
  const uploadHandler = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];

    // let the app read file contents asynchronously
    if (reader !== undefined && file !== undefined) {
      reader.onloadend = function () {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Head>
        <title>藻类识别计数系统</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Header>
          <p style={{ color: "white", fontSize: 24 }}>藻类识别计数系统</p>
        </Header>
        <Content>
          <Center as="main" h="100vh" marginTop="-100px">
            <Flex className="object-detection" justifyContent="center" alignItems="flex-start">
              <Flex
                className="detection-container"
                padding="1em"
                cursor="pointer"
                position="relative"
                height="calc(320px + 40px)"
                width="calc(480px + 40px)"
                backgroundImage={BG_UPLOAD}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={() => clickHandler("file-input")}
              >
                {imagePreview ? (
                  <PreviewContainer props={{ image: imagePreview, model: isModelLoaded, setData: setData }} />
                ) : isModelLoaded ? (
                  <PromptContainer props={{ hover: isHover }} />
                ) : (
                  <Text color="#868f9b">加载模型中...</Text>
                )}
              </Flex>
              <VisuallyHiddenInput id="file-input" type="file" accept="image/*" onChange={(e) => uploadHandler(e)} />
              <Flex marginLeft="3em">
                <MyTable data={data} />
              </Flex>
            </Flex>
          </Center>

          <MyCharts data={data} />
        </Content>
      </Layout>
    </>
  );
}
