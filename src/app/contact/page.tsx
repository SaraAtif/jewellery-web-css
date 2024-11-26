export default function ContactPage(){
    return(
        <div>
            <section className="contact">
                <h2 className="fade-in">Contact Us</h2>
                <form>
                    <label htmlFor="name"> Full Name</label>
                    <input type="text" id="name" placeholder="Enter your name" required />
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="Enter your Email" required/>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="number" id="phone" placeholder="Enter your Phone number" />
                    <label htmlFor="message">Message</label>
                    <textarea id="message" placeholder="Enter your message here" rows={4}></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </section>
        </div>
    )
}