import React from 'react';
import 'antd/dist/antd.css';
import { Avatar, Divider, List, Skeleton } from 'antd';
import { useEffect, useState } from 'react';
import Card from "../ChannelCard/Card"
import InfiniteScroll from 'react-infinite-scroll-component';

const App = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const loadMoreData = () => {
      if (loading) {
        return;
      }
  
      setLoading(true);
      fetch('http://localhost:5000/telegram-channels/')
        .then((res) => res.json())
        .then((body) => {  
          setData([...data, ...body]);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    };
  
    useEffect(() => {
      loadMoreData();
    }, []);

    return (
      <div
        id="scrollableDiv"
        style={{
          height: 600,
          overflow: 'auto',
          padding: '0 16px',
          margin: "0px,10px,0px,10px",
          border: '1px solid rgba(140, 140, 140, 0.35)',
        }}
      >
        <InfiniteScroll
          dataLength={data.length}
          next={loadMoreData}
          hasMore={data.length<=15}
          loader={
            <Skeleton
              avatar
              paragraph={{
                rows: 1,
              }}
              active
            />
          }
          endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
          scrollableTarget="scrollableDiv"
        >

        <List
        grid={{column:4, gutter:100}}
        itemLayout= "vertical"
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.id}>
                {/* <Card avatar={item.picture.large} title={item.name.last} description={item.email}/> */}
                <Card avatar={item.channel_link} title={item.channel_link} description={item.channel_link}/>

            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};

export default App;