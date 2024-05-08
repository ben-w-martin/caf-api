import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import * as PropTypes from "prop-types";

function ExperienceListItem(props) {
  return (
    <li className="u-list-item u-list-item-animation exp__list--item">
      {props.underlined}
      {" " + props.item.string.slice(props.itemArr[0].length)}
      {props.showCaret && (
        <FontAwesomeIcon
          className="exp__list--caret"
          key={"icon" + props.index}
          icon={faCaretDown}
        />
      )}
      {props.item?.subcomponent ? (
        <div className="exp__dropdown">{props.item?.subcomponent}</div>
      ) : (
        <></>
      )}
    </li>
  );
}

ExperienceListItem.propTypes = {
  underlined: PropTypes.node,
  item: PropTypes.shape({
    string: PropTypes.string,
    subcomponent: PropTypes.node,
  }),
  itemArr: PropTypes.array,
  showCaret: PropTypes.bool,
  index: PropTypes.number,
};

export { ExperienceListItem };
