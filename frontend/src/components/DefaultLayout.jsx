import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, UserIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

// const user = {
//   name: "Tom Cook",
//   email: "tom@example.com",
//   imageUrl:
//     "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
// };
const navigation = [
  { name: "Dashboard", to: "/" },
  { name: "Surveys", to: "/surveys" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DefaultLayout() {
  const { currentUser, userToken } = useStateContext();

  if (!userToken) {
    return <Navigate to="login" />;
  }
  const logout = (ev) => {
    ev.preventDefault();
    console.log("Logout");
  };
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="disclosure">
          {({ open }) => (
            <>
              <div className="dis-1">
                <div className="dis-2">
                  <div className="dis-3">
                    <div className="dis-4">
                      <img
                        className="img1"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                      />
                    </div>

                    <div className="nav">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <NavLink
                            key={item.name}
                            to={item.to}
                            className={(isActive) =>
                              classNames(
                                isActive ? "active" : "inactive",
                                "active-form"
                              )
                            }
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="drop">
                    <div className="down">
                      {/* Profile dropdown */}
                      <Menu as="div" className="div1">
                        <div>
                          <Menu.Button className="user-button-web">
                            <span className="span1" />
                            <span className="span2">Open user menu</span>
                            <UserIcon className="icon-web" />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="enter"
                          enterFrom="enter-from"
                          enterTo="enter-to"
                          leave="leave"
                          leaveFrom="leave-from"
                          leaveTo="leave-to"
                        >
                          <Menu.Items className="menu-web">
                            <Menu.Item>
                              <a
                                href="#"
                                onClick={(ev) => logout(ev)}
                                className={"logout-web"}
                              >
                                Sign out
                              </a>
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="end-web">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="disclosure1">
                      <span className="span1" />
                      <span className="span2">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="mark-icon" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="mark-icon" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      as="a"
                      to={item.to}
                      className={(isActive) =>
                        classNames(
                          isActive ? "active1" : "inactive1",
                          "active-form1"
                        )
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
                <div className="user">
                  <div className="user1">
                    <div className="user2">
                      <UserIcon className="icon-mob" />
                    </div>
                    <div className="ml-3">
                      <div className="username">{currentUser.name}</div>
                      <div className="user-email">{currentUser.email}</div>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    <Disclosure.Button
                      as="a"
                      href="#"
                      onClick={(ev) => logout(ev)}
                      className="signout"
                    >
                      Sign out
                    </Disclosure.Button>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Outlet />
      </div>
    </>
  );
}
