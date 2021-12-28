import { useCallback, useEffect, useState } from "react";
import { GameItemTypes } from "../../../services/data-types";
import { getFeaturedGames } from "../../../services/player";
import GameItem from "../../molecules/GameItem";

export default function FeaturedGames() {
  const [gameList, setGameList] = useState([]);

  const getFeaturedGamesList = useCallback(async () => {
    const res = await getFeaturedGames();
    setGameList(res.data);
  }, [getFeaturedGames]);

  useEffect(() => {
    getFeaturedGamesList();
  }, []);

  const API_IMG = process.env.NEXT_PUBLIC_IMG_URL;

  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br />
          Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          {gameList.map((item: GameItemTypes) => (
            <GameItem
              id={item._id}
              key={item._id}
              title={item.name}
              category={item.category.name}
              thumbnail={`${API_IMG}/${item.thumbnail}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
