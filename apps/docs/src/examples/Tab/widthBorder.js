
() => {
  const [current, setCurrent] = useState('tab_2');

  return (
    <div className="u-flex u-positionRelative">
      <Tab
        direction="vertical"
        current={current}
        onSelect={setCurrent}
      >
        <Tab.Item eventKey="tab_1">Tab item 1</Tab.Item>
        <Tab.Item eventKey="tab_2">Tab item 2</Tab.Item>
        <Tab.Item eventKey="tab_3">Tab item 3</Tab.Item>
        <Tab.Item eventKey="tab_4" disabled>Tab item 4</Tab.Item>
      </Tab>
      <div className="u-widthFull u-borderBottom u-borderSmall u-borderLighter u-positionAbsolute u-positionBottom" />
    </div>
  );
};
