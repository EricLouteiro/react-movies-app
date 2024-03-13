import { Avatar, Button, DatePicker, Flex, Input, Space, message } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import logo from "../../assets/logo.png";
import { ChangeEvent, useState } from "react";
import { getMovies } from "../../services";
import { MovieSearchResponse } from "../../services/interfaces";
import { searchAdapter } from "../../adapters/search.adapter";
import { movieStore } from "../../store";

export const Navbar = () => {
  const { addMovieSearch } = movieStore((state) => state);
  const [searchText, setSearchText] = useState<string>("");
  const [yearSelection, setYearSelection] = useState<string>("");
  const [messageApi, contextHolder] = message.useMessage();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    messageApi.open({
      key: "updatable",
      type: "loading",
      content: "Loading...",
    });
    getMovies<MovieSearchResponse>({
      params: {
        s: searchText,
        y: yearSelection,
      },
    })
      .then((res) => {
        if (res.Response == "True") {
          const dataAdapted = searchAdapter(res.Search);
          addMovieSearch(dataAdapted);
          messageApi.open({
            key: "updatable",
            type: "success",
            content: "Loading completed!",
          });
          return;
        }
        messageApi.open({
          key: "updatable",
          type: "error",
          content: res.Error,
        });
      })
      .catch(console.log);
    setSearchText("");
    setYearSelection("");
  };
  return (
    <Flex
      style={{ width: "100%", height: "100%" }}
      align="center"
      justify="space-between"
    >
      {contextHolder}
      <Avatar size={42} src={<img src={logo} />} />
      <form onSubmit={handleSubmit}>
        <Space.Compact direction="vertical">
          <Space style={{ width: "100%" }}>
            <Input
              placeholder="Search"
              name="search"
              style={{ border: "0px" }}
              value={searchText}
              onChange={handleChange}
            />
            <DatePicker
              picker="year"
              allowClear
              onChange={(_, dateString) =>
                setYearSelection(dateString as string)
              }
            />
            <Button
              type="primary"
              style={{ boxShadow: "0 0 0 0", border: "0px" }}
              icon={<SearchOutlined />}
              htmlType="submit"
            />
          </Space>
        </Space.Compact>
      </form>
    </Flex>
  );
};
