import React from "react";
import PropTypes from "prop-types";
import loadable from "@loadable/component";
import { Switch, Route } from "react-router-dom";
import "./styles.css";

const ListTaskDepartment = loadable(() =>
  import("../pages/ListTaskPage/ListTaskDepartment/index")
);
const ListTaskEmployee = loadable(() =>
  import("../pages/ListTaskPage/ListTaskEmployee/index")
);
const Account = loadable(() => import("../pages/Account/index"));
const DashBoard = loadable(() => import("../pages/DashBoard/index"));
const TaskDetailEmployee = loadable(() =>
  import("../pages/ListTaskPage/DetailTask/TaskDetailEmployee")
);
const TaskDetailDepartment = loadable(() =>
  import("../pages/ListTaskPage/DetailTask/TaskDetailDepartment")
);
const CreateTaskPage = loadable(() => import("../pages/CreateTaskPage/index"));
const WorkReport = loadable(() => import("../pages/WorkReport"));
const ManageReport = loadable(() => import("../pages/ManageReport"));
const CreateReport = loadable(() => import("../pages/CreateReport"));
const ReportDetail = loadable(() =>
  import("../pages/ManageReport/ReportDetail/index")
);
const DoahBoardEmployee = loadable(() =>
  import("../pages/DashBoardEmployee/index")
);

export const routes = [
  {
    path: "/",
    exact: true,
    component: ({ history }) => <DashBoard history={history} />
  },
  {
    path: "/doard-board-employee",
    exact: true,
    component: ({ history }) => <DoahBoardEmployee history={history} />
  },
  {
    path: "/list-task-department",
    component: ({ history }) => <ListTaskDepartment history={history} />
  },
  {
    path: "/list-task-employee",
    component: ({ history }) => <ListTaskEmployee history={history} />
  },
  {
    path: "/detail-task-employee",
    component: () => <TaskDetailEmployee />
  },
  {
    path: "/detail-task-department",
    component: () => <TaskDetailDepartment />
  },
  {
    path: "/account",
    component: () => <Account />
  },
  {
    path: "/create-task",
    component: ({ history }) => <CreateTaskPage history={history} />
  },
  {
    path: "/workreport",
    component: () => <WorkReport />
  },
  {
    path: "/report-detail",
    component: () => <ReportDetail />
  },
  {
    path: "/manage-report",
    component: () => <ManageReport />
  },
  {
    path: "/create-report",
    component: ({ history }) => <CreateReport history={history} />
  },
  {
    path: "*",
    component: class NotFound extends React.PureComponent {
      static propTypes = {
        staticContext: PropTypes.object
      };

      constructor(props, context) {
        super(props, context);

        if (this.props.staticContext) {
          this.props.staticContext.code = 404;
        }
      }

      render() {
        return (
          <div className="not-found">
            <b>Lỗi 404|Trang không tồn tại!</b>
          </div>
        );
      }
    }
  }
];

export default () => (
  <Switch>
    {routes.map(({ path, exact = false, component }, index) => {
      return (
        <Route key={index} exact={exact} path={path} component={component} />
      );
    })}
  </Switch>
);
