const questions = [
  {
    "question": "Which language is used to write this quiz?",
    "options": [
      "C++",
      "Python",
      "Java",
      "JavaScript"
    ],
    "answer": 0
  },
  {
    "question": "What does OOP stand for?",
    "options": [
      "Object Oriented Programming",
      "Open Output Process",
      "Online Operating Program",
      "Ordered Object Protocol"
    ],
    "answer": 0
  },
  {
    "question": "Which header is used for file input and output?",
    "options": [
      "iostream",
      "fstream",
      "string",
      "vector"
    ],
    "answer": 1
  },
  {
    "question": "What is the correct way to declare a vector of integers?",
    "options": [
      "vector<int> numbers;",
      "int vector numbers;",
      "vector numbers<int>;",
      "numbers vector<int>;"
    ],
    "answer": 0
  },
  {
    "question": "Which loop is best when the number of iterations is unknown?",
    "options": [
      "for",
      "while",
      "switch",
      "if"
    ],
    "answer": 1
  },
  {
    "question": "What is the entry point function of every standard C++ program?",
    "options": [
      "start()",
      "main()",
      "init()",
      "run()"
    ],
    "answer": 1
  },
  {
    "question": "Which operator cannot be overloaded in C++?",
    "options": [
      "+",
      "::",
      "[]",
      "()"
    ],
    "answer": 1
  },
  {
    "question": "What does a destructor do when an object goes out of scope?",
    "options": [
      "Allocates heap memory",
      "Cleans up resources before object destruction",
      "Overloads assignment operators",
      "Initializes static members"
    ],
    "answer": 1
  },
  {
    "question": "Which keyword is used to achieve runtime polymorphism in C++?",
    "options": [
      "inline",
      "virtual",
      "register",
      "explicit"
    ],
    "answer": 1
  },
  {
    "question": "What is a pure virtual function in C++?",
    "options": [
      "A virtual function initialized with `= 0`",
      "A function declared inside a struct",
      "A static member function",
      "A function with default arguments"
    ],
    "answer": 0
  },
  {
    "question": "Which C++11 smart pointer enforces exclusive ownership of a resource?",
    "options": [
      "std::shared_ptr",
      "std::weak_ptr",
      "std::unique_ptr",
      "std::auto_ptr"
    ],
    "answer": 2
  },
  {
    "question": "Which smart pointer uses reference counting to share ownership across multiple owners?",
    "options": [
      "std::unique_ptr",
      "std::shared_ptr",
      "std::auto_ptr",
      "std::scoped_ptr"
    ],
    "answer": 1
  },
  {
    "question": "What does `nullptr` represent in modern C++?",
    "options": [
      "Zero integer value",
      "A type-safe null pointer constant",
      "An uninitialized reference",
      "A dangling pointer"
    ],
    "answer": 1
  },
  {
    "question": "How does a reference differ from a pointer in C++?",
    "options": [
      "A reference can be reassigned after initialization",
      "A reference cannot be null and must be initialized when declared",
      "A reference requires `new` and `delete`",
      "A pointer has no memory address"
    ],
    "answer": 1
  },
  {
    "question": "Which STL container follows Last-In, First-Out (LIFO) ordering?",
    "options": [
      "queue",
      "stack",
      "list",
      "set"
    ],
    "answer": 1
  },
  {
    "question": "Which STL container follows First-In, First-Out (FIFO) ordering?",
    "options": [
      "stack",
      "priority_queue",
      "queue",
      "map"
    ],
    "answer": 2
  },
  {
    "question": "Which STL associative container stores unique elements in sorted order?",
    "options": [
      "unordered_set",
      "set",
      "multiset",
      "vector"
    ],
    "answer": 1
  },
  {
    "question": "Which header provides `std::unique_ptr` and `std::shared_ptr`?",
    "options": [
      "memory",
      "utility",
      "tuple",
      "type_traits"
    ],
    "answer": 0
  },
  {
    "question": "What is a template in C++?",
    "options": [
      "A macro replaced by the preprocessor",
      "A blueprint for generic functions or classes",
      "A runtime dynamic array",
      "A memory alignment directive"
    ],
    "answer": 1
  },
  {
    "question": "Which keyword defines a generic function or class template?",
    "options": [
      "generic",
      "template",
      "typename_def",
      "blueprint"
    ],
    "answer": 1
  },
  {
    "question": "What is a lambda expression in C++11?",
    "options": [
      "An anonymous inline function object",
      "A recursive template specialization",
      "A multithreaded lock guard",
      "A virtual base class"
    ],
    "answer": 0
  },
  {
    "question": "What does the `auto` keyword do in modern C++?",
    "options": [
      "Forces automatic heap allocation",
      "Deduces a variable's type from its initializer at compile time",
      "Makes a variable thread-safe",
      "Declares an automatic destructor"
    ],
    "answer": 1
  },
  {
    "question": "Which keyword is used to handle runtime errors in C++?",
    "options": [
      "catch",
      "try",
      "throw",
      "All of try, catch, and throw"
    ],
    "answer": 3
  },
  {
    "question": "What happens if an exception is thrown and never caught anywhere?",
    "options": [
      "The compiler ignores it",
      "`std::terminate()` is called and the program aborts",
      "The variable resets to zero",
      "It converts into a warning"
    ],
    "answer": 1
  },
  {
    "question": "Which keyword prevents implicit type conversions on single-argument constructors?",
    "options": [
      "explicit",
      "sealed",
      "final",
      "strict"
    ],
    "answer": 0
  },
  {
    "question": "What does the `final` specifier do on a virtual function?",
    "options": [
      "Makes it pure virtual",
      "Prevents derived classes from overriding it",
      "Converts it into a static function",
      "Inlines it automatically"
    ],
    "answer": 1
  },
  {
    "question": "What is function overloading?",
    "options": [
      "Defining multiple functions with the same name but different parameter lists",
      "Redefining a base class virtual function in a derived class",
      "Calling a function inside itself",
      "Passing functions as templates"
    ],
    "answer": 0
  },
  {
    "question": "What is function overriding?",
    "options": [
      "Defining two functions with identical names in the same scope",
      "Redefining a virtual base class function in a derived class with the same signature",
      "Overloading operators for user types",
      "Inlining a loop body"
    ],
    "answer": 1
  },
  {
    "question": "What is a copy constructor used for?",
    "options": [
      "Destroying temporary objects",
      "Initializing a new object as a copy of an existing object",
      "Comparing two objects for equality",
      "Reallocating static arrays"
    ],
    "answer": 1
  },
  {
    "question": "What is a move constructor (C++11) designed to do?",
    "options": [
      "Copy deep buffers byte-by-byte",
      "Transfer resources from a temporary (rvalue) object without deep copying",
      "Lock a mutex during assignment",
      "Serialize objects to disk"
    ],
    "answer": 1
  },
  {
    "question": "What is the Rule of Three in C++?",
    "options": [
      "If a class needs a custom destructor, copy constructor, or copy assignment operator, it likely needs all three",
      "Every class must have three constructors",
      "A function can have at most three parameters",
      "Templates support three type arguments"
    ],
    "answer": 0
  },
  {
    "question": "What is a `namespace` used for in C++?",
    "options": [
      "Managing thread pools",
      "Preventing name collisions across large codebases or libraries",
      "Encrypting source files",
      "Optimizing loop unrolling"
    ],
    "answer": 1
  },
  {
    "question": "Which operator accesses a member through a pointer to an object?",
    "options": [
      ".",
      "->",
      "::",
      ".*"
    ],
    "answer": 1
  },
  {
    "question": "What is the scope resolution operator in C++?",
    "options": [
      "->",
      "::",
      "?:",
      "&&"
    ],
    "answer": 1
  },
  {
    "question": "What does the `static` keyword mean inside a function for a local variable?",
    "options": [
      "The variable is stored on the stack and reset every call",
      "The variable persists for the lifetime of the program and retains its value across calls",
      "The variable becomes global to all translation units",
      "The variable cannot be read"
    ],
    "answer": 1
  },
  {
    "question": "What does the `static` keyword mean on a class member function?",
    "options": [
      "It can only access non-static member variables",
      "It belongs to the class itself and can be called without an object instance",
      "It cannot be called outside derived classes",
      "It is automatically virtual"
    ],
    "answer": 1
  },
  {
    "question": "What is a `friend` function in a class?",
    "options": [
      "A member function inherited by all subclasses",
      "A non-member function granted access to private and protected members of the class",
      "A thread-safe callback function",
      "A template specialization"
    ],
    "answer": 1
  },
  {
    "question": "Which cast performs safe downcasting with runtime type checking for polymorphic types?",
    "options": [
      "static_cast",
      "reinterpret_cast",
      "dynamic_cast",
      "const_cast"
    ],
    "answer": 2
  },
  {
    "question": "Which cast removes `const` or `volatile` qualifiers from a type?",
    "options": [
      "static_cast",
      "dynamic_cast",
      "const_cast",
      "reinterpret_cast"
    ],
    "answer": 2
  },
  {
    "question": "Which STL algorithm searches for an element in a sorted range using binary search?",
    "options": [
      "std::find",
      "std::binary_search",
      "std::count",
      "std::replace"
    ],
    "answer": 1
  },
  {
    "question": "Which STL container provides fast insertion and deletion at both ends (`front` and `back`)?",
    "options": [
      "array",
      "deque",
      "forward_list",
      "set"
    ],
    "answer": 1
  },
  {
    "question": "What is an iterator in C++?",
    "options": [
      "A raw integer index only",
      "An object pointing to elements in a container that supports pointer-like traversal",
      "A preprocessor macro for loops",
      "A garbage collector thread"
    ],
    "answer": 1
  },
  {
    "question": "Which header defines `std::string`?",
    "options": [
      "cstring",
      "string",
      "sstream",
      "cctype"
    ],
    "answer": 1
  },
  {
    "question": "What does `std::vector::push_back()` do?",
    "options": [
      "Removes the last element",
      "Appends a new element to the end of the vector",
      "Inserts an element at index 0",
      "Clears all elements"
    ],
    "answer": 1
  },
  {
    "question": "What is the difference between `size()` and `capacity()` on a `std::vector`?",
    "options": [
      "They are always identical",
      "Number of stored elements vs. total allocated storage before reallocation",
      "Total bytes used vs. element count",
      "Max elements allowed vs. current index"
    ],
    "answer": 1
  },
  {
    "question": "Which C++ feature allows a class to inherit from more than one base class?",
    "options": [
      "Single inheritance",
      "Multiple inheritance",
      "Operator overloading",
      "Function hiding"
    ],
    "answer": 1
  },
  {
    "question": "What problem does virtual inheritance solve in multiple inheritance?",
    "options": [
      "Memory leaks",
      "The diamond problem (ambiguous base subobjects)",
      "Dangling pointers",
      "Integer overflow"
    ],
    "answer": 1
  },
  {
    "question": "Which keyword is used for preprocessor macros and conditional compilation?",
    "options": [
      "#define",
      "#pragma",
      "#include",
      "All of #define, #pragma, and #include"
    ],
    "answer": 3
  },
  {
    "question": "What is a `struct` vs a `class` default member access in C++?",
    "options": [
      "`struct` defaults to `private`, `class` to `public`",
      "`struct` defaults to `public`, `class` to `private`",
      "Both default to `protected`",
      "Structs cannot have member functions"
    ],
    "answer": 1
  },
  {
    "question": "What does `std::move(x)` actually do?",
    "options": [
      "Moves memory across threads immediately",
      "Casts `x` to an rvalue reference to enable move semantics",
      "Deletes `x` from memory",
      "Copies `x` into a vector"
    ],
    "answer": 1
  },
  {
    "question": "Which header provides `std::sort` and `std::find` alongside other standard algorithms?",
    "options": [
      "algorithm",
      "numeric",
      "vector",
      "array"
    ],
    "answer": 0
  },
  {
    "question": "Which C++ standard introduced `std::optional`, `std::variant`, and `std::string_view`?",
    "options": [
      "C++98",
      "C++11",
      "C++17",
      "C++20"
    ],
    "answer": 2
  },
  {
    "question": "Which C++20 feature constrains template parameters using named compile-time predicates?",
    "options": [
      "Concepts",
      "Modules",
      "Coroutines",
      "All of Concepts, Modules, and Coroutines"
    ],
    "answer": 3
  },
  {
    "question": "Which RAII class in `<mutex>` automatically unlocks a mutex when going out of scope?",
    "options": [
      "std::thread",
      "std::lock_guard",
      "std::atomic",
      "std::future"
    ],
    "answer": 1
  },
  {
    "question": "What does RAII stand for in C++?",
    "options": [
      "Random Access Iterator Interface",
      "Resource Acquisition Is Initialization",
      "Runtime Allocation and Indexing",
      "Recursive Array Initialization"
    ],
    "answer": 1
  }
];

