import React from 'react';
import { NavLink as Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-header p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <svg
                    className="fill-current h-8 w-8 mr-2"
                    width="37"
                    height="24"
                    viewBox="0 0 37 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M34.6667 0C35.1382 0 35.5904 0.140476 35.9238 0.390524C36.2572 0.640573 36.4445 0.979711 36.4445 1.33333V8.66667C35.2657 8.66667 34.1353 9.01786 33.3018 9.64298C32.4683 10.2681 32 11.1159 32 12C32 12.8841 32.4683 13.7319 33.3018 14.357C34.1353 14.9821 35.2657 15.3333 36.4445 15.3333V22.6667C36.4445 23.0203 36.2572 23.3594 35.9238 23.6095C35.5904 23.8595 35.1382 24 34.6667 24H2.66669C2.1952 24 1.74301 23.8595 1.40962 23.6095C1.07622 23.3594 0.888916 23.0203 0.888916 22.6667V15.3333C2.06766 15.3333 3.19812 14.9821 4.03161 14.357C4.86511 13.7319 5.33336 12.8841 5.33336 12C5.33336 11.1159 4.86511 10.2681 4.03161 9.64298C3.19812 9.01786 2.06766 8.66667 0.888916 8.66667V1.33333C0.888916 0.979711 1.07622 0.640573 1.40962 0.390524C1.74301 0.140476 2.1952 0 2.66669 0H34.6667ZM25.7778 8H11.5556V16H25.7778V8Z"
                        fill="#0059F7"
                    />
                </svg>

                <span className="font-semibold text-xl ">GainHub</span>
            </div>
            <div className="w-full grow lg:w-auto mx-8">
                <div className="block lg:inline-block">
                    <Link to="/Libraries">
                        <p className="font-semibold text-xl text-white ">
                            Libraries
                        </p>
                    </Link>
                </div>

                <div className="block lg:inline-block mx-8">
                    <Link to="/Authors">
                        <p className="font-semibold text-xl text-white ">
                            Authors
                        </p>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;
