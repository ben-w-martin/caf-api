import * as PropTypes from "prop-types";
import { useEffect, useState } from "react";

function ListItemDropdown({ options }) {
  const [items, setItems] = useState({
    array: [],
    components: [],
  });

  useEffect(() => {
    if (options && options?.length > 0) {
      setItems(() => {
        const newItems = {
          array: options,
          components: options.map(mapOptions),
        };
        return newItems;
      });
    }
  }, [options]);

  const mapOptions = (item, i) => {
    console.log(item.string);
    return (
      <div
        className="exp__img-container u-margin-bottom-sm u-border-bottom"
        key={item.file + "-" + i}
      >
        <div className="exp__img--left">
          <p>{item.string}</p>
        </div>
        <div className="exp__img--right">
          <img
            className="exp__img-container--img"
            src={`/src/assets/data/img/${item.file}`}
            alt={"figure-" + i}
          />
        </div>
      </div>
    );
  };
  return <>{items.components}</>;
}

ListItemDropdown.propTypes = {
  options: PropTypes.array,
};

export { ListItemDropdown };