const STORAGE_KEY = "cppQuizHistory";

const startScreen = document.getElementById("start-screen");
const questionScreen = document.getElementById("question-screen");
const resultScreen = document.getElementById("result-screen");
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const endBtn = document.getElementById("end-btn");
const restartBtn = document.getElementById("restart-btn");
const clearHistoryBtn = document.getElementById("clear-history-btn");
const playerNameInput = document.getElementById("player-name");
const questionCount = document.getElementById("question-count");
const scoreDisplay = document.getElementById("score-display");
const progressFill = document.getElementById("progress-fill");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const feedback = document.getElementById("feedback");
const finalScore = document.getElementById("final-score");
const resultMessage = document.getElementById("result-message");
const historyList = document.getElementById("history-list");
const reviewList = document.getElementById("review-list");

let currentQuestion = 0;
let score = 0;
let answered = false;
let questionsAnswered = 0;
let quizActive = false;
let resultSaved = false;
let userAnswers = [];

function showScreen(screen) {
  [startScreen, questionScreen, resultScreen].forEach((item) => {
    item.classList.remove("active");
  });
  screen.classList.add("active");
}

function getPlayerName() {
  return playerNameInput.value.trim() || "Guest";
}

function startQuiz() {
  if (!playerNameInput.value.trim()) {
    playerNameInput.focus();
    alert("Please enter your name before starting.");
    return;
  }

  currentQuestion = 0;
  score = 0;
  answered = false;
  questionsAnswered = 0;
  quizActive = true;
  resultSaved = false;
  userAnswers = new Array(questions.length).fill(null);
  showScreen(questionScreen);
  renderQuestion();
}

