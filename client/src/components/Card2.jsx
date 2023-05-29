const posts = [
    {
        category: 'Cats',
        title: 'Mysterious Marmalade: A Ginger Wonder with a Playful Spirit',
        description: 'Discover the enchanting tale of Marmalade, a mischievous ginger cat with boundless energy and a heart full of love.',
        author: 'CatLover101',
        date: '3 April 2023',
        avatar: 'https://www.uifaces.co/wp-content/uploads/2022/01/uifaces-logo.svg',
        poster:
        'https://images.pexels.com/photos/985083/pexels-photo-985083.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
        category: 'Cats',
        title: 'Whiskers: The Elegant Tuxedo Cat with a Gentle Soul',
        description:
        'Meet Whiskers, a dashing tuxedo cat with impeccable manners and a heart as soft as velvet. Join him on his adventures in the world of elegance and grace.',
        author: 'CatTales',
        date: '1 April 2023',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        poster:
        'https://images.pexels.com/photos/8076287/pexels-photo-8076287.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
        category: 'Cats',
        title: 'Luna: The Mysterious Siamese Beauty with Mesmerizing Blue Eyes',
        description:
        'Unveil the captivating story of Luna, a mesmerizing Siamese cat with piercing blue eyes and a personality that will leave you spellbound.',
        author: 'MeowMaster',
        date: '28 March 2023',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        poster:
        'https://images.pexels.com/photos/15375586/pexels-photo-15375586/free-photo-of-portrait-of-a-cute-kitten.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
        category: 'Cats',
        title: 'Oliver: The Curious Explorer with a Heart of Adventure',
        description:
        'Embark on thrilling escapades with Oliver, a curious cat who fearlessly explores the world around him, uncovering hidden treasures at every turn.',
        author: 'CatAdventures',
        date: '25 March 2023',
        avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
        poster:
        'https://images.pexels.com/photos/4053517/pexels-photo-4053517.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
        category: 'Cats',
        title: 'Whisper: The Gentle Guardian with a Soothing Presence',
        description:
        'Experience the calming aura of Whisper, a gentle and compassionate cat whose mere presence brings serenity and comfort to those around her.',
        author: 'CatWhisperer',
        date: '22 March 2023',
        avatar: 'https://randomuser.me/api/portraits/men/97.jpg',
        poster:
        'https://images.pexels.com/photos/16975692/pexels-photo-16975692/free-photo-of-animal-pet-cute-fur.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
        category: 'Cats',
        title: 'Leo: The Fearless King of the House with a Heart of Gold',
        description: 'Unleash the royal tales of Leo, a brave and majestic cat who reigns over his domain with unmatched bravery and a heart full of love.',
        author: 'CatLover123',
        date: '19 March 2023',
        avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
        poster:
        'https://images.pexels.com/photos/980457/pexels-photo-980457.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
        category: 'Cats',
        title: 'Cocoa: The Cuddly Companion with a Chocolate-colored Coat',
        description:
        'Wrap yourself in the warmth of Cocoa, a sweet and affectionate cat with a luxurious chocolate-colored coat that is as comforting as a cup of hot cocoa.',
        author: 'CatHugger',
        date: '16 March 2023',
        avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
        poster:
        'https://images.pexels.com/photos/15652931/pexels-photo-15652931/free-photo-of-cat-with-bowl-in-heart-shape.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
        category: 'Cats',
        title: 'Whiskers: The Fashionista Feline with a Flair for Style',
        description:
        'Step into the world of high fashion with Whiskers, a trendsetting cat who knows how to rock the latest styles and make heads turn wherever she goes.',
        author: 'FashionFeline',
        date: '13 March 2023',
        avatar: 'https://randomuser.me/api/portraits/women/47.jpg',
        poster:
        'https://images.pexels.com/photos/16871544/pexels-photo-16871544/free-photo-of-black-and-white-streets-creative-street.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            category: 'Cats',
            title: 'ZenCat: The Master of Relaxation with a Zen State of Mind',
            description:
            'Discover the art of tranquility with ZenCat, a serene and wise feline who will guide you on a journey to inner peace and harmony.',
            author: 'CatZen',
            date: '10 March 2023',
            avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
            poster:
            'https://images.pexels.com/photos/16752502/pexels-photo-16752502/free-photo-of-cat-on-ground.jpeg?auto=compress&cs=tinysrgb&w=600',
            }
        
]

const Card2 = () => {
  return (
    <div className="grid gap-6 py-6 cursor-pointer gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.title} className="border">
              <img src={post.poster} className="w-full rounded-md aspect-video" alt="" />
              <div className="p-3 min-h-min">
                
                <p className="flex-1 mt-4 text-base font-semibold text-gray-900">{post.title}</p>
                <p className="w-full mt-4 text-sm leading-normal text-gray-600 cursor-text">
                  {post.description}
                </p>
                <div className="flex mt-4 space-x-3 ">
                  <img className="w-10 h-full rounded-lg" src={post.avatar} alt={post.author} />
                  <div>
                    <p className="text-sm font-semibold leading-tight text-gray-900">
                      {post.author}
                    </p>
                    <p className="text-sm leading-tight text-gray-600">{post.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
  )
}

export default Card2