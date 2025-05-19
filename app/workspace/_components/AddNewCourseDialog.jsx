"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Loader2Icon, Sparkle } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";

const AddNewCourseDialog = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    includeVideo: false,
    noOfChapters: 1,
    category: "",
    level: "",
  });
  const router = useRouter();
  const onHandleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const onGenerateCourse = async () => {
    const courseId = uuidv4();
    try {
      setLoading(true);
      const result = await axios.post("/api/generate-course-layout", {
        ...formData,
        courseId: courseId,
      });
      toast.success("Course Generated Successfully");
      setLoading(false);
      router.push("/workspace/edit-course/" + result?.data?.courseId);
    } catch (err) {
      setLoading(false);
      toast.error("Something went wrongggggg");
      console.log(err);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Course Using Al</DialogTitle>
          <DialogDescription asChild>
            <div className="flex flex-col gap-4 mt-3">
              <div>
                <label htmlFor="">Course Name</label>
                <Input
                  placeholder="Course Name"
                  onChange={(e) => onHandleInputChange("name", e?.target.value)}
                />
              </div>
              <div>
                <label htmlFor="">Course Description (Optional)</label>
                <Input
                  placeholder="Course Description"
                  onChange={(e) =>
                    onHandleInputChange("description", e?.target.value)
                  }
                />
              </div>
              <div>
                <label htmlFor="">No. Of Chapters</label>
                <Input
                  placeholder="No of chapters"
                  type="number"
                  onChange={(e) =>
                    onHandleInputChange("noOfChapters", e?.target.value)
                  }
                />
              </div>
              <div className="flex gap-3 items-center">
                <label htmlFor="">Include Video</label>
                <Switch
                  onCheckedChange={() =>
                    onHandleInputChange("includeVideo", !formData?.includeVideo)
                  }
                />
              </div>
              <div>
                <label htmlFor="">Difficulty Level</label>
                <Select
                  onValueChange={(value) => onHandleInputChange("level", value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Difficulty Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="moderate">Moderate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="">Category</label>
                <Input
                  placeholder="Category (Sperated by Comma)"
                  onChange={(e) =>
                    onHandleInputChange("category", e?.target.value)
                  }
                />
              </div>
              <div className="mt-5">
                <Button
                  className={"w-full"}
                  onClick={onGenerateCourse}
                  disabled={loading}
                >
                  {loading ? (
                    <Loader2Icon className="animate-spin" />
                  ) : (
                    <Sparkle />
                  )}
                  Generate Course
                </Button>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewCourseDialog;
