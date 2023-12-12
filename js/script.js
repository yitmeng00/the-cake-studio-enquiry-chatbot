// responses
const responses = {
    welcome: `<div>
                <p>
                    Hi there! Welcome to The Cake Studio. I'm your friendly enquiry chatbot.
                    How can I assist you in finding the perfect cake for your occasion?
                </p>
                <p>
                    Just type 'info' if you want to know more about our products and
                    services.
                </p>
            </div>`,
    info: `<div>
                <p>
                    Here are some keywords you can use to get the information you're looking
                    for:
                </p>
                <p>- '<b>cake</b>' to learn about our different cake flavors and options</p>
                <p>- '<b>price</b>' to get pricing information for our cakes</p>
                <p>- '<b>delivery</b>' to learn about our delivery options and fees</p>
                <p>- '<b>order</b>' to learn about our order placement process</p>
                <p>
                    - '<b>contact</b>' to get our contact number and email address for
                    further inquiries.
                </p>
                <p>- '<b>address</b>' to get our outlet's address.</p>
            </div>`,
    cake: `<div>
                <p>
                    Our cakes are made fresh daily using high-quality ingredients. Below are
                    the list of our avaiable cakes:
                </p>
                <p>
                    - '<b>Mocha Madness</b>': One of our top-rated options, a coffee lover's
                    dream with layers of chocolate cake, espresso buttercream, and a drizzle
                    of chocolate ganache on top.
                </p>
                <p>
                    - '<b>Triple Chocolate Delight</b>': A rich, decadent chocolate cake
                    with layers of chocolate ganache and frosting.
                </p>
                <p>
                    - '<b>Berry Bliss</b>': A light and fruity cake with layers of vanilla
                    cake and fresh berry filling, topped with whipped cream.
                </p>
                <p>
                    - '<b>Raspberry Lemonade Crush</b>': A summery cake with layers of lemon
                    cake, raspberry filling, and whipped cream frosting, garnished with
                    fresh raspberries.
                </p>
                <p>
                    - '<b>S'mores Sensation</b>': A campfire-inspired cake with layers of
                    chocolate cake, graham cracker crust, marshmallow filling, and chocolate
                    ganache frosting, topped with toasted marshmallows.
                </p>
            </div>`,
    price: `<div>
                <p>
                    All of our cake flavors are available in the following sizes and prices:
                </p>
                <p>6' inch: <b>RM 80</b></p>
                <p>8' inch: <b>RM 100</b></p>
                <p>10' inch: <b>RM 120</b></p>
            </div>`,
    delivery: `<div>
                    <p>
                        We offer delivery within KL area for a flat fee of <b>RM 6</b>. Our delivery
                        hours are from 10am to 5pm every day of the week.
                    </p>
                    <p>
                        To place a delivery order, you can type 'order' and I'll be happy to
                        assist you.
                    </p>
                </div>`,
    order: `<div>
                <p>
                    To place an order, please fill out our <b>Google Form [google form link]</b>.
                    The form will ask for your contact information, order details (such as
                    cake flavors and size), and preferred pickup or delivery time.
                </p>
                <p>
                    You can pay for your order when you pick it up in-store or through
                    online-banking if you required delivery service, the <b>bank account
                    details</b> you can get it in the form.
                </p>
            </div>`,
    contact: `<div>
                <p>
                    If you need to get in touch with us for any reason, you can reach us at
                    <b>+60123456789</b> during our business hours, which are from 10am to 5pm every
                    day of the week.
                </p>
                <p>
                    You can also send us an email at <b>thecakestudio@gmail.com</b> or message us
                    through our social media accounts on <b>Facebook / Instagram</b>. We'll do our
                    best to respond to your inquiry as soon as possible.
                </p>
            </div>`,
    address: `<div class="chat-space__mapview">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127482.68814050518!2d101.6169486698335!3d3.138503559648396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc362abd08e7d3%3A0x232e1ff540d86c99!2sKuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1680413607615!5m2!1sen!2smy"
                    class="chat-space__map"
                ></iframe>
                </div>
                <label>
                <p>
                    Our main outlet is located at Kuala Lumpur, Malaysia. You can click on
                    the map above to view the location details.
                </p>
            </label>`,
    default: `<div>
                <p>
                    I'm sorry, I didn't catch that. Can you please type 'info' so I can
                    better assist you?
                </p>
            </div>`,
};

