import React, {Component} from "react";
// import '../styles/index.css'

class Product extends Component {

    constructor(props, context){
        super(props)

        this.handleUpVote = this.handleUpVote.bind(this);
        this.handleDownVote = this.handleDownVote.bind(this);
    }

    handleUpVote(){
        this.props.onUpVote(+(this.props.id))
    }
    
    handleDownVote(){
        this.props.onDownVote(+(this.props.id))
    }

    render() {
        const  {title, description, votes, submitterAvatarUrl, productImageUrl} = this.props

        return (
            <div className="flex flex-col shadow-slate-500 shadow-lg font-nunito my-5 md:flex-row space-y-5 md:justify-evenly md:space-x-5 md:space-y-0">
                <div className=" w-full md:w-2/6 border-2">
                    <img src={productImageUrl} alt="profile_image" className="object-cover h-48 w-96"/>
                </div>
                <div className="flex flex-col space-y-6 md:justify-center md:w-4/6 p-6">
                    <div>
                        {/* <span>{id}</span> */}
                        <div className="flex text-3xl items-center space-x-4">
                            <div className="font-bold">{votes}</div>
                            <div className="flex-col items-center justify-center">
                                <span className="flex"><i onClick={this.handleUpVote} className="fa-solid fa-caret-up text-blue-600 cursor-pointer"></i></span>
                                <span className="flex"><i onClick={this.handleDownVote} className="fa-solid fa-caret-down text-red-600  cursor-pointer"></i></span>
                            </div>
                        </div>
                        <span>{title}</span>
                        <span className="text-green-700">{description}</span>
                    </div>
                    <div className="flex space-x-5">
                        <span>Submitted by</span>
                        <img  className="rounded-full w-7 h-7" src={submitterAvatarUrl} alt="avatar" />
                    </div>
                </div>
            </div>
        )
    }
}


export default Product