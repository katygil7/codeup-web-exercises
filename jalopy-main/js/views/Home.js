import {showNotification} from "../messaging.js";
import {getUser} from "../auth.js";

const BASE_URI = `${BACKEND_HOST}/api/s3/download`;

export default function Home(props) {
    return `
        <header>
            <h1 id="title">Hello Jalopy!</h1>
        </header>
        <main>
            <div>
                <img src="../../assets/jalopy1.jpeg">
                <p>
                    This is the home page text.
                </p>    
            </div>
        </main>
    `;
}

export function HomeEvents() {
    // const authority = getUserRole();
    const user = getUser();
    if(!user) {
        showNotification("Welcome visitor", "secondary");
    } else {
        showNotification("Welcome " + user.userName, "info");
    }
}