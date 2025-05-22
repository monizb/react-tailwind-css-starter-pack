import React from 'react';
import PropTypes from 'prop-types';

const hyCard = ({ showAvatars = true, variant = 'profile' }) => {
  if (variant === 'file') {
    return (
      <div data-select-size="false" data-show-add-button="false" data-show-avatars="true" data-state="Hover" data-type="File" className="w-[211.20px] relative inline-flex flex-col justify-start items-start gap-3 group/card">
        <div className="relative">
          <img className="size-[211.20px] rounded-2xl border border-gray-200" src="https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg" />
          <div className="absolute inset-0 rounded-2xl bg-gray-900/80 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 p-3 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div data-heading="true" data-size="md" data-state="Default" data-sub-text="true" data-text="false" data-type="Checkbox" className="size- flex justify-start items-start gap-2">
                  <div className="size- flex justify-start items-start gap-2">
                    <div data-svg-wrapper data-size="md" data-state="Default" data-type="Checkbox" className="relative">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.600098" y="1" width="16" height="16" rx="4" fill="white"/>
                        <rect x="0.600098" y="1" width="16" height="16" rx="4" stroke="#EAECF0"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="size- flex justify-start items-start gap-2">
                  <div data-show-left-icon="false" data-show-right-icon="false" data-size="sm" data-state="Default" data-style="Secondary" data-type="Icon" className="size-7 p-1.5 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-center items-center gap-2 overflow-hidden">
                    <div data-svg-wrapper className="relative">
                      <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_2110_30301)">
                          <path d="M7.2168 7.00001C7.2168 7.15471 7.27826 7.30309 7.38765 7.41248C7.49705 7.52188 7.64542 7.58334 7.80013 7.58334C7.95484 7.58334 8.10321 7.52188 8.21261 7.41248C8.32201 7.30309 8.38346 7.15471 8.38346 7.00001C8.38346 6.8453 8.32201 6.69692 8.21261 6.58753C8.10321 6.47813 7.95484 6.41667 7.80013 6.41667C7.64542 6.41667 7.49705 6.47813 7.38765 6.58753C7.27826 6.69692 7.2168 6.8453 7.2168 7.00001Z" fill="#344054" stroke="#101828" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M7.2168 11.0833C7.2168 11.238 7.27826 11.3864 7.38765 11.4958C7.49705 11.6052 7.64542 11.6667 7.80013 11.6667C7.95484 11.6667 8.10321 11.6052 8.21261 11.4958C8.32201 11.3864 8.38346 11.238 8.38346 11.0833C8.38346 10.9286 8.32201 10.7803 8.21261 10.6709C8.10321 10.5615 7.95484 10.5 7.80013 10.5C7.64542 10.5 7.49705 10.5615 7.38765 10.6709C7.27826 10.7803 7.2168 10.9286 7.2168 11.0833Z" fill="#344054" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M7.2168 2.91666C7.2168 3.07137 7.27826 3.21974 7.38765 3.32914C7.49705 3.43854 7.64542 3.49999 7.80013 3.49999C7.95484 3.49999 8.10321 3.43854 8.21261 3.32914C8.32201 3.21974 8.38346 3.07137 8.38346 2.91666C8.38346 2.76195 8.32201 2.61358 8.21261 2.50418C8.10321 2.39479 7.95484 2.33333 7.80013 2.33333C7.64542 2.33333 7.49705 2.39479 7.38765 2.50418C7.27826 2.61358 7.2168 2.76195 7.2168 2.91666Z" fill="#344054" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_2110_30301">
                            <rect width="14" height="14" fill="white" transform="translate(0.800293)"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-1">
          <div className="size- inline-flex justify-start items-center gap-2">
            <div data-svg-wrapper className="relative">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_2110_30309)">
                  <path d="M10.6001 5.53336H10.6068" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2.6001 4.20001C2.6001 3.66958 2.81081 3.16087 3.18588 2.7858C3.56096 2.41073 4.06966 2.20001 4.6001 2.20001H12.6001C13.1305 2.20001 13.6392 2.41073 14.0143 2.7858C14.3894 3.16087 14.6001 3.66958 14.6001 4.20001V12.2C14.6001 12.7304 14.3894 13.2392 14.0143 13.6142C13.6392 13.9893 13.1305 14.2 12.6001 14.2H4.6001C4.06966 14.2 3.56096 13.9893 3.18588 13.6142C2.81081 13.2392 2.6001 12.7304 2.6001 12.2V4.20001Z" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2.6001 10.8667L5.93343 7.53335C6.5521 6.93802 7.31476 6.93802 7.93343 7.53335L11.2668 10.8667" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.93359 9.53333L10.6003 8.86667C11.2189 8.27133 11.9816 8.27133 12.6003 8.86667L14.6003 10.8667" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_2110_30309">
                    <rect width="16" height="16" fill="white" transform="translate(0.600098 0.200012)"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="justify-start text-gray-900 text-sm font-medium font-['Inter'] leading-snug truncate">Image name will come...</div>
          </div>
          <div className="self-stretch inline-flex justify-start items-center gap-1">
            <div className="size- rounded-sm flex justify-start items-center gap-0.5">
              <div className="justify-start text-gray-500 text-[11px] font-normal font-['Inter'] leading-[18px]">JPEG</div>
            </div>
            <div data-mode="Light" className="size-1.5 relative">
              <div data-svg-wrapper className="left-0 top-0 absolute">
                <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.6001 2.25C4.12468 2.25011 4.55029 2.67559 4.55029 3.2002C4.55019 3.72471 4.12461 4.15029 3.6001 4.15039C3.07549 4.15039 2.65001 3.72478 2.6499 3.2002C2.6499 2.67552 3.07543 2.25 3.6001 2.25Z" fill="#D0D5DD"/>
                </svg>
              </div>
            </div>
            <div className="size- rounded-sm flex justify-start items-center gap-0.5">
              <div className="justify-start text-gray-500 text-[11px] font-normal font-['Inter'] leading-[18px]">184 KB</div>
            </div>
            <div data-mode="Light" className="size-1.5 relative">
              <div data-svg-wrapper className="left-0 top-0 absolute">
                <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.6001 2.25C4.12468 2.25011 4.55029 2.67559 4.55029 3.2002C4.55019 3.72471 4.12461 4.15029 3.6001 4.15039C3.07549 4.15039 2.65001 3.72478 2.6499 3.2002C2.6499 2.67552 3.07543 2.25 3.6001 2.25Z" fill="#D0D5DD"/>
                </svg>
              </div>
            </div>
            <div className="size- rounded-sm flex justify-start items-center gap-0.5">
              <div className="justify-start text-gray-500 text-[11px] font-normal font-['Inter'] leading-[18px]">840 x 520</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'template') {
    return (
      <div className="w-[210.80px] relative inline-flex flex-col justify-start items-start gap-3 group/card">
        <div className="self-stretch h-[189px] p-1 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-center items-center gap-0.5 overflow-hidden transition-all duration-300 group-hover/card:outline group-hover/card:outline-2 group-hover/card:outline-[#8a3ffc]">
          <img className="self-stretch flex-1 rounded-xl" src="https://cleanbeautymarket.com.au/cdn/shop/collections/Bestsellers-Square.jpg?v=1620780426" />
        </div>
        <div className="self-stretch rounded-bl-lg rounded-br-lg flex flex-col justify-start items-start gap-1">
          <div className="self-stretch inline-flex justify-start items-center gap-2">
            <div data-svg-wrapper className="relative">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_2054_7391)">
                  <path d="M10.7998 5.33331H10.8065" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2.7998 4C2.7998 3.46957 3.01052 2.96086 3.38559 2.58579C3.76066 2.21071 4.26937 2 4.7998 2H12.7998C13.3302 2 13.8389 2.21071 14.214 2.58579C14.5891 2.96086 14.7998 3.46957 14.7998 4V12C14.7998 12.5304 14.5891 13.0391 14.214 13.4142C13.8389 13.7893 13.3302 14 12.7998 14H4.7998C4.26937 14 3.76066 13.7893 3.38559 13.4142C3.01052 13.0391 2.7998 12.5304 2.7998 12V4Z" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2.7998 10.6667L6.13314 7.33334C6.7518 6.73801 7.51447 6.73801 8.13314 7.33334L11.4665 10.6667" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.1333 9.33332L10.8 8.66665C11.4186 8.07132 12.1813 8.07132 12.8 8.66665L14.8 10.6667" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_2054_7391">
                    <rect width="16" height="16" fill="white" transform="translate(0.799805)"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex-1 justify-center text-gray-900 text-sm font-medium font-['Inter'] leading-snug truncate">Template name can be longer lorem ipsum...</div>
          </div>
          <div className="self-stretch inline-flex justify-start items-center gap-2">
            <div className="h-4 flex justify-start items-center gap-2">
              <div className="size- flex justify-start items-center gap-1">
                <div className="justify-center text-gray-500 text-[11px] font-normal font-['Inter'] leading-[18px]">12 sizes</div>
              </div>
              <div data-svg-wrapper className="relative">
                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.799805" y="0.5" width="3" height="3" rx="1.5" fill="#D0D5DD"/>
                </svg>
              </div>
              <div className="size- flex justify-start items-center">
                <div data-show-left-icon="false" data-show-right-icon="false" data-size="xs" data-state="Default" data-style="Primary" data-type="Link" className="size- rounded-md flex justify-start items-center gap-0.5 overflow-hidden">
                  <div className="justify-start text-violet-600 text-[11px] font-medium font-['Inter'] leading-[18px]">More</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[210.80px] h-[189px] left-0 top-0 absolute rounded-2xl outline outline-2 outline-gray-500 flex flex-col justify-start items-center overflow-hidden opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
          <div className="self-stretch h-[189px] p-3 opacity-80 rounded-xl" />
          <div className="h-[72px] left-[51px] top-[66px] absolute flex flex-col justify-start items-start">
            <div className="self-stretch flex-1 flex flex-col justify-center items-center gap-2">
              <div data-show-left-icon="false" data-show-right-icon="false" data-size="md (Default)" data-state="Default" data-style="Primary" data-type="Text" className="h-8 px-2.5 py-[3px] bg-violet-600 rounded-lg outline outline-1 outline-offset-[-1px] outline-violet-600 inline-flex justify-center items-center gap-1.5 overflow-hidden">
                <div className="justify-start text-white text-sm font-medium font-['Inter'] leading-snug">Use template</div>
              </div>
            </div>
          </div>
          <div className="size- p-3 left-[159.50px] top-0 absolute inline-flex justify-end items-center">
            <div data-show-left-icon="false" data-show-right-icon="false" data-size="sm" data-state="Default" data-style="Secondary" data-type="Icon" className="size-7 p-1.5 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-center items-center gap-2 overflow-hidden">
              <div data-svg-wrapper className="relative">
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_2085_1065)">
                    <path d="M6.71631 6.99999C6.71631 7.1547 6.77777 7.30307 6.88716 7.41247C6.99656 7.52186 7.14493 7.58332 7.29964 7.58332C7.45435 7.58332 7.60272 7.52186 7.71212 7.41247C7.82152 7.30307 7.88298 7.1547 7.88298 6.99999C7.88298 6.84528 7.82152 6.69691 7.71212 6.58751C7.60272 6.47811 7.45435 6.41666 7.29964 6.41666C7.14493 6.41666 6.99656 6.47811 6.88716 6.58751C6.77777 6.69691 6.71631 6.84528 6.71631 6.99999Z" fill="#344054" stroke="#101828" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.71631 11.0833C6.71631 11.238 6.77777 11.3864 6.88716 11.4958C6.99656 11.6052 7.14493 11.6667 7.29964 11.6667C7.45435 11.6667 7.60272 11.6052 7.71212 11.4958C7.82152 11.3864 7.88298 11.238 7.88298 11.0833C7.88298 10.9286 7.82152 10.7803 7.71212 10.6709C7.60272 10.5615 7.45435 10.5 7.29964 10.5C7.14493 10.5 6.99656 10.5615 6.88716 10.6709C6.77777 10.7803 6.71631 10.9286 6.71631 11.0833Z" fill="#344054" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.71631 2.91668C6.71631 3.07139 6.77777 3.21976 6.88716 3.32916C6.99656 3.43855 7.14493 3.50001 7.29964 3.50001C7.45435 3.50001 7.60272 3.43855 7.71212 3.32916C7.82152 3.21976 7.88298 3.07139 7.88298 2.91668C7.88298 2.76197 7.82152 2.61359 7.71212 2.5042C7.60272 2.3948 7.45435 2.33334 7.29964 2.33334C7.14493 2.33334 6.99656 2.3948 6.88716 2.5042C6.77777 2.61359 6.71631 2.76197 6.71631 2.91668Z" fill="#344054" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_2085_1065">
                      <rect width="14" height="14" fill="white" transform="translate(0.299805)"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div data-select-size="false" data-show-add-button="false" data-show-avatars={showAvatars} data-state="Default" data-type="Workspace" className="w-[254.80px] inline-flex flex-col justify-start items-start group/card">
      <div className="self-stretch px-1 pt-1 pb-4 relative bg-white rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06)] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.10)] flex flex-col justify-center items-start gap-4 overflow-hidden transition-all duration-300 group-hover/card:outline group-hover/card:outline-1 group-hover/card:outline-[#667085]">
        <div className="relative group">
          <img className="self-stretch h-[92px] rounded-xl transition-all duration-300 group-hover:brightness-50" src="https://media.istockphoto.com/id/1181409720/photo/blue-ridge-mountain.jpg?s=612x612&w=0&k=20&c=gOVtCDOz5g0Gt4An8WOCVqlbXwyTKxk8zsEliaiYdC4=" />
          <div className="absolute inset-0 flex items-center justify-center gap-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div data-show-left-icon="false" data-show-right-icon="false" data-size="md (Default)" data-state="Default" data-style="Primary" data-type="Icon" className="size-8 p-1.5 bg-white rounded-tl-lg rounded-bl-lg outline outline-1 outline-offset-[-1px] outline-white inline-flex justify-center items-center gap-2 overflow-hidden">
              <div data-svg-wrapper className="relative">
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_2085_1001)">
                    <path d="M5.6333 4.66667C5.6333 5.37391 5.91425 6.05219 6.41435 6.55229C6.91445 7.05238 7.59272 7.33333 8.29997 7.33333C9.00721 7.33333 9.68549 7.05238 10.1856 6.55229C10.6857 6.05219 10.9666 5.37391 10.9666 4.66667C10.9666 3.95942 10.6857 3.28115 10.1856 2.78105C9.68549 2.28095 9.00721 2 8.29997 2C7.59272 2 6.91445 2.28095 6.41435 2.78105C5.91425 3.28115 5.6333 3.95942 5.6333 4.66667Z" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.9663 12.6667H14.9663" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.9663 10.6667V14.6667" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.2998 14V12.6667C4.2998 11.9594 4.58076 11.2811 5.08085 10.781C5.58095 10.281 6.25923 10 6.96647 10H9.63314" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_2085_1001">
                      <rect width="16" height="16" fill="white" transform="translate(0.299805)"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div data-show-left-icon="false" data-show-right-icon="false" data-size="md (Default)" data-state="Default" data-style="Primary" data-type="Icon" className="size-8 p-1.5 bg-white rounded-tr-lg rounded-br-lg outline outline-1 outline-offset-[-1px] outline-white inline-flex justify-center items-center gap-2 overflow-hidden">
              <div data-svg-wrapper className="relative">
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_2085_992)">
                    <path d="M2.2998 8C2.2998 8.78793 2.455 9.56815 2.75653 10.2961C3.05806 11.0241 3.50001 11.6855 4.05716 12.2426C4.61432 12.7998 5.27575 13.2417 6.0037 13.5433C6.73166 13.8448 7.51187 14 8.2998 14C9.08774 14 9.86795 13.8448 10.5959 13.5433C11.3239 13.2417 11.9853 12.7998 12.5424 12.2426C13.0996 11.6855 13.5416 11.0241 13.8431 10.2961C14.1446 9.56815 14.2998 8.78793 14.2998 8C14.2998 6.4087 13.6677 4.88258 12.5424 3.75736C11.4172 2.63214 9.8911 2 8.2998 2C6.70851 2 5.18238 2.63214 4.05716 3.75736C2.93195 4.88258 2.2998 6.4087 2.2998 8Z" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.2998 6H8.30647" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.6333 8H8.29997V10.6667H8.96663" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_2085_992">
                      <rect width="16" height="16" fill="white" transform="translate(0.299805)"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div data-svg-wrapper className="left-[20px] top-[60px] absolute">
          <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect x="1.5" y="1.5" width="63" height="63" rx="31.5" fill="white"/>
            <rect x="1.5" y="1.5" width="63" height="63" rx="31.5" stroke="#F2F4F7" strokeWidth="3"/>
            <rect x="10.7358" y="13" width="44.5283" height="40" fill="url(#pattern0_2087_2539)"/>
            <defs>
              <pattern id="pattern0_2087_2539" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_2087_2539" transform="matrix(0.000706215 0 0 0.000786163 -0.169492 -0.264151)"/>
              </pattern>
              <image id="image0_2087_2539" width="1920" height="1920" preserveAspectRatio="none" xlinkHref="https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg"/>
            </defs>
          </svg>
        </div>
        <div className="self-stretch px-4 pt-5 rounded-bl-lg rounded-br-lg flex flex-col justify-start items-start gap-1">
          <div className="self-stretch flex flex-col justify-start items-start gap-1">
            <div className="self-stretch justify-center text-gray-900 text-sm font-medium font-['Inter'] leading-snug">Statics Ads</div>
            <div className="justify-center text-gray-500 text-[11px] font-normal font-['Inter'] leading-[18px]">Created 3 months ago</div>
          </div>
        </div>
        {showAvatars && (
          <div className="self-stretch px-4 inline-flex justify-start items-start gap-2">
            <div className="size- flex justify-start items-start">
              <div className="w-5 h-6 relative">
                <div data-svg-wrapper data-placeholder="False" data-size="xs" data-state="Default" data-status-icon="False" data-text="False" className="left-0 top-0 absolute">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect x="1.25" y="1.25" width="25.5" height="25.5" rx="12.75" fill="url(#pattern0_2087_2561)"/>
                    <rect x="1.25" y="1.25" width="25.5" height="25.5" rx="12.75" stroke="white" strokeWidth="1.5"/>
                    <defs>
                      <pattern id="pattern0_2087_2561" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_2087_2561" transform="scale(0.0015625)"/>
                      </pattern>
                      <image id="image0_2087_2561" width="640" height="640" preserveAspectRatio="none" xlinkHref="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUueKMdnTNO_ItCNq3y606v5XXTSbTibol2Q&s"/>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="w-5 h-6 relative">
                <div data-svg-wrapper data-placeholder="False" data-size="xs" data-state="Default" data-status-icon="False" data-text="False" className="left-0 top-0 absolute">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect x="1.25" y="1.25" width="25.5" height="25.5" rx="12.75" fill="url(#pattern0_2087_2563)"/>
                    <rect x="1.25" y="1.25" width="25.5" height="25.5" rx="12.75" stroke="white" strokeWidth="1.5"/>
                    <defs>
                      <pattern id="pattern0_2087_2563" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_2087_2563" transform="scale(0.0015625)"/>
                      </pattern>
                      <image id="image0_2087_2563" width="640" height="640" preserveAspectRatio="none" xlinkHref="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEeRallp1z7XTgI7wS7Kez1AlOoqruX9bKVA&s"/>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="w-5 h-6 relative">
                <div data-svg-wrapper data-placeholder="False" data-size="xs" data-state="Default" data-status-icon="False" data-text="False" className="left-0 top-0 absolute">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect x="1.25" y="1.25" width="25.5" height="25.5" rx="12.75" fill="url(#pattern0_2087_2565)"/>
                    <rect x="1.25" y="1.25" width="25.5" height="25.5" rx="12.75" stroke="white" strokeWidth="1.5"/>
                    <defs>
                      <pattern id="pattern0_2087_2565" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_2087_2565" transform="scale(0.0015625)"/>
                      </pattern>
                      <image id="image0_2087_2565" width="640" height="640" preserveAspectRatio="none" xlinkHref="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb3F5APDToo79RzPrUblyHfN3w4Ol2VAoF3w&s"/>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="size-6 relative bg-[#f1e9ff] rounded-[200px] outline outline-2 outline-white">
                <div className="left-[7px] top-[6px] absolute text-center justify-start text-violet-700 text-[8px] font-medium font-['Inter'] leading-[15px] bg-[#f1e9ff] rounded-full w-[20px] h-[20px] flex items-center justify-center">
                  +5
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

hyCard.propTypes = {
  showAvatars: PropTypes.bool,
  variant: PropTypes.oneOf(['profile', 'selection', 'file'])
};

export default hyCard;