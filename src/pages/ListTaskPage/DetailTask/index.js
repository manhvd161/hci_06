import React from "react";
import "./style.css";
import { Icon, Descriptions, Button } from "antd";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const TaskDetail = () => {
  const taskDetail = useSelector(state => state.taskDetail);
  console.log("TCL: TaskDetail -> taskDetail", taskDetail);

  return (
    <div className="detail-task">
      <Descriptions title="Chi tiết công việc" bordered>
        <Descriptions.Item label="Tên công việc" span="3">
          Công việc tháng 11
        </Descriptions.Item>
        <Descriptions.Item label="Người kiểm duyệt" span="3">
          Giám đốc
        </Descriptions.Item>
        <Descriptions.Item label="Mục tiêu cần đạt được" span="3">
          Đảm bảo chất lượng 50 quy trình
          <br />
          Đảm bảo chất lượng 50,000 sản phẩm đầu ra
          <br />
          Đảm bảo chất lượng 50,000 sản phẩm đầu ra
          <br />
          Đảm bảo chất lượng 1000kg nguyên liệu đầu vào
          <br />
          Đảm bảo chất lượng 5000 bao bì
          <br />
          Đảm bảo số lượng hàng trả về nhỏ hơn 100 sản phẩm
          <br />
        </Descriptions.Item>
        <Descriptions.Item label="Ngày giao" span="1.5">
          2019-11-11 18:00:00
        </Descriptions.Item>
        <Descriptions.Item label="Deadline" span="1.5">
          2019-11-12 18:00:00
        </Descriptions.Item>
        <Descriptions.Item label="Trạng thái" span="1.5">
          Đã hoàn thành
        </Descriptions.Item>
        <Descriptions.Item label="Thời gian hoàn thành" span="1.5">
          2019-11-09 15:32:00
        </Descriptions.Item>
        <Descriptions.Item label="File đính kèm" span="3">
          <Link to="#" className="attach-file">
            Task-description.docx
          </Link>
        </Descriptions.Item>
        <Descriptions.Item label="Tiêu chí đánh giá công việc" span="3">
          Đảm bảo chất lượng 50 quy trình
          <br />
          Đảm bảo chất lượng 50,000 sản phẩm đầu ra
          <br />
          Đảm bảo chất lượng 50,000 sản phẩm đầu ra
          <br />
          Đảm bảo chất lượng 1000kg nguyên liệu đầu vào
          <br />
          Đảm bảo chất lượng 5000 bao bì
          <br />
          Đảm bảo số lượng hàng trả về nhỏ hơn 100 sản phẩm
          <br />
          Hoàn thành công việc đúng thời hạn
        </Descriptions.Item>
      </Descriptions>

      <Link to="/create-report" style={{ color: "#fff", marginLeft: "2px" }}>
        <Button
          type="primary"
          style={{
            display: "block",
            float: "right",
            marginTop: "10px",
            background: ""
          }}
        >
          <Icon type="export" />
          Tạo báo cáo
        </Button>
      </Link>
    </div>
  );
};

export default TaskDetail;
