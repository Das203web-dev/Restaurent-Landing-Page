# **Restaurant Website**  
_A visually appealing, responsive, and user-friendly restaurant website._

---

## **Features**

### **Home Section**
- Welcomes users with a **visually appealing hero section**.
- Responsive design ensures compatibility across all devices.

### **About Component**
- **Tab Navigation**  
  - Three tabs: **About**, **Experience**, and **Contact**.  
  - Interactive tab switching with visual state highlights.  
- **Content Display**  
  - Displays tab-specific content:  
    - Title, description, action buttons, and contact details (optional).  
- **Responsive Design**  
  - Fully responsive using **flexbox layout**.  

---

### **PopularItems Component**

- **Dynamic Food Display**  
  - Rotates through popular food items with images, titles, and descriptions.  
  - Displays 1 item on smaller screens and 4 items on larger screens.

- **User Interaction**  
  - **Next/Previous Buttons:** Navigate through food items manually.  
  - **Auto-Slide Feature:** Automatically rotates items every 3 seconds.  

- **Responsive Design**  
  - Dynamically adjusts the number of visible items based on screen size.  
  - Uses grid layout for seamless alignment and spacing.  

- **Visual Enhancements**  
  - Bold headings: **Crispy, Every Bite Taste** and **Popular Food Items**.  
  - Smooth transitions and shadow effects on navigation buttons.  

---

### **Contact Component**

- **Dynamic Form for Table Reservations**  
  - Allows users to book a table with the following fields:
    - Name, Email, Reservation Date, Total People, and Message.
  - Dropdown selector for "Total People" with dynamic values from 1 to 50.
  - Interactive dropdown with support for "drop-up" when space is limited.

- **Responsive Design**  
  - Background image spans the full width and height of the screen.  
  - Fully responsive layout adapts to all screen sizes.  

- **Interactive Features**  
  - **Form Validation:** Validates required fields using `react-hook-form`.  
  - **Dynamic Dropdown:** Select number of people with auto-closing functionality.  
  - **Submit Action:** Form submission logs data for further handling.

- **Visual Enhancements**  
  - Semi-transparent black overlay for enhanced readability over the background.  
  - White calendar icon for date input field with placeholder text customization. 

---

### **Testimonial Features Section**
- **Customer Reviews**  
  - Three unique cards for features:  
    - **Customer Reviews** – Displays user reviews with client names, images, and locations  
    - **Automatic Slider** – Reviews change automatically every 4 seconds or can be manually navigated using arrow controls.  
    - **Responsive Design** – Optimized for all screen sizes, ensuring a great user experience on both mobile and desktop.


---

### Footer Component

- **Information Sections**  
  The footer includes the following informational sections:
  - **Opening Hours**: Displays the days and times the restaurant is open.
  - **LET'S TALK**: Provides phone and fax numbers for contact.
  - **Email**: Displays contact email addresses for inquiries and support.
  - **Location**: Provides the restaurant's physical address.

- **Social Media Icons**  
  Links to the restaurant's social media profiles are displayed using icons for:
  - **Facebook**
  - **LinkedIn**
  - **Twitter**
  - **Instagram**

- **Responsive Design**  
  The footer is fully optimized for all screen sizes, ensuring an excellent user experience on both mobile and desktop devices.

- **Background Image with Overlay**  
  The component has a customizable background image, with a dark overlay to improve text readability.


---

### **Technologies Used**
- **React.js**  
  A JavaScript library for building user interfaces, used for handling the dynamic components of the application.
- **Tailwind CSS**  
  A utility-first CSS framework for quickly designing custom user interfaces with minimal effort.
- **React Router**  
  Provides navigation between different components of the application.
- **React Hook Form**  
  Simplifies form handling in React, used to manage form state and validation.
- **React Icons**  
  Provides scalable vector icons for React applications.
- **React Scroll**  
  Allows smooth scrolling between sections of the webpage.  
