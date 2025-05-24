import { Gift } from "lucide-react";
import React from "react";

const ChapterTopicList = ({ course }) => {
  const courseLayout = course?.courseJson?.course;

  return (
    <div className="px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        📘 Chapter & Topics
      </h2>

      <div className="flex flex-col items-center space-y-12">
        {courseLayout?.chapters.map((chapter, chapterIndex) => (
          <div key={chapterIndex} className="flex flex-col items-center w-full">
            {/* Chapter Card */}
            <div className="p-6 w-[320px] bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl shadow-lg mb-8 text-center">
              <h3 className="text-sm uppercase tracking-wide">
                Chapter {chapterIndex + 1}
              </h3>
              <h2 className="text-xl font-bold mt-1">{chapter.chapterName}</h2>
              <p className="text-xs mt-2 flex justify-between px-4 text-gray-200">
                <span>Duration: {chapter?.duration}</span>
                <span>Topics: {chapter?.topic?.length}</span>
              </p>
            </div>

            {/* Topics + Timeline */}
            <div className="flex flex-col items-center">
              {chapter?.topic.map((topic, topicIndex) => (
                <div
                  key={topicIndex}
                  className="flex flex-col items-center relative"
                >
                  {topicIndex !== 0 && (
                    <div className="h-10 w-1 bg-gray-300"></div>
                  )}

                  {/* Topic item */}
                  <div className="flex items-center gap-4 mb-1">
                    <h2 className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold shadow-md">
                      {topicIndex + 1}
                    </h2>
                    <span className="text-gray-800 font-medium text-sm">
                      {topic}
                    </span>
                  </div>

                  {topicIndex === chapter.topic.length - 1 && (
                    <>
                      <div className="h-8 w-1 bg-gray-300"></div>
                      <div className="mt-2">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white shadow-md">
                          <Gift className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="h-8 w-1 bg-gray-300"></div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="p-4 mt-8 border rounded-xl bg-green-600 text-white shadow-md">
          <h2 className="text-lg font-semibold">
            🎉 You've finished the course!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ChapterTopicList;
