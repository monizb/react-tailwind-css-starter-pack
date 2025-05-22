import React from "react";
import PropTypes from "prop-types";

const Artefact = ({
  briefNumber = "1/16",
  source = "Template",
  name = "Rappi_Chicken_Burger",
  assignedTo = "Olivia Rhye",
  createdBy = "Phoenix Baker",
  priority = "HIGH",
  status = "IN PROGRESS",
  startDate = "Jan 5, 2025",
  dueDate = "Jan 10, 2025",
  summary = "Enter description",
  attachments = [
    { id: 1, url: "https://grist.org/wp-content/uploads/2010/07/ad_7up175baby_463x310.jpg?quality=75&strip=all" },
    { id: 2, url: "https://grist.org/wp-content/uploads/2010/07/ad_7up175baby_463x310.jpg?quality=75&strip=all" },
    { id: 3, url: "https://grist.org/wp-content/uploads/2010/07/ad_7up175baby_463x310.jpg?quality=75&strip=all" },
  ],
}) => (
  <div className="w-[1108px] h-[692px] inline-flex flex-col justify-center items-start gap-2">
    <div className="self-stretch flex-1 bg-white rounded-2xl border-l border-r border-t border-gray-200 flex flex-col justify-between items-center overflow-hidden">
      <div className="self-stretch flex-1 p-5 flex flex-col justify-start items-start gap-3 overflow-hidden">
        <div className="w-[728px] inline-flex justify-between items-center">
          <div className="size- flex justify-start items-center gap-1">
            <div
              data-show-left-icon="false"
              data-show-right-icon="true"
              data-size="sm"
              data-state="Default"
              data-style="Secondary"
              data-type="Icon"
              className="size-7 p-1.5 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-center items-center gap-2 overflow-hidden"
            >
              <div data-svg-wrapper className="relative">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2087_15692)">
                    <path
                      d="M8.75 3.5L5.25 7L8.75 10.5"
                      stroke="#344054"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2087_15692">
                      <rect width="14" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div
              data-show-left-icon="false"
              data-show-right-icon="true"
              data-size="sm"
              data-state="Default"
              data-style="Secondary"
              data-type="Text"
              className="h-7 px-2 py-[3px] bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-center items-center gap-1.5 overflow-hidden"
            >
              <div className="justify-start text-gray-900 text-xs font-medium font-['Inter'] leading-tight">
                Brief {briefNumber}
              </div>
              <div data-svg-wrapper className="relative">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2087_15510)">
                    <path
                      d="M3 4.5L6 7.5L9 4.5"
                      stroke="#344054"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2087_15510">
                      <rect width="12" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div
              data-show-left-icon="false"
              data-show-right-icon="true"
              data-size="sm"
              data-state="Default"
              data-style="Secondary"
              data-type="Icon"
              className="size-7 p-1.5 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-center items-center gap-2 overflow-hidden"
            >
              <div data-svg-wrapper className="relative">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2087_15695)">
                    <path
                      d="M5.25 3.5L8.75 7L5.25 10.5"
                      stroke="#344054"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2087_15695">
                      <rect width="14" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className="size- flex justify-start items-center gap-1">
            <div className="justify-start text-gray-500 text-[11px] font-medium font-['Inter'] leading-[18px]">
              Source
            </div>
            <div
              data-state="Filled"
              className="w-[140px] inline-flex flex-col justify-start items-start"
            >
              <div
                data-arrow="true"
                data-hint="false"
                data-input-box="true"
                data-label="false"
                data-leading-dropdown="false"
                data-leading-options="false"
                data-leading-text="false"
                data-left-icon="false"
                data-placeholder="true"
                data-right-actions="true"
                data-right-icon="false"
                data-size="sm"
                className="self-stretch flex flex-col justify-start items-start gap-1.5"
              >
                <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                  <div className="self-stretch h-7 pr-0.5 py-2 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-gray-300 inline-flex justify-start items-center">
                    <div className="flex-1 h-7 pl-2 flex justify-start items-center gap-2">
                      <div className="flex-1 justify-start text-gray-900 text-xs font-medium font-['Inter'] leading-tight">
                        {source}
                      </div>
                    </div>
                    <div className="size- flex justify-start items-center">
                      <div
                        data-show-left-icon="false"
                        data-show-right-icon="false"
                        data-size="xs"
                        data-state="Default"
                        data-style="Tertiary Grey"
                        data-type="Icon"
                        className="size-6 p-1.5 rounded-md flex justify-center items-center gap-2 overflow-hidden"
                      >
                        <div data-svg-wrapper className="relative">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_2087_15568)">
                              <path
                                d="M3 4.5L6 7.5L9 4.5"
                                stroke="#344054"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_2087_15568">
                                <rect width="12" height="12" fill="white" />
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
          </div>
        </div>
      </div>
      <div className="self-stretch flex-1 inline-flex justify-start items-start gap-2">
        <div className="flex-1 self-stretch inline-flex flex-col justify-start items-end">
          <div className="self-stretch flex-1 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-100 flex flex-col justify-start items-end overflow-hidden">
            <div className="self-stretch flex-1 inline-flex justify-end items-start">
              <div className="flex-1 self-stretch border-r border-gray-100 inline-flex flex-col justify-start items-start">
                <div className="self-stretch h-[556px] p-4 flex flex-col justify-start items-start gap-3">
                  {/* Name Field */}
                  <div
                    data-state="Filled"
                    className="self-stretch flex flex-col justify-start items-start"
                  >
                    <div
                      data-arrow="true"
                      data-hint="true"
                      data-input-box="true"
                      data-label="true"
                      data-leading-dropdown="false"
                      data-leading-options="false"
                      data-leading-text="false"
                      data-left-icon="false"
                      data-placeholder="true"
                      data-right-actions="false"
                      data-right-icon="true"
                      data-size="sm"
                      className="self-stretch flex flex-col justify-start items-start gap-1.5"
                    >
                      <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                        <div className="justify-start text-gray-500 text-[11px] font-medium font-['Inter'] leading-[18px]">
                          Name
                        </div>
                        <div className="self-stretch h-7 pr-0.5 py-2 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-gray-300 inline-flex justify-start items-center">
                          <div className="flex-1 h-7 pl-2 flex justify-start items-center gap-2">
                            <div className="flex-1 justify-start text-gray-900 text-xs font-medium font-['Inter'] leading-tight">
                              {name}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch justify-start text-gray-500 text-[11px] font-normal font-['Inter'] leading-[18px]">
                        Ex. Story ad, Feed ad etc.
                      </div>
                    </div>
                  </div>

                  {/* Assign to and Created by fields */}
                  <div className="self-stretch inline-flex justify-start items-start gap-3">
                    <div
                      data-state="Filled"
                      className="flex-1 inline-flex flex-col justify-start items-start"
                    >
                      <div
                        data-arrow="true"
                        data-hint="false"
                        data-input-box="true"
                        data-label="true"
                        data-leading-dropdown="false"
                        data-leading-options="false"
                        data-leading-text="false"
                        data-left-icon="true"
                        data-placeholder="true"
                        data-right-actions="true"
                        data-right-icon="false"
                        data-size="sm"
                        className="self-stretch flex flex-col justify-start items-start gap-1.5"
                      >
                        <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                          <div className="justify-start text-gray-500 text-[11px] font-medium font-['Inter'] leading-[18px]">
                            Assign to
                          </div>
                          <div className="self-stretch h-7 pr-0.5 py-2 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-gray-300 inline-flex justify-start items-center">
                            <div className="flex-1 h-7 pl-2 flex justify-start items-center gap-2">
                              <div className="flex-1 justify-start text-gray-900 text-xs font-medium font-['Inter'] leading-tight">
                                {assignedTo}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-state="Filled"
                      className="flex-1 inline-flex flex-col justify-start items-start"
                    >
                      <div
                        data-arrow="true"
                        data-hint="false"
                        data-input-box="true"
                        data-label="true"
                        data-leading-dropdown="false"
                        data-leading-options="false"
                        data-leading-text="false"
                        data-left-icon="true"
                        data-placeholder="true"
                        data-right-actions="true"
                        data-right-icon="false"
                        data-size="sm"
                        className="self-stretch flex flex-col justify-start items-start gap-1.5"
                      >
                        <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                          <div className="justify-start text-gray-500 text-[11px] font-medium font-['Inter'] leading-[18px]">
                            Created by
                          </div>
                          <div className="self-stretch h-7 pr-0.5 py-2 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-gray-300 inline-flex justify-start items-center">
                            <div className="flex-1 h-7 pl-2 flex justify-start items-center gap-2">
                              <div className="flex-1 justify-start text-gray-900 text-xs font-medium font-['Inter'] leading-tight">
                                {createdBy}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Priority and Status fields */}
                  <div className="self-stretch inline-flex justify-start items-start gap-3">
                    <div
                      data-state="Filled"
                      className="flex-1 inline-flex flex-col justify-start items-start"
                    >
                      <div
                        data-arrow="true"
                        data-hint="false"
                        data-input-box="true"
                        data-label="true"
                        data-leading-dropdown="false"
                        data-leading-options="false"
                        data-leading-text="false"
                        data-left-icon="true"
                        data-placeholder="false"
                        data-right-actions="true"
                        data-right-icon="false"
                        data-size="sm"
                        className="self-stretch flex flex-col justify-start items-start gap-1.5"
                      >
                        <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                          <div className="justify-start text-gray-500 text-[11px] font-medium font-['Inter'] leading-[18px]">
                            Priority
                          </div>
                          <div className="self-stretch h-7 pr-0.5 py-2 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-gray-300 inline-flex justify-start items-center">
                            <div className="flex-1 h-7 pl-2 flex justify-start items-center gap-2">
                              <div
                                data-left-icon="false"
                                data-size="xsm"
                                data-subtle="Yes"
                                data-type="Error"
                                data-x="false"
                                className="h-3 px-0.5 bg-red-100 rounded-xs inline-flex flex-col justify-center items-start gap-2.5"
                              >
                                <div className="flex-1 px-px inline-flex justify-start items-center gap-0.5">
                                  <div className="justify-center text-red-700 text-[8px] font-semibold font-['Inter'] leading-[15px]">
                                    {priority}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-state="Filled"
                      className="flex-1 inline-flex flex-col justify-start items-start"
                    >
                      <div
                        data-arrow="true"
                        data-hint="false"
                        data-input-box="true"
                        data-label="true"
                        data-leading-dropdown="false"
                        data-leading-options="false"
                        data-leading-text="false"
                        data-left-icon="true"
                        data-placeholder="false"
                        data-right-actions="true"
                        data-right-icon="false"
                        data-size="sm"
                        className="self-stretch flex flex-col justify-start items-start gap-1.5"
                      >
                        <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                          <div className="justify-start text-gray-500 text-[11px] font-medium font-['Inter'] leading-[18px]">
                            Status
                          </div>
                          <div className="self-stretch h-7 pr-0.5 py-2 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-gray-300 inline-flex justify-start items-center">
                            <div className="flex-1 h-7 pl-2 flex justify-start items-center gap-2">
                              <div
                                data-left-icon="false"
                                data-size="xsm"
                                data-subtle="Yes"
                                data-type="Warning"
                                data-x="false"
                                className="h-3 px-0.5 bg-amber-100 rounded-xs inline-flex flex-col justify-center items-start gap-2.5"
                              >
                                <div className="flex-1 px-px inline-flex justify-start items-center gap-0.5">
                                  <div className="justify-center text-gray-900 text-[8px] font-semibold font-['Inter'] leading-[15px]">
                                    {status}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Start date and Due date fields */}
                  <div className="self-stretch inline-flex justify-start items-start gap-3">
                    <div
                      data-state="Filled"
                      className="flex-1 inline-flex flex-col justify-start items-start"
                    >
                      <div
                        data-arrow="true"
                        data-hint="false"
                        data-input-box="true"
                        data-label="true"
                        data-leading-dropdown="false"
                        data-leading-options="false"
                        data-leading-text="false"
                        data-left-icon="true"
                        data-placeholder="true"
                        data-right-actions="true"
                        data-right-icon="false"
                        data-size="sm"
                        className="self-stretch flex flex-col justify-start items-start gap-1.5"
                      >
                        <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                          <div className="justify-start text-gray-500 text-[11px] font-medium font-['Inter'] leading-[18px]">
                            Start date
                          </div>
                          <div className="self-stretch h-7 pr-0.5 py-2 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-gray-300 inline-flex justify-start items-center">
                            <div className="flex-1 h-7 pl-2 flex justify-start items-center gap-2">
                              <div className="flex-1 justify-start text-gray-900 text-xs font-medium font-['Inter'] leading-tight">
                                {startDate}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-state="Filled"
                      className="flex-1 inline-flex flex-col justify-start items-start"
                    >
                      <div
                        data-arrow="true"
                        data-hint="false"
                        data-input-box="true"
                        data-label="true"
                        data-leading-dropdown="false"
                        data-leading-options="false"
                        data-leading-text="false"
                        data-left-icon="true"
                        data-placeholder="true"
                        data-right-actions="true"
                        data-right-icon="false"
                        data-size="sm"
                        className="self-stretch flex flex-col justify-start items-start gap-1.5"
                      >
                        <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                          <div className="justify-start text-gray-500 text-[11px] font-medium font-['Inter'] leading-[18px]">
                            Due date
                          </div>
                          <div className="self-stretch h-7 pr-0.5 py-2 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-gray-300 inline-flex justify-start items-center">
                            <div className="flex-1 h-7 pl-2 flex justify-start items-center gap-2">
                              <div className="flex-1 justify-start text-gray-900 text-xs font-medium font-['Inter'] leading-tight">
                                {dueDate}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Summary field */}
                  <div className="self-stretch inline-flex justify-start items-start gap-3">
                    <div
                      data-state="Default"
                      className="flex-1 inline-flex flex-col justify-start items-start"
                    >
                      <div
                        data-arrow="false"
                        data-hint="false"
                        data-input-box="true"
                        data-label="true"
                        data-leading-dropdown="false"
                        data-leading-options="false"
                        data-leading-text="false"
                        data-left-icon="false"
                        data-placeholder="true"
                        data-right-actions="true"
                        data-right-icon="false"
                        data-size="sm"
                        className="self-stretch flex flex-col justify-start items-start gap-1.5"
                      >
                        <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                          <div className="justify-start text-gray-500 text-[11px] font-medium font-['Inter'] leading-[18px]">
                            Summary
                          </div>
                          <div className="self-stretch h-7 pr-0.5 py-2 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-gray-300 inline-flex justify-start items-center">
                            <div className="flex-1 h-7 pl-2 flex justify-start items-center gap-2">
                              <div className="flex-1 justify-start text-gray-500 text-xs font-normal font-['Inter'] leading-tight">
                                {summary}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Attachments section */}
                  <div className="self-stretch flex flex-col justify-center items-start gap-1">
                    <div className="self-stretch inline-flex justify-between items-center">
                      <div className="justify-start text-gray-500 text-[11px] font-medium font-['Inter'] leading-[18px]">
                        Attachments
                      </div>
                      <div className="size- flex justify-start items-start gap-1">
                        <div
                          data-show-left-icon="false"
                          data-show-right-icon="false"
                          data-size="sm"
                          data-state="Default"
                          data-style="Tertiary Grey"
                          data-type="Icon"
                          className="size-7 p-1.5 rounded-md flex justify-center items-center gap-2 overflow-hidden"
                        >
                          <div data-svg-wrapper className="relative">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_2087_15867)">
                                <path
                                  d="M7 2.91669V11.0834"
                                  stroke="#344054"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M2.91699 7H11.0837"
                                  stroke="#344054"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_2087_15867">
                                  <rect width="14" height="14" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch p-3 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex justify-start items-start gap-2 flex-wrap content-start">
                      {attachments.map((attachment) => (
                        <div
                          key={attachment.id}
                          data-bottom-text="false"
                          data-hover-actions="true"
                          data-more="false"
                          data-size="80x80"
                          data-state="Default"
                          data-top-text="false"
                          className="w-20 inline-flex flex-col justify-start items-start gap-0.5"
                        >
                          <div className="size-20 p-1 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex justify-center items-center gap-2">
                            <img
                              className="flex-1 self-stretch px-[9px] py-[18px] rounded-md"
                              src={attachment.url}
                              alt={`Attachment ${attachment.id}`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Discussion component */}
              <div className="h-[556px]">
                <div className="w-[340px] self-stretch inline-flex flex-col justify-start items-start">
                  <div className="self-stretch flex-1 bg-white flex flex-col justify-start items-end">
                    <div
                      data-filter="true"
                      data-header="Discussion"
                      data-important="false"
                      data-pinned="false"
                      data-settings="false"
                      data-sort="false"
                      className="w-[340px] h-10 px-4 bg-white border-b border-gray-100 inline-flex justify-between items-center overflow-hidden"
                    >
                      <div className="flex-1 flex justify-start items-center">
                        <div className="justify-start text-gray-900 text-sm font-medium font-['Inter'] leading-snug">
                          Discussion
                        </div>
                      </div>
                      <div className="size- flex justify-start items-center gap-1">
                        <div
                          data-show-left-icon="true"
                          data-show-right-icon="false"
                          data-size="sm"
                          data-state="Default"
                          data-style="Tertiary Grey"
                          data-type="Icon"
                          className="size-7 p-1.5 rounded-md flex justify-center items-center gap-2 overflow-hidden"
                        >
                          <div data-svg-wrapper className="relative">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_2087_15790)">
                                <path
                                  d="M3.20864 2.91666H10.792C10.876 2.94612 10.9521 2.99442 11.0146 3.05786C11.0771 3.1213 11.1242 3.19819 11.1523 3.28265C11.1805 3.36711 11.1889 3.45689 11.177 3.54512C11.1651 3.63335 11.1332 3.71768 11.0836 3.79166L8.16697 6.99999V11.0833L5.83364 9.33332V6.99999L2.91697 3.79166C2.86744 3.71768 2.8355 3.63335 2.8236 3.54512C2.81169 3.45689 2.82014 3.36711 2.84829 3.28265C2.87645 3.19819 2.92356 3.1213 2.98602 3.05786C3.04848 2.99442 3.12463 2.94612 3.20864 2.91666Z"
                                  stroke="#344054"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_2087_15790">
                                  <rect width="14" height="14" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch p-2 flex flex-col justify-start items-start gap-2">
                    <div
                      data-attachment="true"
                      data-discard="false"
                      data-rich-text-editor="true"
                      data-send="true"
                      data-state="Default"
                      className="self-stretch flex flex-col justify-start items-start gap-2 overflow-hidden"
                    >
                      <div className="self-stretch h-[132px] bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-100 flex flex-col justify-start items-start gap-2">
                        <div className="self-stretch p-1 inline-flex justify-start items-start gap-0.5">
                          {/* Formatting tools */}
                          {/* ... existing code ... */}
                        </div>
                        <div className="self-stretch flex-1 flex flex-col justify-between items-start">
                          <div className="self-stretch px-3 inline-flex justify-start items-start">
                            <div className="flex-1 justify-start text-gray-500 text-xs font-normal font-['Inter'] leading-[18px]">
                              Write a message
                            </div>
                          </div>
                          <div className="self-stretch h-9 px-3 inline-flex justify-between items-start">
                            <div
                              data-show-left-icon="false"
                              data-show-right-icon="false"
                              data-size="sm"
                              data-state="Default"
                              data-style="Tertiary Grey"
                              data-type="Icon"
                              className="size-7 p-1.5 rounded-md flex justify-center items-center gap-2 overflow-hidden"
                            >
                              <div data-svg-wrapper className="relative">
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clipPath="url(#clip0_2087_16040)">
                                    <path
                                      d="M8.75007 4.08333L4.9584 7.875C4.72634 8.10706 4.59597 8.42181 4.59597 8.75C4.59597 9.07819 4.72634 9.39294 4.9584 9.625C5.19047 9.85706 5.50522 9.98744 5.8334 9.98744C6.16159 9.98744 6.47634 9.85706 6.7084 9.625L10.5001 5.83333C10.9642 5.3692 11.2249 4.73971 11.2249 4.08333C11.2249 3.42696 10.9642 2.79746 10.5001 2.33333C10.0359 1.8692 9.40645 1.60846 8.75007 1.60846C8.09369 1.60846 7.4642 1.8692 7.00007 2.33333L3.2084 6.125C2.51221 6.82119 2.12109 7.76543 2.12109 8.75C2.12109 9.73457 2.51221 10.6788 3.2084 11.375C3.9046 12.0712 4.84884 12.4623 5.8334 12.4623C6.81797 12.4623 7.76221 12.0712 8.4584 11.375L12.2501 7.58333"
                                      stroke="#667085"
                                      strokeWidth="1.2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_2087_16040">
                                      <rect
                                        width="14"
                                        height="14"
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </div>
                            </div>
                            <div className="size- flex justify-end items-start gap-2">
                              <div
                                data-show-left-icon="false"
                                data-show-right-icon="false"
                                data-size="sm"
                                data-state="Disabled"
                                data-style="Primary"
                                data-type="Icon"
                                className="size-7 p-1.5 bg-gray-300 rounded-md outline outline-1 outline-offset-[-1px] outline-gray-300 flex justify-center items-center gap-2 overflow-hidden"
                              >
                                <div data-svg-wrapper className="relative">
                                  <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_2087_16046)">
                                      <path
                                        d="M5.83301 8.16667L12.2497 1.75"
                                        stroke="#98A2B3"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M12.2497 1.75L8.45801 12.25C8.43241 12.3058 8.39132 12.3532 8.33962 12.3864C8.28792 12.4195 8.22778 12.4372 8.16634 12.4372C8.10491 12.4372 8.04476 12.4195 7.99306 12.3864C7.94136 12.3532 7.90027 12.3058 7.87467 12.25L5.83301 8.16667L1.74967 6.125C1.69383 6.09941 1.6465 6.05832 1.61332 6.00661C1.58014 5.95491 1.5625 5.89477 1.5625 5.83333C1.5625 5.7719 1.58014 5.71176 1.61332 5.66005C1.6465 5.60835 1.69383 5.56726 1.74967 5.54167L12.2497 1.75Z"
                                        stroke="#98A2B3"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_2087_16046">
                                        <rect
                                          width="14"
                                          height="14"
                                          fill="white"
                                        />
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div
        data-use-case="Only actions"
        className="self-stretch h-11 px-3 bg-white rounded-bl-2xl rounded-br-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex justify-between items-center overflow-hidden"
      >
        <div className="size- flex justify-start items-center">
          <div
            data-show-left-icon="false"
            data-show-right-icon="false"
            data-size="xs"
            data-state="Default"
            data-style="Tertiary Grey"
            data-type="Icon"
            className="size-6 p-1.5 rounded-md flex justify-center items-center gap-2 overflow-hidden"
          >
            <div data-svg-wrapper className="relative">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2087_15647)">
                  <path
                    d="M7.5 3L4.5 6L7.5 9"
                    stroke="#344054"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2087_15647">
                    <rect width="12" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div
            data-show-left-icon="false"
            data-show-right-icon="false"
            data-size="xs"
            data-state="Default"
            data-style="Tertiary Grey"
            data-type="Text"
            className="h-6 py-[3px] rounded-md flex justify-center items-center gap-1.5 overflow-hidden"
          >
            <div className="justify-start text-slate-700 text-[11px] font-medium font-['Inter'] leading-[18px]">
              1/1
            </div>
          </div>
          <div
            data-show-left-icon="false"
            data-show-right-icon="false"
            data-size="xs"
            data-state="Default"
            data-style="Tertiary Grey"
            data-type="Icon"
            className="size-6 p-1.5 rounded-md flex justify-center items-center gap-2 overflow-hidden"
          >
            <div data-svg-wrapper className="relative">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2087_15655)">
                  <path
                    d="M4.5 3L7.5 6L4.5 9"
                    stroke="#344054"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2087_15655">
                    <rect width="12" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="size- flex justify-end items-center gap-2">
          <div
            data-show-left-icon="false"
            data-show-right-icon="false"
            data-size="sm"
            data-state="Default"
            data-style="Primary"
            data-type="Text"
            className="h-7 px-2 py-[3px] bg-violet-600 rounded-md outline outline-1 outline-offset-[-1px] outline-violet-600 flex justify-center items-center gap-1.5 overflow-hidden"
          >
            <div className="justify-start text-white text-xs font-medium font-['Inter'] leading-tight">
              Proceed
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Artefact.propTypes = {
  briefNumber: PropTypes.string,
  source: PropTypes.string,
  name: PropTypes.string,
  assignedTo: PropTypes.string,
  createdBy: PropTypes.string,
  priority: PropTypes.string,
  status: PropTypes.string,
  startDate: PropTypes.string,
  dueDate: PropTypes.string,
  summary: PropTypes.string,
  attachments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

export default Artefact;
