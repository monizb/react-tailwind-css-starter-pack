import React, { useState } from "react";

const Artefact = ({
  isVisible = true,
  width = "w-[1108px]",
  height = "h-[692px]",
  progress = "Brief 1/16",
  onBack = () => {},
  onForward = () => {},
  showSource = true,
  sourceLabel = "Source",
  sourceInput = "Template",
  showSourceDropdown = true,
  show2ndSourceSelect = true,
  source2Placeholder = "Burger Bonanza Special",
  source2Avatar, // image src string
  show2ndAvatar = true,
  assignToLabel = "Assign to",
  assignTo = "Olivia Rhye",
  assignToAvatar,
  createdByLabel = "Created by",
  createdBy = "Phoenix Baker",
  createdByAvatar,
  nameLabel = "Name",
  name = "Rappi_Chicken_Burger",
  nameHint = "Ex. Story ad, Feed ad etc.",
  priorityLabel = "Priority",
  priority = "HIGH",
  priorityType = "Error",
  statusLabel = "Status",
  status = "IN PROGRESS",
  statusType = "Warning",
  startLabel = "Start date",
  startDate = "Jan 5, 2025",
  dueLabel = "Due date",
  dueDate = "Jan 10, 2025",
  summaryLabel = "Summary",
  summary = "Enter description",
  attachmentsLabel = "Attachments",
  attachments = ["https://placehold.co/72x72", "https://placehold.co/72x72", "https://placehold.co/72x72"],
  discussionLabel = "Discussion",
  discussionIcons = true,
  showActions = true,
  showProceed = true,
  onProceed = () => {},
  proceedLabel = "Proceed",
  showPaging = true,
  paging = "1/1",
  ...props
}) => {
  const [discussionValue, setDiscussionValue] = useState("");
  const handleProceed = (e) => {
    e.preventDefault();
    onProceed();
  };

  if (!isVisible) return null;

  return (
    <section
      className={`${width} ${height} inline-flex flex-col justify-center items-start gap-2`}
      {...props}
    >
      <main className="self-stretch flex-1 bg-white rounded-2xl border-l border-r border-t border-gray-200 flex flex-col justify-between items-center overflow-hidden">
        {/* HEADER BAR */}
        <header className="self-stretch flex-1 p-5 flex flex-col justify-start items-start gap-3 overflow-hidden">
          <div className="w-[728px] inline-flex justify-between items-center">
            {/* NAV & PROGRESS */}
            <nav className="flex justify-start items-center gap-1">
              <button
                type="button"
                className="size-7 p-1.5 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-center items-center gap-2 overflow-hidden hover:bg-gray-50 focus:bg-gray-100 cursor-pointer"
                onClick={onBack}
                aria-label="Back"
              >
                <span className="relative">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M8.75 3.5L5.25 7L8.75 10.5" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </button>
              <div className="h-7 px-2 py-[3px] bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-center items-center gap-1.5 overflow-hidden">
                <div className="justify-start text-gray-900 text-xs font-medium font-['Inter'] leading-tight">{progress}</div>
                <span className="relative">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 4.5L6 7.5L9 4.5" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </div>
              <button
                type="button"
                className="size-7 p-1.5 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-center items-center gap-2 overflow-hidden hover:bg-gray-50 focus:bg-gray-100 cursor-pointer"
                onClick={onForward}
                aria-label="Forward"
              >
                <span className="relative">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5.25 3.5L8.75 7L5.25 10.5" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </button>
            </nav>
            {/* SOURCE */}
            {showSource && (
              <div className="flex justify-start items-center gap-1">
                <div className="justify-start text-gray-500 text-[11px] font-medium font-['Inter'] leading-[18px]">{sourceLabel}</div>
                <div className="w-[140px] inline-flex flex-col justify-start items-start">
                  <div className="flex flex-col gap-1.5">
                    <div className="self-stretch h-7 pr-0.5 py-2 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-gray-300 inline-flex justify-start items-center">
                      <div className="flex-1 h-7 pl-2 flex justify-start items-center gap-2">
                        <div className="flex-1 justify-start text-gray-900 text-xs font-medium font-['Inter'] leading-tight">{sourceInput}</div>
                      </div>
                      {showSourceDropdown && (
                        <span className="flex items-center">
                          <span className="size-6 p-1.5 rounded-md flex justify-center items-center gap-2 hover:bg-gray-50 cursor-pointer">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 4.5L6 7.5L9 4.5" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                {show2ndSourceSelect && (
                  <div className="w-[191px] inline-flex flex-col justify-start items-start">
                    <div className="flex flex-col gap-1.5">
                      <div className="h-7 pr-0.5 py-2 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-gray-300 inline-flex justify-start items-center">
                        <div className="h-7 pl-2 flex justify-start items-center gap-2">
                          {show2ndAvatar && source2Avatar && (<span className="flex mr-1"><img src={source2Avatar} width={12} height={12} className="rounded" alt="" /></span>)}
                          <div className="flex-1 justify-start text-gray-900 text-xs font-medium font-['Inter'] leading-tight">{source2Placeholder}</div>
                        </div>
                        <span className="flex items-center">
                          <span className="size-6 p-1.5 rounded-md flex justify-center items-center gap-2 hover:bg-gray-50 cursor-pointer">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 4.5L6 7.5L9 4.5" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          {/* MAIN TWO COLUMN GRID */}
          <div className="self-stretch flex-1 inline-flex justify-start items-start gap-2">
            <section className="flex-1 self-stretch inline-flex flex-col justify-start items-end">
              <div className="self-stretch flex-1 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-100 flex flex-col justify-start items-end overflow-hidden">
                <div className="self-stretch flex-1 inline-flex justify-end items-start">
                  {/* LEFT PANEL */}
                  <main className="flex-1 self-stretch border-r border-gray-100 inline-flex flex-col justify-start items-start">
                    <form className="self-stretch h-[556px] p-4 flex flex-col justify-start items-start gap-3">
                      {/* NAME */}
                      <div className="self-stretch flex flex-col justify-start items-start">
                        <div className="flex flex-col gap-1.5">
                          <div className="justify-start text-gray-500 text-[11px] font-medium font-['Inter'] leading-[18px]">{nameLabel}</div>
                          <div className="self-stretch h-7 pr-0.5 py-2 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-gray-300 flex items-center">
                            <div className="flex-1 h-7 pl-2 flex items-center gap-2">
                              <div className="flex-1 justify-start text-gray-900 text-xs font-medium font-['Inter'] leading-tight">{name}</div>
                            </div>
                          </div>
                        </div>
                        <div className="text-gray-500 text-[11px] font-normal font-['Inter'] leading-[18px]">{nameHint}</div>
                      </div>
                      {/* ASSIGN/CREATED */}
                      <div className="self-stretch inline-flex justify-start items-start gap-3">
                        <div className="flex-1 inline-flex flex-col justify-start items-start">
                          <div className="flex flex-col gap-1.5">
                            <div className="text-gray-500 text-[11px] font-medium font-['Inter'] leading-[18px]">{assignToLabel}</div>
                            <div className="h-7 pr-0.5 py-2 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-gray-300 flex items-center">
                              <div className="flex-1 h-7 pl-2 flex items-center gap-2">
                                {assignToAvatar && <span className="mr-1"><img src={assignToAvatar} width={12} height={12} className="rounded" alt="" /></span>}
                                <div className="flex-1 justify-start text-gray-900 text-xs font-medium font-['Inter'] leading-tight">{assignTo}</div>
                              </div>
                              <span className="flex items-center">
                                <span className="size-6 p-1.5 rounded-md flex justify-center items-center gap-2 hover:bg-gray-50 cursor-pointer">
                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 4.5L6 7.5L9 4.5" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 inline-flex flex-col justify-start items-start">
                          <div className="flex flex-col gap-1.5">
                            <div className="text-gray-500 text-[11px] font-medium font-['Inter'] leading-[18px]">{createdByLabel}</div>
                            <div className="h-7 pr-0.5 py-2 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-gray-300 flex items-center">
                              <div className="flex-1 h-7 pl-2 flex items-center gap-2">
                                {createdByAvatar && <span className="mr-1"><img src={createdByAvatar} width={12} height={12} className="rounded" alt="" /></span>}
                                <div className="flex-1 justify-start text-gray-900 text-xs font-medium font-['Inter'] leading-tight">{createdBy}</div>
                              </div>
                              <span className="flex items-center">
                                <span className="size-6 p-1.5 rounded-md flex justify-center items-center gap-2 hover:bg-gray-50 cursor-pointer">
                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 4.5L6 7.5L9 4.5" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* PRIORITY/STATUS */}
                      <div className="self-stretch inline-flex justify-start items-start gap-3">
                        <div className="flex-1 inline-flex flex-col justify-start items-start">
                          <div className="flex flex-col gap-1.5">
                            <div className="text-gray-500 text-[11px] font-medium font-['Inter'] leading-[18px]">{priorityLabel}</div>
                            <div className="h-7 pr-0.5 py-2 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-gray-300 flex items-center">
                              <div className="flex-1 h-7 pl-2 flex items-center gap-2">
                                <div className={`h-3 px-0.5 rounded-xs ${priorityType === "Error" ? "bg-red-100" : "bg-amber-100"} inline-flex flex-col justify-center items-start gap-2.5`}>
                                  <div className={`flex-1 px-px inline-flex justify-start items-center gap-0.5`}>
                                    <div className={`justify-center ${priorityType === "Error" ? "text-red-700" : "text-gray-900"} text-[8px] font-semibold font-['Inter'] leading-[15px]`}>{priority}</div>
                                  </div>
                                </div>
                              </div>
                              <span className="flex items-center">
                                <span className="size-6 p-1.5 rounded-md flex justify-center items-center gap-2 hover:bg-gray-50 cursor-pointer">
                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 4.5L6 7.5L9 4.5" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 inline-flex flex-col justify-start items-start">
                          <div className="flex flex-col gap-1.5">
                            <div className="text-gray-500 text-[11px] font-medium font-['Inter'] leading-[18px]">{statusLabel}</div>
                            <div className="h-7 pr-0.5 py-2 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-gray-300 flex items-center">
                              <div className="flex-1 h-7 pl-2 flex items-center gap-2">
                                <div className={`h-3 px-0.5 rounded-xs ${statusType === "Warning" ? "bg-amber-100" : "bg-emerald-100"} inline-flex flex-col justify-center items-start gap-2.5`}>
                                  <div className={`flex-1 px-px inline-flex justify-start items-center gap-0.5`}>
                                    <div className={`justify-center text-gray-900 text-[8px] font-semibold font-['Inter'] leading-[15px]`}>{status}</div>
                                  </div>
                                </div>
                              </div>
                              <span className="flex items-center">
                                <span className="size-6 p-1.5 rounded-md flex justify-center items-center gap-2 hover:bg-gray-50 cursor-pointer">
                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 4.5L6 7.5L9 4.5" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* DATES */}
                      <div className="self-stretch inline-flex justify-start items-start gap-3">
                        <div className="flex-1 inline-flex flex-col justify-start items-start">
                          <div className="flex flex-col gap-1.5">
                            <div className="text-gray-500 text-[11px] font-medium font-['Inter'] leading-[18px]">{startLabel}</div>
                            <div className="h-7 pr-0.5 py-2 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-gray-300 flex items-center">
                              <div className="flex-1 h-7 pl-2 flex items-center gap-2">
                                <span className="relative">
                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M2 3.5C2 3.23478 2.10536 2.98043 2.29289 2.79289C2.48043 2.60536 2.73478 2.5 3 2.5H9C9.26522 2.5 9.51957 2.60536 9.70711 2.79289C9.89464 2.98043 10 3.23478 10 3.5V9.5C10 9.76522 9.89464 10.0196 9.70711 10.2071C9.51957 10.3946 9.26522 10.5 9 10.5H3C2.73478 10.5 2.48043 10.3946 2.29289 10.2071C2.10536 10.0196 2 9.76522 2 9.5V3.5Z" stroke="#667085" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8 1.5V3.5" stroke="#667085" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M4 1.5V3.5" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M2 5.5H10" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M5.5 8C5.5 8.13261 5.55268 8.25979 5.64645 8.35355C5.74021 8.44732 5.86739 8.5 6 8.5C6.13261 8.5 6.25979 8.44732 6.35355 8.35355C6.44732 8.25979 6.5 8.13261 6.5 8C6.5 7.86739 6.44732 7.74021 6.35355 7.64645C6.25979 7.55268 6.13261 7.5 6 7.5C5.86739 7.5 5.74021 7.55268 5.64645 7.64645C5.55268 7.74021 5.5 7.86739 5.5 8Z" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                </span>
                                <div className="flex-1 justify-start text-gray-900 text-xs font-medium font-['Inter'] leading-tight">{startDate}</div>
                              </div>
                              <span className="flex items-center">
                                <span className="size-6 p-1.5 rounded-md flex justify-center items-center gap-2 hover:bg-gray-50 cursor-pointer">
                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M3 4.5L6 7.5L9 4.5" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 inline-flex flex-col justify-start items-start">
                          <div className="flex flex-col gap-1.5">
                            <div className="text-gray-500 text-[11px] font-medium font-['Inter'] leading-[18px]">{dueLabel}</div>
                            <div className="h-7 pr-0.5 py-2 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-gray-300 flex items-center">
                              <div className="flex-1 h-7 pl-2 flex items-center gap-2">
                                <span className="relative">
                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M2 3.5C2 3.23478 2.10536 2.98043 2.29289 2.79289C2.48043 2.60536 2.73478 2.5 3 2.5H9C9.26522 2.5 9.51957 2.60536 9.70711 2.79289C9.89464 2.98043 10 3.23478 10 3.5V9.5C10 9.76522 9.89464 10.0196 9.70711 10.2071C9.51957 10.3946 9.26522 10.5 9 10.5H3C2.73478 10.5 2.48043 10.3946 2.29289 10.2071C2.10536 10.0196 2 9.76522 2 9.5V3.5Z" stroke="#667085" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8 1.5V3.5" stroke="#667085" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M4 1.5V3.5" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M2 5.5H10" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M5.5 8C5.5 8.13261 5.55268 8.25979 5.64645 8.35355C5.74021 8.44732 5.86739 8.5 6 8.5C6.13261 8.5 6.25979 8.44732 6.35355 8.35355C6.44732 8.25979 6.5 8.13261 6.5 8C6.5 7.86739 6.44732 7.74021 6.35355 7.64645C6.25979 7.55268 6.13261 7.5 6 7.5C5.86739 7.5 5.74021 7.55268 5.64645 7.64645C5.55268 7.74021 5.5 7.86739 5.5 8Z" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                </span>
                                <div className="flex-1 justify-start text-gray-900 text-xs font-medium font-['Inter'] leading-tight">{dueDate}</div>
                              </div>
                              <span className="flex items-center">
                                <span className="size-6 p-1.5 rounded-md flex justify-center items-center gap-2 hover:bg-gray-50 cursor-pointer">
                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M3 4.5L6 7.5L9 4.5" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* SUMMARY */}
                      <div className="self-stretch inline-flex justify-start items-start gap-3">
                        <div className="flex-1 flex flex-col">
                          <div className="flex flex-col gap-1.5">
                            <div className="text-gray-500 text-[11px] font-medium font-['Inter'] leading-[18px]">{summaryLabel}</div>
                            <div className="self-stretch h-7 pr-0.5 py-2 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-gray-300 flex items-center">
                              <div className="flex-1 h-7 pl-2 flex items-center gap-2">
                                <div className="flex-1 justify-start text-gray-500 text-xs font-normal font-['Inter'] leading-tight">{summary}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ATTACHMENTS */}
                      <div className="self-stretch flex flex-col justify-center items-start gap-1">
                        <div className="self-stretch inline-flex justify-between items-center">
                          <div className="justify-start text-gray-500 text-[11px] font-medium font-['Inter'] leading-[18px]">{attachmentsLabel}</div>
                          <div className="flex items-center gap-1">
                            <span className="size-7 p-1.5 rounded-md flex justify-center items-center gap-2 hover:bg-gray-50 cursor-pointer">
                              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2.91669V11.0834" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M2.91699 7H11.0837" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </span>
                            <span className="size-7 p-1.5 rounded-md flex justify-center items-center gap-2 hover:bg-gray-50 cursor-pointer">
                              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3.20864 2.91669H10.792C10.876 2.94615 10.9521 2.99445 11.0146 3.05789C11.0771 3.12133 11.1242 3.19822 11.1523 3.28268C11.1805 3.36714 11.1889 3.45692 11.177 3.54515C11.1651 3.63338 11.1332 3.71771 11.0836 3.79169L8.16697 7.00002V11.0834L5.83364 9.33335V7.00002L2.91697 3.79169C2.86744 3.71771 2.8355 3.63338 2.8236 3.54515C2.81169 3.45692 2.82014 3.36714 2.84829 3.28268C2.87645 3.19822 2.92356 3.12133 2.98602 3.05789C3.04848 2.99445 3.12463 2.94615 3.20864 2.91669Z" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </span>
                          </div>
                        </div>
                        <div className="self-stretch p-3 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-wrap gap-2 content-start">
                          {attachments.map((src, idx) => (
                            <div key={idx} className="w-20 flex flex-col gap-0.5">
                              <div className="size-20 p-1 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-center items-center gap-2">
                                <img className="flex-1 self-stretch px-[9px] py-[18px] rounded-md" src={src} alt={`attachment-${idx}`} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </form>
                  </main>
                  {/* RIGHT PANEL - DISCUSSION */}
                  <aside className="w-[340px] self-stretch flex flex-col items-start">
                    <div className="self-stretch flex-1 bg-white flex flex-col items-end">
                      <header className="w-[340px] h-10 px-4 bg-white border-b border-gray-100 flex justify-between items-center overflow-hidden">
                        <div className="flex-1 flex justify-start items-center">
                          <span className="text-gray-900 text-sm font-medium font-['Inter'] leading-snug">{discussionLabel}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          {discussionIcons && (
                            <span className="size-7 p-1.5 rounded-md flex justify-center items-center gap-2 hover:bg-gray-50 cursor-pointer">
                              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3.20864 2.91666H10.792C10.876 2.94612 10.9521 2.99442 11.0146 3.05786C11.0771 3.1213 11.1242 3.19819 11.1523 3.28265C11.1805 3.36711 11.1889 3.45689 11.177 3.54512C11.1651 3.63335 11.1332 3.71768 11.0836 3.79166L8.16697 6.99999V11.0833L5.83364 9.33332V6.99999L2.91697 3.79166C2.86744 3.71768 2.8355 3.63335 2.8236 3.54512C2.81169 3.45689 2.82014 3.36711 2.84829 3.28265C2.87645 3.19819 2.92356 3.1213 2.98602 3.05786C3.04848 2.99442 3.12463 2.94612 3.20864 2.91666Z" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </span>
                          )}
                        </div>
                      </header>
                    </div>
                    {/* Editor */}
                    <div className="self-stretch p-2 flex flex-col gap-2">
                      <div className="self-stretch flex flex-col gap-2 overflow-hidden">
                        <section className="self-stretch h-[132px] bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-100 flex flex-col gap-2">
                          <div className="self-stretch p-1 flex gap-0.5 items-start">
                            {[...Array(10)].map((_, i) => (
                              <span key={i} className="size-6 p-1.5 rounded-md flex justify-center items-center gap-2 hover:bg-gray-50 cursor-pointer">
                                {/* Placeholder icon stack, use any generic icons as needed or pass as props */}
                                {/* For simplicity, show SVGs for each placeholder */}
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                  <g>
                                    <rect width="12" height="12" fill="none" />
                                  </g>
                                </svg>
                              </span>
                            ))}
                          </div>
                          <div className="self-stretch flex-1 flex flex-col justify-between">
                            <div className="self-stretch px-3">
                              <input
                                type="text"
                                placeholder="Write a message"
                                value={discussionValue}
                                onChange={(e) => setDiscussionValue(e.target.value)}
                                className="w-full text-gray-500 text-xs font-normal font-['Inter'] leading-[18px] bg-white outline-none"
                              />
                            </div>
                            <div className="self-stretch h-9 px-3 flex justify-between items-start gap-2">
                              <span className="size-7 p-1.5 rounded-md flex justify-center items-center gap-2 hover:bg-gray-50 cursor-pointer">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                  <g><rect width="14" height="14" fill="none" /></g>
                                </svg>
                              </span>
                              <div className="flex justify-end items-center gap-2">
                                {/* Send button (disabled unless value) */}
                                <button
                                  type="button"
                                  className={`size-7 p-1.5 rounded-md outline outline-1 outline-offset-[-1px] outline-gray-300 flex justify-center items-center gap-2 overflow-hidden
                                    ${!discussionValue
                                      ? "bg-gray-300 text-gray-400 cursor-not-allowed"
                                      : "bg-violet-600 text-white hover:bg-violet-700 cursor-pointer"
                                    }`}
                                  disabled={!discussionValue}
                                >
                                  <span className="relative">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                      <g><rect width="14" height="14" fill="none" /></g>
                                    </svg>
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </section>
          </div>
        </header>
        {/* FOOTER ACTIONS */}
        {showActions && (
          <footer className="self-stretch h-11 px-3 bg-white rounded-bl-2xl rounded-br-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-between items-center overflow-hidden">
            <nav className="flex justify-start items-center">
              <button
                type="button"
                className="size-6 p-1.5 rounded-md flex justify-center items-center gap-2 hover:bg-gray-50 cursor-pointer"
                onClick={onBack}
                aria-label="Back"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M7.5 3L4.5 6L7.5 9" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <span className="h-6 py-[3px] rounded-md flex justify-center items-center gap-1.5 overflow-hidden">
                <span className="justify-start text-slate-700 text-[11px] font-medium font-['Inter'] leading-[18px]">{paging}</span>
              </span>
              <button
                type="button"
                className="size-6 p-1.5 rounded-md flex justify-center items-center gap-2 hover:bg-gray-50 cursor-pointer"
                onClick={onForward}
                aria-label="Forward"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4.5 3L7.5 6L4.5 9" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </nav>
            {showProceed && (
              <div className="flex justify-end items-center gap-2">
                <button
                  type="button"
                  className="h-7 px-2 py-[3px] bg-violet-600 rounded-md outline outline-1 outline-offset-[-1px] outline-violet-600 flex justify-center items-center gap-1.5 overflow-hidden text-white text-xs font-medium font-['Inter'] leading-tight hover:bg-violet-700 cursor-pointer"
                  onClick={handleProceed}
                >
                  {proceedLabel}
                </button>
              </div>
            )}
          </footer>
        )}
      </main>
    </section>
  );
};

export default Artefact;