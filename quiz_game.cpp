#include <algorithm>
#include <fstream>
#include <iostream>
#include <limits>
#include <random>
#include <sstream>
#include <string>
#include <vector>

class Question {
public:
    std::string text;
    std::vector<std::string> options;
    int correctIndex;

    Question(const std::string& text, const std::vector<std::string>& options, int correctIndex)
        : text(text), options(options), correctIndex(correctIndex) {}
};

class Quiz {
private:
    std::vector<Question> questions;
    std::string playerName;
    int score = 0;

    static std::string trim(const std::string& value) {
        const std::string whitespace = " \t\r\n";
        const auto start = value.find_first_not_of(whitespace);
        if (start == std::string::npos) return "";
        const auto end = value.find_last_not_of(whitespace);
        return value.substr(start, end - start + 1);
    }

    static std::vector<std::string> split(const std::string& line, char delimiter) {
        std::vector<std::string> parts;
        std::stringstream stream(line);
        std::string part;
        while (std::getline(stream, part, delimiter)) {
            parts.push_back(trim(part));
        }
        return parts;
    }

    void createSampleQuestions() {
        std::ofstream file("questions.txt");
        file << "Which language is used to write this quiz?|C++|Python|Java|JavaScript|1\n";
        file << "What does OOP stand for?|Object Oriented Programming|Open Output Process|Online Operating Program|Ordered Object Protocol|1\n";
        file << "Which header is used for file input and output?|iostream|fstream|string|vector|2\n";
        file << "What is the correct way to declare a vector of integers?|vector<int> numbers;|int vector numbers;|vector numbers<int>;|numbers vector<int>;|1\n";
        file << "Which loop is best when the number of iterations is unknown?|for|while|switch|if|2\n";
        file.close();
    }

    bool loadQuestions(const std::string& filename) {
        std::ifstream file(filename);
        if (!file.is_open()) {
            std::cout << "Questions file not found. Creating a sample file...\n";
            createSampleQuestions();
            file.open(filename);
            if (!file.is_open()) {
                std::cerr << "Could not create questions.txt\n";
                return false;
            }
        }

        std::string line;
        int lineNumber = 0;
        while (std::getline(file, line)) {
            ++lineNumber;
            if (trim(line).empty()) continue;

            std::vector<std::string> parts = split(line, '|');
            if (parts.size() != 6) {
                std::cerr << "Skipping invalid line " << lineNumber << ": expected 6 fields.\n";
                continue;
            }

            int correct = 0;
            try {
                correct = std::stoi(parts[5]);
            } catch (...) {
                std::cerr << "Skipping line " << lineNumber << ": invalid answer number.\n";
                continue;
            }

            if (correct < 1 || correct > 4) {
                std::cerr << "Skipping line " << lineNumber << ": answer must be 1-4.\n";
                continue;
            }

            std::vector<std::string> options = {parts[1], parts[2], parts[3], parts[4]};
            questions.emplace_back(parts[0], options, correct - 1);
        }

        return !questions.empty();
    }

    void shuffleQuestions() {
        std::random_device device;
        std::mt19937 generator(device());
        std::shuffle(questions.begin(), questions.end(), generator);
    }

    int readAnswer() {
        int answer;
        while (true) {
            std::cout << "Your answer (1-4): ";
            if (std::cin >> answer && answer >= 1 && answer <= 4) {
                return answer;
            }
            std::cout << "Invalid input. Please enter a number from 1 to 4.\n";
            std::cin.clear();
            std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
        }
    }

    void saveScore() {
        std::ofstream file("leaderboard.txt", std::ios::app);
        if (!file.is_open()) {
            std::cerr << "Could not save your score.\n";
            return;
        }
        file << playerName << "|" << score << "|" << questions.size() << "\n";
    }

    void showLeaderboard() {
        std::ifstream file("leaderboard.txt");
        if (!file.is_open()) {
            std::cout << "No leaderboard yet. Play a quiz to create one.\n";
            return;
        }

        struct Entry {
            std::string name;
            int score;
            int total;
        };

        std::vector<Entry> entries;
        std::string line;
        while (std::getline(file, line)) {
            std::vector<std::string> parts = split(line, '|');
            if (parts.size() != 3) continue;
            try {
                entries.push_back({parts[0], std::stoi(parts[1]), std::stoi(parts[2])});
            } catch (...) {
                continue;
            }
        }

        std::sort(entries.begin(), entries.end(), [](const Entry& a, const Entry& b) {
            double aPercent = a.total > 0 ? (100.0 * a.score / a.total) : 0.0;
            double bPercent = b.total > 0 ? (100.0 * b.score / b.total) : 0.0;
            return aPercent > bPercent;
        });

        std::cout << "\n===== LEADERBOARD =====\n";
        if (entries.empty()) {
            std::cout << "No scores saved yet.\n";
            return;
        }

        int rank = 1;
        for (const auto& entry : entries) {
            double percent = entry.total > 0 ? (100.0 * entry.score / entry.total) : 0.0;
            std::cout << rank++ << ". " << entry.name << " - "
                      << entry.score << "/" << entry.total
                      << " (" << percent << "%)\n";
        }
    }

public:
    void start() {
        std::cout << "=====================================\n";
        std::cout << "        C++ QUIZ GAME\n";
        std::cout << "=====================================\n";

        if (!loadQuestions("questions.txt")) {
            std::cerr << "No valid questions were loaded. Exiting.\n";
            return;
        }

        std::cout << "Enter your name: ";
        std::getline(std::cin >> std::ws, playerName);
        if (playerName.empty()) playerName = "Anonymous";

        shuffleQuestions();

        std::cout << "\nHello, " << playerName << "! You have "
                  << questions.size() << " questions.\n";
        std::cout << "Type the number of the correct option.\n\n";

        for (std::size_t i = 0; i < questions.size(); ++i) {
            const Question& question = questions[i];
            std::cout << "Question " << (i + 1) << "/" << questions.size() << "\n";
            std::cout << question.text << "\n";
            for (std::size_t j = 0; j < question.options.size(); ++j) {
                std::cout << "  " << (j + 1) << ". " << question.options[j] << "\n";
            }

            int answer = readAnswer();
            if (answer - 1 == question.correctIndex) {
                std::cout << "Correct!\n\n";
                ++score;
            } else {
                std::cout << "Wrong. The correct answer was: "
                          << question.options[question.correctIndex] << "\n\n";
            }
        }

        double percentage = questions.empty() ? 0.0 : (100.0 * score / questions.size());
        std::cout << "=====================================\n";
        std::cout << "Final score: " << score << "/" << questions.size()
                  << " (" << percentage << "%)\n";
        std::cout << "=====================================\n";

        saveScore();
        showLeaderboard();
    }
};

int main() {
    Quiz quiz;
    quiz.start();
    return 0;
}
