"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import AddNewCourseDialog from "./AddNewCourseDialog";

const CourseList = () => {
  const [courseList, setCourseList] = useState([]);
  return (
    <div className="mt-10">
      <h2 className="font-bold text-3xl">Course List</h2>
      {courseList?.length == 0 ? (
        <div className="flex flex-col p-7 items-center justify-center border rounded-xl mt-2 bg-secondary">
          <Image
            src={"/online-education.png"}
            alt="edu"
            width={80}
            height={80}
          />
          <h2 className="my-2 text-2xl font-bold">
            Look like you haven't create any courses yet
          </h2>
          <AddNewCourseDialog>
            <Button>+ Create your first course</Button>
          </AddNewCourseDialog>
        </div>
      ) : (
        <div>List Of Courses</div>
      )}
    </div>
  );
};

export default CourseList;
