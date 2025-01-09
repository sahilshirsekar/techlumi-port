import { AnimatedBackground } from "./animated-bg";
export function AnimatedCardBackgroundHover() {
  const ITEMS = [
    {
      id: 1,
      title: 'Software Development',
      description: `Crafting digital dreams into reality. Our code is the paint, and your vision is the canvas. Let's make your app live.`,
    },
    {
      id: 2,
      title: 'Web Development',
      description: `We sculpt pixels into stunning websites. Your online identity should be a masterpiece, and we're the artists to make it happen.`,
    },
    {
      id: 3,
      title: 'Digital Marketing',
      description: `We're the compass for your online journey. Navigating through the digital realm to put your business in the spotlight.`,
    },
    {
      id: 4,
      title: 'UI/UX Design',
      description: `Design that delights. We don't just create interfaces; we craft experiences. Let your users fall in love with your digital world.`,
    }
  ];

  return (
    <div className='grid grid-cols-2 p-10 md:grid-cols-2'>
      <AnimatedBackground
        className='rounded-lg bg-zinc-100 dark:bg-zinc-800 '
        transition={{
          type: 'spring',
          bounce: 0.2,
          duration: 0.6,
        }}
        enableHover
      >
        {ITEMS.map((item, index) => (
          <div key={index} data-id={`card-${index}`}>
            <div className='flex select-none flex-col space-y-1 p-6 '>
              <h3 className='text-3xl font-medium text-zinc-700 dark:text-zinc-50'>
                {item.title}
              </h3>
              <p className='text-2xl text-zinc-600 dark:text-zinc-400'>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </AnimatedBackground>
    </div>
  );
}
