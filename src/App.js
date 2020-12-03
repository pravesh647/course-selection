// A react app that constructs a course listings for incoming freshmans in the University of the South

import "./App.css";
import Menu from "./Components/Menu";
// import Row from "./Components/Row.js";

function App() {
  // A 3d array 'items' object containing all the data
  // eslint-disable-next-line
  const items = [
    // Discipline
    {
      name: "Fine Arts",
      hasSubMenu: true,
      rightIcon: true,
      subMenu: [
        // Program
        {
          name: "Art (ART)",
          linkInfo: "https://new.sewanee.edu/programs-of-study/art/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "103 Introduction to Lens and Time-based Media",
              popUpLinkInfo:
                "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=ART&crse_numb_in=103",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "104 Introduction to Three- and Four-Dimensional Media",
              popUpLinkInfo:
                "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=ART&crse_numb_in=104",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "105 Introduction to Drawing and Two-Dimensional Media",
              popUpLinkInfo:
                "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=ART&crse_numb_in=105",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "248 Video off the Wall: Topics in Video Installation Art",
              popUpLinkInfo:
                "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=ART&crse_numb_in=248",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "263 Intermediate Documentary Projects in Photography",
              popUpLinkInfo:
                "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=ART&crse_numb_in=263",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "299 Painting from Life",
              popUpLinkInfo:
                "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=ART&crse_numb_in=299",
              popUp: true,
              leftIcon: true,
            },
          ],
        },

        // Program
        {
          name: "Art History (ARTH)",
          linkInfo: "https://new.sewanee.edu/programs-of-study/art-history/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "104 Survey of Western Art II",
              popUpLinkInfo:
                "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=ARTH&crse_numb_in=104",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "105	The Arts of Asia",
              popUpLinkInfo:
                "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=ARTH&crse_numb_in=105",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "202	History of Photography",
              popUpLinkInfo:
                "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=ARTH&crse_numb_in=202",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "309	Sacred Arts of China",
              popUpLinkInfo:
                "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=ARTH&crse_numb_in=309",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
        // Program
        {
          name: "Dance (DANC)",
          linkInfo: "https://new.sewanee.edu/programs-of-study/dance/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "105	Experiencing Dance History and Culture",
              popUpLinkInfo:
                "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=DANC&crse_numb_in=105",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "250	Dance Ensemble",
              popUpLinkInfo:
                "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=DANC&crse_numb_in=250",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "254	Contemporary Dance II",
              // popUpLinkInfo: "",
              // popUp: true,
              leftIcon: true,
            },
          ],
        },
        // Program
        {
          name: "Film Studies (FILM)",
          linkInfo: "https://new.sewanee.edu/programs-of-study/film-studies/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "103	Introduction to Lens and Time-based Media",
              popUpLinkInfo:
                "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=ART&crse_numb_in=103",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "104	Introduction to Three- and Four-Dimensional Media",
              popUpLinkInfo:
                "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=ART&crse_numb_in=104",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "263	Intermediate Documentary Projects in Photography",
              popUpLinkInfo:
                "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=ART&crse_numb_in=263",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
        // Program
        {
          name: "Music (MUSC)",
          linkInfo: "https://new.sewanee.edu/programs-of-study/music/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "104	Music Fundamentals: Keyboard Skills",
              popUpLinkInfo:
                "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=MUSC&crse_numb_in=104",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "111	Music of Western Civilization",
              popUpLinkInfo:
                "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=MUSC&crse_numb_in=111",
              popUp: true,
              leftIcon: true,
            },
            {
              name:
                "143	Move on up a Little Higher: The History of Gospel Music",
              popUpLinkInfo:
                "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=MUSC&crse_numb_in=143",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "211	Song, Symphony, Stage: Music in Western Civilization",
              popUpLinkInfo:
                "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=MUSC&crse_numb_in=211",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "241	'Ramblin Blues': The Back Roads of Southern Music",
              popUpLinkInfo:
                "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=MUSC&crse_numb_in=241",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "260	Introduction to Part Writing",
              popUpLinkInfo:
                "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=MUSC&crse_numb_in=260",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
        // Program
        {
          name: "Theatre (THTR)",
          linkInfo: "https://new.sewanee.edu/programs-of-study/theatre-arts/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "101	Introduction to Theatre",
              popUpLinkInfo:
                "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=THTR&crse_numb_in=101",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "111	Elements of Production",
              popUpLinkInfo:
                "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=THTR&crse_numb_in=111",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "112	Elements of Performance",
              popUpLinkInfo:
                "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=THTR&crse_numb_in=112",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "131	Fundamentals of Acting",
              popUpLinkInfo:
                "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=THTR&crse_numb_in=131",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "246	Design and Décor Period Styles",
              popUpLinkInfo:
                "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=THTR&crse_numb_in=246",
              popUp: true,
              leftIcon: true,
            },
            {
              name:
                "301	Special Topics in Theatre Design and Technology: Advanced Scenography",
              popUpLinkInfo:
                "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=THTR&crse_numb_in=301",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "347	Scene Painting",
              popUpLinkInfo:
                "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=THTR&crse_numb_in=347",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
      ],
    },

    // Discipline -------------------------------
    {
      name: "Social Sciences ",
      hasSubMenu: true,
      rightIcon: true,
      subMenu: [
        // Program
        {
          name: "Archaeology (ARCH)",
          linkInfo: "https://new.sewanee.edu/programs-of-study/archaeology/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "213	Cultural Resource Practicum",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=ARCH&crse_numb_in=213",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
        // Program
        {
          name: "Antrhropology (ANTH)",
          linkInfo: "https://new.sewanee.edu/programs-of-study/anthropology/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "109	World Prehistory",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=ANTH&crse_numb_in=109",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
        // Program
        {
          name: "Business (BUSI)",
          linkInfo: "https://new.sewanee.edu/programs-of-study/business/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "101	Introduction to Microeconomics",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=ECON&crse_numb_in=101",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
        // Program
        {
          name: "Economics (ECON)",
          linkInfo: "https://new.sewanee.edu/programs-of-study/economics/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "101	Introduction to Microeconomics",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=ECON&crse_numb_in=101",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "102	Introduction to Macroeconomics",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=ECON&crse_numb_in=102",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
        // Program
        {
          name: "Education (EDUC)",
          linkInfo: "https://new.sewanee.edu/programs-of-study/education/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "161	Introduction to Educational Psychology",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=EDUC&crse_numb_in=161",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "226	Teaching Children's Literature",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=EDUC&crse_numb_in=226",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
        // Program
        {
          name: "Finance (FINC)",
          linkInfo: "https://new.sewanee.edu/programs-of-study/finance/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "101	Introduction to Microeconomics",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=ECON&crse_numb_in=101",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "102	Introduction to Macroeconomics",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=ECON&crse_numb_in=102",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
        // Program
        {
          name: "History (HIST)",
          linkInfo: "https://new.sewanee.edu/programs-of-study/history/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "111	Religion and Power in the Pre-Modern West",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=111",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "124	World in Twentieth Century ",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=124",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "127	Atlantic Britons, 1500-1850",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=127",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "129	Jerusalem: Histories of the Real and Imagined Holy City",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=129",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "131	'We are not what we seem': Race, Class, and Identity in American History since 1863",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=131",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "132	Witches, Witch-hunting and Fear in Early Modern Europe, 1450-1700",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=132",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "133	Before #MeToo: Sex, Power, and Work in the Modern U.S.",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=133",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "201	History of the United States I (AP/IB)",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=201",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "205	History of Britain and Ireland I (AP/IB)",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=205",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "207	Russia: Autocracy, Orthodoxy, Serfdom, Revolution (AP/IB)",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=207",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "209	Early Modern Europe (AP/IB)",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=209",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "223	Latin American History to 1825 (AP/IB)",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=223",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "231	African-American History to 1865 (AP/IB)",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=231",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "235	Introduction to Public History (AP/IB)",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=235",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "238	Women in U.S. History, 1870 to the Present (AP/IB)",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=238",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "271	The French Revolutionary Era, 1789-1814 (AP/IB)",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=271",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "283	Environmental History (AP/IB)",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=283",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "303	Medieval Europe I (AP/IB)",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=303",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "357	Latin American Biographies (AP/IB)",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=357",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "378	Sexuality and the Self in Modern Europe (AP/IB)",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=378",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "381	Travel Cultures, Global Encounters, 1800-1950 (AP/IB)",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=381",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "390	Topics in European History: Early Modern Europe in Fiction and Film (AP/IB)",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=390",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
        // Program
        {
          name: "Library Resources (LIBR)",
          linkInfo: "https://new.sewanee.edu/programs-of-study/library-science/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "101	Academic Research and Critical Thinking ",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=LIBR&crse_numb_in=101",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
        // Program
        {
          name: "Politics (POLS)",
          linkInfo: "https://new.sewanee.edu/programs-of-study/politics/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "101	American Government and Politics",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=POLS&crse_numb_in=101",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "150	World Politics",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=POLS&crse_numb_in=150",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "204	Legislative Process",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=POLS&crse_numb_in=204",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "210	The Politics of Poverty and Inequality",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=POLS&crse_numb_in=210",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "220	International Conflict",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=POLS&crse_numb_in=220",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "221	Peace and Diplomacy",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=POLS&crse_numb_in=221",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "223	Public Policy",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=POLS&crse_numb_in=223",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "227	Africa in World Politics",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=POLS&crse_numb_in=227",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "248	China's Environmental Crisis",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=POLS&crse_numb_in=248",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
        // Program
        {
          name: "Pscyhology (PSYC)",
          linkInfo: "https://new.sewanee.edu/programs-of-study/psychology/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "100	Introduction to Psychology (Lab)",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=PSYC&crse_numb_in=100",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "101	Principles of Psychology",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=PSYC&crse_numb_in=101",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
      ],
    },
    // Discipline
    {
      name: "Sciences",
      hasSubMenu: true,
      rightIcon: true,
      subMenu: [
        // Program
        {
          name: "Biology (BIOL)",
          linkInfo: "https://new.sewanee.edu/programs-of-study/biology/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "130	Field Investigations in Biology",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=BIOL&crse_numb_in=130",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "133	Introductory Molecular Biology and Genetics",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=BIOL&crse_numb_in=133",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "180	Principles of Human Nutrition",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=BIOL&crse_numb_in=180",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
        // Program
        {
          name: "Chemistry (CHEM)",
          linkInfo: "https://new.sewanee.edu/programs-of-study/chemistry/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "119	Principles of Chemistry",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=CHEM&crse_numb_in=119",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "150	Advanced General Chemistry (Lab) (AP/IB)",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=CHEM&crse_numb_in=150",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
        // Program
        {
          name: "Environmental Studies (ENST)",
          linkInfo: "https://new.sewanee.edu/programs-of-study/environmental-studies/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "230	Native Americans and Land Use",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=ENST&crse_numb_in=230",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
        // Program
        {
          name: "Forestry (FORS)",
          linkInfo: "https://new.sewanee.edu/programs-of-study/forestry/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "121	Introduction to Forestry (Lab)",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=FORS&crse_numb_in=121",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
        // Program
        {
          name: "Geology (GEOL)",
          linkInfo: "https://new.sewanee.edu/programs-of-study/geology/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "121	Physical Geology (Lab)",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=GEOL&crse_numb_in=121",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
        // Program
        {
          name: "Neuroscience (NEUR)",
          linkInfo: "https://new.sewanee.edu/programs-of-study/neuroscience/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "101	Introduction to Neuroscience",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=NEUR&crse_numb_in=101",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
        // Program
        {
          name: "Physics & Astronomy (PHYS)",
          linkInfo: "https://new.sewanee.edu/programs-of-study/physics-astronomy/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "101	General Physics I (Lab)",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=PHYS&crse_numb_in=101",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "103	Modern Mechanics (Lab)",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=PHYS&crse_numb_in=103",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "149	Survey of Astronomy",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=PHYS&crse_numb_in=149",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "201	Optics",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=PHYS&crse_numb_in=201",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "203	Intermediate Electricity and Magnetism I",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=PHYS&crse_numb_in=203",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "250	Solar System Astronomy (Lab)",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=PHYS&crse_numb_in=250",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
        // Program
        {
          name: "Psychology (PSYC)",
          linkInfo: "https://new.sewanee.edu/programs-of-study/psychology/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "100	Introduction to Psychology (Lab)",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=PSYC&crse_numb_in=100",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "101	Principles of Psychology",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=PSYC&crse_numb_in=101",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
      ],
    },
    // Discipline
    {
      name: "Math & Computer Science",
      hasSubMenu: true,
      rightIcon: true,
      subMenu: [
        // Program
        {
          name: "Computer Science (CSCI)",
          linkInfo: "https://new.sewanee.edu/programs-of-study/computer-science/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "157	Introduction to Modeling and Programming",
              popUpLinkInfo: "",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
        // Program
        {
          name: "Mathematics (MATH)",
          linkInfo: "https://new.sewanee.edu/programs-of-study/mathematics/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "100	Topics in Mathematics",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=MATH&crse_numb_in=100",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "101	Calculus I",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=MATH&crse_numb_in=101",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "102	Calculus II",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=MATH&crse_numb_in=102",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "207	Multidimensional Calculus",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=MATH&crse_numb_in=207",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "210	Linear Algebra",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=MATH&crse_numb_in=210",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "215	Discrete Mathematical Structures",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=MATH&crse_numb_in=215",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
      ],
    },
    // Discipline
    {
      name: "Humanities",
      hasSubMenu: true,
      rightIcon: true,
      subMenu: [
        // Program
        {
          name: "African and African American Studies (AFST) ",
          linkInfo: "https://new.sewanee.edu/programs-of-study/african-and-african-american-studies/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "210	Blackness in American Popular Culture",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=AFST&crse_numb_in=210",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "320	Black Autobiography in the United States",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=AFST&crse_numb_in=320",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
        // Program
        {
          name: "American Studies (AMST)",
          linkInfo: "https://new.sewanee.edu/programs-of-study/american-studies/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "210	Blackness in American Popular Culture",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=AFST&crse_numb_in=210",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "212	Studies in Literature: Slavery and Race in the American Literary Imagination",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=ENGL&crse_numb_in=212",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "201	History of the United States I",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=201",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "231	African-American History to 1865",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=231",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "235	Introduction to Public History",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=235",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "238	Women in U.S. History, 1870 to the Present",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=238",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "204	Legislative Process",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=POLS&crse_numb_in=204",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "223	Public Policy",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=POLS&crse_numb_in=223",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "119	Religion in American History",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=RELG&crse_numb_in=119",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "160	Introduction to Black Women's Studies",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=WMST&crse_numb_in=160",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
        // Program
        {
          name: "Archaeology (ARCH)",
          linkInfo: "https://new.sewanee.edu/programs-of-study/archaeology/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "213	Cultural Resource Practicum",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=ARCH&crse_numb_in=213",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
        // Program
        {
          name: "Asian Studies (ASIA)",
          linkInfo: "https://new.sewanee.edu/programs-of-study/asian-studies/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "105	The Arts of Asia",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=ARTH&crse_numb_in=105",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "309	Sacred Arts of China",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=ARTH&crse_numb_in=309",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "164	Studying Asian Religions (in the West)",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=RELG&crse_numb_in=164",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "248	China's Environmental Crisis",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=POLS&crse_numb_in=248",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
        // Program
        {
          name: "Classics (CLST)",
          linkInfo: "https://new.sewanee.edu/programs-of-study/classical-studies/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "124	Explorations in Ancient Ethics, Religion, and Belief: The Christians as the Romans Saw Them",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=CLST&crse_numb_in=124",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "150	Classics in Cinema",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=CLST&crse_numb_in=150",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
        // Program
        {
          name: "Creative Writing (WRIT)",
          linkInfo: "https://new.sewanee.edu/programs-of-study/creative-writing/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "207	Creative Writing: Playwriting",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=WRIT&crse_numb_in=207",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
        // Program
        {
          name: "English (ENGL)",
          linkInfo: "https://new.sewanee.edu/programs-of-study/english/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "101	Literature and Composition",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=ENGL&crse_numb_in=101",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "200	Representative Masterpieces",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=ENGL&crse_numb_in=200",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "212	Studies in Literature: Slavery and Race in the American Literary Imagination",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=ENGL&crse_numb_in=212",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
        // Program
        {
          name: "History (HIST)",
          linkInfo: "https://new.sewanee.edu/programs-of-study/history/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "111	Religion and Power in the Pre-Modern West",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=111",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "124	World in Twentieth Century ",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=124",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "127	Atlantic Britons, 1500-1850",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=127",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "129	Jerusalem: Histories of the Real and Imagined Holy City",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=129",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "131	'We are not what we seem': Race, Class, and Identity in American History since 1863",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=131",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "132	Witches, Witch-hunting and Fear in Early Modern Europe, 1450-1700",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=132",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "133	Before #MeToo: Sex, Power, and Work in the Modern U.S.",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=133",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "201	History of the United States I (AP/IB)",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=201",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "205	History of Britain and Ireland I (AP/IB)",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=205",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "207	Russia: Autocracy, Orthodoxy, Serfdom, Revolution (AP/IB)",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=207",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "209	Early Modern Europe (AP/IB)",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=209",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "223	Latin American History to 1825 (AP/IB)",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=223",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "231	African-American History to 1865 (AP/IB)",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=231",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "235	Introduction to Public History (AP/IB)",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=235",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "238	Women in U.S. History, 1870 to the Present (AP/IB)",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=238",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "271	The French Revolutionary Era, 1789-1814 (AP/IB)",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=271",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "283	Environmental History (AP/IB)",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=283",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "303	Medieval Europe I (AP/IB)",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=303",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "357	Latin American Biographies (AP/IB)",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=357",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "378	Sexuality and the Self in Modern Europe (AP/IB)",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=378",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "381	Travel Cultures, Global Encounters, 1800-1950 (AP/IB)",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=381",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "390	Topics in European History: Early Modern Europe in Fiction and Film (AP/IB)",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=390",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
        // Program
        {
          name: "Humanities (HUMN) ",
          linkInfo: "https://new.sewanee.edu/programs-of-study/humanities/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "103	Experience, Expression, and Exchange in Western Culture: Texts and Contexts of the Ancient World",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HUMN&crse_numb_in=103",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "204	Experience, Expression, and Exchange: Utopias and Dystopias",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HUMN&crse_numb_in=204",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
        // Program
        {
          name: "International and Global Studies (INGS)",
          linkInfo: "https://new.sewanee.edu/programs-of-study/international-and-global-studies/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "309	Sacred Arts of China",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=ARTH&crse_numb_in=309",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "205	History of Britain and Ireland I",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=205",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "207	Russia: Autocracy, Orthodoxy, Serfdom, Revolution",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=207",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "209	Early Modern Europe",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=209",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "223	Latin American History to 1825",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=223",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "271	The French Revolutionary Era, 1789-1814",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=271",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "378	Sexuality and the Self in Modern Europe",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=378",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "390	Topics in European History: Early Modern Europe in Fiction and Film",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=390",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "207	Globalization, Popular Culture, and Politics in West Africa",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=INGS&crse_numb_in=207",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "201	Youth Cultures in Urban Africa",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=INGS&crse_numb_in=201",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "104	Oil: The Fuel of Globalization",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=INGS&crse_numb_in=104",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "350	Special Topics: Italian Cinema",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=ITAL&crse_numb_in=350",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "227	Africa in World Politics",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=POLS&crse_numb_in=227",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "248	China's Environmental Crisis",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=POLS&crse_numb_in=248",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "220	International Conflict",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=POLS&crse_numb_in=220",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "164	Studying Asian Religions (in the West)",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=RELG&crse_numb_in=164",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "220	Holocaust, Religion, Morality",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=RELG&crse_numb_in=220",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "352	20th-Century Russian Literature in English Translation",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=RUSN&crse_numb_in=352",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
        // Program
        {
          name: "Italian (ITAL) ",
          linkInfo: "https://new.sewanee.edu/programs-of-study/italian-studies/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "350	Special Topics: Italian Cinema",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=ITAL&crse_numb_in=350",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
        // Program
        {
          name: "Philosophy (PHIL)",
          linkInfo: "https://new.sewanee.edu/programs-of-study/philosophy/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "203	Ancient Philosophy from Homer to Augustine",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=PHIL&crse_numb_in=203",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "205	Freedom, Justice, and Commerce",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=PHIL&crse_numb_in=205",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "310	Faith in Philosophy and Literature",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=PHIL&crse_numb_in=310",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
        // Program
        {
          name: "Religious Studies (RELG)",
          linkInfo: "https://new.sewanee.edu/programs-of-study/religious-studies/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "119	Religion in American History",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=RELG&crse_numb_in=119",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "141	Introduction to the Bible",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=RELG&crse_numb_in=141",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "164	Studying Asian Religions (in the West)",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=RELG&crse_numb_in=164",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "220	Holocaust, Religion, Morality",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=RELG&crse_numb_in=220",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "229	Death, Dying, and Grief",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=RELG&crse_numb_in=229",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "312	Matter and Spirit",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=RELG&crse_numb_in=312",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
        // Program
        {
          name: "Rhetoric (RHET) ",
          linkInfo: "https://new.sewanee.edu/programs-of-study/rhetoric/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "101	Public Speaking",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=RHET&crse_numb_in=101",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "201	Introduction to Rhetoric",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=RHET&crse_numb_in=201",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "491	Topics: Rhetoric of Mass and Social Media",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=RHET&crse_numb_in=491",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
        // Program
        {
          name: "Russian (RUSN)",
          linkInfo: "https://new.sewanee.edu/programs-of-study/russian/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "352	20th-Century Russian Literature in English Translation",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=RUSN&crse_numb_in=352",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
        // Program
        {
          name: "Southern Appalachian Studies (SAST)",
          linkInfo: "https://new.sewanee.edu/programs-of-study/southern-appalachian-studies/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "213	Cultural Resource Practicum",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=ARCH&crse_numb_in=213",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "235	Introduction to Public History",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=235",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "241	'Ramblin' Blues': The Back Roads of Southern Music",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=MUSC&crse_numb_in=241",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "210	The Politics of Poverty and Inequality",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=POLS&crse_numb_in=210",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
        // Program
        {
          name: "Women's and Gender Studies (WMST)",
          linkInfo: "https://new.sewanee.edu/programs-of-study/women-s-and-gender-studies/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "210	Blackness in American Popular Culture",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=AFST&crse_numb_in=210",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "320	Black Autobiography in the United States",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=AFST&crse_numb_in=320",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "132	Witches, Witch-hunting and Fear in Early Modern Europe, 1450-1700",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=132",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "133	Before #MeToo: Sex, Power, and Work in the Modern U.S.",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=133",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "238	Women in U.S. History, 1870 to the Present",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=238",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "378	Sexuality and the Self in Modern Europe",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=HIST&crse_numb_in=378",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "210	The Politics of Poverty and Inequality",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=POLS&crse_numb_in=210",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "160	Introduction to Black Women's Studies",
              popUpLinkInfo: "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=WMST&crse_numb_in=160",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
      ],
    },
    // Discipline
    {
      name: "Advanced Foreign Language",
      hasSubMenu: true,
      rightIcon: true,
      subMenu: [
        // Program
        {
          name: "French & French Studies (FREN) ",
          linkInfo:
            "https://new.sewanee.edu/programs-of-study/french-and-french-studies/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "313	Writing and Speaking French",
              popUpLinkInfo:
                "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=FREN&crse_numb_in=313",
              popUp: true,
              leftIcon: true,
            },
            {
              name:
                "314	Introduction to Literature, Culture, and History of the French-Speaking World",
              popUpLinkInfo:
                "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=FREN&crse_numb_in=314",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "407	Coupling and Creativity in the 19th Century",
              popUpLinkInfo:
                "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=FREN&crse_numb_in=407",
              popUp: true,
              leftIcon: true,
            },
            {
              name: "415	The History of French Cinema",
              popUpLinkInfo:
                "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=FREN&crse_numb_in=415",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
        {
          name: "German & German Studies (GRMN)",
          // linkInfo: "",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "312	Cultural Inquiry: Pop Culture and Society",
              popUpLinkInfo:
                "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=GRMN&crse_numb_in=312",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
        {
          name: "Latin (LATN) ",
          linkInfo: "https://new.sewanee.edu/programs-of-study/russian/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "407	Vergil",
              popUpLinkInfo:
                "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=LATN&crse_numb_in=407",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
        // Program
        {
          name: "Russian (RUSN) ",
          linkInfo: "https://new.sewanee.edu/programs-of-study/russian/",
          rightIcon: true,
          leftIcon: true,
          hasSubMenu: true,
          subMenu: [
            {
              name: "304	Contemporary Russian in Cultural Context",
              popUpLinkInfo:
                "https://ssb.sewanee.edu/cis_uoss/bwckctlg.p_disp_course_detail?cat_term_in=202110&subj_code_in=RUSN&crse_numb_in=304",
              popUp: true,
              leftIcon: true,
            },
          ],
        },
      ],
    },

    // Discipline
  ];

// =======End of creating 3d array 'items' object containing all the data

  return (
    <div className="App">
      <Menu items={items} />
      {/* <Row name="Test" leftIcon={true}/> */}
    </div>
  );
}

export default App;
