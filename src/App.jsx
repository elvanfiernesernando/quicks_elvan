import React, { useState } from 'react';
import './App.css';
import { IC_CHAT_REG, IC_QUICKS_FAB, IC_TASK_REG, IC_SEARCH, IC_LOADING, IC_PERSON, IC_ARROW_BACK, IC_CLOSE, IC_LOADING_2, IC_EXPAND, IC_CLOCK, IC_EDIT } from './assets/icons';

function App() {

  const [ buttonActive, setButtonActive ] = useState('closed')
  const [ chatScreenSelected, setChatScreenSelected ] = useState({
    screenSelected: 1,
    idSelected: 0
  })
  const [ isLoading, setIsLoading ] = useState({
    screen1: false,
    screen2: false,
    loading: true
  })

  return (
    <div className="bg-primary-bg w-screen h-screen relative">
      <div className='absolute right-[34px] bottom-[27px]'>
        <div className='relative flex flex-row-reverse gap-[26px] items-center'>
          {/* button trigger */}
          <button onClick={()=>{setButtonActive(buttonActive === 'closed' ? 'open' : 'closed')}} className={`w-[68px] h-[68px] bg-primary-blue ${buttonActive === 'closed' ? 'animate-trigger-enabled z-10' : buttonActive === 'open' ? 'animate-trigger-enabled' : 'animate-trigger-disabled'} rounded-full flex justify-center items-center`}>
            <IC_QUICKS_FAB className='w-[18px] h-[32px]'/>
          </button>

          {/* button 1 chats*/}
          <div className={`relative ${buttonActive == 'closed' ? 'transition duration-1000 translate-x-[150%]' : buttonActive == 'open' ? 'transition duration-1000 translate-x-[0%]' : buttonActive === 1 ? 'transition duration-1000 translate-x-[160%]' : buttonActive === 2 ? 'transition duration-1000 translate-x-[0%]' : ''}`}>
            {/* card */}
            <div className={` bg-white absolute bottom-full mb-[15px] rounded-sm right-0 ${buttonActive === 1 ? 'transition delay-700 origin-bottom-right duration-1000 scale-100' : 'transition origin-bottom-right duration-1000 scale-0'}`}>
              {chatScreenSelected.screenSelected === 1 && (
                <div className='flex flex-col gap-4 h-full min-h-[550px] px-[32px] py-[24px]'>
                  {/* search */}
                  <div className='relative'>
                    <input type="text" name='search' id='search' className='min-w-[581px] min-h-[40px] border border-1 border-[#828282] rounded-md px-[86.32px]' placeholder='search'/>

                    <label htmlFor="search" className='w-[12px] h-[12px] absolute inset-y-0 right-[86.32px] top-1/2 transform -translate-y-1/2'>
                      <IC_SEARCH className='w-[12px] h-[12px] fill-[#333333]' />
                    </label>
                  </div>

                  {isLoading.screen1 && (
                    <div className='w-full h-full flex flex-col flex-1 justify-center items-center'>
                      <IC_LOADING className='animate-spin' />
                      <p className='text-[#4F4F4F]'>Loading Chats ..</p>
                    </div>
                  )}

                  {!isLoading.screen1 && (
                    <div className='flex flex-col'>
                      {/* chat rooms 1*/}
                      <div className='flex gap-4 py-[22px] border-b-[0.5px] border-primary-grey cursor-pointer' onClick={()=>{
                        setChatScreenSelected({...chatScreenSelected, screenSelected: 2, idSelected: 1})
                      }}>
                        {/* person */}
                        <div className='flex'>
                          <div className='w-[34px] h-[34px] bg-[#E0E0E0] rounded-full flex items-center justify-center'>
                            <IC_PERSON className='w-[12px] h-[12px] fill-[#4F4F4F]'/>
                          </div>
                          <div className='w-[34px] h-[34px] bg-blue-500 rounded-full -ml-[17px] flex items-center justify-center'>
                            <IC_PERSON className='w-[12px] h-[12px] fill-white'/>
                          </div>
                        </div>
                        {/* details */}
                        <div className='flex gap-4 items-baseline'>
                          <div className='flex flex-col'>
                            <p className='font-bold text-primary-blue'>109220-Naturalization</p>
                            <p className='font-bold text-sm text-primary-dark'>Cameron Phillips</p>
                            <p className='text-xs text-primary-dark'>Please check this out!</p>
                          </div>
                          <p className='text-xs text-primary-dark'>01/06/2021 12:19</p>
                        </div>
                      </div>
                      {/* chat rooms 1*/}
                      <div className='flex gap-4 py-[22px] border-y-[0.5px] border-primary-grey cursor-pointer' onClick={()=>{
                        setChatScreenSelected({...chatScreenSelected, screenSelected: 2, idSelected: 2})
                      }}>
                        {/* person */}
                        <div className='flex'>
                          <div className='w-[34px] h-[34px] bg-[#E0E0E0] rounded-full flex items-center justify-center'>
                            <IC_PERSON className='w-[12px] h-[12px] fill-[#4F4F4F]'/>
                          </div>
                          <div className='w-[34px] h-[34px] bg-blue-500 rounded-full -ml-[17px] flex items-center justify-center'>
                            <IC_PERSON className='w-[12px] h-[12px] fill-white'/>
                          </div>
                        </div>
                        {/* details */}
                        <div className='flex gap-4 items-baseline'>
                          <div className='flex flex-col max-w-[75%]'>
                            <p className='font-bold text-primary-blue'>109220-Naturalization ashiuahsiuah ashaslorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veniam voluptatem voluptas accusantium tempora aliquid id hic autem vero officiis necessitatibus earum perspiciatis asperiores temporibus cumque excepturi quibusdam, animi maxime.</p>
                            <p className='font-bold text-sm text-primary-dark'>Cameron Phillips</p>
                            <p className='text-xs text-primary-dark'>Please check this out!</p>
                          </div>
                          <p className='text-xs text-primary-dark'>01/06/2021 12:19</p>
                        </div>
                      </div>
                      {/* chat rooms 1*/}
                      <div className='flex gap-4 py-[22px] border-y-[0.5px] border-primary-grey cursor-pointer' onClick={()=>{
                        setChatScreenSelected({...chatScreenSelected, screenSelected: 2, idSelected: 3})
                      }}>
                        {/* person */}
                        <div className='flex'>
                          <div className='w-[34px] h-[34px] bg-[#E0E0E0] rounded-full flex items-center justify-center'>
                            <IC_PERSON className='w-[12px] h-[12px] fill-[#4F4F4F]'/>
                          </div>
                          <div className='w-[34px] h-[34px] bg-blue-500 rounded-full -ml-[17px] flex items-center justify-center'>
                            <IC_PERSON className='w-[12px] h-[12px] fill-white'/>
                          </div>
                        </div>
                        {/* details */}
                        <div className='flex gap-4 items-baseline'>
                          <div className='flex flex-col'>
                            <p className='font-bold text-primary-blue'>109220-Naturalization</p>
                            <p className='font-bold text-sm text-primary-dark'>Cameron Phillips</p>
                            <p className='text-xs text-primary-dark'>Please check this out!</p>
                          </div>
                          <p className='text-xs text-primary-dark'>01/06/2021 12:19</p>
                        </div>
                      </div>
                      {/* chat rooms 1*/}
                      <div className='flex gap-4 py-[22px] border-t-[0.5px] border-primary-grey cursor-pointer' onClick={()=>{
                        setChatScreenSelected({...chatScreenSelected, screenSelected: 2, idSelected: 4})
                      }}>
                        {/* person */}
                        <div className='flex'>
                          <div className='w-[34px] h-[34px] bg-[#E0E0E0] rounded-full flex items-center justify-center'>
                            <IC_PERSON className='w-[12px] h-[12px] fill-[#4F4F4F]'/>
                          </div>
                          <div className='w-[34px] h-[34px] bg-blue-500 rounded-full -ml-[17px] flex items-center justify-center'>
                            <IC_PERSON className='w-[12px] h-[12px] fill-white'/>
                          </div>
                        </div>
                        {/* details */}
                        <div className='flex gap-4 items-baseline'>
                          <div className='flex flex-col'>
                            <p className='font-bold text-primary-blue'>109220-Naturalization</p>
                            <p className='font-bold text-sm text-primary-dark'>Cameron Phillips</p>
                            <p className='text-xs text-primary-dark'>Please check this out!</p>
                          </div>
                          <p className='text-xs text-primary-dark'>01/06/2021 12:19</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {
                chatScreenSelected.screenSelected === 2 && (
                  // cards
                  <div className='flex flex-col min-h-[550px] min-w-[581px] relative'>
                    {/* headers */}
                    <div className='flex justify-between items-center border-b-[0.5px] border-primary-grey px-[32px] py-[24px]'>
                      <div className='flex gap-4 items-center'>
                        <IC_ARROW_BACK className='fill-[#333333] w-[16px] h-[16px] cursor-pointer' onClick={()=>{setChatScreenSelected({...chatScreenSelected, screenSelected: 1, idSelected: 0})}}/>
                        <div className='flex flex-col justify-center'>
                          <p className='font-bold text-primary-blue'>109220-Naturalization</p>
                          <p>3 Participants</p>                        
                        </div>
                      </div>
                      <IC_CLOSE className='w-[14px] h-[14px] fill-[#333333]'/>
                    </div>
                    {/* chat container */}
                    <div className='w-full h-full min-h-[550px] max-h-[550px] px-[32px] py-[24px] overflow-y-auto'>
                      {/* chat item - me */}
                      <div className='flex flex-col items-end'>
                        <p className='text-[#9B51E0]'>You</p>
                        <div className='flex flex-row gap-1 max-w-[85%] '>
                          <p className='cursor-pointer'>...</p>
                          <div className='flex flex-col bg-[#EEDCFF] p-4 rounded-md gap-1'>
                            <p className='text-primary-dark'>No worries. It will be completed ASAP. I’ve asked him yesterday.</p>
                            <p className='text-primary-dark text-sm'>19.32</p>
                          </div>
                        </div>
                      </div>
                      {/* datetime */}
                      <div className='flex gap-4 items-center px-[32px] py-[24px]'>
                        <span className='h-[1px] w-full bg-primary-dark'></span>
                        <p className='flex-1 min-w-[150px] mx-auto text-center text-primary-dark'>Today June 09, 2021</p>
                        <span className='h-[1px] w-full bg-primary-dark'></span>
                      </div>
                      {/* chat item - Mary Hilda */}
                      <div className='flex flex-col items-start'>
                        <p className='text-[#E5A443]'>Mary Hilda</p>
                        <div className='flex flex-row-reverse gap-1 max-w-[85%]'>
                          <p className='cursor-pointer'>...</p>
                          <div className='flex flex-col bg-[#FCEED3] p-4 rounded-md gap-1'>
                            <p className='text-primary-dark'>Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.</p>
                            <p className='text-primary-dark text-sm'>19.32</p>
                          </div>
                        </div>
                      </div>
                      {/* new message line */}
                      <div className='flex gap-4 items-center px-[32px] py-[24px]'>
                        <span className='h-[1px] w-full bg-indicator-red'></span>
                        <p className='flex-1 min-w-[100px] mx-auto text-indicator-red text-center'>New Message</p>
                        <span className='h-[1px] w-full bg-indicator-red'></span>
                      </div>
                      {/* chat item - Mary Hilda */}
                      <div className='flex flex-col items-start'>
                        <p className='text-[#E5A443]'>Mary Hilda</p>
                        <div className='flex flex-row-reverse gap-1 max-w-[85%]'>
                          <p className='cursor-pointer'>...</p>
                          <div className='flex flex-col bg-[#FCEED3] p-4 rounded-md gap-1'>
                            <p className='text-primary-dark'>Sure thing, claren</p>
                            <p className='text-primary-dark text-sm'>19.32</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex gap-4 px-[32px] pb-[24px] pt-[12px] p-4 relative'>
                      <div className='px-[12px] pt-[11px] pb-[8px] bg-blue-200 rounded-md text-primary-blue absolute bottom-full left-1/2 transform -translate-x-1/2 flex gap-2 items-center'>
                        <p>New Message</p>
                        <IC_ARROW_BACK className='w-[10.67px] h-[10.67px] fill-primary-blue -rotate-90'/>
                      </div>
                      {setTimeout(()=>{
                        setIsLoading({...isLoading, loading : false})
                      }, 4000)}
                      {isLoading.loading && (
                        <div className='py-2 px-2 bg-blue-200 rounded-md absolute bottom-full w-[673px] flex gap-2 items-center'>
                          <IC_LOADING_2 className='w-[34px] h-[34px] animate-spin'/>
                          <p className='text-primary-dark'>Please wait while we connect you with one of our team ...</p>
                        </div>
                      )}
                      <input type="text" name='search' id='search' className='min-w-[581px] min-h-[40px] border border-1 border-[#828282] rounded-md px-4' placeholder='Type a new'/>
                      <button className='px-[21px] py-[14px] bg-primary-blue rounded-md text-white'>Send</button>
                    </div>
                  </div>
                )
              }
            </div>

            <button onClick={()=>{
              setButtonActive(1)
              setIsLoading({...isLoading, screen1 : true})
              setTimeout(()=>{
                setIsLoading({...isLoading, screen1 : false, loading: true})
              }, 3000)
            }} className={`fill-black w-[60px] h-[60px] bg-primary-white rounded-full flex justify-center items-center ${buttonActive == 'closed' ? 'animate-button-non-active-1' : buttonActive === 1 ? 'animate-button-active-1' : buttonActive === 2 ? 'animate-button-non-active-1' : ''}`}>
              <IC_CHAT_REG className={`w-[22.2px] h-[22.2px] ${buttonActive === 1 ? 'animate-button-active-1-color' : 'animate-button-non-active-1-color'}`}/>
            </button>
          </div>

          {/* button 2 task*/}
          <div className={`relative ${buttonActive == 'closed' ? 'transition duration-1000 translate-x-[295%]' : buttonActive == 'open' ? 'transition duration-1000 translate-x-[0%]' : buttonActive === 1 ? 'transition duration-1000 translate-x-[160%]' : buttonActive === 2 ? 'transition duration-1000 translate-x-[285%]' : ''}`}>
            {/* card */}
            <div className={`px-[32px] py-[24px] min-w-[630px] bg-white absolute bottom-full mb-[15px] rounded-sm right-0 ${buttonActive === 2 ? 'transition delay-700 origin-bottom-right duration-1000 scale-100' : 'transition origin-bottom-right duration-1000 scale-0'}`}>
              {/* first screen */}
              <div className='flex flex-col gap-4'>
                {/* search */}
                <div className='relative flex justify-between'>
                  <select name="task" id="task" className='border border-1 p-2 rounded-md'>
                    <option value="personal-errands">Personal Errands</option>
                    <option value="urgent-todo">Urgent To-Do</option>
                  </select>
                  <button className='px-4 py-2 bg-primary-blue rounded-md text-white'>New Task</button>
                </div>

                {/* loading */}
                {isLoading.screen2 && (
                  <div className='w-full h-full min-h-[550px] flex flex-col justify-center items-center'>
                    <IC_LOADING className='animate-spin' />
                    <p className='text-[#4F4F4F]'>Loading Task List ...</p>
                  </div>
                )}

                {!isLoading.screen2 && (
                  <div className='flex flex-col min-h-[550px] overflow-y-auto'>
                    {/* chat rooms 1*/}
                    <div className='flex flex-col gap-1'>
                      {/* item 1 */}
                      <div className='flex gap-4 py-[22px] border-b-[0.5px] border-primary-grey items-baseline'>
                        <input type="checkbox" name="check" id="check" />
                        <div className='flex flex-col gap-4 w-full'>
                          <div className='flex gap-4 items-baseline justify-between'>
                            <p className='text-sm font-bold text-primary-dark'>Close Off Case #01290-RODRIGUES,Amigue</p>
                            <p className='text-xs text-indicator-red'>2 Days Left</p>
                            <p className='text-xs text-primary-dark'>01/06/2021 12:19</p>

                          </div>
                          <div className='flex justify-start items-center gap-4'>
                            <IC_CLOCK className='w-[16px] h-[16px]'/>
                            <input type="date" name="date" id="date" className='p-2 rounded-md border border-1 border-[#828282]'/>
                          </div>
                          <div className='flex justify-start items-center gap-4'>
                            <IC_EDIT className='w-[16px] h-[16px]'/>
                            <textarea className='text-primary-dark' name="text" id="text" cols="50" rows="auto">Closing off this case since this application has been cancelled. No one really understand how this case could possibly closed</textarea>
                            {/* <input type="text" className='max-w-[10ch] h-full'/> */}
                          </div>
                        </div>
                        <IC_EXPAND className='w-[10px]'/>
                        <p className='text-primary-dark'>...</p>
                      </div>
                      {/* item 2 */}
                      <div className='flex gap-4 py-[22px] border-b-[0.5px] border-primary-grey items-baseline'>
                        <input type="checkbox" name="check" id="check" />
                        <div className='flex flex-col gap-4 w-full'>
                          <div className='flex gap-4 items-baseline justify-between'>
                            <p className='text-sm font-bold text-primary-dark'>Close Off Case #01290-RODRIGUES,Amigue</p>
                            <p className='text-xs text-indicator-red'>2 Days Left</p>
                            <p className='text-xs text-primary-dark'>01/06/2021 12:19</p>

                          </div>
                          <div className='flex justify-start items-center gap-4'>
                            <IC_CLOCK className='w-[16px] h-[16px]'/>
                            <input type="date" name="date" id="date" className='p-2 rounded-md border border-1 border-[#828282]'/>
                          </div>
                          <div className='flex justify-start items-center gap-4'>
                            <IC_EDIT className='w-[16px] h-[16px]'/>
                            <textarea className='text-primary-dark' name="text" id="text" cols="50" rows="auto">Closing off this case since this application has been cancelled. No one really understand how this case could possibly closed</textarea>
                            {/* <input type="text" className='max-w-[10ch] h-full'/> */}
                          </div>
                        </div>
                        <IC_EXPAND className='w-[10px]'/>
                        <p className='text-primary-dark'>...</p>
                      </div>
                      {/* item 3 */}
                      <div className='flex gap-4 py-[22px] border-b-[0.5px] border-primary-grey items-baseline'>
                        <input type="checkbox" name="check" id="check" />
                        <div className='flex flex-col gap-4 w-full'>
                          <div className='flex gap-4 items-baseline justify-between'>
                            <p className='text-sm font-bold text-primary-dark'>Close Off Case #01290-RODRIGUES,Amigue</p>
                            <p className='text-xs text-indicator-red'>2 Days Left</p>
                            <p className='text-xs text-primary-dark'>01/06/2021 12:19</p>

                          </div>
                          <div className='flex justify-start items-center gap-4'>
                            <IC_CLOCK className='w-[16px] h-[16px]'/>
                            <input type="date" name="date" id="date" className='p-2 rounded-md border border-1 border-[#828282]'/>
                          </div>
                          <div className='flex justify-start items-center gap-4'>
                            <IC_EDIT className='w-[16px] h-[16px]'/>
                            <textarea className='text-primary-dark' name="text" id="text" cols="50" rows="auto">Closing off this case since this application has been cancelled. No one really understand how this case could possibly closed</textarea>
                            {/* <input type="text" className='max-w-[10ch] h-full'/> */}
                          </div>
                        </div>
                        <IC_EXPAND className='w-[10px]'/>
                        <p className='text-primary-dark'>...</p>
                      </div>
                    </div>
                  </div>
                )}
                

                
              </div>
            </div>

            <button onClick={()=>{
              setButtonActive(2)
              setIsLoading({...isLoading, screen2 : true})
              setTimeout(()=>{
                setIsLoading({...isLoading, screen2 : false})
              }, 3000)
            }} className={`w-[60px] h-[60px] bg-primary-white rounded-full flex justify-center items-center ${buttonActive == 'closed' ? 'animate-button-non-active-2' : buttonActive === 1 ? 'animate-button-non-active-2' : buttonActive === 2 ? 'animate-button-active-2' : ''}`}>
              <IC_TASK_REG className={`w-[24.44px] h-[18.89px] ${buttonActive === 2 ? 'animate-button-active-2-color' : 'animate-button-non-active-2-color'}`}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// 'transition duration-1000 -translate-x-[160%] animate-button-non-active'

export default App;
