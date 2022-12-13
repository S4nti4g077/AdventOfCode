const data = [
  "7-50,8-33",
  "76-83,77-87",
  "68-73,55-68",
  "13-37,12-25",
  "7-7,12-96",
  "9-22,10-12",
  "52-77,12-52",
  "43-83,44-60",
  "33-90,78-89",
  "10-10,9-50",
  "6-89,7-98",
  "10-11,11-60",
  "8-75,7-94",
  "23-23,23-23",
  "65-78,23-64",
  "5-97,96-96",
  "93-96,76-80",
  "15-47,14-16",
  "16-17,17-43",
  "28-39,8-41",
  "40-70,40-41",
  "32-89,57-88",
  "39-76,40-64",
  "13-96,55-69",
  "56-80,57-81",
  "57-82,58-82",
  "57-57,44-58",
  "33-54,33-53",
  "9-91,91-96",
  "58-68,33-57",
  "6-65,4-5",
  "2-88,3-88",
  "23-69,23-98",
  "1-99,2-60",
  "15-70,15-71",
  "45-67,2-68",
  "37-64,5-59",
  "3-79,2-79",
  "38-83,38-83",
  "4-4,5-98",
  "43-74,43-75",
  "4-99,2-5",
  "31-42,42-42",
  "24-28,27-30",
  "2-80,2-81",
  "33-66,30-62",
  "80-93,80-80",
  "30-81,81-93",
  "17-96,16-84",
  "48-86,47-62",
  "62-74,61-74",
  "8-37,37-67",
  "22-98,21-98",
  "29-29,29-58",
  "27-85,5-85",
  "95-98,1-96",
  "99-99,24-97",
  "19-22,21-83",
  "34-82,82-83",
  "13-76,31-92",
  "44-86,77-85",
  "15-47,15-47",
  "25-54,26-55",
  "20-38,3-37",
  "3-15,4-74",
  "78-78,19-78",
  "15-25,18-24",
  "71-87,86-86",
  "9-99,99-99",
  "25-68,24-24",
  "42-89,31-42",
  "47-67,48-74",
  "34-61,20-34",
  "2-80,1-3",
  "5-6,5-74",
  "4-67,5-53",
  "20-20,21-88",
  "7-48,5-8",
  "14-62,14-14",
  "49-79,42-78",
  "23-28,22-22",
  "21-87,21-86",
  "57-95,57-95",
  "36-53,12-77",
  "12-46,13-57",
  "52-84,85-88",
  "41-73,73-73",
  "84-94,64-95",
  "93-94,12-94",
  "1-99,1-99",
  "6-6,6-70",
  "3-99,7-98",
  "96-99,3-97",
  "18-84,17-85",
  "56-99,8-57",
  "7-83,8-84",
  "51-82,50-83",
  "7-77,7-8",
  "58-76,59-77",
  "13-79,14-79",
  "7-7,8-85",
  "15-17,16-28",
  "17-79,16-79",
  "74-74,1-73",
  "28-28,28-65",
  "59-62,59-66",
  "48-69,46-47",
  "14-23,3-24",
  "35-83,83-98",
  "55-84,55-83",
  "10-20,7-19",
  "13-88,21-88",
  "62-62,62-85",
  "32-32,33-33",
  "49-86,15-90",
  "2-3,2-38",
  "1-1,2-93",
  "40-52,22-41",
  "41-82,82-92",
  "42-79,41-59",
  "53-99,52-99",
  "52-68,6-55",
  "30-65,31-65",
  "56-90,8-91",
  "83-93,17-82",
  "5-84,4-70",
  "56-56,56-97",
  "5-44,4-81",
  "85-91,90-90",
  "23-51,22-22",
  "12-15,14-68",
  "28-28,28-84",
  "1-6,10-32",
  "5-86,50-88",
  "8-20,19-19",
  "62-80,62-81",
  "50-77,76-97",
  "3-97,3-96",
  "14-77,37-39",
  "82-84,29-82",
  "6-31,1-24",
  "62-71,46-61",
  "13-13,11-15",
  "3-9,4-17",
  "32-97,11-98",
  "89-90,23-89",
  "51-59,48-60",
  "53-74,53-74",
  "30-30,29-71",
  "8-70,8-9",
  "65-65,65-66",
  "34-85,96-99",
  "36-40,36-36",
  "42-42,42-72",
  "2-43,33-69",
  "4-31,30-77",
  "69-84,70-92",
  "26-95,27-98",
  "3-3,6-89",
  "34-88,51-79",
  "63-63,3-63",
  "8-8,8-61",
  "30-87,13-84",
  "38-38,37-50",
  "24-87,10-93",
  "6-88,3-4",
  "19-70,19-69",
  "36-92,31-37",
  "17-94,14-18",
  "56-61,49-74",
  "30-62,29-62",
  "20-25,21-87",
  "12-76,12-12",
  "94-96,54-95",
  "1-99,4-77",
  "40-40,16-41",
  "72-90,14-73",
  "8-93,7-92",
  "10-95,41-98",
  "29-36,19-51",
  "79-93,70-94",
  "11-18,17-95",
  "3-97,2-98",
  "52-67,53-53",
  "13-46,12-45",
  "5-68,4-94",
  "16-73,15-15",
  "11-40,33-33",
  "76-83,82-85",
  "28-35,40-92",
  "53-93,12-83",
  "2-61,58-60",
  "4-51,4-4",
  "18-43,17-56",
  "93-93,14-93",
  "95-98,16-96",
  "32-39,36-41",
  "9-73,6-9",
  "55-55,36-56",
  "20-98,20-99",
  "2-58,18-99",
  "5-6,9-75",
  "21-90,77-82",
  "88-99,7-89",
  "21-44,14-38",
  "82-97,69-82",
  "12-12,13-87",
  "46-81,98-99",
  "15-82,14-83",
  "12-51,11-12",
  "3-94,4-94",
  "9-33,10-86",
  "20-93,19-50",
  "27-84,53-83",
  "79-80,3-79",
  "73-90,78-89",
  "96-96,93-98",
  "93-98,54-93",
  "33-82,6-33",
  "1-9,9-27",
  "14-14,15-63",
  "4-94,5-95",
  "16-90,15-90",
  "47-78,47-79",
  "4-75,3-75",
  "3-96,96-99",
  "38-66,19-92",
  "16-56,12-14",
  "37-47,46-47",
  "4-70,1-70",
  "26-58,48-72",
  "38-97,43-93",
  "76-84,76-78",
  "13-55,5-14",
  "66-78,62-92",
  "42-87,41-86",
  "3-21,4-62",
  "10-63,9-63",
  "9-67,8-67",
  "10-92,92-92",
  "96-98,79-95",
  "19-53,99-99",
  "4-64,4-63",
  "46-60,14-59",
  "2-90,1-89",
  "16-25,9-11",
  "8-98,8-97",
  "3-92,3-91",
  "65-87,64-88",
  "4-67,3-4",
  "66-88,78-87",
  "14-82,76-81",
  "12-85,11-84",
  "30-53,12-52",
  "53-60,7-61",
  "73-73,5-73",
  "55-55,55-57",
  "14-16,10-15",
  "23-29,22-22",
  "64-82,38-63",
  "38-68,69-69",
  "9-79,10-56",
  "43-87,42-88",
  "30-63,31-62",
  "25-25,24-83",
  "31-31,31-75",
  "2-96,17-99",
  "31-37,35-36",
  "3-42,2-43",
  "82-97,19-82",
  "38-94,95-97",
  "1-87,88-99",
  "47-87,46-84",
  "4-54,53-55",
  "80-96,3-81",
  "5-5,4-98",
  "35-50,24-36",
  "7-78,12-94",
  "45-70,69-73",
  "32-32,32-63",
  "61-71,39-72",
  "35-35,34-35",
  "80-81,22-82",
  "34-62,5-34",
  "19-21,18-19",
  "24-87,25-87",
  "34-97,34-98",
  "5-91,64-92",
  "19-49,19-98",
  "27-50,49-51",
  "10-70,69-71",
  "10-66,66-66",
  "66-99,65-66",
  "3-33,32-53",
  "23-32,8-34",
  "90-91,37-90",
  "41-77,53-76",
  "57-57,30-57",
  "35-37,36-48",
  "46-86,46-67",
  "60-83,60-61",
  "15-21,35-56",
  "60-91,60-91",
  "12-30,3-29",
  "89-90,82-92",
  "24-53,25-53",
  "13-60,14-61",
  "44-45,41-48",
  "24-94,93-94",
  "28-59,60-85",
  "94-98,66-93",
  "11-94,46-93",
  "89-93,44-89",
  "72-93,30-72",
  "22-40,23-35",
  "14-94,15-97",
  "51-86,48-76",
  "90-90,66-91",
  "58-74,10-71",
  "27-34,36-42",
  "1-96,96-97",
  "25-94,24-24",
  "9-28,1-10",
  "14-15,15-92",
  "5-26,25-25",
  "98-99,32-98",
  "12-71,11-11",
  "77-81,80-96",
  "30-66,40-65",
  "26-54,33-53",
  "17-78,18-18",
  "9-94,9-10",
  "87-95,37-88",
  "15-93,86-92",
  "30-82,29-82",
  "58-93,57-71",
  "20-75,60-67",
  "1-89,88-88",
  "19-95,19-94",
  "13-95,12-14",
  "34-67,33-67",
  "35-97,31-35",
  "54-99,54-98",
  "6-92,18-36",
  "31-59,30-30",
  "1-75,74-81",
  "44-47,45-45",
  "26-75,3-26",
  "35-36,36-71",
  "7-7,8-29",
  "32-88,33-74",
  "11-66,47-65",
  "29-93,28-94",
  "79-85,20-78",
  "8-60,52-60",
  "39-41,40-80",
  "4-90,6-90",
  "49-86,87-87",
  "8-8,9-99",
  "7-59,10-92",
  "30-93,11-30",
  "16-31,30-30",
  "33-62,33-33",
  "10-25,10-24",
  "15-59,40-85",
  "16-94,94-95",
  "1-2,1-99",
  "77-91,54-78",
  "10-76,34-72",
  "2-90,2-89",
  "26-54,23-58",
  "3-82,2-99",
  "20-65,21-21",
  "42-67,31-43",
  "18-51,3-19",
  "9-73,52-72",
  "19-40,18-41",
  "53-66,65-72",
  "3-99,76-97",
  "73-73,15-73",
  "11-15,11-11",
  "20-71,20-72",
  "60-74,54-75",
  "6-91,8-90",
  "35-52,35-53",
  "17-94,96-96",
  "8-84,30-65",
  "21-82,16-22",
  "84-89,43-90",
  "41-81,41-80",
  "39-48,38-94",
  "13-59,13-60",
  "39-40,40-86",
  "11-11,10-90",
  "76-76,68-76",
  "26-93,25-27",
  "78-94,68-77",
  "88-95,7-88",
  "3-20,19-74",
  "88-93,25-65",
  "6-6,6-51",
  "12-15,22-97",
  "18-22,18-19",
  "65-84,65-84",
  "37-94,34-35",
  "8-28,7-36",
  "53-83,53-55",
  "3-99,4-79",
  "2-43,31-43",
  "52-68,52-84",
  "12-53,11-11",
  "69-74,64-75",
  "4-5,5-98",
  "11-47,12-21",
  "61-87,88-89",
  "3-3,4-98",
  "24-80,83-86",
  "2-55,1-54",
  "92-92,46-92",
  "14-26,14-27",
  "3-57,1-4",
  "57-64,56-92",
  "78-78,11-78",
  "48-48,49-90",
  "79-80,53-80",
  "7-53,8-47",
  "48-81,47-75",
  "28-88,27-87",
  "12-66,12-66",
  "29-92,37-92",
  "10-99,98-99",
  "58-72,57-73",
  "24-78,77-83",
  "1-24,23-83",
  "30-57,57-82",
  "39-72,40-46",
  "8-85,7-86",
  "24-43,24-40",
  "1-98,1-99",
  "35-79,35-80",
  "54-68,67-76",
  "6-89,4-90",
  "99-99,13-69",
  "5-5,6-42",
  "3-88,27-89",
  "91-91,2-92",
  "32-69,34-68",
  "53-79,53-85",
  "21-22,22-88",
  "10-69,7-11",
  "3-81,9-68",
  "7-42,3-86",
  "52-58,57-69",
  "44-74,42-74",
  "3-22,4-18",
  "20-62,62-92",
  "84-87,20-85",
  "3-69,3-3",
  "40-48,47-67",
  "9-9,8-99",
  "3-92,2-10",
  "20-20,18-20",
  "5-93,7-93",
  "52-76,15-77",
  "14-87,14-88",
  "43-46,44-49",
  "2-3,6-92",
  "28-66,24-82",
  "2-88,3-87",
  "43-87,42-92",
  "2-3,3-95",
  "45-49,44-50",
  "30-83,29-82",
  "24-81,25-57",
  "76-77,77-77",
  "18-85,4-90",
  "57-57,19-57",
  "9-99,3-10",
  "45-50,44-50",
  "3-99,2-79",
  "38-61,41-62",
  "63-87,64-87",
  "1-86,98-98",
  "51-58,50-54",
  "31-41,31-31",
  "20-85,10-19",
  "8-97,8-8",
  "16-64,64-89",
  "1-4,3-92",
  "12-68,13-69",
  "45-46,46-90",
  "84-98,53-84",
  "32-49,46-48",
  "55-93,55-92",
  "3-4,6-21",
  "6-99,3-7",
  "52-90,19-88",
  "7-7,8-85",
  "53-95,53-53",
  "69-87,68-88",
  "33-34,15-34",
  "22-38,4-39",
  "67-83,68-68",
  "52-89,53-68",
  "30-85,53-84",
  "26-94,26-95",
  "11-37,11-96",
  "86-92,17-93",
  "33-78,33-78",
  "9-81,80-80",
  "46-53,53-53",
  "44-63,62-98",
  "1-78,1-78",
  "31-61,16-29",
  "16-88,16-96",
  "9-51,9-50",
  "34-53,35-54",
  "18-98,18-18",
  "31-66,6-16",
  "28-35,36-52",
  "98-99,60-97",
  "25-35,25-25",
  "60-90,84-89",
  "13-15,1-21",
  "2-23,2-24",
  "2-91,90-93",
  "25-32,31-80",
  "55-62,56-63",
  "24-43,42-91",
  "63-82,62-84",
  "5-9,31-87",
  "47-63,48-76",
  "62-88,62-87",
  "26-73,26-72",
  "25-41,26-42",
  "10-77,76-76",
  "82-87,2-83",
  "1-96,1-97",
  "9-56,18-55",
  "2-93,3-92",
  "58-94,62-97",
  "71-97,12-69",
  "15-91,90-90",
  "49-60,50-60",
  "73-84,83-83",
  "57-91,10-58",
  "12-70,11-69",
  "3-53,52-67",
  "13-94,94-96",
  "90-92,2-68",
  "4-74,74-82",
  "16-95,20-97",
  "17-30,17-31",
  "41-50,5-28",
  "18-34,17-98",
  "37-66,15-99",
  "2-43,1-1",
  "1-58,38-70",
  "5-7,6-24",
  "38-54,54-63",
  "6-20,5-7",
  "72-93,83-90",
  "89-90,34-89",
  "8-18,7-14",
  "1-54,2-53",
  "45-87,45-46",
  "6-24,5-5",
  "5-81,1-3",
  "4-5,4-97",
  "38-38,38-70",
  "4-91,5-98",
  "52-69,51-53",
  "18-45,18-44",
  "99-99,4-99",
  "32-93,35-93",
  "25-95,15-30",
  "35-38,34-75",
  "25-29,26-64",
  "30-51,30-52",
  "36-37,37-40",
  "14-81,13-15",
  "19-85,18-85",
  "15-88,16-16",
  "21-96,22-95",
  "29-31,30-68",
  "22-85,22-48",
  "19-84,18-79",
  "63-63,24-64",
  "51-79,51-80",
  "21-38,37-44",
  "19-72,4-18",
  "30-95,30-94",
  "1-88,89-98",
  "4-5,4-83",
  "95-97,74-95",
  "2-83,83-83",
  "89-94,93-98",
  "27-93,19-28",
  "43-43,44-88",
  "86-89,87-87",
  "1-3,5-66",
  "98-99,59-97",
  "4-80,5-21",
  "5-5,4-85",
  "15-82,16-97",
  "49-50,48-49",
  "8-89,89-90",
  "14-15,15-25",
  "42-48,47-49",
  "9-48,8-10",
  "21-84,21-83",
  "97-99,1-97",
  "22-90,90-95",
  "18-73,72-76",
  "87-91,68-80",
  "21-22,22-44",
  "5-91,90-97",
  "25-97,96-98",
  "8-22,1-7",
  "4-77,4-30",
  "43-43,44-64",
  "43-43,43-88",
  "39-56,40-57",
  "15-90,16-71",
  "25-78,85-97",
  "27-78,26-79",
  "61-70,66-67",
  "8-94,96-98",
  "11-16,30-89",
  "9-55,9-54",
  "53-92,53-54",
  "1-98,1-99",
  "29-30,31-76",
  "81-83,27-80",
  "75-85,75-85",
  "18-94,11-12",
  "2-11,11-93",
  "1-4,3-84",
  "2-62,1-61",
  "2-96,2-95",
  "1-87,86-88",
  "71-78,75-75",
  "96-96,6-97",
  "6-8,8-44",
  "64-86,85-99",
  "3-11,9-11",
  "31-92,14-92",
  "8-96,14-97",
  "6-94,5-93",
  "5-67,5-66",
  "10-14,13-92",
  "14-74,13-73",
  "21-96,96-97",
  "56-66,62-65",
  "7-77,7-77",
  "88-92,18-73",
  "9-63,19-93",
  "1-84,18-84",
  "12-85,9-12",
  "28-28,29-94",
  "18-37,17-36",
  "20-93,93-94",
  "33-52,4-60",
  "35-93,65-82",
  "27-27,27-67",
  "22-92,22-77",
  "45-50,45-64",
  "8-99,8-98",
  "1-1,2-90",
  "4-62,5-63",
  "22-44,4-45",
  "92-94,14-95",
  "3-95,39-94",
  "29-96,95-95",
  "21-96,21-95",
  "65-71,66-91",
  "88-94,58-89",
  "13-84,1-83",
  "13-87,12-86",
  "29-48,28-36",
  "6-90,6-89",
  "37-70,36-38",
  "20-79,21-80",
  "32-89,30-89",
  "8-76,8-8",
  "52-74,51-75",
  "6-89,5-89",
  "59-77,60-76",
  "35-83,35-35",
  "52-78,49-98",
  "39-88,22-35",
  "27-32,27-27",
  "13-50,12-13",
  "61-61,61-61",
  "13-85,12-14",
  "17-25,26-95",
  "57-71,41-73",
  "50-76,49-49",
  "87-87,18-88",
  "95-95,41-96",
  "53-54,52-53",
  "6-44,5-98",
  "1-88,88-93",
  "13-29,29-81",
  "9-70,3-6",
  "92-97,41-92",
  "14-48,3-5",
  "2-5,3-20",
  "39-83,55-83",
  "83-83,8-83",
  "14-52,2-15",
  "7-64,8-63",
  "50-76,50-77",
  "1-78,1-77",
  "3-80,2-2",
  "96-96,47-96",
  "99-99,65-99",
  "52-74,9-53",
  "25-53,25-54",
  "18-18,18-73",
  "47-52,16-48",
  "83-88,83-88",
  "3-7,6-75",
  "8-93,9-76",
  "57-57,30-59",
  "61-61,62-96",
  "73-88,73-88",
  "17-41,11-40",
  "49-49,48-69",
  "1-62,1-54",
  "15-26,15-45",
  "6-56,5-5",
  "4-99,2-3",
  "15-89,88-93",
  "22-22,17-22",
  "12-85,12-12",
  "89-99,62-90",
  "53-95,53-95",
  "4-64,10-74",
  "6-42,4-6",
  "11-41,20-22",
  "49-50,48-49",
  "11-85,12-84",
  "32-32,26-31",
  "40-67,8-39",
  "17-17,16-93",
  "12-54,13-55",
  "43-44,43-43",
  "33-35,34-93",
  "2-8,7-64",
  "30-91,31-91",
  "70-70,15-74",
  "36-36,36-80",
  "23-23,3-24",
  "18-40,25-40",
  "36-99,35-45",
  "45-83,83-84",
  "90-90,9-91",
  "24-25,23-23",
  "12-91,11-90",
  "30-37,30-38",
  "24-94,25-98",
  "30-67,29-29",
  "4-50,8-51",
  "63-95,14-85",
  "14-14,15-32",
  "2-3,2-86",
  "27-41,26-42",
  "6-86,86-86",
  "34-70,34-69",
  "89-97,2-90",
  "59-75,59-74",
  "58-94,58-93",
  "6-75,2-75",
  "44-73,43-45",
  "50-61,50-70",
  "6-92,7-7",
  "34-88,35-92",
  "2-96,97-99",
  "10-91,10-91",
  "1-94,2-23",
  "21-40,21-39",
  "19-87,87-95",
  "6-75,2-18",
  "22-72,15-73",
  "9-96,42-96",
  "16-16,16-87",
  "27-84,26-83",
  "94-97,2-94",
  "45-58,56-56",
  "10-16,22-71",
  "34-55,43-78",
  "94-98,9-99",
  "1-90,89-95",
  "1-84,29-85",
  "13-70,70-71",
  "58-86,4-87",
  "1-41,41-55",
  "36-71,37-72",
  "65-68,45-69",
  "30-30,31-31",
  "35-69,35-68",
  "58-94,58-95",
  "10-94,93-98",
  "53-94,23-54",
  "47-51,48-48",
  "7-86,7-7",
  "28-44,23-29",
  "7-73,6-7",
  "5-88,5-88",
  "10-92,9-9",
  "18-71,17-72",
  "7-16,15-78",
  "41-42,42-78",
  "9-32,8-96",
  "51-52,32-52",
  "24-76,23-87",
  "2-99,2-2",
  "95-95,1-95",
  "42-92,92-92",
  "21-85,88-93",
  "75-75,1-75",
  "70-71,3-72",
  "39-87,32-42",
  "1-1,3-85",
  "55-57,56-70",
  "16-39,15-16",
  "25-26,26-87",
  "14-79,33-73",
  "53-64,14-53",
  "96-99,2-97",
  "32-91,33-95",
  "85-92,25-86",
  "4-96,1-3",
  "69-98,51-69",
  "24-76,75-75",
  "60-93,68-85",
  "51-51,52-90",
  "25-30,30-34",
  "10-90,11-89",
  "1-96,1-97",
  "42-61,42-62",
  "30-71,29-31",
  "26-35,17-36",
  "7-84,7-83",
  "18-25,18-24",
  "9-86,21-87",
  "3-27,26-51",
  "56-97,55-56",
  "47-74,48-96",
  "5-35,6-92",
  "35-70,27-37",
  "2-2,2-90",
  "18-64,18-63",
  "1-3,3-78",
  "14-36,13-42",
  "12-53,19-58",
  "55-91,56-62",
  "14-24,23-64",
  "9-32,33-86",
  "40-64,40-63",
  "25-92,25-92",
  "49-51,55-69",
  "13-46,13-45",
  "46-75,45-76",
  "2-77,2-76",
  "21-88,3-96",
  "7-12,12-92",
  "46-91,45-92",
  "7-78,57-79",
  "2-2,1-97",
  "78-87,8-79",
  "28-75,27-74",
  "5-81,80-83",
  "30-63,29-64",
  "69-80,32-70",
  "2-78,1-79",
  "13-15,14-74",
  "79-84,83-84",
  "68-69,11-69",
  "9-43,9-44",
  "92-99,92-92",
  "90-97,35-90",
  "13-68,13-13",
  "3-87,1-3",
  "47-52,48-53",
  "27-94,8-28",
  "46-93,44-52",
  "8-56,8-95",
  "50-57,44-58",
  "4-18,2-2",
  "3-77,76-76",
  "17-17,18-83",
  "2-93,20-23",
  "94-94,5-95",
  "73-82,3-74",
  "31-49,48-81",
  "40-43,9-41",
  "74-74,74-85",
  "10-95,3-95",
  "14-22,21-78",
  "2-96,1-4",
  "26-66,11-66",
  "48-48,6-49",
  "12-86,85-94",
  "81-83,80-83",
  "3-29,30-77",
  "55-90,47-91",
  "5-83,1-6",
  "7-19,6-6",
  "36-39,37-43",
  "11-60,17-45",
  "8-83,3-21",
  "11-11,11-79",
  "25-31,35-97",
  "30-46,46-47",
  "24-24,25-78",
  "6-96,5-7",
  "73-83,13-84",
  "15-99,14-82",
  "84-98,84-99",
  "7-61,42-61",
  "2-37,37-37",
  "9-9,9-34",
  "40-42,41-85",
  "11-33,10-32",
  "2-9,8-64",
  "92-92,86-93",
  "7-38,7-37",
  "16-92,2-17",
  "2-3,3-50",
  "1-95,2-96",
  "38-87,67-87",
  "5-21,21-22",
  "38-47,24-70",
  "4-44,3-81",
  "84-85,1-84",
  "22-99,21-96",
  "70-72,59-72",
  "15-96,16-96",
  "6-76,6-6",
  "83-83,78-83",
  "26-37,25-25",
  "9-43,3-43",
  "81-81,80-80",
  "47-51,49-53",
  "97-97,29-98",
  "23-47,46-46",
  "28-84,29-85",
  "1-94,1-95",
  "14-72,13-15",
  "61-95,4-78",
  "9-89,9-9",
  "10-12,11-90",
  "50-54,19-50",
  "97-98,9-98",
  "15-94,16-28",
  "77-77,25-76",
  "20-74,19-28",
  "1-99,2-41",
  "29-79,79-79",
  "30-88,30-87",
  "24-98,75-91",
  "15-65,14-65",
  "67-77,67-78",
  "5-86,2-4",
  "3-81,4-82",
  "40-90,39-91",
  "19-51,19-19",
  "48-67,42-67",
  "17-60,24-47",
  "27-81,18-82",
  "48-87,66-87",
  "35-96,34-89",
  "16-23,22-50",
  "7-85,85-85",
  "7-43,6-42",
  "26-75,27-27",
  "6-10,9-64",
  "18-38,14-39",
  "45-85,84-89",
  "30-98,98-98",
  "84-93,14-85",
  "8-57,8-56",
  "24-91,23-92",
  "79-93,79-94",
  "37-60,16-37",
  "2-81,5-80",
  "80-92,81-99",
  "5-40,5-40",
  "10-44,44-48",
  "5-15,14-42",
  "8-68,2-6",
  "30-78,53-77",
  "81-88,29-80",
  "98-99,6-98",
  "42-99,98-98",
  "63-63,17-63",
  "41-98,41-97",
  "1-99,2-98",
];
let counter = 0;

data.forEach((el) => {
  const arr = el.split("-");
  const center = arr[1].split(",");
  const allStrNumbers = [arr[0], center[0], center[1], arr[2]];
  const allNumbers = allStrNumbers.map(Number);
  // allStrNumbers.forEach((el) => {
  if (allNumbers[0] < allNumbers[2] && allNumbers[1] < allNumbers[2]) {
    counter++;
    return;
  }
  if (allNumbers[0] > allNumbers[3] && allNumbers[1] > allNumbers[3]) {
    counter++;
    return;
  }
  // });
  // console.log("arr", arr);
  // console.log("center", center);
  // console.log("allnub", allStrNumbers[0]);
});

console.log(data.length - counter);
