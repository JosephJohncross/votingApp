import React, {Component} from "react";

class Header extends Component{

    render() {
        return (
            <>
                <div className="py-10 text-center sticky top-0 md:sticky md:top-[50%] text-2xl text-white w-[100%] bg-gradient-to-r from-sky-500 to-indigo-500">
                    Product voting app
                </div>
            </>
        )
    }
}

export default Header;