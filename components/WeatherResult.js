import React, { Fragment } from "react";

export default function WeatherResult({
  searchResult,
  onClickResultHandler,
}) {
  const FragmentClickWrapper = ({ children, item }) => (
    <Fragment>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          onClick: () => onClickResultHandler(item),
        })
      )}
    </Fragment>
  );

  return (
    <div className={`relative ${searchResult.length > 0 ? "block" : "hidden"} z-50`}>
      <div className="bg-gray-800 rounded-md my-2 p-2 absolute left-0 top-0 w-full">
        <div className="grid grid-cols-3 gap-y-2">
          <div className="text-xs font-bold">City</div>
          <div className="ml-auto mr-2 text-xs font-bold">Latitude</div>
          <div className="ml-auto mr-2 text-xs font-bold">Longitude</div>
          {searchResult.map((item) => {
            return (
              <FragmentClickWrapper key={item.id} item={item}>
                <div className="text-xs text-foregroundColor hover:cursor-pointer">{item.name}</div>
                <div className="ml-auto mr-2 text-xs text-foregroundColor hover:cursor-pointer">
                  {Math.round(item.latitude * 100) / 100}
                </div>
                <div className="mx-auto text-xs text-foregroundColor hover:cursor-pointer">
                  {Math.round(item.longitude * 100) / 100}
                </div>
              </FragmentClickWrapper>
            );
          })}
        </div>
      </div>
    </div>
  );
}
