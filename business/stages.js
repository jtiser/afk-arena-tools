const stages = [
  { name: "1-1" },
  { name: "1-2" },
  { name: "1-3" },
  { name: "1-4" },
  { name: "1-5" },
  { name: "1-6" },
  { name: "1-7" },
  { name: "1-8" },
  { name: "1-9" },
  { name: "1-10" },
  { name: "1-11" },
  { name: "1-12" },
  { name: "2-1" },
  { name: "2-2" },
  { name: "2-3" },
  { name: "2-4" },
  { name: "2-5" },
  { name: "2-6" },
  { name: "2-7" },
  { name: "2-8" },
  { name: "2-9" },
  { name: "2-10" },
  { name: "2-11" },
  { name: "2-12" },
  { name: "2-13" },
  { name: "2-14" },
  { name: "2-15" },
  { name: "2-16" },
  { name: "2-17" },
  { name: "2-18" },
  { name: "2-19" },
  { name: "2-20" },
  { name: "2-21" },
  { name: "2-22" },
  { name: "2-23" },
  { name: "2-24" },
  { name: "2-25" },
  { name: "2-26" },
  { name: "2-27" },
  { name: "2-28" },
  { name: "3-1" },
  { name: "3-2" },
  { name: "3-3" },
  { name: "3-4" },
  { name: "3-5" },
  { name: "3-6" },
  { name: "3-7" },
  { name: "3-8" },
  { name: "3-9" },
  { name: "3-10" },
  { name: "3-11" },
  { name: "3-12" },
  { name: "3-13" },
  { name: "3-14" },
  { name: "3-15" },
  { name: "3-16" },
  { name: "3-17" },
  { name: "3-18" },
  { name: "3-19" },
  { name: "3-20" },
  { name: "3-21" },
  { name: "3-22" },
  { name: "3-23" },
  { name: "3-24" },
  { name: "3-25" },
  { name: "3-26" },
  { name: "3-27" },
  { name: "3-28" },
  { name: "3-29" },
  { name: "3-30" },
  { name: "3-31" },
  { name: "3-32" },
  { name: "3-33" },
  { name: "3-34" },
  { name: "3-35" },
  { name: "3-36" },
  { name: "4-1" },
  { name: "4-2" },
  { name: "4-3" },
  { name: "4-4" },
  { name: "4-5" },
  { name: "4-6" },
  { name: "4-7" },
  { name: "4-8" },
  { name: "4-9" },
  { name: "4-10" },
  { name: "4-11" },
  { name: "4-12" },
  { name: "4-13" },
  { name: "4-14" },
  { name: "4-15" },
  { name: "4-16" },
  { name: "4-17" },
  { name: "4-18" },
  { name: "4-19" },
  { name: "4-20" },
  { name: "4-21" },
  { name: "4-22" },
  { name: "4-23" },
  { name: "4-24" },
  { name: "4-25" },
  { name: "4-26" },
  { name: "4-27" },
  { name: "4-28" },
  { name: "4-29" },
  { name: "4-30" },
  { name: "4-31" },
  { name: "4-32" },
  { name: "4-33" },
  { name: "4-34" },
  { name: "4-35" },
  { name: "4-36" },
  { name: "5-1" },
  { name: "5-2" },
  { name: "5-3" },
  { name: "5-4" },
  { name: "5-5" },
  { name: "5-6" },
  { name: "5-7" },
  { name: "5-8" },
  { name: "5-9" },
  { name: "5-10" },
  { name: "5-11" },
  { name: "5-12" },
  { name: "5-13" },
  { name: "5-14" },
  { name: "5-15" },
  { name: "5-16" },
  { name: "5-17" },
  { name: "5-18" },
  { name: "5-19" },
  { name: "5-20" },
  { name: "5-21" },
  { name: "5-22" },
  { name: "5-23" },
  { name: "5-24" },
  { name: "5-25" },
  { name: "5-26" },
  { name: "5-27" },
  { name: "5-28" },
  { name: "5-29" },
  { name: "5-30" },
  { name: "5-31" },
  { name: "5-32" },
  { name: "5-33" },
  { name: "5-34" },
  { name: "5-35" },
  { name: "5-36" },
  { name: "5-37" },
  { name: "5-38" },
  { name: "5-39" },
  { name: "5-40" },
  { name: "6-1" },
  { name: "6-2" },
  { name: "6-3" },
  { name: "6-4" },
  { name: "6-5" },
  { name: "6-6" },
  { name: "6-7" },
  { name: "6-8" },
  { name: "6-9" },
  { name: "6-10" },
  { name: "6-11" },
  { name: "6-12" },
  { name: "6-13" },
  { name: "6-14" },
  { name: "6-15" },
  { name: "6-16" },
  { name: "6-17" },
  { name: "6-18" },
  { name: "6-19" },
  { name: "6-20" },
  { name: "6-21" },
  { name: "6-22" },
  { name: "6-23" },
  { name: "6-24" },
  { name: "6-25" },
  { name: "6-26" },
  { name: "6-27" },
  { name: "6-28" },
  { name: "6-29" },
  { name: "6-30" },
  { name: "6-31" },
  { name: "6-32" },
  { name: "6-33" },
  { name: "6-34" },
  { name: "6-35" },
  { name: "6-36" },
  { name: "6-37" },
  { name: "6-38" },
  { name: "6-39" },
  { name: "6-40" },
  { name: "7-1" },
  { name: "7-2" },
  { name: "7-3" },
  { name: "7-4" },
  { name: "7-5" },
  { name: "7-6" },
  { name: "7-7" },
  { name: "7-8" },
  { name: "7-9" },
  { name: "7-10" },
  { name: "7-11" },
  { name: "7-12" },
  { name: "7-13" },
  { name: "7-14" },
  { name: "7-15" },
  { name: "7-16" },
  { name: "7-17" },
  { name: "7-18" },
  { name: "7-19" },
  { name: "7-20" },
  { name: "7-21" },
  { name: "7-22" },
  { name: "7-23" },
  { name: "7-24" },
  { name: "7-25" },
  { name: "7-26" },
  { name: "7-27" },
  { name: "7-28" },
  { name: "7-29" },
  { name: "7-30" },
  { name: "7-31" },
  { name: "7-32" },
  { name: "7-33" },
  { name: "7-34" },
  { name: "7-35" },
  { name: "7-36" },
  { name: "7-37" },
  { name: "7-38" },
  { name: "7-39" },
  { name: "7-40" },
  { name: "8-1" },
  { name: "8-2" },
  { name: "8-3" },
  { name: "8-4" },
  { name: "8-5" },
  { name: "8-6" },
  { name: "8-7" },
  { name: "8-8" },
  { name: "8-9" },
  { name: "8-10" },
  { name: "8-11" },
  { name: "8-12" },
  { name: "8-13" },
  { name: "8-14" },
  { name: "8-15" },
  { name: "8-16" },
  { name: "8-17" },
  { name: "8-18" },
  { name: "8-19" },
  { name: "8-20" },
  { name: "8-21" },
  { name: "8-22" },
  { name: "8-23" },
  { name: "8-24" },
  { name: "8-25" },
  { name: "8-26" },
  { name: "8-27" },
  { name: "8-28" },
  { name: "8-29" },
  { name: "8-30" },
  { name: "8-31" },
  { name: "8-32" },
  { name: "8-33" },
  { name: "8-34" },
  { name: "8-35" },
  { name: "8-36" },
  { name: "8-37" },
  { name: "8-38" },
  { name: "8-39" },
  { name: "8-40" },
  { name: "9-1" },
  { name: "9-2" },
  { name: "9-3" },
  { name: "9-4" },
  { name: "9-5" },
  { name: "9-6" },
  { name: "9-7" },
  { name: "9-8" },
  { name: "9-9" },
  { name: "9-10" },
  { name: "9-11" },
  { name: "9-12" },
  { name: "9-13" },
  { name: "9-14" },
  { name: "9-15" },
  { name: "9-16" },
  { name: "9-17" },
  { name: "9-18" },
  { name: "9-19" },
  { name: "9-20" },
  { name: "9-21" },
  { name: "9-22" },
  { name: "9-23" },
  { name: "9-24" },
  { name: "9-25" },
  { name: "9-26" },
  { name: "9-27" },
  { name: "9-28" },
  { name: "9-29" },
  { name: "9-30" },
  { name: "9-31" },
  { name: "9-32" },
  { name: "9-33" },
  { name: "9-34" },
  { name: "9-35" },
  { name: "9-36" },
  { name: "9-37" },
  { name: "9-38" },
  { name: "9-39" },
  { name: "9-40" },
  { name: "10-1" },
  { name: "10-2" },
  { name: "10-3" },
  { name: "10-4" },
  { name: "10-5" },
  { name: "10-6" },
  { name: "10-7" },
  { name: "10-8" },
  { name: "10-9" },
  { name: "10-10" },
  { name: "10-11" },
  { name: "10-12" },
  { name: "10-13" },
  { name: "10-14" },
  { name: "10-15" },
  { name: "10-16" },
  { name: "10-17" },
  { name: "10-18" },
  { name: "10-19" },
  { name: "10-20" },
  { name: "10-21" },
  { name: "10-22" },
  { name: "10-23" },
  { name: "10-24" },
  { name: "10-25" },
  { name: "10-26" },
  { name: "10-27" },
  { name: "10-28" },
  { name: "10-29" },
  { name: "10-30" },
  { name: "10-31" },
  { name: "10-32" },
  { name: "10-33" },
  { name: "10-34" },
  { name: "10-35" },
  { name: "10-36" },
  { name: "10-37" },
  { name: "10-38" },
  { name: "10-39" },
  { name: "10-40" },
  { name: "11-1" },
  { name: "11-2" },
  { name: "11-3" },
  { name: "11-4" },
  { name: "11-5" },
  { name: "11-6" },
  { name: "11-7" },
  { name: "11-8" },
  { name: "11-9" },
  { name: "11-10" },
  { name: "11-11" },
  { name: "11-12" },
  { name: "11-13" },
  { name: "11-14" },
  { name: "11-15" },
  { name: "11-16" },
  { name: "11-17" },
  { name: "11-18" },
  { name: "11-19" },
  { name: "11-20" },
  { name: "11-21" },
  { name: "11-22" },
  { name: "11-23" },
  { name: "11-24" },
  { name: "11-25" },
  { name: "11-26" },
  { name: "11-27" },
  { name: "11-28" },
  { name: "11-29" },
  { name: "11-30" },
  { name: "11-31" },
  { name: "11-32" },
  { name: "11-33" },
  { name: "11-34" },
  { name: "11-35" },
  { name: "11-36" },
  { name: "11-37" },
  { name: "11-38" },
  { name: "11-39" },
  { name: "11-40" },
  { name: "12-1" },
  { name: "12-2" },
  { name: "12-3" },
  { name: "12-4" },
  { name: "12-5" },
  { name: "12-6" },
  { name: "12-7" },
  { name: "12-8" },
  { name: "12-9" },
  { name: "12-10" },
  { name: "12-11" },
  { name: "12-12" },
  { name: "12-13" },
  { name: "12-14" },
  { name: "12-15" },
  { name: "12-16" },
  { name: "12-17" },
  { name: "12-18" },
  { name: "12-19" },
  { name: "12-20" },
  { name: "12-21" },
  { name: "12-22" },
  { name: "12-23" },
  { name: "12-24" },
  { name: "12-25" },
  { name: "12-26" },
  { name: "12-27" },
  { name: "12-28" },
  { name: "12-29" },
  { name: "12-30" },
  { name: "12-31" },
  { name: "12-32" },
  { name: "12-33" },
  { name: "12-34" },
  { name: "12-35" },
  { name: "12-36" },
  { name: "12-37" },
  { name: "12-38" },
  { name: "12-39" },
  { name: "12-40" },
  { name: "13-1" },
  { name: "13-2" },
  { name: "13-3" },
  { name: "13-4" },
  { name: "13-5" },
  { name: "13-6" },
  { name: "13-7" },
  { name: "13-8" },
  { name: "13-9" },
  { name: "13-10" },
  { name: "13-11" },
  { name: "13-12" },
  { name: "13-13" },
  { name: "13-14" },
  { name: "13-15" },
  { name: "13-16" },
  { name: "13-17" },
  { name: "13-18" },
  { name: "13-19" },
  { name: "13-20" },
  { name: "13-21" },
  { name: "13-22" },
  { name: "13-23" },
  { name: "13-24" },
  { name: "13-25" },
  { name: "13-26" },
  { name: "13-27" },
  { name: "13-28" },
  { name: "13-29" },
  { name: "13-30" },
  { name: "13-31" },
  { name: "13-32" },
  { name: "13-33" },
  { name: "13-34" },
  { name: "13-35" },
  { name: "13-36" },
  { name: "13-37" },
  { name: "13-38" },
  { name: "13-39" },
  { name: "13-40" },
  { name: "14-1" },
  { name: "14-2" },
  { name: "14-3" },
  { name: "14-4" },
  { name: "14-5" },
  { name: "14-6" },
  { name: "14-7" },
  { name: "14-8" },
  { name: "14-9" },
  { name: "14-10" },
  { name: "14-11" },
  { name: "14-12" },
  { name: "14-13" },
  { name: "14-14" },
  { name: "14-15" },
  { name: "14-16" },
  { name: "14-17" },
  { name: "14-18" },
  { name: "14-19" },
  { name: "14-20" },
  { name: "14-21" },
  { name: "14-22" },
  { name: "14-23" },
  { name: "14-24" },
  { name: "14-25" },
  { name: "14-26" },
  { name: "14-27" },
  { name: "14-28" },
  { name: "14-29" },
  { name: "14-30" },
  { name: "14-31" },
  { name: "14-32" },
  { name: "14-33" },
  { name: "14-34" },
  { name: "14-35" },
  { name: "14-36" },
  { name: "14-37" },
  { name: "14-38" },
  { name: "14-39" },
  { name: "14-40" },
  { name: "15-1" },
  { name: "15-2" },
  { name: "15-3" },
  { name: "15-4" },
  { name: "15-5" },
  { name: "15-6" },
  { name: "15-7" },
  { name: "15-8" },
  { name: "15-9" },
  { name: "15-10" },
  { name: "15-11" },
  { name: "15-12" },
  { name: "15-13" },
  { name: "15-14" },
  { name: "15-15" },
  { name: "15-16" },
  { name: "15-17" },
  { name: "15-18" },
  { name: "15-19" },
  { name: "15-20" },
  { name: "15-21" },
  { name: "15-22" },
  { name: "15-23" },
  { name: "15-24" },
  { name: "15-25" },
  { name: "15-26" },
  { name: "15-27" },
  { name: "15-28" },
  { name: "15-29" },
  { name: "15-30" },
  { name: "15-31" },
  { name: "15-32" },
  { name: "15-33" },
  { name: "15-34" },
  { name: "15-35" },
  { name: "15-36" },
  { name: "15-37" },
  { name: "15-38" },
  { name: "15-39" },
  { name: "15-40" },
  { name: "16-1" },
  { name: "16-2" },
  { name: "16-3" },
  { name: "16-4" },
  { name: "16-5" },
  { name: "16-6" },
  { name: "16-7" },
  { name: "16-8" },
  { name: "16-9" },
  { name: "16-10" },
  { name: "16-11" },
  { name: "16-12" },
  { name: "16-13" },
  { name: "16-14" },
  { name: "16-15" },
  { name: "16-16" },
  { name: "16-17" },
  { name: "16-18" },
  { name: "16-19" },
  { name: "16-20" },
  { name: "16-21" },
  { name: "16-22" },
  { name: "16-23" },
  { name: "16-24" },
  { name: "16-25" },
  { name: "16-26" },
  { name: "16-27" },
  { name: "16-28" },
  { name: "16-29" },
  { name: "16-30" },
  { name: "16-31" },
  { name: "16-32" },
  { name: "16-33" },
  { name: "16-34" },
  { name: "16-35" },
  { name: "16-36" },
  { name: "16-37" },
  { name: "16-38" },
  { name: "16-39" },
  { name: "16-40" },
  { name: "17-1" },
  { name: "17-2" },
  { name: "17-3" },
  { name: "17-4" },
  { name: "17-5" },
  { name: "17-6" },
  { name: "17-7" },
  { name: "17-8" },
  { name: "17-9" },
  { name: "17-10" },
  { name: "17-11" },
  { name: "17-12" },
  { name: "17-13" },
  { name: "17-14" },
  { name: "17-15" },
  { name: "17-16" },
  { name: "17-17" },
  { name: "17-18" },
  { name: "17-19" },
  { name: "17-20" },
  { name: "17-21" },
  { name: "17-22" },
  { name: "17-23" },
  { name: "17-24" },
  { name: "17-25" },
  { name: "17-26" },
  { name: "17-27" },
  { name: "17-28" },
  { name: "17-29" },
  { name: "17-30" },
  { name: "17-31" },
  { name: "17-32" },
  { name: "17-33" },
  { name: "17-34" },
  { name: "17-35" },
  { name: "17-36" },
  { name: "17-37" },
  { name: "17-38" },
  { name: "17-39" },
  { name: "17-40" },
  { name: "18-1" },
  { name: "18-2" },
  { name: "18-3" },
  { name: "18-4" },
  { name: "18-5" },
  { name: "18-6" },
  { name: "18-7" },
  { name: "18-8" },
  { name: "18-9" },
  { name: "18-10" },
  { name: "18-11" },
  { name: "18-12" },
  { name: "18-13" },
  { name: "18-14" },
  { name: "18-15" },
  { name: "18-16" },
  { name: "18-17" },
  { name: "18-18" },
  { name: "18-19" },
  { name: "18-20" },
  { name: "18-21" },
  { name: "18-22" },
  { name: "18-23" },
  { name: "18-24" },
  { name: "18-25" },
  { name: "18-26" },
  { name: "18-27" },
  { name: "18-28" },
  { name: "18-29" },
  { name: "18-30" },
  { name: "18-31" },
  { name: "18-32" },
  { name: "18-33" },
  { name: "18-34" },
  { name: "18-35" },
  { name: "18-36" },
  { name: "18-37" },
  { name: "18-38" },
  { name: "18-39" },
  { name: "18-40" },
  { name: "19-1" },
  { name: "19-2" },
  { name: "19-3" },
  { name: "19-4" },
  { name: "19-5" },
  { name: "19-6" },
  { name: "19-7" },
  { name: "19-8" },
  { name: "19-9" },
  { name: "19-10" },
  { name: "19-11" },
  { name: "19-12" },
  { name: "19-13" },
  { name: "19-14" },
  { name: "19-15" },
  { name: "19-16" },
  { name: "19-17" },
  { name: "19-18" },
  { name: "19-19" },
  { name: "19-20" },
  { name: "19-21" },
  { name: "19-22" },
  { name: "19-23" },
  { name: "19-24" },
  { name: "19-25" },
  { name: "19-26" },
  { name: "19-27" },
  { name: "19-28" },
  { name: "19-29" },
  { name: "19-30" },
  { name: "19-31" },
  { name: "19-32" },
  { name: "19-33" },
  { name: "19-34" },
  { name: "19-35" },
  { name: "19-36" },
  { name: "19-37" },
  { name: "19-38" },
  { name: "19-39" },
  { name: "19-40" },
  { name: "20-1" },
  { name: "20-2" },
  { name: "20-3" },
  { name: "20-4" },
  { name: "20-5" },
  { name: "20-6" },
  { name: "20-7" },
  { name: "20-8" },
  { name: "20-9" },
  { name: "20-10" },
  { name: "20-11" },
  { name: "20-12" },
  { name: "20-13" },
  { name: "20-14" },
  { name: "20-15" },
  { name: "20-16" },
  { name: "20-17" },
  { name: "20-18" },
  { name: "20-19" },
  { name: "20-20" },
  { name: "20-21" },
  { name: "20-22" },
  { name: "20-23" },
  { name: "20-24" },
  { name: "20-25" },
  { name: "20-26" },
  { name: "20-27" },
  { name: "20-28" },
  { name: "20-29" },
  { name: "20-30" },
  { name: "20-31" },
  { name: "20-32" },
  { name: "20-33" },
  { name: "20-34" },
  { name: "20-35" },
  { name: "20-36" },
  { name: "20-37" },
  { name: "20-38" },
  { name: "20-39" },
  { name: "20-40" },
  { name: "20-41" },
  { name: "20-42" },
  { name: "20-43" },
  { name: "20-44" },
  { name: "20-45" },
  { name: "20-46" },
  { name: "20-47" },
  { name: "20-48" },
  { name: "20-49" },
  { name: "20-50" },
  { name: "20-51" },
  { name: "20-52" },
  { name: "20-53" },
  { name: "20-54" },
  { name: "20-55" },
  { name: "20-56" },
  { name: "20-57" },
  { name: "20-58" },
  { name: "20-59" },
  { name: "20-60" },
  { name: "21-1" },
  { name: "21-2" },
  { name: "21-3" },
  { name: "21-4" },
  { name: "21-5" },
  { name: "21-6" },
  { name: "21-7" },
  { name: "21-8" },
  { name: "21-9" },
  { name: "21-10" },
  { name: "21-11" },
  { name: "21-12" },
  { name: "21-13" },
  { name: "21-14" },
  { name: "21-15" },
  { name: "21-16" },
  { name: "21-17" },
  { name: "21-18" },
  { name: "21-19" },
  { name: "21-20" },
  { name: "21-21" },
  { name: "21-22" },
  { name: "21-23" },
  { name: "21-24" },
  { name: "21-25" },
  { name: "21-26" },
  { name: "21-27" },
  { name: "21-28" },
  { name: "21-29" },
  { name: "21-30" },
  { name: "21-31" },
  { name: "21-32" },
  { name: "21-33" },
  { name: "21-34" },
  { name: "21-35" },
  { name: "21-36" },
  { name: "21-37" },
  { name: "21-38" },
  { name: "21-39" },
  { name: "21-40" },
  { name: "21-41" },
  { name: "21-42" },
  { name: "21-43" },
  { name: "21-44" },
  { name: "21-45" },
  { name: "21-46" },
  { name: "21-47" },
  { name: "21-48" },
  { name: "21-49" },
  { name: "21-50" },
  { name: "21-51" },
  { name: "21-52" },
  { name: "21-53" },
  { name: "21-54" },
  { name: "21-55" },
  { name: "21-56" },
  { name: "21-57" },
  { name: "21-58" },
  { name: "21-59" },
  { name: "21-60" },
  { name: "22-1" },
  { name: "22-2" },
  { name: "22-3" },
  { name: "22-4" },
  { name: "22-5" },
  { name: "22-6" },
  { name: "22-7" },
  { name: "22-8" },
  { name: "22-9" },
  { name: "22-10" },
  { name: "22-11" },
  { name: "22-12" },
  { name: "22-13" },
  { name: "22-14" },
  { name: "22-15" },
  { name: "22-16" },
  { name: "22-17" },
  { name: "22-18" },
  { name: "22-19" },
  { name: "22-20" },
  { name: "22-21" },
  { name: "22-22" },
  { name: "22-23" },
  { name: "22-24" },
  { name: "22-25" },
  { name: "22-26" },
  { name: "22-27" },
  { name: "22-28" },
  { name: "22-29" },
  { name: "22-30" },
  { name: "22-31" },
  { name: "22-32" },
  { name: "22-33" },
  { name: "22-34" },
  { name: "22-35" },
  { name: "22-36" },
  { name: "22-37" },
  { name: "22-38" },
  { name: "22-39" },
  { name: "22-40" },
  { name: "22-41" },
  { name: "22-42" },
  { name: "22-43" },
  { name: "22-44" },
  { name: "22-45" },
  { name: "22-46" },
  { name: "22-47" },
  { name: "22-48" },
  { name: "22-49" },
  { name: "22-50" },
  { name: "22-51" },
  { name: "22-52" },
  { name: "22-53" },
  { name: "22-54" },
  { name: "22-55" },
  { name: "22-56" },
  { name: "22-57" },
  { name: "22-58" },
  { name: "22-59" },
  { name: "22-60" },
  { name: "23-1" },
  { name: "23-2" },
  { name: "23-3" },
  { name: "23-4" },
  { name: "23-5" },
  { name: "23-6" },
  { name: "23-7" },
  { name: "23-8" },
  { name: "23-9" },
  { name: "23-10" },
  { name: "23-11" },
  { name: "23-12" },
  { name: "23-13" },
  { name: "23-14" },
  { name: "23-15" },
  { name: "23-16" },
  { name: "23-17" },
  { name: "23-18" },
  { name: "23-19" },
  { name: "23-20" },
  { name: "23-21" },
  { name: "23-22" },
  { name: "23-23" },
  { name: "23-24" },
  { name: "23-25" },
  { name: "23-26" },
  { name: "23-27" },
  { name: "23-28" },
  { name: "23-29" },
  { name: "23-30" },
  { name: "23-31" },
  { name: "23-32" },
  { name: "23-33" },
  { name: "23-34" },
  { name: "23-35" },
  { name: "23-36" },
  { name: "23-37" },
  { name: "23-38" },
  { name: "23-39" },
  { name: "23-40" },
  { name: "23-41" },
  { name: "23-42" },
  { name: "23-43" },
  { name: "23-44" },
  { name: "23-45" },
  { name: "23-46" },
  { name: "23-47" },
  { name: "23-48" },
  { name: "23-49" },
  { name: "23-50" },
  { name: "23-51" },
  { name: "23-52" },
  { name: "23-53" },
  { name: "23-54" },
  { name: "23-55" },
  { name: "23-56" },
  { name: "23-57" },
  { name: "23-58" },
  { name: "23-59" },
  { name: "23-60" },
  { name: "24-1" },
  { name: "24-2" },
  { name: "24-3" },
  { name: "24-4" },
  { name: "24-5" },
  { name: "24-6" },
  { name: "24-7" },
  { name: "24-8" },
  { name: "24-9" },
  { name: "24-10" },
  { name: "24-11" },
  { name: "24-12" },
  { name: "24-13" },
  { name: "24-14" },
  { name: "24-15" },
  { name: "24-16" },
  { name: "24-17" },
  { name: "24-18" },
  { name: "24-19" },
  { name: "24-20" },
  { name: "24-21" },
  { name: "24-22" },
  { name: "24-23" },
  { name: "24-24" },
  { name: "24-25" },
  { name: "24-26" },
  { name: "24-27" },
  { name: "24-28" },
  { name: "24-29" },
  { name: "24-30" },
  { name: "24-31" },
  { name: "24-32" },
  { name: "24-33" },
  { name: "24-34" },
  { name: "24-35" },
  { name: "24-36" },
  { name: "24-37" },
  { name: "24-38" },
  { name: "24-39" },
  { name: "24-40" },
  { name: "24-41" },
  { name: "24-42" },
  { name: "24-43" },
  { name: "24-44" },
  { name: "24-45" },
  { name: "24-46" },
  { name: "24-47" },
  { name: "24-48" },
  { name: "24-49" },
  { name: "24-50" },
  { name: "24-51" },
  { name: "24-52" },
  { name: "24-53" },
  { name: "24-54" },
  { name: "24-55" },
  { name: "24-56" },
  { name: "24-57" },
  { name: "24-58" },
  { name: "24-59" },
  { name: "24-60" },
  { name: "25-1" },
  { name: "25-2" },
  { name: "25-3" },
  { name: "25-4" },
  { name: "25-5" },
  { name: "25-6" },
  { name: "25-7" },
  { name: "25-8" },
  { name: "25-9" },
  { name: "25-10" },
  { name: "25-11" },
  { name: "25-12" },
  { name: "25-13" },
  { name: "25-14" },
  { name: "25-15" },
  { name: "25-16" },
  { name: "25-17" },
  { name: "25-18" },
  { name: "25-19" },
  { name: "25-20" },
  { name: "25-21" },
  { name: "25-22" },
  { name: "25-23" },
  { name: "25-24" },
  { name: "25-25" },
  { name: "25-26" },
  { name: "25-27" },
  { name: "25-28" },
  { name: "25-29" },
  { name: "25-30" },
  { name: "25-31" },
  { name: "25-32" },
  { name: "25-33" },
  { name: "25-34" },
  { name: "25-35" },
  { name: "25-36" },
  { name: "25-37" },
  { name: "25-38" },
  { name: "25-39" },
  { name: "25-40" },
  { name: "25-41" },
  { name: "25-42" },
  { name: "25-43" },
  { name: "25-44" },
  { name: "25-45" },
  { name: "25-46" },
  { name: "25-47" },
  { name: "25-48" },
  { name: "25-49" },
  { name: "25-50" },
  { name: "25-51" },
  { name: "25-52" },
  { name: "25-53" },
  { name: "25-54" },
  { name: "25-55" },
  { name: "25-56" },
  { name: "25-57" },
  { name: "25-58" },
  { name: "25-59" },
  { name: "25-60" },
  { name: "26-1" },
  { name: "26-2" },
  { name: "26-3" },
  { name: "26-4" },
  { name: "26-5" },
  { name: "26-6" },
  { name: "26-7" },
  { name: "26-8" },
  { name: "26-9" },
  { name: "26-10" },
  { name: "26-11" },
  { name: "26-12" },
  { name: "26-13" },
  { name: "26-14" },
  { name: "26-15" },
  { name: "26-16" },
  { name: "26-17" },
  { name: "26-18" },
  { name: "26-19" },
  { name: "26-20" },
  { name: "26-21" },
  { name: "26-22" },
  { name: "26-23" },
  { name: "26-24" },
  { name: "26-25" },
  { name: "26-26" },
  { name: "26-27" },
  { name: "26-28" },
  { name: "26-29" },
  { name: "26-30" },
  { name: "26-31" },
  { name: "26-32" },
  { name: "26-33" },
  { name: "26-34" },
  { name: "26-35" },
  { name: "26-36" },
  { name: "26-37" },
  { name: "26-38" },
  { name: "26-39" },
  { name: "26-40" },
  { name: "26-41" },
  { name: "26-42" },
  { name: "26-43" },
  { name: "26-44" },
  { name: "26-45" },
  { name: "26-46" },
  { name: "26-47" },
  { name: "26-48" },
  { name: "26-49" },
  { name: "26-50" },
  { name: "26-51" },
  { name: "26-52" },
  { name: "26-53" },
  { name: "26-54" },
  { name: "26-55" },
  { name: "26-56" },
  { name: "26-57" },
  { name: "26-58" },
  { name: "26-59" },
  { name: "26-60" },
  { name: "27-1" },
  { name: "27-2" },
  { name: "27-3" },
  { name: "27-4" },
  { name: "27-5" },
  { name: "27-6" },
  { name: "27-7" },
  { name: "27-8" },
  { name: "27-9" },
  { name: "27-10" },
  { name: "27-11" },
  { name: "27-12" },
  { name: "27-13" },
  { name: "27-14" },
  { name: "27-15" },
  { name: "27-16" },
  { name: "27-17" },
  { name: "27-18" },
  { name: "27-19" },
  { name: "27-20" },
  { name: "27-21" },
  { name: "27-22" },
  { name: "27-23" },
  { name: "27-24" },
  { name: "27-25" },
  { name: "27-26" },
  { name: "27-27" },
  { name: "27-28" },
  { name: "27-29" },
  { name: "27-30" },
  { name: "27-31" },
  { name: "27-32" },
  { name: "27-33" },
  { name: "27-34" },
  { name: "27-35" },
  { name: "27-36" },
  { name: "27-37" },
  { name: "27-38" },
  { name: "27-39" },
  { name: "27-40" },
  { name: "27-41" },
  { name: "27-42" },
  { name: "27-43" },
  { name: "27-44" },
  { name: "27-45" },
  { name: "27-46" },
  { name: "27-47" },
  { name: "27-48" },
  { name: "27-49" },
  { name: "27-50" },
  { name: "27-51" },
  { name: "27-52" },
  { name: "27-53" },
  { name: "27-54" },
  { name: "27-55" },
  { name: "27-56" },
  { name: "27-57" },
  { name: "27-58" },
  { name: "27-59" },
  { name: "27-60" },
  { name: "28-1" },
  { name: "28-2" },
  { name: "28-3" },
  { name: "28-4" },
  { name: "28-5" },
  { name: "28-6" },
  { name: "28-7" },
  { name: "28-8" },
  { name: "28-9" },
  { name: "28-10" },
  { name: "28-11" },
  { name: "28-12" },
  { name: "28-13" },
  { name: "28-14" },
  { name: "28-15" },
  { name: "28-16" },
  { name: "28-17" },
  { name: "28-18" },
  { name: "28-19" },
  { name: "28-20" },
  { name: "28-21" },
  { name: "28-22" },
  { name: "28-23" },
  { name: "28-24" },
  { name: "28-25" },
  { name: "28-26" },
  { name: "28-27" },
  { name: "28-28" },
  { name: "28-29" },
  { name: "28-30" },
  { name: "28-31" },
  { name: "28-32" },
  { name: "28-33" },
  { name: "28-34" },
  { name: "28-35" },
  { name: "28-36" },
  { name: "28-37" },
  { name: "28-38" },
  { name: "28-39" },
  { name: "28-40" },
  { name: "28-41" },
  { name: "28-42" },
  { name: "28-43" },
  { name: "28-44" },
  { name: "28-45" },
  { name: "28-46" },
  { name: "28-47" },
  { name: "28-48" },
  { name: "28-49" },
  { name: "28-50" },
  { name: "28-51" },
  { name: "28-52" },
  { name: "28-53" },
  { name: "28-54" },
  { name: "28-55" },
  { name: "28-56" },
  { name: "28-57" },
  { name: "28-58" },
  { name: "28-59" },
  { name: "28-60" },
  { name: "29-1" },
  { name: "29-2" },
  { name: "29-3" },
  { name: "29-4" },
  { name: "29-5" },
  { name: "29-6" },
  { name: "29-7" },
  { name: "29-8" },
  { name: "29-9" },
  { name: "29-10" },
  { name: "29-11" },
  { name: "29-12" },
  { name: "29-13" },
  { name: "29-14" },
  { name: "29-15" },
  { name: "29-16" },
  { name: "29-17" },
  { name: "29-18" },
  { name: "29-19" },
  { name: "29-20" },
  { name: "29-21" },
  { name: "29-22" },
  { name: "29-23" },
  { name: "29-24" },
  { name: "29-25" },
  { name: "29-26" },
  { name: "29-27" },
  { name: "29-28" },
  { name: "29-29" },
  { name: "29-30" },
  { name: "29-31" },
  { name: "29-32" },
  { name: "29-33" },
  { name: "29-34" },
  { name: "29-35" },
  { name: "29-36" },
  { name: "29-37" },
  { name: "29-38" },
  { name: "29-39" },
  { name: "29-40" },
  { name: "29-41" },
  { name: "29-42" },
  { name: "29-43" },
  { name: "29-44" },
  { name: "29-45" },
  { name: "29-46" },
  { name: "29-47" },
  { name: "29-48" },
  { name: "29-49" },
  { name: "29-50" },
  { name: "29-51" },
  { name: "29-52" },
  { name: "29-53" },
  { name: "29-54" },
  { name: "29-55" },
  { name: "29-56" },
  { name: "29-57" },
  { name: "29-58" },
  { name: "29-59" },
  { name: "29-60" },
  { name: "30-1" },
  { name: "30-2" },
  { name: "30-3" },
  { name: "30-4" },
  { name: "30-5" },
  { name: "30-6" },
  { name: "30-7" },
  { name: "30-8" },
  { name: "30-9" },
  { name: "30-10" },
  { name: "30-11" },
  { name: "30-12" },
  { name: "30-13" },
  { name: "30-14" },
  { name: "30-15" },
  { name: "30-16" },
  { name: "30-17" },
  { name: "30-18" },
  { name: "30-19" },
  { name: "30-20" },
  { name: "30-21" },
  { name: "30-22" },
  { name: "30-23" },
  { name: "30-24" },
  { name: "30-25" },
  { name: "30-26" },
  { name: "30-27" },
  { name: "30-28" },
  { name: "30-29" },
  { name: "30-30" },
  { name: "30-31" },
  { name: "30-32" },
  { name: "30-33" },
  { name: "30-34" },
  { name: "30-35" },
  { name: "30-36" },
  { name: "30-37" },
  { name: "30-38" },
  { name: "30-39" },
  { name: "30-40" },
  { name: "30-41" },
  { name: "30-42" },
  { name: "30-43" },
  { name: "30-44" },
  { name: "30-45" },
  { name: "30-46" },
  { name: "30-47" },
  { name: "30-48" },
  { name: "30-49" },
  { name: "30-50" },
  { name: "30-51" },
  { name: "30-52" },
  { name: "30-53" },
  { name: "30-54" },
  { name: "30-55" },
  { name: "30-56" },
  { name: "30-57" },
  { name: "30-58" },
  { name: "30-59" },
  { name: "30-60" },
  { name: "31-1" },
  { name: "31-2" },
  { name: "31-3" },
  { name: "31-4" },
  { name: "31-5" },
  { name: "31-6" },
  { name: "31-7" },
  { name: "31-8" },
  { name: "31-9" },
  { name: "31-10" },
  { name: "31-11" },
  { name: "31-12" },
  { name: "31-13" },
  { name: "31-14" },
  { name: "31-15" },
  { name: "31-16" },
  { name: "31-17" },
  { name: "31-18" },
  { name: "31-19" },
  { name: "31-20" },
  { name: "31-21" },
  { name: "31-22" },
  { name: "31-23" },
  { name: "31-24" },
  { name: "31-25" },
  { name: "31-26" },
  { name: "31-27" },
  { name: "31-28" },
  { name: "31-29" },
  { name: "31-30" },
  { name: "31-31" },
  { name: "31-32" },
  { name: "31-33" },
  { name: "31-34" },
  { name: "31-35" },
  { name: "31-36" },
  { name: "31-37" },
  { name: "31-38" },
  { name: "31-39" },
  { name: "31-40" },
  { name: "31-41" },
  { name: "31-42" },
  { name: "31-43" },
  { name: "31-44" },
  { name: "31-45" },
  { name: "31-46" },
  { name: "31-47" },
  { name: "31-48" },
  { name: "31-49" },
  { name: "31-50" },
  { name: "31-51" },
  { name: "31-52" },
  { name: "31-53" },
  { name: "31-54" },
  { name: "31-55" },
  { name: "31-56" },
  { name: "31-57" },
  { name: "31-58" },
  { name: "31-59" },
  { name: "31-60" },
  { name: "32-1" },
  { name: "32-2" },
  { name: "32-3" },
  { name: "32-4" },
  { name: "32-5" },
  { name: "32-6" },
  { name: "32-7" },
  { name: "32-8" },
  { name: "32-9" },
  { name: "32-10" },
  { name: "32-11" },
  { name: "32-12" },
  { name: "32-13" },
  { name: "32-14" },
  { name: "32-15" },
  { name: "32-16" },
  { name: "32-17" },
  { name: "32-18" },
  { name: "32-19" },
  { name: "32-20" },
  { name: "32-21" },
  { name: "32-22" },
  { name: "32-23" },
  { name: "32-24" },
  { name: "32-25" },
  { name: "32-26" },
  { name: "32-27" },
  { name: "32-28" },
  { name: "32-29" },
  { name: "32-30" },
  { name: "32-31" },
  { name: "32-32" },
  { name: "32-33" },
  { name: "32-34" },
  { name: "32-35" },
  { name: "32-36" },
  { name: "32-37" },
  { name: "32-38" },
  { name: "32-39" },
  { name: "32-40" },
  { name: "32-41" },
  { name: "32-42" },
  { name: "32-43" },
  { name: "32-44" },
  { name: "32-45" },
  { name: "32-46" },
  { name: "32-47" },
  { name: "32-48" },
  { name: "32-49" },
  { name: "32-50" },
  { name: "32-51" },
  { name: "32-52" },
  { name: "32-53" },
  { name: "32-54" },
  { name: "32-55" },
  { name: "32-56" },
  { name: "32-57" },
  { name: "32-58" },
  { name: "32-59" },
  { name: "32-60" },
  { name: "33-1" }
];

export default { stages };
