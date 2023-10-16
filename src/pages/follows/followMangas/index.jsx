import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import * as followApi from "../../../service/api.follow";
import MangaBlock from "../../../components/mangaBlock";

export default function FollowedManga() {
  const [followedManga, setFollowedManga] = useState([]);
  const [loadingPost, setLoadingPost] = useState(false);
  const [outOfPost, setOutOfPost] = useState(false);

  useEffect(() => {
    document.title = "Followed Mangas - 3K Manga";
  }, []);

  const fetchFollowedMangas = async () => {
    try {
      const result = await followApi.getFollowedMangas();
      setFollowedManga(result.data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setFollowedManga(null);
      }
    }
  };

  const handleSeeMoreMangas = async (updatedAtCursor) => {
    try {
      const newMangaLists = await followApi.getFollowedMangas({
        updatedAtCursor,
      });
      setFollowedManga([...followedManga, ...newMangaLists.data]);

      // Set outOfComment to disable loading more comment in scroll event below
      if (newMangaLists.data.length > 0) {
        setOutOfPost(false);
      } else {
        setOutOfPost(true);
      }
    } catch (error) {
      console.error("Error fetching more members:", error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if you've scrolled to the bottom
      if (
        window.innerHeight + Math.round(window.scrollY) >=
          document.body.offsetHeight &&
        followedManga.length > 0 &&
        !outOfPost
      ) {
        setLoadingPost(true);
        setTimeout(() => {
          handleSeeMoreMangas(
            followedManga[followedManga.length - 1]?.updatedAt
          );
          setLoadingPost(false);
        }, 1000);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [followedManga]);

  useEffect(() => {
    fetchFollowedMangas();
  }, []);
  return (
    <>
      <Container fluid>
        {followedManga ? (
          followedManga.map((m) => <MangaBlock manga={m} />)
        ) : (
          <p className="d-flex justify-content-center">
            You have not followed any manga yet
          </p>
        )}
      </Container>

      {loadingPost && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status"></div>
        </div>
      )}
    </>
  );
}
