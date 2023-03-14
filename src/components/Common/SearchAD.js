import React from "react";
import { Input, Space } from "antd";
const { Search } = Input;
const onSearch = (value) => console.log(value);
const App = () => (
  <Space direction='vertical'>
    <Search
      placeholder='input search text'
      onSearch={onSearch}
      style={{
        width: 200,
      }}
    />
  </Space>
);
export default App;