function renderQuestion() {
  const question = questions[currentQuestion];
  answered = false;

  questionCount.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
  scoreDisplay.textContent = `Score: ${score}`;
  progressFill.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
  questionText.textContent = question.question;
  feedback.textContent = "";
  feedback.className = "feedback";
  nextBtn.disabled = true;
  nextBtn.textContent = currentQuestion === questions.length - 1 ? "See Results" : "Next Question";

  optionsContainer.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-btn";
    button.textContent = option;
    button.addEventListener("click", () => selectAnswer(index, button));
    optionsContainer.appendChild(button);
  });
}

function selectAnswer(selectedIndex, selectedButton) {
  if (answered) return;

  answered = true;
  questionsAnswered += 1;
  userAnswers[currentQuestion] = selectedIndex;

  const question = questions[currentQuestion];
  const optionButtons = optionsContainer.querySelectorAll(".option-btn");

  optionButtons.forEach((button, index) => {
    button.disabled = true;
    if (index === question.answer) {
      button.classList.add("correct");
    }
  });

  if (selectedIndex === question.answer) {
    score += 1;
    feedback.textContent = "Correct.";
    feedback.className = "feedback correct";
  } else {
    selectedButton.classList.add("wrong");
    feedback.textContent = "Not quite. The correct answer is highlighted.";
    feedback.className = "feedback wrong";
  }

  scoreDisplay.textContent = `Score: ${score}`;
  nextBtn.disabled = false;
}

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion += 1;
    renderQuestion();
  } else {
    finishQuiz(true);
  }
}

