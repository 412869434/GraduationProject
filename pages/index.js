import { Center, Flex, Text, VisuallyHiddenInput } from "@chakra-ui/react";
import * as tf from "@tensorflow/tfjs";
import Head from "next/head";
import { useEffect, useState } from "react";
import PreviewContainer from "../component/PreviewContainer";
import PromptContainer from "../component/PromptConainer";
import MyCharts from "../component/MyCharts";
import MyTable from "../component/MyTable";
import MyForm from "../component/MyForm";
import MyClassCharts from "../component/MyClassCharts";
import MyPieCharts from "../component/MyPieCharts";
import { Layout } from "antd";

const { Header, Content } = Layout;
const BG_UPLOAD = `url("data:image/svg+xml;charset=utf-8,%3Csvg 
xmlns='http://www.w3.org/2000/svg'%3E%3Crect 
width='100%25' height='100%25' fill='none' 
stroke='%23E4E6ED' stroke-width='4' stroke-dasharray='4, 12' 
stroke-linecap='square'/%3E%3C/svg%3E")`;
const WEIGHTS = "best_web_model/model.json";

export default function Home() {
  const [imagePreview, setImagePreview] = useState();
  const [isModelLoaded, setModelLoaded] = useState();
  const [isHover, setHover] = useState(false);
  const [data, setData] = useState([]);
  const [chartsType, setChartsType] = useState("score");
  const [rangeValue, setRangeValue] = useState([80, 100]);

  // 初始化异步加载模型
  useEffect(async () => {
    const model = await tf.loadGraphModel(WEIGHTS);
    setModelLoaded(model);
  }, []);

  // 元素点击器处理程序
  const clickHandler = (elementId) => {
    document.getElementById(elementId).click();
  };

  // 上传文件的处理程序
  const uploadHandler = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];

    // 让应用程序异步读取文件内容
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
              <Flex>
                <MyForm
                  setData={setData}
                  setImagePreview={setImagePreview}
                  setChartsType={setChartsType}
                  rangeValue={rangeValue}
                  setRangeValue={setRangeValue}
                />
              </Flex>
              <Flex
                className="detection-container"
                cursor="pointer"
                position="relative"
                height="calc(320px + 40px)"
                width="calc(480px + 40px)"
                backgroundImage={BG_UPLOAD}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={() => clickHandler("file-input")}
                border="1px"
              >
                {imagePreview ? (
                  <PreviewContainer
                    props={{ image: imagePreview, model: isModelLoaded, data: data, setData: setData }}
                  />
                ) : isModelLoaded ? (
                  <PromptContainer props={{ hover: isHover }} />
                ) : (
                  <Text color="#868f9b">加载模型中...</Text>
                )}
              </Flex>
              <VisuallyHiddenInput id="file-input" type="file" accept="image/*" onChange={(e) => uploadHandler(e)} />
              <Flex marginLeft="3em">
                <MyTable data={data} rangeValue={rangeValue} />
              </Flex>
            </Flex>
          </Center>
          {chartsType === "score" ? <MyCharts data={data} /> : <MyClassCharts data={data} rangeValue={rangeValue} />}
          <MyPieCharts data={data} rangeValue={rangeValue} />
        </Content>
      </Layout>
    </>
  );
}