// initialise the chatbot
function initChatbot() {
    setLastSeen();
    prepareResponse("welcome");
}

// set last seen time
function setLastSeen() {
    const currentDate = new Date();
    const currentTimeString = currentDate.toLocaleTimeString("en-US", {
        hour12: true,
        hour: "numeric",
        minute: "numeric",
    });
    const lastSeen = document.getElementById("navbar__profile-info-lastseen");
    lastSeen.textContent = "last seen today at " + currentTimeString;
}

// expance and collapse profile img
function toggleProfileImg() {
    const profImg = document.getElementById("navbar__expanded-profile-img");
    profImg.style.display = profImg.style.display === "flex" ? "none" : "flex";
}

// handle enter key press
function enterMsg(event) {
    if (event.keyCode === 13) {
        sendMsg();
    }
}

// send msg
function sendMsg() {
    const currentDate = new Date();
    const currentTimeString = currentDate.toLocaleTimeString("en-US", {
        hour12: true,
        hour: "numeric",
        minute: "numeric",
    });
    const conversation = document.getElementById("chat-space__conversation");
    const conversationContent = document.getElementById(
        "chat-space__conversation-content"
    );
    const input = document.getElementById("chat-space__input-section-typebox");
    const inputValue = input.value.trim();
    if (!inputValue) {
        return;
    }

    const li = document.createElement("li");

    const messageBox = document.createElement("div");
    messageBox.className = "chat-space__chat-element";

    const messageBoxContent = document.createElement("div");
    messageBoxContent.className = "chat-space__chat-element-content";
    messageBoxContent.textContent = inputValue;

    const dateLabel = document.createElement("label");
    dateLabel.className = "chat-space__date-label";
    dateLabel.textContent = currentTimeString;

    messageBox.appendChild(messageBoxContent);
    li.appendChild(messageBox);
    messageBoxContent.appendChild(dateLabel);
    conversationContent.appendChild(li);

    conversation.scrollTop = conversation.scrollHeight;
    setTimeout(function () {
        prepareResponse(inputValue);
    }, 1500);
    input.value = "";
    playSendMessageSound();
}

// prepare response
function prepareResponse(inputValue) {
    const lastSeen = document.getElementById("navbar__profile-info-lastseen");
    lastSeen.textContent = "typing...";
    switch (inputValue.toLowerCase().trim()) {
        case "welcome":
            setTimeout(() => {
                sendResponse(responses.welcome);
            }, 2000);
            break;
        case "info":
            sendResponse(responses.info);
            break;
        case "cake":
            sendResponse(responses.cake);
            break;
        case "price":
            sendResponse(responses.price);
            break;
        case "delivery":
            sendResponse(responses.delivery);
            break;
        case "order":
            sendResponse(responses.order);
            break;
        case "contact":
            sendResponse(responses.contact);
            break;
        case "address":
            sendResponse(responses.address);
            break;
        default:
            setTimeout(() => {
                sendResponse(responses.default);
            }, 2000);
            break;
    }
}

// send response
function sendResponse(msgToSend) {
    setTimeout(setLastSeen, 1000);
    const currentDate = new Date();
    const currentTimeString = currentDate.toLocaleTimeString("en-US", {
        hour12: true,
        hour: "numeric",
        minute: "numeric",
    });
    const conversation = document.getElementById("chat-space__conversation");
    const conversationContent = document.getElementById(
        "chat-space__conversation-content"
    );

    const li = document.createElement("li");

    const messageBoxContent = document.createElement("div");
    messageBoxContent.className = "chat-space__chat-received-element";
    messageBoxContent.innerHTML = msgToSend;

    const dateLabel = document.createElement("label");
    dateLabel.className = "chat-space__date-label";
    dateLabel.textContent = currentTimeString;

    li.appendChild(messageBoxContent);
    messageBoxContent.appendChild(dateLabel);
    conversationContent.appendChild(li);

    conversation.scrollTop = conversation.scrollHeight;
    playReceiveMessageSound();
}

// send and receive msg noti sound
const sendMsgAudio = new Audio("assets/audios/send-msg.mp3");
const receiveMsgAudio = new Audio("assets/audios/receive-msg.mp3");

function playSendMessageSound() {
    sendMsgAudio.play();
}

function playReceiveMessageSound() {
    receiveMsgAudio.play();
}