function finishEarly() {
  if (!quizActive) return;
  finishQuiz(false);
}

function finishQuiz(completed) {
  quizActive = false;
  const totalAnswered = completed ? questions.length : questionsAnswered;
  const wrongAnswers = totalAnswered - score;
  const unanswered = questions.length - totalAnswered;
  const percentage = totalAnswered > 0 ? Math.round((score / totalAnswered) * 100) : 0;

  showScreen(resultScreen);
  finalScore.textContent = `${score} / ${totalAnswered}`;
  resultMessage.textContent = `You attempted ${totalAnswered} of ${questions.length} questions. Correct: ${score}. Wrong: ${wrongAnswers}. Unanswered: ${unanswered}. Score: ${percentage}%.`;

  renderReview();

  if (!resultSaved) {
    saveResult({
      name: getPlayerName(),
      score: score,
      answered: totalAnswered,
      total: questions.length,
      percentage: percentage,
      date: new Date().toISOString()
    });
    resultSaved = true;
  }

  renderHistory();
}

function renderReview() {
  reviewList.innerHTML = "";

  questions.forEach((question, index) => {
    const userAnswer = userAnswers[index];
    const isUnanswered = userAnswer === null;
    const isCorrect = userAnswer === question.answer;

    const item = document.createElement("div");
    item.className = "review-item " + (isUnanswered ? "unanswered" : isCorrect ? "correct" : "wrong");

    const status = document.createElement("div");
    status.className = "review-status " + (isUnanswered ? "unanswered" : isCorrect ? "correct" : "wrong");
    status.textContent = isUnanswered ? "Not answered" : isCorrect ? "Correct" : "Wrong";

    const questionLine = document.createElement("div");
    questionLine.className = "review-question";
    questionLine.textContent = `${index + 1}. ${question.question}`;

    const yourAnswer = document.createElement("div");
    yourAnswer.className = "review-answer";
    yourAnswer.textContent = `Your answer: ${isUnanswered ? "Not answered" : question.options[userAnswer]}`;

    const correctAnswer = document.createElement("div");
    correctAnswer.className = "review-answer";
    correctAnswer.textContent = `Correct answer: ${question.options[question.answer]}`;

    item.append(status, questionLine, yourAnswer, correctAnswer);
    reviewList.appendChild(item);
  });
}

