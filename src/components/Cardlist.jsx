import React from 'react';
import './Card.css'
import imagePaths from './imagepaths';

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
};

const Card = ({ image, title, description }) => (
  <div className="card">
    <img src={image} alt={title} />
    <h2>{title}</h2>
    <p>{truncateText(description, 100)}</p>
  </div>
);

const items = [
  {
    image: imagePaths.Item1,
    title: 'Apple MacBook Pro (M1 Pro)',
    description: `14.2-inch Liquid Retina XDR display with a resolution of 3024 x 1964 pixels.
    The processor is the Apple Silicon M1 Pro with a 10-core CPU.`,
  },
  {
    image: imagePaths.Item2,
    title: 'iPhone 14 Plus',
    description: 'Offering a reward for its safe return, no questions asked. Your honesty and assistance in reuniting me with my iPhone would be greatly appreciated.',
  },
  {
    image: imagePaths.Item3,
    title: 'iPad Pro',
    description: 'Silver iPad Pro with a black case. The iPad contains important personal and work-related data that is incredibly valuable to me.',
  },
  {
    image: imagePaths.Item4,
    title: 'Prada Coin Purse',
    description: `I lost my Prada coin purse, a stylish and elegant accessory in black leather. 
    This coin purse features a silver Prada logo on the front and is secured with a zipper closure that has a leather pull tab.`,
  },
  {
    image: imagePaths.Item5,
    title: 'JBL Bluetooth Speaker',
    description: 'I last saw my beloved blue JBL Speaker at canteen I may have left it in a specific area or at a particular event.',
  },
  {
    image: imagePaths.Item6,
    title: 'Cg Sling Bag',
    description: `The lost Cg Sling Bag is a compact yet stylish accessory that went missing in unfortunate circumstances. 
    This sleek and versatile bag is an essential part of my daily routine and contains a few valuable personal items.`,
  },
  {
    image: imagePaths.Item7,
    title: '100% Cycling Glasses',
    description: `I remember wearing them during my last cycling trip, but I must have misplaced them or left them behind at the canteen.`,
  },
  {
    image: imagePaths.Item8,
    title: 'Gracie',
    description: `If you have any information about the whereabouts of this lost giraffe or if you have found it please contact us 
    at 09124646296 to help return this beloved companion to its rightful owner.`,
  },
  {
    image: imagePaths.Item9,
    title: 'Gold Leaf Ring',
    description: `The lost item is a precious Gold Leaf Ring, a symbol of elegance and grace. This exquisite piece of jewelry boasts intricate details and a timeless design.`,
  },
  {
    image: imagePaths.Item10,
    title: 'Summit Fury X-Trail',
    description: `I hope you're all doing well. I'm reaching out because I lost my mountain bike, and I could really use your help in finding it.`,
  },
  {
    image: imagePaths.Item11,
    title: 'House Keys',
    description: `They might have taken a little adventure without me, so I'm asking for your detective skills to bring them back home. 
    No reward, but I promise eternal gratitude, maybe a batch of homemade cookies if you're into that kind of thing!`,
  },
  {
    image: imagePaths.Item12,
    title: 'Logitech K380 Bluetooth Keyboard',
    description: `It's not just any keyboard; it's been my trusty companion for late-night study sessions and impromptu jam sessions. 
    Here's a pic to jog your memory. If you see it or know anything, hit me up!`,
  },
  {
    image: imagePaths.Item13,
    title: 'Samsung Galaxy Watch Active 2',
    description: `I've attached pictures below to jog your memories. Losing these feels like losing a piece of myself. If you have any info, please drop me a message.`,
  },
  {
    image: imagePaths.Item14,
    title: 'Dumbbells',
    description: `I don't have much to offer in return, but if you can help me find these, you'll have my eternal gratitude and maybe a virtual high-five. Thanks a million for keeping an eye out!`,
  },
  {
    image: imagePaths.Item15,
    title: ' White gold chain with a small heart pendant',
    description: `The lost item is a precious White gold chain, a symbol of elegance and grace. This exquisite piece of jewelry boasts intricate details and a timeless design.`,
  },
  
];

const CardList = () => (
    <>
    <div className="card-list">
    {items.map((item, index) => (
        <Card {...item} />
    ))}
  </div>
  </>
);

export default CardList;
