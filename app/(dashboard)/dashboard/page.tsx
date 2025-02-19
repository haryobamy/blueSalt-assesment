import { Barchart } from '@/components/bar-chart';
import DashboardCard from '@/components/dashboard-cards';
import { LineGraph } from '@/components/line-grap';
import { PieGraph } from '@/components/pie-chart';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { dashboardData, trafficData } from '@/constants/navlinks';
import { Bug, Nfc, User } from 'lucide-react';
import React from 'react';

export default function Dashboard() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-[70%_28%] gap-4 bg-white dark:bg-black'>
      {/* right  */}
      <aside className='flex flex-col gap-4'>
        {/* cards */}
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
          {dashboardData.map((data, idx) => (
            <DashboardCard key={idx} data={data} />
          ))}
        </div>
        <div className='flex flex-col lg:flex-row  items-center gap-4 '>
          <div className=' w-full lg:w-7/10 lg:min-w-[640px] bg-[#F7F9FB] rounded-2xl p-6  '>
            <div className='flex flex-row items-center space-x-4 w-full mb-4'>
              <p className='text-sm font-semibold text-[#1C1C1C]'>
                Total Users
              </p>
              <p className='text-[#1C1C1C66] text-sm font-[400]'>
                Total Projects{' '}
              </p>
              <p className='text-[#1C1C1C66] text-sm font-[400]'>
                Operating Status
              </p>
              <p className='text-[#1C1C1C66] text-sm font-[400]'>|</p>
              <p className='text-[#1C1C1C] text-xs font-[400]'>This year </p>
              <p className='text-[#1C1C1C] text-xs font-[400]'>Last year</p>
            </div>
            <div className='w-full mt-4'>
              <LineGraph />
            </div>
          </div>
          <div className=' w-full lg:w-3/10 bg-[#F7F9FB] rounded-2xl p-6 lg:min-w-[200px] h-full'>
            <p className='text-[#1C1C1C] text-sm font-semibold'>
              Traffic by Website
            </p>
            <div className='flex flex-col space-y-11 mt-4'>
              {trafficData?.map((traf, idx) => (
                <div key={idx} className='flex flex-row items-center gap-3'>
                  <p>{traf.label}</p>
                  <div className='flex flex-row gap-0.5'>
                    {Array(traf.value)
                      .fill('')
                      ?.map((_, idx) => (
                        <div
                          key={idx}
                          className='h-[2px] bg-[#1C1C1C] w-2 rounded-xl'
                        />
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row items-center gap-4 h-full'>
          <div className='w-full lg:w-1/2 lg:min-w-[48%] bg-[#F7F9FB] rounded-2xl p-6  '>
            <p className='text-[#1C1C1C] font-semibold text-sm'>
              Report Generated
            </p>
            <div className='mt-8'>
              <Barchart />
            </div>
          </div>
          <div className=' w-full lg:w-1/2 lg:min-w-[48%]  bg-[#F7F9FB] rounded-2xl p-6 h-full '>
            <p className='text-[#1C1C1C] font-semibold text-sm'>
              Traffic by Location
            </p>
            <div className='flex items-center gap-4'>
              <div className='w-1/2'>
                <PieGraph />
              </div>
              <div className='w-1/2 flex flex-col space-y-4'>
                <div className='flex  items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <div className='w-1.5 h-1.5 rounded-full bg-[#1C1C1C]' />
                    <p className='text-xs font-[400] text-[#1C1C1C]'>Nigeria</p>
                  </div>

                  <p className='text-xs font-[400] text-[#1C1C1C]'>38.6%</p>
                </div>
                {/* 2 */}
                <div className='flex  items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <div className='w-1.5 h-1.5 rounded-full bg-[#A1E3CB]' />
                    <p className='text-xs font-[400] text-[#1C1C1C]'>Ghana</p>
                  </div>

                  <p className='text-xs font-[400] text-[#1C1C1C]'>22.5%</p>
                </div>
                {/* 3 */}
                <div className='flex  items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <div className='w-1.5 h-1.5 rounded-full bg-[#B1E3FF]' />
                    <p className='text-xs font-[400] text-[#1C1C1C]'>Kenya</p>
                  </div>

                  <p className='text-xs font-[400] text-[#1C1C1C]'>30.8%</p>
                </div>
                {/* 4 */}{' '}
                <div className='flex  items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <div className='w-1.5 h-1.5 rounded-full bg-[#A8C5DA]' />
                    <p className='text-xs font-[400] text-[#1C1C1C]'>
                      Benin Republic
                    </p>
                  </div>

                  <p className='text-xs font-[400] text-[#1C1C1C]'>8.1%</p>
                </div>
                {/*  */}
              </div>
            </div>
          </div>
        </div>
        <div className='w-full lg:min-w-[440px] bg-[#F7F9FB] rounded-2xl p-6  '>
          <p className='text-[#1C1C1C] font-semibold text-sm'>Market & SEO</p>
          <div className='mt-8'>
            <Barchart isMonth={true} />
          </div>
        </div>
      </aside>

      {/* left */}
      <aside className='bg-[#FFF8F8] rounded-[30px] p-8'>
        <div className='flex flex-col space-y-4'>
          <p>Notifications</p>
          <div className='flex items-center gap-3 mt-4'>
            <div className='flex items-center justify-center p-1 bg-[#E3F5FF] rounded-full w-10 h-10'>
              <Bug size={18} />
            </div>

            <div>
              <p className='text-[#1C1C1C] text-sm font-[400]'>
                You fixed a bug
              </p>
              <span className='text-[#1C1C1C66] text-xs -mt-2'>Just now</span>
            </div>
          </div>

          <div className='flex items-center gap-3 mt-4'>
            <div className='flex items-center justify-center p-1 bg-[#E3F5FF] rounded-full w-10 h-10'>
              <User size={18} />
            </div>

            <div>
              <p className='text-[#1C1C1C] text-sm font-[400]'>
                New user registered
              </p>
              <span className='text-[#1C1C1C66] text-xs -mt-2'>
                59 minutes ago
              </span>
            </div>
          </div>

          <div className='flex items-center gap-3 mt-4'>
            <div className='flex items-center justify-center p-1 bg-[#E3F5FF] rounded-full w-10 h-10'>
              <Bug size={18} />
            </div>

            <div>
              <p className='text-[#1C1C1C] text-sm font-[400]'>
                You fixed a bug
              </p>
              <span className='text-[#1C1C1C66] text-xs -mt-2'>
                12 hours ago
              </span>
            </div>
          </div>

          <div className='flex items-center gap-3 mt-4'>
            <div className='flex items-center justify-center p-1 bg-[#E3F5FF] rounded-full w-10 h-10'>
              <Nfc size={18} />
            </div>

            <div>
              <p className='text-[#1C1C1C] text-sm font-[400]'>
                Andi Lane subscribed to you.
              </p>
              <span className='text-[#1C1C1C66] text-xs -mt-2'>
                Today, 11:59AM
              </span>
            </div>
          </div>
        </div>

        {/* activity */}

        <div className='flex flex-col space-y-4 mt-10'>
          <p>Activities</p>
          <div className='flex items-center gap-3 mt-4'>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div>
              <p className='text-[#1C1C1C] text-sm font-[400]'>
                Changed the style
              </p>
              <span className='text-[#1C1C1C66] text-xs -mt-2'>Just now</span>
            </div>
          </div>

          <div className='flex items-center gap-3 mt-4'>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div>
              <p className='text-[#1C1C1C] text-sm font-[400]'>
                Releases a new version
              </p>
              <span className='text-[#1C1C1C66] text-xs -mt-2'>
                59 minutes ago
              </span>
            </div>
          </div>

          <div className='flex items-center gap-3 mt-4'>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div>
              <p className='text-[#1C1C1C] text-sm font-[400]'>
                Submitted a bug
              </p>
              <span className='text-[#1C1C1C66] text-xs -mt-2'>
                12 hours ago
              </span>
            </div>
          </div>

          <div className='flex items-center gap-3 mt-4'>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div>
              <p className='text-[#1C1C1C] text-sm font-[400]'>
                Modified a data in Page X
              </p>
              <span className='text-[#1C1C1C66] text-xs -mt-2'>
                Today, 11:59AM
              </span>
            </div>
          </div>

          <div className='flex items-center gap-3 mt-4'>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div>
              <p className='text-[#1C1C1C] text-sm font-[400]'>
                Delete a page in Project
              </p>
              <span className='text-[#1C1C1C66] text-xs -mt-2'>
                Today, 11:59AM
              </span>
            </div>
          </div>
        </div>

        {/* Conatact */}

        <div className='flex flex-col space-y-8 mt-10'>
          <p>Contacts</p>
          <div className='flex items-center gap-3 mt-4'>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' />
              <AvatarFallback>NC</AvatarFallback>
            </Avatar>

            <div>
              <p className='text-[#1C1C1C] text-sm font-[400]'>Natali Craig</p>
            </div>
          </div>
          <div className='flex items-center gap-3 mt-4'>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' />
              <AvatarFallback>DC</AvatarFallback>
            </Avatar>

            <div>
              <p className='text-[#1C1C1C] text-sm font-[400]'>Drew Cano</p>
            </div>
          </div>
          <div className='flex items-center gap-3 mt-4'>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' />
              <AvatarFallback>AL</AvatarFallback>
            </Avatar>

            <div>
              <p className='text-[#1C1C1C] text-sm font-[400]'>Andi Lane</p>
            </div>
          </div>
          <div className='flex items-center gap-3 mt-4'>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' />
              <AvatarFallback>KO</AvatarFallback>
            </Avatar>

            <div>
              <p className='text-[#1C1C1C] text-sm font-[400]'>Koray Okumus</p>
            </div>
          </div>
          <div className='flex items-center gap-3 mt-4'>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' />
              <AvatarFallback>KM</AvatarFallback>
            </Avatar>

            <div>
              <p className='text-[#1C1C1C] text-sm font-[400]'>Kate Morrison</p>
            </div>
          </div>{' '}
          <div className='flex items-center gap-3 mt-4'>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' />
              <AvatarFallback>MM</AvatarFallback>
            </Avatar>

            <div>
              <p className='text-[#1C1C1C] text-sm font-[400]'>Melody Macy</p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
