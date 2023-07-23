type Props = {
  header: string;
  subItems: Array<{
    header: string;
    href: string;
  }>;
  type: number;
};

const AccordionMenu = (props: Props) => {
  return (
    <div className="dropdown dropdown-hover group ">
      <label
        tabIndex={0}
        className={`${props.type == 1 && "text-primary"} ${
          props.type == 0 ? "group-hover:bg-primary" : "group-hover:bg-black"
        } group-hover:text-white rounded-t-lg m-1 p-2`}
      >
        {props.header}
      </label>
      <ul
        tabIndex={0}
        className={`dropdown-content z-[1]  p-2 shadow bg-white ${
          props.type == 0 ? "border-primary" : "border-black"
        } border-2 text-black rounded-box w-52`}
      >
        {props.subItems.map((item) => {
          return (
            <li
              className={`my-2  ${
                props.type == 0 ? "hover:text-primary" : "hover:text-black"
              } cursor-pointer lowercase first-letter:uppercase`}
            >
              <a className="max-w-sm">{item.header}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AccordionMenu;
