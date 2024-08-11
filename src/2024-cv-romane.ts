export type Cv = {
  title?: string
  name: string
  avatarUrl: string
  subTitle: string
  location: string
  phone: string
  email: string
  skills: {
    title: string
    content: Content[]
  }[]
  sections: {
    title: string
    sub: {
      title: string
      location: string
      org: string
      date: [Date, Date | undefined]
      content: Content[]
    }[],
  }[]
}

export type Content = {
  title: string
  desc?: string
  date?: string
  location?: string
}

export const cvRomane: Cv = {
  avatarUrl: '/avatar-romane.jpeg',
  title: '',
  name: 'Romane Breton',
  subTitle: '34 years old',
  location: 'French',
  phone: '+33 616 887 502',
  email: 'romane.m.breton@gmail.com',
  skills: [
    {
      title: 'Education',
      content: [
        {
          date: [new Date(2013), new Date(2014)],
          org: 'Institute of International Humanitarian Studies',
          location: 'Aix-Marseille University, France',
          title: 'Master’s degree in Humanitarian Action and Humanitarian Law (Master 2) – with high distinction',
          desc: '<b>Dissertation:</b> "Transitional Justice in Burundi: amnesty at the heart of peace-building and national reconciliation issues."',
        },
        {
          date: [new Date(2013), new Date(2014)],
          org: 'Institute of International Humanitarian Studies',
          location: 'Aix-Marseille University, France',
          title: 'Advanced Diploma in "Field legal officer for Human Rights"',
          desc: '<b>Dissertation:</b> "The governance structure of the State of Palestine"',
        },
        {
          date: [new Date(2010), new Date(2014)],
          org: 'Institute of International Humanitarian Studies',
          location: 'Rennes, France',
          title: 'Master’s degree in “International and European Affairs” – with distinction',
          desc: '<b>Dissertation:</b> "The Palestinian refugee camps in Lebanon: symbolic spaces of the construction of Palestinian identity in exile, its challenges and limitations (1948-1993)."',
        },
      ]
    },
    {
      title: 'Languages',
      content: [
        {title: 'French', desc: 'Mother tongue'},
        {title: 'English', desc: 'Fluent'},
        {title: 'Spanish', desc: 'Fluent'},
        {title: 'Italian', desc: 'Intermediate'},
        {title: 'Arabic', desc: 'Beginner'},
      ]
    },
    {
      title: 'Trainings & Certifications',
      content: [
        {title: 'Military training with the French Air Force', desc: 'Airbase 701, Salon de Provence, France', date: 'February 2014',},
        {title: 'Certificate of International Humanitarian Law dissemination', desc: 'French Red Cross', date: 'April 2014',},
        {title: 'Psychological trauma among refugees', desc: 'France terre d’asile', date: 'January 2016',},
        {title: 'Preventing psychosocial risks among team members', desc: 'Compétences Prévention ', date: 'October 2016',},
        {title: 'Identifying and protecting victims of trafficking', desc: 'France terre d’asile ', date: 'November 2016',},
        {title: 'Hazardous Environment Awareness Training (HEAT)', desc: 'DRC, Tunisia ', date: 'October 2020',},
        {title: 'DRC Protection training, DRC Global Protection Unit Team', date: 'November 2021',},
        {title: 'Hazardous Environment Awareness Training (HEAT)', desc: 'Safer Access, Ukraine', date: 'April 2023',}
      ]
    }
  ],
  sections: [
    {
      title: 'WORK EXPERIENCE',
      sub: [
        {
          title: 'Country Protection Coordinator',
          location: 'Kyiv, Ukraine',
          org: 'Danish Refugee Council',
          date: [new Date(2024, 1, 1), undefined],
          content: [
            {title: 'Protection Program Oversight', desc: 'Managed the technical quality and expansion of DRC’s $14 million/year protection program in Ukraine.'},
            {title: 'Technical Supervision', desc: 'Provided guidance to the technical team and six field protection managers.'},
            {title: 'Recruitment and Nationalization', desc: 'Led the recruitment of protection staff and supported nationalizing managerial positions.'},
            {title: 'Strategic Planning', desc: 'Conducted strategic planning workshops and contributed to the country strategy.'},
            {title: 'Monitoring System Establishment', desc: 'Established a protection monitoring system and produced reports and visual snapshots.'},
            {title: 'Tool Development', desc: 'Developed and implemented technical tools and guidelines.'},
            {title: 'Harmonization', desc: 'Unified data collection and reporting tools across teams.'},
            {title: 'External Coordination', desc: 'Represented DRC in forums and donor meetings.'},
            {title: 'Internal Coordination'},
            {title: 'Proposal and Budget Development'},
            {title: 'AGDM Focal Point'}
          ]
        },
        {
          title: 'Protection Manager',
          location: 'Przemyśl, Poland (Ukraine Emergency)',
          org: 'Première Urgence Internationale',
          date: [new Date(2022, 3, 1), new Date(2024, 4, 1)],
          content: [
            {
              title: 'Kick-off of Protection and MHPSS Program',
              desc: 'Launched a protection and MHPSS program in \'Blue Dots\' (Children and Family Support Hubs) on the border with Ukraine and in urban centers, including information and counselling, identification and referrals of PSNs, and provision of PFA and PSS.'
            },
            {title: 'Recruitment, Management, and Capacity-Building', desc: 'Recruited, managed, and built the capacity of 18 field staff and 1 MEAL officer.'},
            {title: 'Development and Roll-Out of Technical Tools and Systems'},
            {title: 'External Coordination', 'desc': 'Coordinated with working groups and donors.'}
          ]
        },
        {
          title: 'Protection Manager',
          location: 'Gedaref, Sudan (Tigray crisis)',
          org: 'Danish Refugee Council',
          date: [new Date(2022, 3, 1), new Date(2022, 3, 1)],
          content: [
            {title: 'Kick off and implementation of a protection program in 5 refugee camps and transit centres: protection monitoring, case management (general protection and GBV), individual protection assistance and referrals, community-based protection (mobilization, awareness-raising and information-sharing, community-based protection networks), psychosocial support (both through static – community safe spaces – and mobile modalities), protection desks (ECHO/IcSP/UNHCR/SDC)',},
            {title: 'Recruitment, management and capacity-building of 14 protection staffs, 1 IMO and 30 refugee mobilizers',},
            {title: 'Administrative, financial, logistic and security follow-up',},
            {title: 'Data management, monitoring and reporting',},
            {title: 'Development and roll-out of technical tools nd systems',},
            {title: 'External coordination and advocacy with Protection WorkingGroup, GBV SWG, MHPSS SWG, Counter-trafficking WG, PSEA taskforce, PSN taskforce, camp coordination; external representation with donors (including through organizing visits)',},
            {title: 'Conduction of rapid protection assessments in East Sudan; participation in interagency assessments; key role in developing and implementing the East Sudan’s GBV action plan',},
            {title: 'Development of project proposals/CNs based on identified gaps and needs as well as strategic priorities',},
            {title: 'PSEA focal person for DRC East Sudan',},
          ]
        },
        {
          title: 'Protection Specialist',
          org: 'Danish Refugee Council',
          location: 'Tripolitania, Libya',
          date: [new Date(2020, 4, 1), new Date(2020, 11, 1)],
          content: [
            {title: 'Kick off and implementation of a protection program in 5 refugee camps and transit centres: protection monitoring, case management (general protection and GBV), individual protection assistance and referrals, community-based protection (mobilization, awareness-raising and information-sharing, community-based protection networks), psychosocial support (both through static – community safe spaces – and mobile modalities), protection desks (ECHO/IcSP/UNHCR/SDC)',},
            {title: 'Recruitment, management and capacity-building of 14 protection staffs, 1 IMO and 30 refugee mobilizers',},
            {title: 'Administrative, financial, logistic and security follow-up',},
            {title: 'Data management, monitoring and reporting',},
            {title: 'Development and roll-out of technical tools nd systems',},
            {title: 'External coordination and advocacy with Protection WorkingGroup, GBV SWG, MHPSS SWG, Counter-trafficking WG, PSEA taskforce, PSN taskforce, camp coordination; external representation with donors (including through organizing visits)',},
            {title: 'Conduction of rapid protection assessments in East Sudan; participation in interagency assessments; key role in developing and implementing the East Sudan’s GBV action plan',},
            {title: 'Development of project proposals/CNs based on identified gaps and needs as well as strategic priorities',},
            {title: 'PSEA focal person for DRC East Sudan',},
          ]
        },
        {
          title: 'Protection Coordinator',
          org: 'Première Urgence Internationale',
          location: 'Maiduguri, Nigeria',
          date: [new Date(2019, 8, 1), new Date(2020, 5, 1)],
          content: [
            {title: 'Development of PUI’s protection strategy in Nigeria',},
            {title: 'Provision of technical support for the implementation and monitoring of protection program (ECHO/USAID)',},
            {title: 'Technical supervision, guidance and capacity-building for protection teams; support in recruitment processes',},
            {title: 'External representation (inc. key protection stakeholders and coordination forums)',},
            {title: 'Development of project proposals/CNs and project revisions based on identified gaps and needs as well as strategic priorities',},
            {title: 'Acting deputy head of mission for programs in the absence/upon request of the HoM',},
          ]
        },
        {
          title: 'Protection and Community Outreach Manager',
          org: 'Première Urgence Internationale',
          location: 'Maiduguri, Nigeria',
          date: [new Date(2018, 5, 1), new Date(2019, 5, 1)],
          content: [
            {title: 'Kick off and implementation of a protection program: protection monitoring, referrals, service mapping, community awareness and mobilization, advocacy (ECHO/OFDA funding)'},
            {title: 'Management and capacity-building of 21 staffs and 190 community volunteers'},
            {title: 'Administrative, financial, logistic and security follow-up'},
            {title: 'Data management, monitoring and reporting'},
            {title: 'External representation and coordination (donors/working groups/referrals)'},
            {title: 'Needs assessments, drafting of project proposals and monitoring of funding opportunities'},
          ]
        },
        {
          title: 'Field Coordinator',
          org: 'Avocats sans Frontières France (Lawyers without Borders)',
          location: 'Battambang, Cambodia',
          date: [new Date(2017, 3, 1), new Date(2018, 1, 1)],
          content: [
            {title: 'Implementation and monitoring of a legal aid project: legal counselling, legal assistance, community awareness-raising'},
            {title: 'Human resources, administrative, financial, logistic and security follow-up'},
            {title: 'Management of the project’s closure'},
            {title: 'Data management, refinement of monitoring tools and reporting'},
            {title: 'Country representation (donors/partners/authorities and justice professionals/international and local organizations)'},
            {title: 'Needs assessments, drafting of project proposals and monitoring of funding opportunities'},
          ]
        },
        {
          title: 'Coordinator – administrative detention centre of Calais',
          org: 'France terre d’asile',
          location: 'Emergency desk / Calais, France',
          date: [new Date(2017, 3, 1), new Date(2018, 1, 1)],
          content: [
            {title: 'Implementation and monitoring of a legal aid project: legal counselling, legal assistance, community awareness-raising'},
            {title: 'Human resources, administrative, financial, logistic and security follow-up'},
            {title: 'Management of the project’s closure'},
            {title: 'Data management, refinement of monitoring tools and reporting'},
            {title: 'Country representation (donors/partners/authorities and justice professionals/international and local organizations)'},
            {title: 'Needs assessments, drafting of project proposals and monitoring of funding opportunities'},
          ]
        },
        {
          title: 'Project manager Assistant',
          org: 'Palestinian Agricultural Relief Committees',
          location: 'Ramallah, Palestine',
          date: [new Date(2014, 3, 1), new Date(2015, 6, 1)],
          content: []
        },
      ]
    },
    // {
    //   title: 'EDUCATION',
    //   sub: [
    //     {
    //       date: [new Date(2013), new Date(2014)],
    //       org: 'Institute of International Humanitarian Studies',
    //       location: 'Aix-Marseille University, France',
    //       title: 'Master’s degree in Humanitarian Action and Humanitarian Law (Master 2) – with high distinction',
    //       content: [{label: '<b>Master dissertation:</b> "Transitional Justice in Burundi: amnesty at the heart of peace-building and national reconciliation issues."'}],
    //     },
    //     {
    //       date: [new Date(2013), new Date(2014)],
    //       org: 'Institute of International Humanitarian Studies',
    //       location: 'Aix-Marseille University, France',
    //       title: 'Advanced Diploma in "Field legal officer for Human Rights"',
    //       content: [{label: '<b>Final dissertation:</b> "The governance structure of the State of Palestine"'}],
    //     },
    //     {
    //       date: [new Date(2010), new Date(2014)],
    //       org: 'Institute of International Humanitarian Studies',
    //       location: 'Rennes, France',
    //       title: 'Master’s degree in “International and European Affairs” – with distinction',
    //       content: [{
    //         label: '<b>Master dissertation:</b> "The Palestinian refugee camps in Lebanon: symbolic spaces of the construction of Palestinian identity in exile, its challenges and limitations (1948-1993)."'
    //       }],
    //     },
    //   ]
    // }
  ]
}