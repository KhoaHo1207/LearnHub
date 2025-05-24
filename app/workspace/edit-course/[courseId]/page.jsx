"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import CourseInfo from "../_components/CourseInfo";
import ChapterTopicList from "../_components/ChapterTopicList";

const EditCourse = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  const [loading, setLoading] = useState(false);
  const GetCourseInfo = async () => {
    setLoading(true);
    const response = await axios.get("/api/course?courseId=" + courseId);
    if (response?.data.success) {
      setCourse(response?.data?.data);
      toast.success("Course info fetched successfully");
    } else toast.error("Something went wrong");
    setLoading(false);
  };

  useEffect(() => {
    GetCourseInfo();
  }, []);

  return (
    <div>
      <CourseInfo course={course} />
      <ChapterTopicList course={course} />
    </div>
  );
};

export default EditCourse;
