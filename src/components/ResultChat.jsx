import useResult from "../hooks/useResult";
import { LineChart, Legend, Line, Tooltip, XAxis, YAxis } from "recharts";

export default function ResultChat() {
  let { chat, setChat } = useResult();
  console.log("chat", chat);
  const objChat = chat.map((value, index) => ({ time: index, chat: value }));
  console.log(objChat);
  setChat(objChat);
  // const objChat = chat && chat.map((value, index) => ({'time': index, 'chat': value}));
  return (
    <div>
      <LineChart
        width={600}
        height={300}
        data={chat}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="chat" />
      </LineChart>
    </div>
  );
}
