import Link from "next/link";
import { Fragment } from "react";

function Developer() {
    return (
        <Fragment>
            <h1>develpoers world welcomes you </h1>
            <h4>
                Our fine developers ....
            </h4>
            <ul>
                <li>
                    <Link href='/aboutus/1'>
                        Yash
                    </Link>
                </li>
                <li>
                    <Link href='/aboutus/2'>
                        Vaibhab
                    </Link>
                </li>
                <li>
                    <Link href='/aboutus/3'>
                        Suresh
                    </Link>
                </li>
            </ul>

        </Fragment>
    )
}
export default Developer;