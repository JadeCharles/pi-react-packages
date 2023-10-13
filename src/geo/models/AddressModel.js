class AddressModel {
    static entityType = 1;

    static states = [
        { name: "Alabama", abbr: "AL" },
        { name: "Alaska", abbr: "AK" },
        { name: "American Samoa", abbr: "AS" },
        { name: "Arizona", abbr: "AZ" },
        { name: "Arkansas", abbr: "AR" },
        { name: "California", abbr: "CA" },
        { name: "Colorado", abbr: "CO" },
        { name: "Connecticut", abbr: "CT" },
        { name: "Delaware", abbr: "DE" },
        { name: "District Of Columbia", abbr: "DC" },
        { name: "Federated States Of Micronesia", abbr: "FM" },
        { name: "Florida", abbr: "FL" },
        { name: "Georgia", abbr: "GA" },
        { name: "Guam", abbr: "GU" },
        { name: "Hawaii", abbr: "HI" },
        { name: "Idaho", abbr: "ID" },
        { name: "Illinois", abbr: "IL" },
        { name: "Indiana", abbr: "IN" },
        { name: "Iowa", abbr: "IA" },
        { name: "Kansas", abbr: "KS" },
        { name: "Kentucky", abbr: "KY" },
        { name: "Louisiana", abbr: "LA" },
        { name: "Maine", abbr: "ME" },
        { name: "Marshall Islands", abbr: "MH" },
        { name: "Maryland", abbr: "MD" },
        { name: "Massachusetts", abbr: "MA" },
        { name: "Michigan", abbr: "MI" },
        { name: "Minnesota", abbr: "MN" },
        { name: "Mississippi", abbr: "MS" },
        { name: "Missouri", abbr: "MO" },
        { name: "Montana", abbr: "MT" },
        { name: "Nebraska", abbr: "NE" },
        { name: "Nevada", abbr: "NV" },
        { name: "New Hampshire", abbr: "NH" },
        { name: "New Jersey", abbr: "NJ" },
        { name: "New Mexico", abbr: "NM" },
        { name: "New York", abbr: "NY" },
        { name: "North Carolina", abbr: "NC" },
        { name: "North Dakota", abbr: "ND" },
        { name: "Northern Mariana Islands", abbr: "MP" },
        { name: "Ohio", abbr: "OH" },
        { name: "Oklahoma", abbr: "OK" },
        { name: "Oregon", abbr: "OR" },
        { name: "Palau", abbr: "PW" },
        { name: "Pennsylvania", abbr: "PA" },
        { name: "Puerto Rico", abbr: "PR" },
        { name: "Rhode Island", abbr: "RI" },
        { name: "South Carolina", abbr: "SC" },
        { name: "South Dakota", abbr: "SD" },
        { name: "Tennessee", abbr: "TN" },
        { name: "Texas", abbr: "TX" },
        { name: "Utah", abbr: "UT" },
        { name: "Vermont", abbr: "VT" },
        { name: "Virgin Islands", abbr: "VI" },
        { name: "Virginia", abbr: "VA" },
        { name: "Washington", abbr: "WA" },
        { name: "West Virginia", abbr: "WV" },
        { name: "Wisconsin", abbr: "WI" },
        { name: "Wyoming", abbr: "WY" }
    ];

    /**
     * List ALL of the countries here, including Name, 2-letter code, and 3-letter code */
    static countries = [
        { name: "Afghanistan", abbr: "AF", abbr3: "AFG", coordinates: [33.93911, 67.709953] },
        { name: "Albania", abbr: "AL", abbr3: "ALB", coordinates: [41.153332, 20.168331] },
        { name: "Algeria", abbr: "DZ", abbr3: "DZA", coordinates: [28.033886, 1.659626] },
        { name: "Andorra", abbr: "AD", abbr3: "AND", coordinates: [42.546245, 1.601554] },
        { name: "Angola", abbr: "AO", abbr3: "AGO", coordinates: [-11.202692, 17.873887] },
        { name: "Antigua & Barbuda", abbr: "AG", abbr3: "ATG", coordinates: [17.060816, -61.796428] },
        { name: "Argentina", abbr: "AR", abbr3: "ARG", coordinates: [-38.416097, -63.616672] },
        { name: "Armenia", abbr: "AM", abbr3: "ARM", coordinates: [40.069099, 45.038189] },
        { name: "Australia", abbr: "AU", abbr3: "AUS", coordinates: [-25.274398, 133.775136] },
        { name: "Austria", abbr: "AT", abbr3: "AUT", coordinates: [47.516231, 14.550072] },
        { name: "Azerbaijan", abbr: "AZ", abbr3: "AZE", coordinates: [40.143105, 47.576927] },
        { name: "Bahamas", abbr: "BH", abbr3: "BHS", coordinates: [25.03428, -77.39628] },
        { name: "Bahrain", abbr: "BH", abbr3: "BHR", coordinates: [25.930414, 50.637772] },
        { name: "Bangladesh", abbr: "BD", abbr3: "BGD", coordinates: [23.684994, 90.356331] },
        { name: "Barbados", abbr: "BB", abbr3: "BRB", coordinates: [13.19388, -59.543198] },
        { name: "Belarus", abbr: "BY", abbr3: "BLR", coordinates: [53.709807, 27.953389] },
        { name: "Belgium", abbr: "BE", abbr3: "BEL", coordinates: [50.503887, 4.469936] },
        { name: "Belize", abbr: "BZ", abbr3: "BLZ", coordinates: [17.189877, -88.49765] },
        { name: "Benin", abbr: "BJ", abbr3: "BEN", coordinates: [9.30769, 2.315834] },
        { name: "Bhutan", abbr: "BT", abbr3: "BTN", coordinates: [27.514162, 90.433601] },
        { name: "Bolivia", abbr: "BO", abbr3: "BOL", coordinates: [-16.290154, -63.588653] },
        { name: "Bosnia and Herzegovina", abbr: "BA", abbr3: "BIH", coordinates: [43.915886, 17.679076] },
        { name: "Botswana", abbr: "BW", abbr3: "BWA", coordinates: [-22.328474, 24.684866] },
        { name: "Brazil", abbr: "BR", abbr3: "BRA", coordinates: [-14.235004, -51.92528] },
        { name: "Brunei Darussalam", abbr: "BN", abbr3: "BRN", coordinates: [4.535277, 114.727669] },
        { name: "Bulgaria", abbr: "BG", abbr3: "BGR", coordinates: [42.733883, 25.48583] },
        { name: "Burkina Faso", abbr: "BF", abbr3: "BFA", coordinates: [12.238333, -1.561593] },
        { name: "Burundi", abbr: "BI", abbr3: "BDI", coordinates: [-3.373056, 29.918886] },
        { name: "Cambodia", abbr: "KH", abbr3: "KHM", coordinates: [12.565679, 104.990963] },
        { name: "Cameroon", abbr: "CM", abbr3: "CMR", coordinates: [7.369722, 12.354722] },
        { name: "Canada", abbr: "CA", abbr3: "CAN", coordinates: [56.130367, -106.346771] },
        { name: "Cape Verde", abbr: "CV", abbr3: "CPV", coordinates: [16.002082, -24.013197] },
        { name: "Central African Republic", abbr: "CF", abbr3: "CAF", coordinates: [6.611111, 20.939444] },
        { name: "Chad", abbr: "TD", abbr3: "TCD", coordinates: [15.454166, 18.732207] },
        { name: "Chile", abbr: "CL", abbr3: "CHL", coordinates: [-35.675147, -71.542969] },
        { name: "China", abbr: "CN", abbr3: "CHN", coordinates: [35.86166, 104.195397] },
        { name: "Colombia", abbr: "CO", abbr3: "COL", coordinates: [4.570868, -74.297333] },
        { name: "Comoros", abbr: "KM", abbr3: "COM", coordinates: [-11.875001, 43.872219] },
        { name: "Congo", abbr: "CG", abbr3: "COG", coordinates: [-0.228021, 15.827659] },
        { name: "Cook Islands", abbr: "CK", abbr3: "COK", coordinates: [-21.236736, -159.777671] },
        { name: "Costa Rica", abbr: "CR", abbr3: "CRI", coordinates: [9.748917, -83.753428] },
        { name: "Cote d'Ivoire", abbr: "CI", abbr3: "CIV", coordinates: [7.539989, -5.54708] },
        { name: "Croatia", abbr: "HR", abbr3: "HRV", coordinates: [45.1, 15.2] },
        { name: "Cuba", abbr: "CU", abbr3: "CUB", coordinates: [21.521757, -77.781167] },
        { name: "Cyprus", abbr: "CY", abbr3: "CYP", coordinates: [35.126413, 33.429859] },
        { name: "Czech Republic", abbr: "CZ", abbr3: "CZE", coordinates: [49.817492, 15.472962] },
        { name: "Denmark", abbr: "DK", abbr3: "DNK", coordinates: [56.26392, 9.501785] },
        { name: "Djibouti", abbr: "DJ", abbr3: "DJI", coordinates: [11.825138, 42.590275] },
        { name: "Dominica", abbr: "DM", abbr3: "DMA", coordinates: [15.414999, -61.370976] },
        { name: "Dominican Republic", abbr: "DO", abbr3: "DOM", coordinates: [18.735693, -70.162651] },
        { name: "Ecuador", abbr: "EC", abbr3: "ECU", coordinates: [-1.831239, -78.183406] },
        { name: "Egypt", abbr: "EG", abbr3: "EGY", coordinates: [26.820553, 30.802498] },
        { name: "El Salvador", abbr: "SV", abbr3: "SLV", coordinates: [13.794185, -88.89653] },
        { name: "Equatorial Guinea", abbr: "GQ", abbr3: "GNQ", coordinates: [1.650801, 10.267895] },
        { name: "Eritrea", abbr: "ER", abbr3: "ERI", coordinates: [15.179384, 39.782334] },
        { name: "Estonia", abbr: "EE", abbr3: "EST", coordinates: [58.595272, 25.013607] },
        { name: "Ethiopia", abbr: "ET", abbr3: "ETH", coordinates: [9.145, 40.489673] },
        { name: "Fiji", abbr: "FJ", abbr3: "FJI", coordinates: [-16.578193, 179.414413] },
        { name: "Finland", abbr: "FI", abbr3: "FIN", coordinates: [61.92411, 25.748151] },
        { name: "France", abbr: "FR", abbr3: "FRA", coordinates: [46.227638, 2.213749] },
        { name: "Gabon", abbr: "GA", abbr3: "GAB", coordinates: [-0.803689, 11.609444] },
        { name: "Gambia", abbr: "GM", abbr3: "GMB", coordinates: [13.443182, -15.310139] },
        { name: "Georgia", abbr: "GE", abbr3: "GEO", coordinates: [42.315407, 43.356892] },
        { name: "Germany", abbr: "DE", abbr3: "DEU", coordinates: [51.165691, 10.451526] },
        { name: "Ghana", abbr: "GH", abbr3: "GHA", coordinates: [7.946527, -1.023194] },
        { name: "Greece", abbr: "GR", abbr3: "GRC", coordinates: [39.074208, 21.824312] },
        { name: "Grenada", abbr: "GD", abbr3: "GRD", coordinates: [12.262776, -61.604171] },
        { name: "Guatemala", abbr: "GT", abbr3: "GTM", coordinates: [15.783471, -90.230759] },
        { name: "Guinea", abbr: "GN", abbr3: "GIN", coordinates: [9.945587, -9.696645] },
        { name: "Guinea-Bissau", abbr: "GW", abbr3: "GNB", coordinates: [11.803749, -15.180413] },
        { name: "Guyana", abbr: "GY", abbr3: "GUY", coordinates: [4.860416, -58.9301] },
        { name: "Haiti", abbr: "HT", abbr3: "HTI", coordinates: [18.971187, -72.285215] },
        { name: "Honduras", abbr: "HN", abbr3: "HND", coordinates: [15.199999, -86.241905] },
        { name: "Hungary", abbr: "HU", abbr3: "HUN", coordinates: [47.162494, 19.503304] },
        { name: "Iceland", abbr: "IS", abbr3: "ISL", coordinates: [64.963051, -19.020835] },
        { name: "India", abbr: "IN", abbr3: "IND", coordinates: [20.593684, 78.96288] },
        { name: "Indonesia", abbr: "ID", abbr3: "IDN", coordinates: [-0.789275, 113.921327] },
        { name: "Iran", abbr: "IR", abbr3: "IRN", coordinates: [32.427908, 53.688046] },
        { name: "Iraq", abbr: "IQ", abbr3: "IRQ", coordinates: [33.223191, 43.679291] },
        { name: "Ireland", abbr: "IE", abbr3: "IRL", coordinates: [53.41291, -8.24389] },
        { name: "Israel", abbr: "IL", abbr3: "ISR", coordinates: [31.046051, 34.851612] },
        { name: "Italy", abbr: "IT", abbr3: "ITA", coordinates: [41.87194, 12.56738] },
        { name: "Jamaica", abbr: "JM", abbr3: "JAM", coordinates: [18.109581, -77.297508] },
        { name: "Japan", abbr: "JP", abbr3: "JPN", coordinates: [36.204824, 138.252924] },
        { name: "Jordan", abbr: "JO", abbr3: "JOR", coordinates: [30.585164, 36.238414] },
        { name: "Kazakhstan", abbr: "KZ", abbr3: "KAZ", coordinates: [48.019573, 66.923684] },
        { name: "Kenya", abbr: "KE", abbr3: "KEN", coordinates: [-0.023559, 37.906193] },
        { name: "Kiribati", abbr: "KI", abbr3: "KIR", coordinates: [-3.370417, -168.734039] },
        { name: "Korea North", abbr: "KP", abbr3: "PRK", coordinates: [40.339852, 127.510093] },
        { name: "Korea South", abbr: "KR", abbr3: "KOR", coordinates: [35.907757, 127.766922] },
        { name: "Kosovo", abbr: "XK", abbr3: "XKX", coordinates: [42.602636, 20.902977] },
        { name: "Kuwait", abbr: "KW", abbr3: "KWT", coordinates: [29.31166, 47.481766] },
        { name: "Kyrgyzstan", abbr: "KG", abbr3: "KGZ", coordinates: [41.20438, 74.766098] },
        { name: "Laos", abbr: "LA", abbr3: "LAO", coordinates: [19.85627, 102.495496] },
        { name: "Latvia", abbr: "LV", abbr3: "LVA", coordinates: [56.879635, 24.603189] },
        { name: "Lebanon", abbr: "LB", abbr3: "LBN", coordinates: [33.854721, 35.862285] },
        { name: "Lesotho", abbr: "LS", abbr3: "LSO", coordinates: [-29.609988, 28.233608] },
        { name: "Liberia", abbr: "LR", abbr3: "LBR", coordinates: [6.428055, -9.429499] },
        { name: "Libya", abbr: "LY", abbr3: "LBY", coordinates: [26.3351, 17.228331] },
        { name: "Liechtenstein", abbr: "LI", abbr3: "LIE", coordinates: [47.166, 9.555373] },
        { name: "Lithuania", abbr: "LT", abbr3: "LTU", coordinates: [55.169438, 23.881275] },
        { name: "Luxembourg", abbr: "LU", abbr3: "LUX", coordinates: [49.815273, 6.129583] },
        { name: "Macao", abbr: "MO", abbr3: "MAC", coordinates: [22.198745, 113.543873] },
        { name: "Macedonia (FYROM)", abbr: "MK", abbr3: "MKD", coordinates: [41.608635, 21.745275] },
        { name: "Madagascar", abbr: "MG", abbr3: "MDG", coordinates: [-18.766947, 46.869107] },
        { name: "Malawi", abbr: "MW", abbr3: "MWI", coordinates: [-13.254308, 34.301525] },
        { name: "Malaysia", abbr: "MY", abbr3: "MYS", coordinates: [4.210484, 101.975766] },
        { name: "Maldives", abbr: "MV", abbr3: "MDV", coordinates: [3.202778, 73.22068] },
        { name: "Mali", abbr: "ML", abbr3: "MLI", coordinates: [17.570692, -3.996166] },
        { name: "Malta", abbr: "MT", abbr3: "MLT", coordinates: [35.937496, 14.375416] },
        { name: "Marshall Islands", abbr: "MH", abbr3: "MHL", coordinates: [7.131474, 171.184478] },
        { name: "Mauritania", abbr: "MR", abbr3: "MRT", coordinates: [21.00789, -10.940835] },
        { name: "Mauritius", abbr: "MU", abbr3: "MUS", coordinates: [-20.348404, 57.552152] },
        { name: "Mexico", abbr: "MX", abbr3: "MEX", coordinates: [23.634501, -102.552784] },
        { name: "Micronesia", abbr: "FM", abbr3: "FSM", coordinates: [7.425554, 150.550812] },
        { name: "Moldova", abbr: "MD", abbr3: "MDA", coordinates: [47.411631, 28.369885] },
        { name: "Monaco", abbr: "MC", abbr3: "MCO", coordinates: [43.750298, 7.412841] },
        { name: "Mongolia", abbr: "MN", abbr3: "MNG", coordinates: [46.862496, 103.846656] },
        { name: "Montenegro", abbr: "ME", abbr3: "MNE", coordinates: [42.708678, 19.37439] },
        { name: "Morocco", abbr: "MA", abbr3: "MAR", coordinates: [31.791702, -7.092620] },
        { name: "Mozambique", abbr: "MZ", abbr3: "MOZ", coordinates: [-18.665695, 35.529562] },
        { name: "Myanmar", abbr: "MM", abbr3: "MMR", coordinates: [21.913965, 95.956223] },
        { name: "Namibia", abbr: "NA", abbr3: "NAM", coordinates: [-22.95764, 18.49041] },
        { name: "Nauru", abbr: "NR", abbr3: "NRU", coordinates: [-0.522778, 166.931503] },
        { name: "Nepal", abbr: "NP", abbr3: "NPL", coordinates: [28.394857, 84.124008] },
        { name: "Netherlands", abbr: "NL", abbr3: "NLD", coordinates: [52.132633, 5.291266] },
        { name: "New Zealand", abbr: "NZ", abbr3: "NZL", coordinates: [-40.900557, 174.885971] },
        { name: "Nicaragua", abbr: "NI", abbr3: "NIC", coordinates: [12.865416, -85.207229] },
        { name: "Niger", abbr: "NE", abbr3: "NER", coordinates: [17.607789, 8.081666] },
        { name: "Nigeria", abbr: "NG", abbr3: "NGA", coordinates: [9.081999, 8.675277] },
        { name: "North Korea", abbr: "KP", abbr3: "PRK", coordinates: [40.339852, 127.510093] },
        { name: "Norway", abbr: "NO", abbr3: "NOR", coordinates: [60.472024, 8.468946] },
        { name: "Oman", abbr: "OM", abbr3: "OMN", coordinates: [21.512583, 55.923255] },
        { name: "Pakistan", abbr: "PK", abbr3: "PAK", coordinates: [30.375321, 69.345116] },
        { name: "Palau", abbr: "PW", abbr3: "PLW", coordinates: [7.51498, 134.58252] },
        { name: "Palestine", abbr: "PS", abbr3: "PSE", coordinates: [31.952162, 35.233154] },
        { name: "Panama", abbr: "PA", abbr3: "PAN", coordinates: [8.537981, -80.782127] },
        { name: "Papua New Guinea", abbr: "PG", abbr3: "PNG", coordinates: [-6.314993, 143.95555] },
        { name: "Paraguay", abbr: "PY", abbr3: "PRY", coordinates: [-23.442503, -58.443832] },
        { name: "Peru", abbr: "PE", abbr3: "PER", coordinates: [-9.189967, -75.015152] },
        { name: "Philippines", abbr: "PH", abbr3: "PHL", coordinates: [12.879721, 121.774017] },
        { name: "Poland", abbr: "PL", abbr3: "POL", coordinates: [51.919438, 19.145136] },
        { name: "Portugal", abbr: "PT", abbr3: "PRT", coordinates: [39.399872, -8.224454] },
        { name: "Qatar", abbr: "QA", abbr3: "QAT", coordinates: [25.354826, 51.183884] },
        { name: "Romania", abbr: "RO", abbr3: "ROU", coordinates: [45.943161, 24.96676] },
        { name: "Russia", abbr: "RU", abbr3: "RUS", coordinates: [61.52401, 105.318756] },
        { name: "Rwanda", abbr: "RW", abbr3: "RWA", coordinates: [-1.940278, 29.873888] },
        { name: "Saint Kitts and Nevis", abbr: "KN", abbr3: "KNA", coordinates: [17.357822, -62.782998] },
        { name: "Saint Lucia", abbr: "LC", abbr3: "LCA", coordinates: [13.909444, -60.978893] },
        { name: "Saint Vincent and the Grenadines", abbr: "VC", abbr3: "VCT", coordinates: [12.984305, -61.287228] },
        { name: "Samoa", abbr: "WS", abbr3: "WSM", coordinates: [-13.759029, -172.104629] },
        { name: "San Marino", abbr: "SM", abbr3: "SMR", coordinates: [43.94236, 12.457777] },
        { name: "Sao Tome and Principe", abbr: "ST", abbr3: "STP", coordinates: [0.18636, 6.613081] },
        { name: "Saudi Arabia", abbr: "SA", abbr3: "SAU", coordinates: [23.885942, 45.079162] },
        { name: "Senegal", abbr: "SN", abbr3: "SEN", coordinates: [14.497401, -14.452362] },
        { name: "Serbia", abbr: "RS", abbr3: "SRB", coordinates: [44.016521, 21.005859] },
        { name: "Seychelles", abbr: "SC", abbr3: "SYC", coordinates: [-4.679574, 55.491977] },
        { name: "Sierra Leone", abbr: "SL", abbr3: "SLE", coordinates: [8.460555, -11.779889] },
        { name: "Singapore", abbr: "SG", abbr3: "SGP", coordinates: [1.352083, 103.819836] },
        { name: "Slovakia", abbr: "SK", abbr3: "SVK", coordinates: [48.669026, 19.699024] },
        { name: "Slovenia", abbr: "SI", abbr3: "SVN", coordinates: [46.151241, 14.995463] },
        { name: "Solomon Islands", abbr: "SB", abbr3: "SLB", coordinates: [-9.64571, 160.156194] },
        { name: "Somalia", abbr: "SO", abbr3: "SOM", coordinates: [5.152149, 46.199616] },
        { name: "South Africa", abbr: "ZA", abbr3: "ZAF", coordinates: [-30.559482, 22.937506] },
        { name: "South Korea", abbr: "KR", abbr3: "KOR", coordinates: [35.907757, 127.766922] },
        { name: "South Sudan", abbr: "SS", abbr3: "SSD", coordinates: [6.87699, 31.30697] },
        { name: "Spain", abbr: "ES", abbr3: "ESP", coordinates: [40.463667, -3.74922] },
        { name: "Sri Lanka", abbr: "LK", abbr3: "LKA", coordinates: [7.873054, 80.771797] },
        { name: "Sudan", abbr: "SD", abbr3: "SDN", coordinates: [12.862807, 30.217636] },
        { name: "Suriname", abbr: "SR", abbr3: "SUR", coordinates: [3.919305, -56.027783] },
        { name: "Swaziland", abbr: "SZ", abbr3: "SWZ", coordinates: [-26.522503, 31.465866] },
        { name: "Sweden", abbr: "SE", abbr3: "SWE", coordinates: [60.128161, 18.643501] },
        { name: "Switzerland", abbr: "CH", abbr3: "CHE", coordinates: [46.818188, 8.227512] },
        { name: "Syria", abbr: "SY", abbr3: "SYR", coordinates: [34.802075, 38.996815] },
        { name: "Taiwan", abbr: "TW", abbr3: "TWN", coordinates: [23.69781, 120.960515] },
        { name: "Tajikistan", abbr: "TJ", abbr3: "TJK", coordinates: [38.861034, 71.276093] },
        { name: "Tanzania", abbr: "TZ", abbr3: "TZA", coordinates: [-6.369028, 34.888822] },
        { name: "Thailand", abbr: "TH", abbr3: "THA", coordinates: [15.870032, 100.992541] },
        { name: "Timor-Leste", abbr: "TL", abbr3: "TLS", coordinates: [-8.874217, 125.727539] },
        { name: "Togo", abbr: "TG", abbr3: "TGO", coordinates: [8.619543, 0.824782] },
        { name: "Tonga", abbr: "TO", abbr3: "TON", coordinates: [-21.178986, -175.198242] },
        { name: "Trinidad and Tobago", abbr: "TT", abbr3: "TTO", coordinates: [10.691803, -61.222503] },
        { name: "Tunisia", abbr: "TN", abbr3: "TUN", coordinates: [33.886917, 9.537499] },
        { name: "Turkey", abbr: "TR", abbr3: "TUR", coordinates: [38.963745, 35.243322] },
        { name: "Turkmenistan", abbr: "TM", abbr3: "TKM", coordinates: [38.969719, 59.556278] },
        { name: "Tuvalu", abbr: "TV", abbr3: "TUV", coordinates: [-7.109535, 177.64933] },
        { name: "Uganda", abbr: "UG", abbr3: "UGA", coordinates: [1.373333, 32.290275] },
        { name: "Ukraine", abbr: "UA", abbr3: "UKR", coordinates: [48.379433, 31.16558] },
        { name: "United Arab Emirates", abbr: "AE", abbr3: "ARE", coordinates: [23.424076, 53.847818] },
        { name: "United Kingdom", abbr: "GB", abbr3: "GBR", coordinates: [55.378051, -3.435973] },
        { name: "United States", abbr: "US", abbr3: "USA", coordinates: [37.09024, -95.712891] },
        { name: "Uruguay", abbr: "UY", abbr3: "URY", coordinates: [-32.522779, -55.765835] },
        { name: "Uzbekistan", abbr: "UZ", abbr3: "UZB", coordinates: [41.377491, 64.585262] },
        { name: "Vanuatu", abbr: "VU", abbr3: "VUT", coordinates: [-15.376706, 166.959158] },
        { name: "Venezuela", abbr: "VE", abbr3: "VEN", coordinates: [6.42375, -66.58973] },
        { name: "Vietnam", abbr: "VN", abbr3: "VNM", coordinates: [14.058324, 108.277199] },
        { name: "Yemen", abbr: "YE", abbr3: "YEM", coordinates: [15.552727, 48.516388] },
        { name: "Zambia", abbr: "ZM", abbr3: "ZMB", coordinates: [-13.133897, 27.849332] },
        { name: "Zimbabwe", abbr: "ZW", abbr3: "ZWE", coordinates: [-19.015438, 29.154857] },
    ];

    static createCountryMap = () => { 
        const map = {};

        for (let i = 0; i < AddressModel.countries.length; i++) {
            const country = AddressModel.countries[i];
            map[country.abbr] = country;
            map[country.abbr3] = country;
        }

        return map;
    };

    static createStateMap = () => { 
        const map = {};

        for (let i = 0; i < AddressModel.states.length; i++) {
            const state = AddressModel.states[i];
            map[state.abbr] = state;
            map[state.name] = state;
        }

        return map;
    };

    constructor(json) {
        if (!json) json = {};

        this.id = json.id || null;
        this.street = json.street || null;
        this.unit = json.unit || null;
        this.city = json.city || null;
        this.state = json.state || null;
        this.zip = json.zip || null;
        this.country = json.country || "US";
        this.lat = json.lat || null;
        this.lon = json.lon || null;
        this.status = json.status || 0;

        this.created = !!json.created ? new Date(json.created) : null;
        this.modified = !!json.modified ? new Date(json.modified) : null;
    }

    toAddressLine() { 
        const items = [];
        if (!!this.street) items.push(this.street);
        if (!!this.unit) items.push(this.unit);

        return items.join(", ").trim();
    }

    toCityStateZip(includeCountry = false) { 
        let items = [];
        if (!!this.city) items.push(this.city);
        if (!!this.state) items.push(this.state);

        const cityState = items.join(", ").trim();
        items = [];

        if (!!cityState) items.push(cityState);
        if (this.zip) items.push(this.zip);
        
        if (!!this.country && includeCountry) {
            const country = AddressModel.countryMap[this.country];
            items.push(country?.name || this.country);
        }

        return items.join(" ").trim();
    }
    
    toJson() {
        return {
            street: this.street,
            unit: this.unit,
            city: this.city,
            state: this.state,
            zip: this.zip,
            country: this.country
        };
    }

    static fromJsonArray(jsonArray) { 
        if (!jsonArray || !Array.isArray(jsonArray)) return [];
        return jsonArray.map(json => new AddressModel(json));
    }
}

export default AddressModel;
