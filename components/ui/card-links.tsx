import Card from './card';

import Icon01 from '@/public/images/project-icon-01.svg'
import Icon02 from '@/public/images/project-icon-02.svg'
import Icon03 from '@/public/images/project-icon-03.svg'
import Icon04 from '@/public/images/project-icon-04.svg'
import Icon05 from '@/public/images/project-icon-05.svg'
import Icon06 from '@/public/images/project-icon-06.svg'
import Icon07 from '@/public/images/project-icon-07.svg'
import Icon08 from '@/public/images/project-icon-08.svg'


export default function CardLinks() {

//   const items01 = [
//     {
//       id: 0,
//       icon: Icon01,
//       slug: 'tokens',
//       title: 'Tokens',
//       excerpt: 'Solutions for running containers locally and remotely.',
//       comingSoon: false,
//     },
//     {
//       id: 0,
//       icon: Icon02,
//       slug: '#0',
//       title: 'dApps',
//       excerpt: 'Solutions for running containers locally and remotely.',
//       comingSoon: true,
//     },
//   ]

  const items02 = [
    {
        id: 0,
        icon: Icon01,
        slug: 'tokens',
        title: 'Countries',
        excerpt: 'Solutions for running containers locally and remotely.',
        comingSoon: false,
      },
      {
        id: 1,
        icon: Icon02,
        slug: '#0',
        title: 'dApps',
        excerpt: 'Solutions for running containers locally and remotely.',
        comingSoon: true,
      },
    {
      id: 2,
      icon: Icon03,
      slug: '#0',
      title: 'Calculator',
      excerpt: 'Code assets and services for people, with people.',
      comingSoon: true,
    },
    {
      id: 3,
      icon: Icon04,
      slug: '#0',
      title: "DEXs",
      excerpt: 'Storybook helps you develop, test, and document UIs.',
      comingSoon: true,
    },
    // {
    //   id: 4,
    //   icon: Icon05,
    //   slug: '#0',
    //   title: 'Knowledge AI',
    //   excerpt: 'Instantly answers all questions based on your internal knowledge bases.',
    //   comingSoon: true,
    // },
    // {
    //   id: 5,
    //   icon: Icon06,
    //   slug: '#0',
    //   title: 'Security Frame',
    //   excerpt: 'Automated security compliance for your business.',
    //   comingSoon: true,
    // },
  ]

  return (
    <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">

      { /* Middle area */}
      <div className="grow" >
        <div className="max-w-5xl" style={{ margin: 'auto' }}>

          <section>
            {/* Page content */}
            <div className="space-y-10">
              {/* Side Hustles cards */}
              {/* <section> */}
                {/* Cards */}
                {/* <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-10">

                  {items01.map(item => (
                    <Card key={item.id} item={item} />
                  ))}

                </div>
              </section> */}
              {/* Client Projects cards */}
              <section>
                {/* Cards */}
                <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-10">

                  {items02.map(item => (
                    <Card key={item.id} item={item} />
                  ))}

                </div>
              </section>
            </div>
          </section>

        </div>
      </div>
      

    </div>
  )
}
