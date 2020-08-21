import React from 'react'

const Three = () => (
    <section id="three" className="wrapper style1 fade-up">
        <div className="inner">
            <h2>Get in touch</h2>
            <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis lorem.</p>
            <div className="split style1">
                <section>
                    <form method="post" action="#">
                        <div className="fields">
                            <div className="field half">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div className="field half">
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" id="email" />
                            </div>
                            <div className="field">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" rows="5"></textarea>
                            </div>
                        </div>
                        <ul className="actions">
                            <li><a href="" className="button submit">Send Message</a></li>
                        </ul>
                    </form>
                </section>
            </div>
        </div>
    </section>
);

export default Three;

