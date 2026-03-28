# Etch-A-Sketch

This project is included in The Odin Project's curriculum. This project's objective is to create an interactive "Etch-A-Sketch" drawing application using HTML, CSS, and JavaScript while implementing dynamic grid generation, event handling, and DOM manipulation.

## Project Overview

The project is intended to replicate the classic Etch-A-Sketch toy where users can draw on a canvas grid. It emphasizes using JavaScript to handle user interactions, dynamically generate grids based on input, manage multiple drawing modes, and update the UI in real-time.

This project strengthened my comprehension of:

- Dynamic DOM element creation and manipulation.
- Event listeners for mouse interactions (mousedown, mouseup, mouseover).
- Implementing progressive opacity effects for visual feedback.
- Managing state with variables to track drawing modes and interactions.
- Using CSS Grid and Flexbox for layout and responsive design.

## Features

- Dynamic grid generation with user-defined density (1x1 to 100x100).
- Click-and-drag drawing functionality with visual feedback.
- Progressive opacity effect that increases with repeated hovers.
- Classic mode (black drawing) and Rainbow mode (random colors).
- Clear canvas button to reset the drawing.
- Real-time grid density display and input validation.
- Smooth UI with rounded corners and modern styling.

## Built With

- HTML5
- CSS3 (Flexbox & Grid)
- JavaScript (ES6)

## Project Structure

```
etch-a-sketch/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## What I Learned

While working on this project, I gained experience in:

- Creating elements dynamically using `document.createElement()` and appending them to the DOM.
- Using data attributes to track state (hover count, drawing state) on individual grid items.
- Implementing mouse event listeners to differentiate between clicking and dragging.
- Using conditional logic to switch between drawing modes.
- Managing opacity values and calculating responsive grid item sizes.
- Validating user input and providing alert feedback for invalid entries.
- Applying CSS styling to create a clean, functional UI.

## Future Improvements

Possible improvements for this project include:

- Adding different brush sizes and shaped brushes (circle, square, eraser).
- Implementing a color picker for custom drawing colors.
- Adding export functionality to download the drawing as an image.
- Creating preset grid sizes for quicker access.
- Adding keyboard shortcuts for mode switching and clearing.
- Implementing touch support for mobile and tablet devices.
- Adding an undo/redo feature for drawing corrections.

## Acknowledgements

This project was completed as part of the learning path provided by The Odin Project.
