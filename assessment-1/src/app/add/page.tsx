import Link from "next/link"
import UsersServer from "../main";

type User = {
  id: number;
  title: string;
  tags: string;
  company: string;
  email: string;
  website: string;
  location: string;
  description: string
};

export default function Input(){
    return(
        <div>
            <div>
                <h1>Title</h1>
                <input type="text" placeholder="Enter the title..." id="title"/>
            </div>
            <div>
                <h1>Tags</h1>
                <input type="text" placeholder="Enter the Tags..." id="tags"/>
            </div>
            <div>
                <h1>Company</h1>
                <input type="text" placeholder="Enter the Company..." id="company"/>
            </div>
            <div>
                <h1>Email</h1>
                <input type="text" placeholder="Enter the Email..." id="email"/>
            </div>
            <div>
                <h1>Website</h1>
                <input type="text" placeholder="Enter the Website..." id="website"/>
            </div>
            <div>
                <h1>Location</h1>
                <input type="text" placeholder="Enter the Location..." id="location"/>
            </div>
            <div>
                <h1>Description</h1>
                <input type="text" placeholder="Enter the Description..." id="description"/>
            </div>
            <Link href="../">
                <button type="submit" className="flex-col cursor-pointer" >
                SUBMIT</button>
                </Link>
        </div>
    )
}
Input()



