import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

interface Item {
  id: number
  icon: StaticImageData
  slug: string
  title: string
  excerpt: string
  comingSoon?: boolean
}

interface ItemProps { 
  item: Item
}

export default function Card({ item }: ItemProps) {
  return (
    <Link 
      className="rounded-lg border border-slate-200 hover:border-slate-300 dark:border-slate-800 dark:hover:border-slate-700 dark:bg-gradient-to-t dark:from-slate-900 dark:to-slate-800 bg-white transition-color ease-in-out p-6 group" 
      href={item.slug}
    >
      <div className="flex flex-col h-full">
        <div className="grow">
   

          {/* New content */}

            <div className="flex justify-between items-start w-full">
              <div className="flex-col items-center">
                <div className="flex items-center mb-1">
                  <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white me-1">{item.title}</h5>
                  {/* <svg data-popover-target="chart-info" data-popover-placement="bottom" className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-5.034V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z"/>
                  </svg> */}
             
                </div>
              </div>
              
           
            </div>
        


          {/* Line Chart */}
          <div className="py-6" id="pie-chart"></div>

       
        </div>
      </div>
    </Link>
  )
}
