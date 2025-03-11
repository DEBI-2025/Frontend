import { useState, useEffect } from "react";
import Question from "./Questions.jsx";
import styled, { keyframes } from "styled-components";
import MultiplePages from "./MultiplePages";

function QuestionList() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const simulatedFetch = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const simulatedData = [
            {
              id: 1,

              questionText: "What does HTML stand for?",

              questionType: "text",

              answer:
                "HTML stands for HyperText Markup Language. It is the standard language used to create and design web pages by structuring content using elements like headings, paragraphs, links, images, lists, and multimedia. HTML uses a system of nested tags to define the structure of a document, allowing browsers to interpret and render web pages correctly. Additionally, HTML works alongside CSS and JavaScript to enhance styling and interactivity, respectively. With advancements like HTML5, the language now supports multimedia elements, semantic tags, and API integrations, making web development more efficient and accessible.",
            },

            {
              id: 2,

              questionText: "What is the main purpose of a database index?",

              questionType: "text",

              answer:
                "A database index is a specialized data structure that improves the speed of data retrieval operations in a database by allowing faster searches and lookups. When a query is executed, rather than scanning every row in a table (a full table scan), the database engine uses the index as a reference to quickly locate the relevant rows, significantly improving performance. Indexes are particularly useful for large datasets where querying efficiency is critical. However, they come with trade-offs, as they consume additional storage space and can slightly slow down data modification operations (INSERT, UPDATE, DELETE) since the index itself needs to be updated along with the table. Common types of indexes include B-tree, hash, and clustered indexes, each optimized for specific query types and use cases.",
            },

            {
              id: 3,

              questionText: "What does OOP stand for in programming?",

              questionType: "text",

              answer:
                "OOP stands for Object-Oriented Programming, a programming paradigm that organizes code into reusable objects that contain both data (attributes) and behavior (methods). This approach enhances modularity, maintainability, and scalability of software applications. The four main principles of OOP are:\n\n" +
                "1. **Encapsulation**: Restricting direct access to object data and only allowing controlled modification through methods, ensuring data integrity.\n" +
                "2. **Inheritance**: Enabling new classes to inherit properties and behavior from existing classes, promoting code reuse.\n" +
                "3. **Polymorphism**: Allowing different classes to be treated as instances of the same base class through method overriding or overloading, enhancing flexibility and extensibility.\n" +
                "4. **Abstraction**: Hiding complex implementation details and exposing only necessary functionalities to the user, simplifying software development.\n\n" +
                "OOP is widely used in languages such as Java, Python, C++, and C#, making it a fundamental concept in modern software engineering.",
            },

            {
              id: 4,

              questionText: "What is the difference between HTTP and HTTPS?",

              questionType: "text",

              answer:
                "HTTP (HyperText Transfer Protocol) and HTTPS (HyperText Transfer Protocol Secure) are protocols used for communication between web browsers and servers. The key difference is that HTTPS is the secure version of HTTP, as it encrypts data using SSL/TLS (Secure Sockets Layer / Transport Layer Security). \n\n" +
                "In HTTP, data is transmitted in plain text, making it vulnerable to interception by attackers through methods like man-in-the-middle attacks. This means sensitive information such as login credentials, payment details, and personal data can be easily compromised. On the other hand, HTTPS encrypts data before transmission, ensuring that only the intended recipient can decrypt and read it.\n\n" +
                "Additionally, HTTPS is crucial for website security, as it helps in building user trust, improving SEO rankings (search engines prioritize HTTPS websites), and preventing data breaches. Modern browsers also display security warnings for HTTP sites, encouraging the adoption of HTTPS across the web.",
            },

            {
              id: 5,

              questionText: "What does CSS stand for in web development?",

              questionType: "text",

              answer:
                "CSS (Cascading Style Sheets) is a stylesheet language used in web development to control the appearance and layout of HTML elements. It allows developers to apply styles such as colors, fonts, spacing, positioning, and animations to create visually appealing and responsive designs.\n\n" +
                "CSS works by defining rules that target HTML elements, which can be applied inline, internally within the `<style>` tag, or externally via separate `.css` files. It follows a 'cascading' nature, meaning styles are applied hierarchically based on specificity, inheritance, and importance.\n\n" +
                "Modern CSS includes advanced features like Flexbox, Grid, and media queries, enabling responsive designs that adapt to different screen sizes. Additionally, CSS preprocessors like SASS and LESS provide enhanced functionality, such as variables and mixins, improving maintainability and efficiency in styling large projects.",
            },

            {
              id: 6,

              questionText: "What does HTML stand for?",

              questionType: "text",

              answer:
                "HTML stands for HyperText Markup Language. It is the standard language used to create and design web pages by structuring content using elements like headings, paragraphs, links, images, lists, and multimedia. HTML uses a system of nested tags to define the structure of a document, allowing browsers to interpret and render web pages correctly. Additionally, HTML works alongside CSS and JavaScript to enhance styling and interactivity, respectively. With advancements like HTML5, the language now supports multimedia elements, semantic tags, and API integrations, making web development more efficient and accessible.",
            },

            {
              id: 7,

              questionText: "What is the main purpose of a database index?",

              questionType: "text",

              answer:
                "A database index is a specialized data structure that improves the speed of data retrieval operations in a database by allowing faster searches and lookups. When a query is executed, rather than scanning every row in a table (a full table scan), the database engine uses the index as a reference to quickly locate the relevant rows, significantly improving performance. Indexes are particularly useful for large datasets where querying efficiency is critical. However, they come with trade-offs, as they consume additional storage space and can slightly slow down data modification operations (INSERT, UPDATE, DELETE) since the index itself needs to be updated along with the table. Common types of indexes include B-tree, hash, and clustered indexes, each optimized for specific query types and use cases.",
            },

            {
              id: 8,

              questionText: "What does OOP stand for in programming?",

              questionType: "text",

              answer:
                "OOP stands for Object-Oriented Programming, a programming paradigm that organizes code into reusable objects that contain both data (attributes) and behavior (methods). This approach enhances modularity, maintainability, and scalability of software applications. The four main principles of OOP are:\n\n" +
                "1. **Encapsulation**: Restricting direct access to object data and only allowing controlled modification through methods, ensuring data integrity.\n" +
                "2. **Inheritance**: Enabling new classes to inherit properties and behavior from existing classes, promoting code reuse.\n" +
                "3. **Polymorphism**: Allowing different classes to be treated as instances of the same base class through method overriding or overloading, enhancing flexibility and extensibility.\n" +
                "4. **Abstraction**: Hiding complex implementation details and exposing only necessary functionalities to the user, simplifying software development.\n\n" +
                "OOP is widely used in languages such as Java, Python, C++, and C#, making it a fundamental concept in modern software engineering.",
            },

            {
              id: 9,

              questionText: "What is the difference between HTTP and HTTPS?",

              questionType: "text",

              answer:
                "HTTP (HyperText Transfer Protocol) and HTTPS (HyperText Transfer Protocol Secure) are protocols used for communication between web browsers and servers. The key difference is that HTTPS is the secure version of HTTP, as it encrypts data using SSL/TLS (Secure Sockets Layer / Transport Layer Security). \n\n" +
                "In HTTP, data is transmitted in plain text, making it vulnerable to interception by attackers through methods like man-in-the-middle attacks. This means sensitive information such as login credentials, payment details, and personal data can be easily compromised. On the other hand, HTTPS encrypts data before transmission, ensuring that only the intended recipient can decrypt and read it.\n\n" +
                "Additionally, HTTPS is crucial for website security, as it helps in building user trust, improving SEO rankings (search engines prioritize HTTPS websites), and preventing data breaches. Modern browsers also display security warnings for HTTP sites, encouraging the adoption of HTTPS across the web.",
            },

            {
              id: 10,

              questionText: "What does CSS stand for in web development?",

              questionType: "text",

              answer:
                "CSS (Cascading Style Sheets) is a stylesheet language used in web development to control the appearance and layout of HTML elements. It allows developers to apply styles such as colors, fonts, spacing, positioning, and animations to create visually appealing and responsive designs.\n\n" +
                "CSS works by defining rules that target HTML elements, which can be applied inline, internally within the `<style>` tag, or externally via separate `.css` files. It follows a 'cascading' nature, meaning styles are applied hierarchically based on specificity, inheritance, and importance.\n\n" +
                "Modern CSS includes advanced features like Flexbox, Grid, and media queries, enabling responsive designs that adapt to different screen sizes. Additionally, CSS preprocessors like SASS and LESS provide enhanced functionality, such as variables and mixins, improving maintainability and efficiency in styling large projects.",
            },
          ];

          resolve(simulatedData);
        }, 1000); // Simulate 1-second delay
      });
    };
    simulatedFetch()
      .then((data) => {
        setQuestions(data);
        setTotalPages(Math.ceil(data.length / itemsPerPage)); // Calculate total pages
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [itemsPerPage]); // Add itemsPerPage as a dependency

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  if (loading)
    return (
      <LoadingContainer>
        <LoadingCircle />
      </LoadingContainer>
    );
  if (error) return <p>Error: {error.message}</p>;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentQuestions = questions.slice(startIndex, endIndex);

  return (
    <Wrapper>
      {currentQuestions.map((question) => (
        <Question key={question.id} question={question} />
      ))}
      <MultiplePages
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Wrapper>
  );
}

export default QuestionList;

const Wrapper = styled.div`
  /* background-color: red; */
  width: 90%;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 29.5rem;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingCircle = styled.div`
  width: 60px;
  height: 60px;
  border: 8px solid #6a0dad;
  border-top: 8px solid transparent;
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
`;
