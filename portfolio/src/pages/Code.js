import React from "react";
import Card from "../components/Card";

const Code = () => {
  return (
    <>
        <h3>code</h3>
      <Card
        title="food truck frenzy"
        description="Allows users to find local food truck menus, locations, hours and upcoming events."
        tools={[
          "java",
          "spring",
          "mvc",
          "thymeleaf",
          "agile (scrum)",
          "html",
          "css"
        ]}
      />
      <Card
        title="trivia app"
        description="A quiz application based on 'How I Met Your Mother'."
        tools={["react", "css"]}
      />
      <Card
        title="donut maker"
        description="Make as many donuts as you can. Save up your donuts to purchase multipliers or auto-clickers."
        tools={["javascript", "html", "css"]}
      />
      <Card
        title="music app"
        description="An SPA where users can create, read, update, and delete artists, albums, and songs, using an API."
        tools={[
          "java",
          "javascript",
          "restful apis",
          "spring",
          "mvc",
          "html",
          "css",
          "agile (scrum)"
        ]}
      />
      <Card
        title="to do list"
        description="Add, edit, and delete items on your to-do list."
        tools={["react", "css"]}
      />
    </>
  );
};
export default Code;
