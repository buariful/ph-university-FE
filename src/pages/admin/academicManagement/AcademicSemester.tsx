import React from "react";
import { useGetAllSemesterMutation } from "../../../redux/feature/academicSemester/academicSemesterApi";

export default function AcademicSemester() {
  const [getAllSemester] = useGetAllSemesterMutation();

  React.useEffect(() => {
    (async function () {
      const result = await getAllSemester(1).unwrap();
      console.log(result);
    })();
  }, []);

  return <div>AcademicSemester</div>;
}
