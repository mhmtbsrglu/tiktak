import React from "react";

type Props = {
  onCallback(cb: number): void;
  currentIndex: number;
  data: Array<{
    id: number;
    imageIndex: number;
    header: string;
    contentElement: React.ReactNode;
  }>;
};

function Tab({ data, onCallback, currentIndex }: Props) {
  return (
    <div className="my-5">
      <div className="flex items-center">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="cursor-pointer"
              onClick={() => {
                onCallback(item.id);
              }}
            >
              <div
                className={
                  item.id == currentIndex
                    ? "border-b-4 border-primary px-4 text-primary flex flex-col transition-all duration-500"
                    : "border-b-4  px-1 lg:px-4 flex flex-col transition-all"
                }
              >
                <span className={`font-semibold text-sm   inline-block `}>
                  {item.header.split(" ")[0]}
                </span>
                <span className="font-semibold text-sm inline-block">
                  {item.header.split(" ")[1]}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {data[currentIndex].contentElement}
    </div>
  );
}

export default Tab;
