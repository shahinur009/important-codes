import Draggable from "react-draggable"
import { useState, useEffect } from "react";


function App() {
  const [positions, setPositions] = useState({
    asif: { x: 0, y: 0 },
    rana: { x: 0, y: 0 },
    jihan: { x: 0, y: 0 },
    shahin: { x: 0, y: 0 },
    nextjs: { x: 0, y: 0 },
    typescript: { x: 0, y: 0 },
    pisma: { x: 0, y: 0 },
    graphql: { x: 0, y: 0 },
    express: { x: 0, y: 0 },
    node: { x: 0, y: 0 },
    mongodb: { x: 0, y: 0 },
    mongoose: { x: 0, y: 0 },
    html: { x: 0, y: 0 },
    css: { x: 0, y: 0 },
    javascript: { x: 0, y: 0 },
    react: { x: 0, y: 0 },
  });

  useEffect(() => {
    const savedPositions = JSON.parse(localStorage.getItem("positions"));
    if (savedPositions) {
      setPositions(savedPositions);
    }
  }, []);

  const handleStop = (e, data, key) => {
    const updatedPositions = {
      ...positions,
      [key]: { x: data.x, y: data.y },
    };
    setPositions(updatedPositions);
    localStorage.setItem("positions", JSON.stringify(updatedPositions));
  };

  return (
    <div className="max-w-screen-2xl px-10 py-20">

      <div className="flex justify-between items-center gap-5">
        <div className="w-96 h-56 bg-[#a88adb] text-center rounded-md">
          <h1 className="text-white text-2xl font-semibold text-center p-3">User-1</h1>
          <div className="grid grid-cols-2 justify-center items-center gap-2 p-4">
            <Draggable
              position={positions.asif}
              onStop={(e, data) => handleStop(e, data, "asif")}
            >
              <div className="w-full bg-white h-10 p-2 rounded-md ml-2 cursor-move">
                <h2>Asif Vai</h2>
              </div>
            </Draggable>
            <Draggable
              position={positions.rana}
              onStop={(e, data) => handleStop(e, data, "rana")}
            >
              <div className="w-full bg-white h-10 p-2 rounded-md ml-2 cursor-move">
                <h2>Rana Vai</h2>
              </div>
            </Draggable>
            <Draggable
              position={positions.jihan}
              onStop={(e, data) => handleStop(e, data, "jihan")}
            >
              <div className="w-full bg-white h-10 p-2 rounded-md ml-2 cursor-move">
                <h2>Jihan Vai</h2>
              </div>
            </Draggable>
            <Draggable
              position={positions.shahin}
              onStop={(e, data) => handleStop(e, data, "shahin")}
            >
              <div className="w-full bg-white h-10 p-2 rounded-md ml-2 cursor-move">
                <h2>Shahin Vai</h2>
              </div>
            </Draggable>
          </div>
        </div>
        <div className="w-96 h-56 bg-[#a88adb] text-center rounded-md">
          <h1 className="text-white text-2xl font-semibold text-center p-3">User-2</h1>
          <div className="grid grid-cols-2 justify-center items-center gap-2 p-4 ">
            <Draggable
              position={positions.nextjs}
              onStop={(e, data) => handleStop(e, data, "nextjs")}>
              <div className="w-full bg-white h-10 p-2 rounded-md ml-2 cursor-move">
                <h2>NextJS</h2>
              </div>
            </Draggable>
            <Draggable
              position={positions.typescript}
              onStop={(e, data) => handleStop(e, data, "typescript")}
            >
              <div className="w-full bg-white h-10 p-2 rounded-md ml-2 cursor-move">
                <h2>TypeScript</h2>
              </div>
            </Draggable>
            <Draggable
              position={positions.pisma}
              onStop={(e, data) => handleStop(e, data, "pisma")}
            >
              <div className="w-full bg-white h-10 p-2 rounded-md ml-2 cursor-move">
                <h2>Pisma</h2>
              </div>
            </Draggable>
            <Draggable
              position={positions.graphql}
              onStop={(e, data) => handleStop(e, data, "graphql")}
            >
              <div className="w-full bg-white h-10 p-2 rounded-md ml-2 cursor-move">
                <h2>GraphQL</h2>
              </div>
            </Draggable>
          </div>
        </div>
        <div className="w-96 h-56 bg-[#a88adb] text-center rounded-md">
          <h1 className="text-white text-2xl font-semibold text-center p-3">User-3</h1>
          <div className="grid grid-cols-2 justify-center items-center gap-2 p-4">
            <Draggable
              position={positions.express}
              onStop={(e, data) => handleStop(e, data, "express")}
            >
              <div className="w-full bg-white h-10 p-2 rounded-md ml-2 cursor-move">
                <h2>ExpressJS </h2>
              </div>
            </Draggable>
            <Draggable
              position={positions.node}
              onStop={(e, data) => handleStop(e, data, "node")}
            >
              <div className="w-full bg-white h-10 p-2 rounded-md ml-2 cursor-move">
                <h2>NodeJS</h2>
              </div>
            </Draggable>
            <Draggable
              position={positions.mongodb}
              onStop={(e, data) => handleStop(e, data, "mongodb")}
            >
              <div className="w-full bg-white h-10 p-2 rounded-md ml-2 cursor-move">
                <h2>MongoDB</h2>
              </div>
            </Draggable>
            <Draggable
              position={positions.mongoose}
              onStop={(e, data) => handleStop(e, data, "mongoose")}
            >
              <div className="w-full bg-white h-10 p-2 rounded-md ml-2 cursor-move">
                <h2>Mongoose</h2>
              </div>
            </Draggable>
          </div>
        </div>
        <div className="w-96 h-56 bg-[#a88adb] text-center rounded-md">
          <h1 className="text-white text-2xl font-semibold text-center p-3">User-4</h1>
          <div className="grid grid-cols-2 justify-center items-center gap-2 p-4">
            <Draggable
              position={positions.html}
              onStop={(e, data) => handleStop(e, data, "html")}
            >
              <div className="w-full bg-white h-10 p-2 rounded-md ml-2 cursor-move">
                <h2>HTML</h2>
              </div>
            </Draggable>
            <Draggable
              position={positions.css}
              onStop={(e, data) => handleStop(e, data, "css")}
            >
              <div className="w-full bg-white h-10 p-2 rounded-md ml-2 cursor-move">
                <h2>CSS</h2>
              </div>
            </Draggable>
            <Draggable
              position={positions.javascript}
              onStop={(e, data) => handleStop(e, data, "javascript")}
            >
              <div className="w-full bg-white h-10 p-2 rounded-md ml-2 cursor-move">
                <h2>JavaScript</h2>
              </div>
            </Draggable>
            <Draggable
              position={positions.react}
              onStop={(e, data) => handleStop(e, data, "react")}
            >
              <div className="w-full bg-white h-10 p-2 rounded-md ml-2 cursor-move">
                <h2>ReactJS</h2>
              </div>
            </Draggable>
          </div>
        </div>
      </div>

    </div>


  )
}

export default App
