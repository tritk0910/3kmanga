import React from "react";
import "./styles.css";
import CommentSection from "../../../components/commentSection";
import ChapterInfo from "./components/ChapterInfo";
import ChapterImage from "./components/ChapterImage";

export default function ChapterPage() {
  return (
    <>
      <ChapterInfo />
      <ChapterImage />
      <CommentSection />
    </>
  );
}
