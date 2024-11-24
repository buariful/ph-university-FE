import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import sideBarItemGenerator from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";
import { useAppSelector } from "../../redux/feature/hooks";
import { selectCurrentUser } from "../../redux/feature/auth/authSlice";

const userRoles = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

export default function Sidebar() {
  const user = useAppSelector(selectCurrentUser);
  console.log(user);
  const role = "admin";
  let sidebarItems;

  switch (role) {
    case userRoles.ADMIN:
      sidebarItems = sideBarItemGenerator(adminPaths, "admin");
      break;
    case userRoles.FACULTY:
      sidebarItems = sideBarItemGenerator(facultyPaths, "faculty");
      break;
    case userRoles.STUDENT:
      sidebarItems = sideBarItemGenerator(studentPaths, "student");
      break;

    default:
      sidebarItems = sideBarItemGenerator(studentPaths, "student");
      break;
  }

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
}
