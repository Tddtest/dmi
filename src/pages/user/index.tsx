/**
 * @auth: dmx
 * @time: 2023/4/21
 * @func:
 * @params:
 * @return:
 * @updateTime:
 **/
import { memo, useState } from 'react';
import { Button } from 'antd';

interface IProps {
  c?: number;
}

const U: FC<IProps> = (props) => {
  const [count, setCount] = useState(0);
  const [sum, setSum] = useState(0);

  const clickBtn = () => {
    setTimeout(() => {
      setCount(() => count + 1);
      setSum(() => sum + 1);
    });
  };

  console.log(sum);

  return (
    <div className="app">
      {count}
      <br />
      <Button onClick={clickBtn}>点击一下</Button>
    </div>
  );
};

const User = memo(U);

export default User;
