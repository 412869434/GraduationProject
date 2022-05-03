import { Form, Button, Card, Radio, Slider } from "antd";

function MyForm(props) {
  const { setData, setImagePreview, setChartsType, chartsType, setRangeValue, rangeValue } = props;
  const changeHandler = (e) => {
    // console.log(e);
    setChartsType(e.target.value);
  };
  return (
    <Card title="配置项" style={{ width: 250, marginRight: "10px" }}>
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
            <Radio.Button value="class">多类别</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item label={<b>多类别概率范围：</b>}>
          <Slider
            range
            value={rangeValue}
            disabled={chartsType === "score"}
            onChange={(v) => setRangeValue(v)}
            tooltipVisible
            tooltipPlacement={"bottom"}
          />
        </Form.Item>
      </Form>
    </Card>
  );
}

export default MyForm;
