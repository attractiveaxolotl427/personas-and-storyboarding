import creditcardreader from './images/creditcardreadersketch.png';

import shopper1 from './images/shopper1.png';
import shopper2 from './images/shopper2.png';
import shopper3 from './images/shopper3.png';

import persona1 from './images/persona1.svg';
import persona2 from './images/persona2.svg';

import susan1 from './images/susan1.png';
import susan2 from './images/susan2.png';
import susan3 from './images/susan3.png';
import susan4 from './images/susan4.png';
import susan5 from './images/susan5.png';
import susan6 from './images/susan6.png';

import fred1 from './images/fred1.png';
import fred2 from './images/fred2.png';
import fred3 from './images/fred3.png';
import fred4 from './images/fred4.png';
import fred5 from './images/fred5.png';
import fred6 from './images/fred6.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Personas and Storyboarding Assignment</h1>
      </header>
      <nav>
        <a href="#Part 1">Part 1</a> 
        <a href="#Part 2">Part 2</a> 
        <a href="#Part 3">Part 3</a> 
        <a href="#Part 4">Part 4</a>
        </nav>
      <body className="App-body">
        <h2 id="Part 1">Part 1: Preparation</h2>
        <p>I crawled over to <strong>Eastside Market</strong> to observe the 
            <strong> credit card reader device</strong> located in front of the cash 
            register, where people usually checked out and paid for their groceries.
            The questions I asked the shoppers were as follows: <br></br>
            <br></br>
            1&#41; What are you trying to do with this device? <br></br>
            2&#41; What do you expect this device's <strong>main function(s)</strong> to be? <br></br>
            3&#41; What issues or inconveniences are you running into, if any? <br></br>
            4&#41; What is the first thing that catches your eye on this device? <br></br>
          </p>
          <div className="sketches">
          <img src={creditcardreader} alt="sketch of a grocery market's credit card reader"></img>
          </div>
        <h2 id="Part 2">Part 2: Recording Observations</h2>
        <p>
          In general, some of the special traits I noticed about this device is that it's particularly noisy: 
          it beeps pleasantly at successful transactions, and honks loudly at failed payments. Also, <strong>not all credit card readers at Eastside Market are built the same/provide the same functions, </strong>
          which can be frustrating for some shoppers who want consistency in provided payment methods.
        </p>

        <h3>Key Observations of Users:</h3>
        <ul>
          <li>Most times, users only needed to press <strong> the green button </strong> to submit signatures for card payments. The buttons with numbers were not used.</li>
          <li>Everyone either used a card with a chip or <strong> Apple Pay </strong> on their phones. Most of the people with Apple Pay were <strong> students/younger users.</strong></li>
          <li>Most people looked at the <strong> screen to check if their payment went through successfully </strong> alongside waiting for the successful "beep" from the device.</li>
        </ul>
        <div className="sketches">
          <img src={shopper1} alt="sketch of shopper 1 successfully completing their credit card transaction"></img>
          <img src={shopper2} alt="sketch of shopper 2 having trouble with their Apple Pay and credit card transactions"></img>
          <img src={shopper3} alt="sketch of shopper 3 successfully completing their debit card transaction"></img>
        </div>
        <h3>Interview Response <mark>Highlights</mark>:</h3>
        <ul>
          <li>Users generally <strong> preferred Apple Pay or the Touchless Payment (insert chip)</strong>, both for convenience and security concerns.</li>
          <li>Users expect the credit card reader to let them pay for their groceries with ease; <strong> not all of the devices offer Apple Pay/contactless pay</strong>, which can be confusing.</li>
          <li>The <strong>screen with text </strong> is the first thing they notice about the device. It usually prompts the shopper to insert/swipe card and make a donation to the market's charity or cause of choice.</li>
        </ul>
        <h2 id="Part 3">Part 3: Personas</h2>
        <div className="sketches">
          <img src={persona1} alt="persona breakdown of shopper 2"></img>
          <img src={persona2} alt="persona breakdown of shopper 1"></img>
        </div>
        <h2 id="Part 4">Part 4: Storyboards</h2>
        <h3>Frustrated Fred's Day</h3>
        <div>
          <ol>
        <li className="storyboard">
          <img src={fred1} alt="storyboard of Fred, slide 1"></img>
          <p>Fred goes into the grocery store with their wallet and minimal time. They are only here to get a few essential items, and want to be in and out as quickly as possible so they can get back home to finish up their work and chores around the house. Fred has had a long day, and hopes that this grocery trip goes smoothly.</p>
        </li>
        <li className="storyboard">
          <img src={fred2} alt="storyboard of Fred, slide 2"></img>
          <p>Fred ends up needing to walk all around the mart for the things they need. Even shorter on time, Fred rushes to go stand in a short line to check out their groceries with a cashier at a cash register.
          </p>
        </li>
        <li className="storyboard">
        <img src={fred3} alt="storyboard of Fred, slide 3"></img>
        <p> Once Fred gets to the front of the line, Fred loads their groceries onto the conveyor belt and gets their wallet out to grab a credit card to pay for the groceries. Without hesitation, Fred inserts their card into the card reader.
        </p>
        </li>
        <li className="storyboard">
        <img src={fred4} alt="storyboard of Fred, slide 4"></img>
        <p>
          The machine beeps loudly, and Fred tries the card several more times before resorting to Apple Pay, which also causes the reader to malfunction. Fred starts to feel antsy as he holds up the cash register line.
          </p>
        </li>
        <li className="storyboard">
        <img src={fred5} alt="storyboard of Fred, slide 5"></img>
        <p>
          Fred decides to wait for the cashier to reset the card reader to the initial screen one more time before giving up. They insert their original credit card and wait for the device to indicate some sort of success or failure in reading the card. The device finally displays on the screen that the transaction was successful.
          </p>
        </li>
        <li className="storyboard">
        <img src={fred6} alt="storyboard of Fred, slide 6"></img>
        <p>
        A receipt is promptly printed, and the cashier, card reader, and Fred part ways, Fred now more stressed and in a rush than they were when they had initially entered the grocery store. The cashier now also has a disproportionately longer line to deal with.
        </p>
        </li>
        </ol>
        </div>
        <h3>Simple Susan's Day</h3>
        <div>
          <ol>
        <li className="storyboard">
        <img src={susan1} alt="storyboard of Susan, slide 1"></img>
          <p>
            Susan goes into the grocery store with their grocery bags, ready to check off all the items in their grocery shopping list. Susan is in no particular urgency to get everything done quickly.
          </p>
        </li>
        <li className="storyboard">
          <img src={susan2} alt="storyboard of Susan, slide 2"></img>
          <p>
            Susan walks all around the mart and finds most of the things they were looking for, and then some. Happy with their haul, Susan goes to stand in line to check out their groceries with a cashier at a cash register.
          </p>
        </li>
        <li className="storyboard">
        <img src={susan3} alt="storyboard of Susan, slide 3"></img>
        <p> 
        Once Susan gets to the front of the line, Susan loads their groceries onto the conveyor belt and gets their credit card out to pay for the groceries once prompted by either the cashier or card reader screen.
        </p>
        </li>
        <li className="storyboard">
        <img src={susan4} alt="storyboard of Susan, slide 4"></img>
        <p>
        The prompt shows up on the screen, and Susan swipes their credit card on the right side of the device.
          </p>
        </li>
        <li className="storyboard">
        <img src={susan5} alt="storyboard of Susan, slide 5"></img>
        <p>
        Once the card is swiped, Susan waits for the device to indicate some sort of success or failure in reading the card. The device pleasantly beeps and displays on the screen that the transaction was successful.
          </p>
        </li>
        <li className="storyboard">
        <img src={susan6} alt="storyboard of Susan, slide 6"></img>
        <p>
        A receipt is promptly printed, and the cashier, card reader, and Susan part ways, Susan with their groceries in tow.
        </p>
        </li>
        </ol>
        </div>
      </body>
    </div>
  );
}

export default App;