function getHistory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    return [];
  }
}

function saveResult(result) {
  const history = getHistory();
  history.unshift(result);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history.slice(0, 20)));
}

function renderHistory() {
  const history = getHistory();
  historyList.innerHTML = "";

  if (history.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-history";
    empty.textContent = "No saved results yet.";
    historyList.appendChild(empty);
    return;
  }

  history.forEach((item) => {
    const row = document.createElement("div");
    row.className = "history-item";

    const name = document.createElement("span");
    name.className = "history-name";
    name.textContent = item.name;

    const scoreCell = document.createElement("span");
    scoreCell.className = "history-score";
    scoreCell.textContent = `${item.score} / ${item.answered}`;

    const percent = document.createElement("span");
    percent.className = "history-percent";
    percent.textContent = `${item.percentage}%`;

    const date = document.createElement("span");
    date.className = "history-date";
    date.textContent = new Date(item.date).toLocaleDateString();

    row.append(name, scoreCell, percent, date);
    historyList.appendChild(row);
  });
}

function clearHistory() {
  if (confirm("Clear all saved results?")) {
    localStorage.removeItem(STORAGE_KEY);
    renderHistory();
  }
}

function restartQuiz() {
  startQuiz();
}

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);
endBtn.addEventListener("click", finishEarly);
restartBtn.addEventListener("click", restartQuiz);
clearHistoryBtn.addEventListener("click", clearHistory);

renderHistory();