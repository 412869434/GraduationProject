import { Form, Button, Card, Radio, Slider } from "antd";

function MyForm(props) {
  const { setData, setImagePreview, setChartsType, chartsType, setRangeValue, rangeValue } = props;
  const changeHandler = (e) => {
    // console.log(e);
    setChartsType(e.target.value);
  };
  const marks = {
    0: 0,
    20: 20,
    50: 50,
    80: 80,
    100: 100,
  };
  return (
    <Card title={<b>配置项</b>} style={{ width: 250, marginRight: "10px" }}>
      <Form name="basic" layout={"vertical"}>
        <Form.Item label={<b>数据重置：</b>}>
          <Button
            type="primary"
            danger
            size="small"
            onClick={() => {
              setData([]);
              setImagePreview(null);
            }}
          >
            重置
          </Button>
        </Form.Item>
        <Form.Item label={<b>柱状图类型：</b>}>
          <Radio.Group defaultValue="score" onChange={changeHandler} size="small">
            <Radio.Button value="score">全概率</Radio.Button>
            <Radio.Button value="class">全类别</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label={
            <b>
              全类别概率范围：{rangeValue[0]}-{rangeValue[1]}
            </b>
          }
        >
          <Slider
            range
            value={rangeValue}
            disabled={chartsType === "score"}
            onChange={(v) => setRangeValue(v)}
            marks={marks}
          />
        </Form.Item>
      </Form>
    </Card>
  );
}

export default MyForm;
