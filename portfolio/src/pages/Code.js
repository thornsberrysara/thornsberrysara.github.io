import React from "react";
import Card from "../components/Card";

const Code = () => {
    return (
        <>
        <Card title="food truck frenzy" description="Allows users to find local food truck menus, locations, hours and upcoming events." tools={[
         "java",
         "spring",
         "mvc",
         "thymeleaf",
         "agile (scrum)",
         "html",
         "css"
       ]}/>
        <Card title="trivia app" description="A quiz application based on 'How I Met Your Mother'." />
        <Card title="donut maker" description="Make as many donuts as you can. Save up your donuts to purchase multipliers or auto-clickers." />
        <Card title="music app" description="An SPA where users can create, read, update, and delete artists, albums, and songs, using an API." />
        <Card title="to do list" description="Add, edit, and delete items on your to-do list." />
        </>
    );
}
export default Code;



//   const codeCards = [
//     {
//       id: 1,
//       title: "food truck frenzy",
//       description:
//         "Allows users to find local food truck menus, locations, hours and upcoming events.",
//       tools: [
//         "java",
//         "spring",
//         "mvc",
//         "thymeleaf",
//         "agile (scrum)",
//         "html",
//         "css"
//       ]
//     },
//     {
//       id: 2,
//       title: "trivia app",
//       description: `A quiz application based on “How I Met Your Mother”.`,
//       tools: ["react", "html", "css"]
//     },
//     {
//       id: 3,
//       title: "donut maker",
//       description:
//         "Make as many donuts as you can. Save up your donuts to purchase multipliers or auto-clickers.",
//       tools: ["javascript", "html", "css"]
//     },
//     {
//       id: 4,
//       title: "music app",
//       description:
//         "An SPA where users can create, read, update, and delete artists, albums, and songs, using an API.",
//       tools: [
//         "java",
//         "javascript",
//         "restful apis",
//         "spring",
//         "mvc",
//         "html",
//         "css",
//         "agile (scrum)"
//       ]
//     },
//     {
//       id: 5,
//       title: "to do list",
//       description: "Add, edit, and delete items on your to-do list.",
//       tools: ["react", "html", "css"]
//     }
//   ];

//   return (
//     <>
//       {codeCards.map(codeCard => (
//         <div>{codeCard}</div>
//       ))}
//     </>
//   );
// };
