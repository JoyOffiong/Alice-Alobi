import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Divider } from "@mui/material";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import DateRangeIcon from "@mui/icons-material/DateRange";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import NoteIcon from "@mui/icons-material/Note";

const TeachingsOnDoctrines = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const marriage = [
    {
      title: "The Reason for the Institution called Marriage",
      description:
        "Marriage involves spiritual, emotional, and physical closeness. In the Old Testament, we are taught, “Therefore shall a man leave his father and his mother, and shall cleave unto his wife: and they shall be one flesh” (Genesis 2:24). Married couples are meant to be unified in every possible way.",
      text: "Malachi 2:24",
      image: "assets/marriage1.jpg",
      date: " 19th Sep, 2022",
    },
  ];

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="grid md:grid-cols-3 mt-12 ">
      {marriage.map((mari) => {
        const { image, title, description, date, text } = mari;
        return (
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group bg-white shadow-lg rounded-sm hover:shadow-2xl transition-shadow duration-200"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          >
            <div className="overflow-hidden h-[200px]">
              <img
                src={image}
                alt=""
                className={`w-full h-full transition-transform duration-500 object-cover overflow-hidden ${
                  isHovered ? "scale-110" : "scale-100"
                }`}
              />
            </div>
            <div className="flex flex-col gap-y-2 p-4">
              <p className="font-bold text-[#f26522] text-lg">{title}</p>
              <p className="font-bold text-[#f26522] text-sm">{text}</p>
              <p className="font-medium text-[#000]">
                {truncateText(description, 100)}
              </p>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-[#f26522] py-1 px-4 text-white transition-all duration-500  rounded-2xl hover:bg-white hover:text-[#f26522]"
                  onClick={() =>
                    navigate(
                      "/marriage/the-reason-for-the-Institution-called-Marriage"
                    )
                  }
                >
                  Read <KeyboardDoubleArrowRightIcon />
                </button>
              </div>
            </div>
            <Divider />
            <div className=" flex items-center px-8 py-4 gap-x-4">
              <DateRangeIcon style={{ fontSize: "1rem" }} />
              <span className="font-light text-sm">{date}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
const TeachingsOnMarriage = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const marriage = [
    {
      title: "The Reason for the Institution called Marriage",
      description:
        "Marriage involves spiritual, emotional, and physical closeness. In the Old Testament, we are taught, “Therefore shall a man leave his father and his mother, and shall cleave unto his wife: and they shall be one flesh” (Genesis 2:24). Married couples are meant to be unified in every possible way.",
      text: "Malachi 2:24",
      image: "assets/marriage2.jpg",
      date: " 19th Sep, 2022",
    },
  ];

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="grid md:grid-cols-3 mt-12 ">
      {marriage.map((mari) => {
        const { image, title, description, date, text } = mari;
        return (
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group bg-white shadow-lg rounded-sm hover:shadow-2xl transition-shadow duration-200"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          >
            <div className="overflow-hidden h-[200px]">
              <img
                src={image}
                alt=""
                className={`w-full h-full transition-transform duration-500 object-cover overflow-hidden ${
                  isHovered ? "scale-110" : "scale-100"
                }`}
              />
            </div>
            <div className="flex flex-col gap-y-2 p-4">
              <p className="font-bold text-[#f26522] text-lg">{title}</p>
              <p className="font-bold text-[#f26522] text-sm">{text}</p>
              <p className="font-medium text-[#000]">
                {truncateText(description, 100)}
              </p>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-[#f26522] py-1 px-4 text-white transition-all duration-500  rounded-2xl hover:bg-white hover:text-[#f26522]"
                  onClick={() =>
                    navigate(
                      "/marriage/the-reason-for-the-Institution-called-Marriage"
                    )
                  }
                >
                  Read <KeyboardDoubleArrowRightIcon />
                </button>
              </div>
            </div>
            <Divider />
            <div className=" flex items-center px-8 py-4 gap-x-4">
              <DateRangeIcon style={{ fontSize: "1rem" }} />
              <span className="font-light text-sm">{date}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
const TeachingsOnMalachi = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const marriage = [
    {
      title: "The Reason for the Institution called Marriage",
      description:
        "Marriage involves spiritual, emotional, and physical closeness. In the Old Testament, we are taught, “Therefore shall a man leave his father and his mother, and shall cleave unto his wife: and they shall be one flesh” (Genesis 2:24). Married couples are meant to be unified in every possible way.",
      text: "Malachi 2:24",
      image: "assets/marriage3.jpg",
      date: " 19th Sep, 2022",
    },
  ];

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="grid md:grid-cols-3 mt-12 ">
      {marriage.map((mari) => {
        const { image, title, description, date, text } = mari;
        return (
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group bg-white shadow-lg rounded-sm hover:shadow-2xl transition-shadow duration-200"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          >
            <div className="overflow-hidden h-[200px]">
              <img
                src={image}
                alt=""
                className={`w-full h-full transition-transform duration-500 object-cover overflow-hidden ${
                  isHovered ? "scale-110" : "scale-100"
                }`}
              />
            </div>
            <div className="flex flex-col gap-y-2 p-4">
              <p className="font-bold text-[#f26522] text-lg">{title}</p>
              <p className="font-bold text-[#f26522] text-sm">{text}</p>
              <p className="font-medium text-[#000]">
                {truncateText(description, 100)}
              </p>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-[#f26522] py-1 px-4 text-white transition-all duration-500  rounded-2xl hover:bg-white hover:text-[#f26522]"
                  onClick={() =>
                    navigate(
                      "/marriage/the-reason-for-the-Institution-called-Marriage"
                    )
                  }
                >
                  Read <KeyboardDoubleArrowRightIcon />
                </button>
              </div>
            </div>
            <Divider />
            <div className=" flex items-center px-8 py-4 gap-x-4">
              <DateRangeIcon style={{ fontSize: "1rem" }} />
              <span className="font-light text-sm">{date}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
const TeachingsOnOurLivesAsChristians = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const marriage = [
    {
      title: "The Reason for the Institution called Marriage",
      description:
        "Marriage involves spiritual, emotional, and physical closeness. In the Old Testament, we are taught, “Therefore shall a man leave his father and his mother, and shall cleave unto his wife: and they shall be one flesh” (Genesis 2:24). Married couples are meant to be unified in every possible way.",
      text: "Malachi 2:24",
      image: "assets/marriage4.jpg",
      date: " 19th Sep, 2022",
    },
  ];

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="grid md:grid-cols-3 mt-12 ">
      {marriage.map((mari) => {
        const { image, title, description, date, text } = mari;
        return (
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group bg-white shadow-lg rounded-sm hover:shadow-2xl transition-shadow duration-200"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          >
            <div className="overflow-hidden h-[200px]">
              <img
                src={image}
                alt=""
                className={`w-full h-full transition-transform duration-500 object-cover overflow-hidden ${
                  isHovered ? "scale-110" : "scale-100"
                }`}
              />
            </div>
            <div className="flex flex-col gap-y-2 p-4">
              <p className="font-bold text-[#f26522] text-lg">{title}</p>
              <p className="font-bold text-[#f26522] text-sm">{text}</p>
              <p className="font-medium text-[#000]">
                {truncateText(description, 100)}
              </p>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-[#f26522] py-1 px-4 text-white transition-all duration-500  rounded-2xl hover:bg-white hover:text-[#f26522]"
                  onClick={() =>
                    navigate(
                      "/marriage/the-reason-for-the-Institution-called-Marriage"
                    )
                  }
                >
                  Read <KeyboardDoubleArrowRightIcon />
                </button>
              </div>
            </div>
            <Divider />
            <div className=" flex items-center px-8 py-4 gap-x-4">
              <DateRangeIcon style={{ fontSize: "1rem" }} />
              <span className="font-light text-sm">{date}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
function MajorTeachings() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  // Function to render the selected component
  const renderComponent = () => {
    switch (selectedComponent) {
      case "Doctrines":
        return <TeachingsOnDoctrines />;
      case "Marriage":
        return <TeachingsOnMarriage />;
      case "Malachi":
        return <TeachingsOnMalachi />;
      case "Lives":
        return <TeachingsOnOurLivesAsChristians />;
      default:
        return <TeachingsOnDoctrines />;
    }
  };

  return (
    <div className="flex flex-col gap-y-4 mx-12 mt-10">
      <p className="font-bold text-lg">Sunday School Lessons</p>
      <div className="grid md:grid-cols-4 gap-x-8 ">
        <div
          className="flex flex-row gap-2 p-4 border-[1px] hover:bg-[#f26522] hover:text-white border-[#e5e5e5] transition duration-300 ease-in-out transform hover:shadow-md"
          onClick={() => setSelectedComponent("Doctrines")}
        >
          <LightbulbIcon />
          <p className="text-[20px] font-semibold">
            Teachings on the Doctrines of Christ
          </p>
        </div>

        <div
          className="flex flex-row gap-2 p-4 border-[1px] hover:bg-[#f26522] hover:text-white border-[#e5e5e5] transition duration-300 ease-in-out transform hover:shadow-md"
          onClick={() => setSelectedComponent("Marriage")}
        >
          <LibraryBooksIcon />
          <p className="text-[20px] font-semibold">Teachings on Marriage</p>
        </div>

        <div
          className="flex flex-row gap-2 p-4 border-[1px] hover:bg-[#f26522] hover:text-white border-[#e5e5e5] transition duration-300 ease-in-out transform hover:shadow-md"
          onClick={() => setSelectedComponent("Malachi")}
        >
          <NoteIcon />
          <p className="text-[20px] font-semibold">
            Teachings of the Book of Malachi
          </p>
        </div>

        <div
          className="flex flex-row gap-2 p-4 border-[1px] hover:bg-[#f26522] hover:text-white border-[#e5e5e5] transition duration-300 ease-in-out transform hover:shadow-md"
          onClick={() => setSelectedComponent("Lives")}
        >
          <BookmarksIcon />
          <p className="text-[20px] font-semibold">Our lives as Christians</p>
        </div>
      </div>

      <div>{renderComponent()}</div>
    </div>
  );
}

export default MajorTeachings;
