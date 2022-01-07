import React from 'react'

const Contact = () => {
    return (
        <div>

            <div className="ContactContainer">
                <h4>
                    The DJT Kicks application was built by the coding trio of Daniel Sheehan, Jeremiah Marcos and Terence Stephens.
                    If you have any questions regarding the application or code itself, you can contact us at ...
                </h4>
                <br />

            </div>
            <ul className="contacts">
                <li> Jeremiah <a href="https://www.linkedin.com/in/jeremiah-marcos-915aba1ab/">LinkedIn</a></li>
                <li> Terence <a href="https://www.linkedin.com/in/terence-stephens-7955b4225/">LinkedIn</a></li>
                <li> Daniel <a href="https://www.linkedin.com/in/daniel-sheehan-6981a7226/">LinkedIn</a></li>
            </ul>
        </div>
    )
}

export default Contact