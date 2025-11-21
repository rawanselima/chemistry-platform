import { NavLink } from "react-router-dom";
import Button from "./Button";

interface PagesProps {
  title: string;
  path: string;
}

const Tabs = ({ pages }: { pages: PagesProps[] }) => {
  return (
    <section className="flex justify-center flex-wrap my-5">
      <NavLink to={pages[0].path} end>
        {({ isActive }) => (
          <Button
            size={window.innerWidth >= 765 ? "large" : "small"}
            style={isActive ? "solid" : "outline"}
            width="full"
            additionalStyle="rounded-l-0 rounded-r-lg"
          >
            {pages[0].title}
          </Button>
        )}
      </NavLink>

      {pages.map((ele: PagesProps, index: number) => {
        return (
          index !== 0 &&
          index !== pages.length - 1 && (
            <NavLink to={ele.path} end key={index}>
              {({ isActive }) => (
                <Button
                  size={window.innerWidth >= 765 ? "large" : "small"}
                  style={isActive ? "solid" : "outline"}
                  width="full"
                  additionalStyle="rounded-0"
                >
                  {ele.title}
                </Button>
              )}
            </NavLink>
          )
        );
      })}
      <NavLink to={pages[pages.length - 1].path} end>
        {({ isActive }) => (
          <Button
            size={window.innerWidth >= 765 ? "large" : "small"}
            style={isActive ? "solid" : "outline"}
            width="full"
            additionalStyle="rounded-r-0 rounded-l-lg"
          >
            {pages[pages.length - 1].title}
          </Button>
        )}
      </NavLink>
    </section>
  );
};

export default Tabs;
