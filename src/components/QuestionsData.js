const QuestionsData = [
  {
    id: 1,
    questionName: "FirstQ",
    question: "What type of home/living space do you have?",
    options: ["Small apartment", "Big apartment", "Villa"],
    isChecked: [false, false, false]
    //1- Temperament = Independent, Compose, Calm, Quiet
    //2 - Temperament = Independent, Patient, Adaptable
    //3 - Temperament = Active, Playful, Energetic, Lively
  },
  {
    id: 2,
    questionName: "SecondQ",
    question: "Who will your dog be?",
    options: ["Friend", "Hunter", "Protector"],
    isChecked: [false, false, false]
    //1  Bred_for= Companionship, Family companion dog, Companion, Lapdog
    //2  Bred_for= Hunting
    //3  Bred_for= Guarding, Guardian, guard, watchdog
  },
  {
    id: 3,
    questionName: "ThirdQ",
    question: "Do you have children?",
    options: ["Yes", "No", "Maybe in the future"],
    isChecked: [false, false, false]
    //1 Temperament = Friendly, Docile, Affectionate, Gentle, Faithful
  },
  {
    id: 4,
    questionName: "FourthQ",
    question: "How big is your yard?",
    options: ["Small/No", "Medium", "Big"],
    isChecked: [false, false, false]
    //1 Temperament = Calm
    //2 Temperament = Calm
    //3 - Temperament = Independent, Patient, Adaptable
    //4 - Temperament = Active, Playful, Energetic, Lively
  },
  {
    id: 5,
    questionName: "FithQ",
    question: "How active should your dog be?",
    options: [
      "Only a little",
      "Yes, I would like it to be active",
      "A never tired dog"
    ],
    isChecked: [false, false, false]
    //1- Temperament = Independent, Compose, Calm, Quiet
    //2 - Temperament = Independent, Patient, Adaptable
    //3 - Temperament = Active, Playful, Energetic, Lively
  },
  {
    id: 6,
    questionName: "SixthQ",
    question: "How many times are you gonna go for a walk with your dog?",
    options: ["Rarely", "At least twice a day", "Three or more times a day"],
    isChecked: [false, false, false]
    //1- Temperament = Independent, Compose, Calm, Quiet
    //2 - Temperament = Independent, Patient, Adaptable
    //3 - Temperament = Active, Playful, Energetic, Lively
  },
  {
    id: 7,
    questionName: "SeventhQ",
    question: "Do you want a guarding dog?",
    options: ["No", "Yes", "Not a priority"],
    isChecked: [false, false, false]
    //2 Temperament = Alert, Loyal, Protective, Brave, Powerful, Courageous                                     Bred_for= Guarding, Guardian, guard, watchdog
  },
  {
    id: 8,
    questionName: "EigthQ",
    question: "What size of dog are you looking for?",
    options: ["Small", "Medium", "Big"],
    isChecked: [false, false, false]
    //1 weight = <= 10
    // 2 weight = 11 <= x <= 25
    //3 wight >25
  },
  {
    id: 9,
    questionName: "NinthQ",
    question: "How much are you willing to spend weekly for the dog food?",
    options: ["10€", "25€", ">25€"],
    isChecked: [false, false, false]
    //1 weight = <= 10
    // 2 weight = 11 <= x <= 25
    //3 wight >25
  },
  {
    id: 10,
    questionName: "TenthQ",
    question: "Are you gonna do sports with your dog?",
    options: ["No", "Maybe, but not often", "yes"],
    isChecked: [false, false, false]
    //1- Temperament = Independent, Compose, Calm, Quiet
    //2 - Temperament = Independent, Patient, Adaptable
    //3 - Temperament = Active, Playful, Energetic, Lively
  }
];

export default QuestionsData;
