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
  },
  {
    "question": "What does `std::cin` use to separate inputs by default?",
    "options": [
      "Whitespace (spaces, tabs, newlines)",
      "Commas only",
      "Semicolons only",
      "Periods only"
    ],
    "answer": 0
  },
  {
    "question": "Which header provides input/output stream manipulators like `std::setw` and `std::setprecision`?",
    "options": [
      "iomanip",
      "iosfwd",
      "istream",
      "sstream"
    ],
    "answer": 0
  },
  {
    "question": "What does `std::stringstream` allow you to do?",
    "options": [
      "Perform in-memory string parsing and formatting like a stream",
      "Encrypt strings automatically",
      "Sort strings in place",
      "Convert integers to pointers"
    ],
    "answer": 0
  },
  {
    "question": "Which keyword is used to declare a constant expression evaluated at compile time when possible?",
    "options": [
      "constexpr",
      "mutable",
      "volatile",
      "extern"
    ],
    "answer": 0
  },
  {
    "question": "What does the `mutable` keyword allow inside a `const` member function?",
    "options": [
      "Modifying that specific member variable",
      "Calling non-const base functions",
      "Bypassing access specifiers",
      "Deleting `this`"
    ],
    "answer": 0
  },
  {
    "question": "What does the `volatile` keyword tell the compiler?",
    "options": [
      "Value may change outside program control, so do not over-optimize reads/writes",
      "Variable is stored in CPU cache forever",
      "Variable is read-only at runtime",
      "Variable is shared across networks"
    ],
    "answer": 0
  },
  {
    "question": "Which keyword specifies external linkage for a variable or function declared in another translation unit?",
    "options": [
      "extern",
      "inline",
      "friend",
      "using"
    ],
    "answer": 0
  },
  {
    "question": "What does an `inline` function suggest to the compiler?",
    "options": [
      "Substitute the function body at the call site to avoid call overhead",
      "Execute the function on a separate thread",
      "Make the function private",
      "Throw an exception on overflow"
    ],
    "answer": 0
  },
  {
    "question": "Which operator is known as the ternary conditional operator in C++?",
    "options": [
      "?:",
      "::",
      ".*",
      "sizeof"
    ],
    "answer": 0
  },
  {
    "question": "What does the `sizeof` operator return at compile time?",
    "options": [
      "Size of a type or expression in bytes",
      "Number of elements in any pointer",
      "Heap capacity of a `std::vector`",
      "Number of lines in a file"
    ],
    "answer": 0
  },
  {
    "question": "Which operator checks whether a value is an instance of a type at runtime on polymorphic classes?",
    "options": [
      "`dynamic_cast` with a pointer/reference",
      "`typeid` operator",
      "`alignof` operator",
      "`noexcept` operator"
    ],
    "answer": 1
  },
  {
    "question": "What does `noexcept` on a function indicate in C++11?",
    "options": [
      "The function guarantees it will not throw exceptions",
      "The function cannot be called recursively",
      "The function returns `void`",
      "The function is pure virtual"
    ],
    "answer": 0
  },
  {
    "question": "What is a dangling pointer?",
    "options": [
      "A pointer referencing memory that has already been freed or gone out of scope",
      "A null pointer initialized to `nullptr`",
      "A pointer to a constant integer",
      "A function pointer"
    ],
    "answer": 0
  },
  {
    "question": "What is a memory leak?",
    "options": [
      "Failing to release dynamically allocated memory when no longer needed",
      "Reading past the end of a stack array",
      "Dividing an integer by zero",
      "Using an uninitialized `bool`"
    ],
    "answer": 0
  },
  {
    "question": "Which C++11 smart pointer holds a non-owning reference to an object managed by `std::shared_ptr`?",
    "options": [
      "`std::weak_ptr`",
      "`std::unique_ptr`",
      "`std::scoped_lock`",
      "`std::any`"
    ],
    "answer": 0
  },
  {
    "question": "How do you safely access the object pointed to by a `std::weak_ptr`?",
    "options": [
      "Call `.lock()` to get a temporary `std::shared_ptr`",
      "Dereference it directly with `*wp`",
      "Cast it with `static_cast`",
      "Call `.release()`"
    ],
    "answer": 0
  },
  {
    "question": "Which STL container is implemented as a doubly linked list?",
    "options": [
      "std::list",
      "std::vector",
      "std::array",
      "std::deque"
    ],
    "answer": 0
  },
  {
    "question": "Which STL container is implemented as a singly linked list?",
    "options": [
      "std::forward_list",
      "std::list",
      "std::set",
      "std::map"
    ],
    "answer": 0
  },
  {
    "question": "Which STL container provides hash-table-based average O(1) lookup for unique keys?",
    "options": [
      "std::unordered_set",
      "std::set",
      "std::multimap",
      "std::priority_queue"
    ],
    "answer": 0
  },
  {
    "question": "Which STL container adaptor extracts the largest (by default) element first?",
    "options": [
      "std::priority_queue",
      "std::queue",
      "std::stack",
      "std::deque"
    ],
    "answer": 0
  },
  {
    "question": "Which header provides `std::sort`, `std::find`, `std::count_if`, and `std::transform`?",
    "options": [
      "algorithm",
      "numeric",
      "cmath",
      "functional"
    ],
    "answer": 0
  },
  {
    "question": "Which header provides numeric algorithms like `std::accumulate` and `std::iota`?",
    "options": [
      "numeric",
      "algorithm",
      "limits",
      "random"
    ],
    "answer": 0
  },
  {
    "question": "What does `std::vector::clear()` do to `size()` and `capacity()`?",
    "options": [
      "Sets `size()` to 0 while keeping `capacity()` unchanged",
      "Sets both `size()` and `capacity()` to 0",
      "Doubles `capacity()` and clears elements",
      "Deletes the `std::vector` object"
    ],
    "answer": 0
  },
  {
    "question": "What does `std::vector::shrink_to_fit()` request?",
    "options": [
      "Reducing `capacity()` to match `size()`",
      "Sorting elements in ascending order",
      "Removing duplicate values",
      "Reserving 1,024 elements"
    ],
    "answer": 0
  },
  {
    "question": "Which C++11 header provides pseudo-random number engines and distributions?",
    "options": [
      "random",
      "cstdlib",
      "ctime",
      "chrono"
    ],
    "answer": 0
  },
  {
    "question": "Which C++11 header provides time utilities like `std::chrono::steady_clock`?",
    "options": [
      "chrono",
      "ctime",
      "time.h",
      "thread"
    ],
    "answer": 0
  },
  {
    "question": "Which C++11 header provides `std::thread` for concurrent execution?",
    "options": [
      "thread",
      "mutex",
      "future",
      "atomic"
    ],
    "answer": 0
  },
  {
    "question": "Which class in `<mutex>` locks multiple mutexes deadlock-free using a scoped lifetime?",
    "options": [
      "std::scoped_lock (C++17)",
      "std::atomic_flag",
      "std::condition_variable",
      "std::packaged_task"
    ],
    "answer": 0
  },
  {
    "question": "What does `std::atomic<int>` provide for shared counters across threads?",
    "options": [
      "Lock-free or atomic read-modify-write operations",
      "Automatic garbage collection",
      "Dynamic resizing",
      "File locking"
    ],
    "answer": 0
  },
  {
    "question": "What is a template parameter pack (variadic template) used for?",
    "options": [
      "Accepting a variable number of template or function arguments",
      "Compressing template binaries",
      "Overloading `new` globally",
      "Disabling copy constructors"
    ],
    "answer": 0
  },
  {
    "question": "What is partial template specialization?",
    "options": [
      "Providing a custom implementation for a subset of template arguments",
      "Compiling only half of a template file",
      "Using `#ifdef` inside a template",
      "Inheriting from a template twice"
    ],
    "answer": 0
  },
  {
    "question": "Which C++17 vocabulary type holds either a value of type `T` or nothing (`std::nullopt`)?",
    "options": [
      "std::optional",
      "std::variant",
      "std::any",
      "std::span"
    ],
    "answer": 0
  },
  {
    "question": "Which C++17 vocabulary type is a type-safe union holding one of several listed types?",
    "options": [
      "std::variant",
      "std::optional",
      "std::bitset",
      "std::tuple"
    ],
    "answer": 0
  },
  {
    "question": "Which C++17 type provides a non-owning view of a contiguous character sequence?",
    "options": [
      "std::string_view",
      "std::stringstream",
      "std::regex",
      "std::filesystem"
    ],
    "answer": 0
  },
  {
    "question": "Which C++17 header supports path manipulation, directory iteration, and file status queries?",
    "options": [
      "filesystem",
      "fstream",
      "ios",
      "cstdio"
    ],
    "answer": 0
  },
  {
    "question": "Which C++20 type represents a non-owning view over a contiguous sequence of elements?",
    "options": [
      "std::span",
      "std::array",
      "std::valarray",
      "std::initializer_list"
    ],
    "answer": 0
  },
  {
    "question": "What does a range-based `for` loop (`for (const auto& x : container)`) do?",
    "options": [
      "Iterates cleanly over every element in a range or container",
      "Runs until a global flag becomes false",
      "Sorts the container before looping",
      "Allocates a new copy of every element on the heap"
    ],
    "answer": 0
  },
  {
    "question": "What is the purpose of a virtual destructor in a base class?",
    "options": [
      "Ensures derived class destructors run when deleting through a base pointer",
      "Prevents instantiation of the base class",
      "Makes all member functions virtual",
      "Speeds up object construction"
    ],
    "answer": 0
  },
  {
    "question": "What does `= delete` on a member function do in C++11?",
    "options": [
      "Explicitly disables calling or generating that function",
      "Deallocates heap memory for the class",
      "Marks the function as deprecated with a warning",
      "Makes the function private"
    ],
    "answer": 0
  },
  {
    "question": "What does `= default` on a special member function do in C++11?",
    "options": [
      "Asks the compiler to generate the default implementation",
      "Sets return value to zero",
      "Makes the function virtual",
      "Initializes all pointers to `nullptr`"
    ],
    "answer": 0
  },
  {
    "question": "Which operator is used to access a class member through a pointer-to-member?",
    "options": [
      "->* and .*",
      ":: and ?:",
      "<< and >>",
      "&& and ||"
    ],
    "answer": 0
  },
  {
    "question": "What does `std::unique_ptr::release()` do?",
    "options": [
      "Relinquishes ownership and returns the raw pointer without deleting the object",
      "Deletes the managed object and sets pointer to `nullptr`",
      "Resets reference count to zero",
      "Copies the pointer to another `unique_ptr`"
    ],
    "answer": 0
  },
  {
    "question": "What does `std::unique_ptr::reset()` do?",
    "options": [
      "Destroys the managed object (if any) and optionally takes a new pointer",
      "Returns the raw pointer without destroying the object",
      "Locks the pointer for thread safety",
      "Converts it into a `std::shared_ptr`"
    ],
    "answer": 0
  },
  {
    "question": "Which header defines `std::numeric_limits` for inspecting type ranges and properties?",
    "options": [
      "limits",
      "climits",
      "cfloat",
      "typeinfo"
    ],
    "answer": 0
  },
  {
    "question": "What is the main advantage of `emplace_back()` over `push_back()` on a `std::vector`?",
    "options": [
      "Constructs the element in-place inside the container without an extra temporary copy/move",
      "Always runs in O(1) without ever reallocating",
      "Works only on primitive integers",
      "Automatically sorts inserted elements"
    ],
    "answer": 0
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
const quizLengthSelect = document.getElementById("quiz-length");
const questionCount = document.getElementById("question-count");
const scoreDisplay = document.getElementById("score-display");
const timerDisplay = document.getElementById("timer-display");
const progressFill = document.getElementById("progress-fill");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const feedback = document.getElementById("feedback");
const finalScore = document.getElementById("final-score");
const resultMessage = document.getElementById("result-message");
const historyList = document.getElementById("history-list");
const reviewList = document.getElementById("review-list");

let activeQuestions = [];
let currentQuestion = 0;
let score = 0;
let answered = false;
let questionsAnswered = 0;
let quizActive = false;
let resultSaved = false;
let userAnswers = [];
let timerInterval = null;
let secondsRemaining = 0;

function populateLengthOptions() {
  quizLengthSelect.innerHTML = "";
  const maxQuestions = Math.min(100, questions.length);

  for (let count = 10; count <= maxQuestions; count += 5) {
    const option = document.createElement("option");
    option.value = count;
    option.textContent = `${count} questions`;
    quizLengthSelect.appendChild(option);
  }

  if (maxQuestions >= 10) {
    quizLengthSelect.value = Math.min(20, maxQuestions);
  }
}

function showScreen(screen) {
  [startScreen, questionScreen, resultScreen].forEach((item) => {
    item.classList.remove("active");
  });
  screen.classList.add("active");
}

function getPlayerName() {
  return playerNameInput.value.trim() || "Guest";
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function startTimer(totalSeconds) {
  stopTimer();
  secondsRemaining = totalSeconds;
  timerDisplay.textContent = `Time: ${formatTime(secondsRemaining)}`;

  timerInterval = setInterval(() => {
    secondsRemaining -= 1;

    if (secondsRemaining <= 0) {
      secondsRemaining = 0;
      timerDisplay.textContent = "Time: 00:00";
      stopTimer();
      finishQuiz(false);
      return;
    }

    timerDisplay.textContent = `Time: ${formatTime(secondsRemaining)}`;
  }, 1000);
}

function stopTimer() {
  if (timerInterval !== null) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function startQuiz() {
  if (!playerNameInput.value.trim()) {
    playerNameInput.focus();
    alert("Please enter your name before starting.");
    return;
  }

  const selectedCount = parseInt(quizLengthSelect.value, 10);

  if (!selectedCount || selectedCount < 10) {
    alert("Please select the number of questions.");
    return;
  }

  activeQuestions = questions.slice(0, selectedCount);
  currentQuestion = 0;
  score = 0;
  answered = false;
  questionsAnswered = 0;
  quizActive = true;
  resultSaved = false;
  userAnswers = new Array(activeQuestions.length).fill(null);

  showScreen(questionScreen);
  renderQuestion();
  startTimer(activeQuestions.length * 5);
}

function renderQuestion() {
  const question = activeQuestions[currentQuestion];
  answered = false;

  questionCount.textContent = `Question ${currentQuestion + 1} of ${activeQuestions.length}`;
  scoreDisplay.textContent = `Score: ${score}`;
  progressFill.style.width = `${((currentQuestion + 1) / activeQuestions.length) * 100}%`;
  questionText.textContent = question.question;
  feedback.textContent = "";
  feedback.className = "feedback";
  nextBtn.disabled = true;
  nextBtn.textContent = currentQuestion === activeQuestions.length - 1 ? "See Results" : "Next Question";

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

  const question = activeQuestions[currentQuestion];
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
  if (currentQuestion < activeQuestions.length - 1) {
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
  if (!quizActive) return;

  quizActive = false;
  stopTimer();

  const totalAnswered = completed ? activeQuestions.length : questionsAnswered;
  const wrongAnswers = totalAnswered - score;
  const unanswered = activeQuestions.length - totalAnswered;
  const percentage = totalAnswered > 0 ? Math.round((score / totalAnswered) * 100) : 0;
  const timeText = formatTime(secondsRemaining);

  showScreen(resultScreen);
  finalScore.textContent = `${score} / ${totalAnswered}`;
  resultMessage.textContent = `You attempted ${totalAnswered} of ${activeQuestions.length} questions. Correct: ${score}. Wrong: ${wrongAnswers}. Unanswered: ${unanswered}. Score: ${percentage}%. Time remaining: ${timeText}.`;

  renderReview();

  if (!resultSaved) {
    saveResult({
      name: getPlayerName(),
      score: score,
      answered: totalAnswered,
      total: activeQuestions.length,
      percentage: percentage,
      date: new Date().toISOString()
    });
    resultSaved = true;
  }

  renderHistory();
}

function renderReview() {
  reviewList.innerHTML = "";

  activeQuestions.forEach((question, index) => {
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

populateLengthOptions();
renderHistory();